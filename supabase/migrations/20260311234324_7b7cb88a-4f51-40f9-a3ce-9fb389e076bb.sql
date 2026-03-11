
-- Approved admin emails allowlist
CREATE TABLE public.approved_admin_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.approved_admin_emails ENABLE ROW LEVEL SECURITY;

-- Only admins can read/modify
CREATE POLICY "Admins can view approved emails" ON public.approved_admin_emails
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage approved emails" ON public.approved_admin_emails
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Pre-populate with approved emails
INSERT INTO public.approved_admin_emails (email) VALUES
  ('ryankennedy439@gmail.com'),
  ('natalie@sciotoinsurancegroup.com'),
  ('jeff@sciotoinsurancegroup.com');

-- Security definer function to check if email is approved (callable by anyone)
CREATE OR REPLACE FUNCTION public.is_approved_admin_email(email_to_check text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.approved_admin_emails
    WHERE lower(email) = lower(email_to_check)
  )
$$;

-- Defense-in-depth: trigger on user_roles to block unauthorized admin grants
CREATE OR REPLACE FUNCTION public.validate_admin_role_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_email text;
BEGIN
  -- Only enforce for admin role
  IF NEW.role = 'admin' THEN
    SELECT au.email INTO user_email
    FROM auth.users au
    WHERE au.id = NEW.user_id;

    IF NOT public.is_approved_admin_email(COALESCE(user_email, '')) THEN
      RAISE EXCEPTION 'This email is not authorized to be an admin';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER enforce_approved_admin_email
  BEFORE INSERT ON public.user_roles
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_admin_role_insert();
