
-- Security definer function: allows approved emails to self-assign admin role
CREATE OR REPLACE FUNCTION public.assign_admin_role_self()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_email text;
BEGIN
  -- Get the calling user's email
  SELECT au.email INTO user_email
  FROM auth.users au
  WHERE au.id = auth.uid();

  IF user_email IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Check if approved
  IF NOT public.is_approved_admin_email(user_email) THEN
    RAISE EXCEPTION 'This email is not authorized to be an admin';
  END IF;

  -- Check if role already exists
  IF EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin') THEN
    RETURN; -- Already has role
  END IF;

  -- Insert the role (bypasses RLS because SECURITY DEFINER)
  INSERT INTO public.user_roles (user_id, role) VALUES (auth.uid(), 'admin');
END;
$$;
