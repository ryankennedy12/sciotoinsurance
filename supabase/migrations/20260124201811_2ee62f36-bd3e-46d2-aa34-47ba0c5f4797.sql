-- Add explicit denial for anonymous SELECT on leads table
-- This ensures that unauthenticated users cannot read any lead data under any circumstances

-- First, let's make the existing SELECT policy more explicit by targeting only authenticated users
-- The current policy already targets authenticated users, but we'll ensure it's bulletproof

-- Create a restrictive policy that explicitly denies anon access
CREATE POLICY "Deny anonymous read access"
ON public.leads
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);

-- Also add a restrictive policy to ensure service role queries still require proper authentication context
-- This is an additional layer of protection