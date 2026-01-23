-- Create enum for lead status
CREATE TYPE public.lead_status AS ENUM ('new', 'contacted', 'quoted', 'won', 'lost');

-- Create enum for coverage type
CREATE TYPE public.coverage_type AS ENUM ('personal', 'business', 'benefits', 'not_sure');

-- Create enum for contact method
CREATE TYPE public.contact_method AS ENUM ('email', 'phone', 'text');

-- Create leads table
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Coverage selection
  coverage_type coverage_type NOT NULL,
  
  -- Personal insurance fields
  personal_coverage_interests TEXT[],
  has_current_coverage BOOLEAN,
  switch_reason TEXT,
  
  -- Business insurance fields
  business_type TEXT,
  employee_count TEXT,
  business_coverage_interests TEXT[],
  
  -- Employee benefits fields
  benefits_employee_count TEXT,
  benefits_situation TEXT,
  benefits_interests TEXT[],
  
  -- Not sure field
  additional_info TEXT,
  
  -- Contact information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  preferred_contact contact_method NOT NULL DEFAULT 'email',
  best_time TEXT,
  
  -- Lead management
  status lead_status NOT NULL DEFAULT 'new',
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads (anyone can submit a quote request)
CREATE POLICY "Anyone can submit a lead" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view leads (we'll add admin functionality later)
-- For now, leads can only be viewed via admin access
CREATE POLICY "Service role can view all leads" 
ON public.leads 
FOR SELECT 
USING (false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();