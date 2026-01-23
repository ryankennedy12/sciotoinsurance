-- Create lead_activity table for tracking status changes and notes
CREATE TABLE public.lead_activity (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  activity_type text NOT NULL CHECK (activity_type IN ('status_change', 'note_added', 'created')),
  old_status text,
  new_status text,
  note text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX idx_lead_activity_lead_id ON public.lead_activity(lead_id);
CREATE INDEX idx_lead_activity_created_at ON public.lead_activity(created_at DESC);

-- Enable RLS
ALTER TABLE public.lead_activity ENABLE ROW LEVEL SECURITY;

-- RLS policies for admins only
CREATE POLICY "Admins can view all lead activity"
  ON public.lead_activity
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert lead activity"
  ON public.lead_activity
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete lead activity"
  ON public.lead_activity
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create a trigger to log when leads are created (for the activity log)
CREATE OR REPLACE FUNCTION public.log_lead_created()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.lead_activity (lead_id, activity_type, new_status)
  VALUES (NEW.id, 'created', NEW.status);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_lead_created
  AFTER INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.log_lead_created();