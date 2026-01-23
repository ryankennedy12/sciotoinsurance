-- Add request_type enum to categorize leads
CREATE TYPE request_type AS ENUM (
  'quote',           -- Quote requests from Get Quote page
  'service_claim',   -- Claim reports
  'service_change',  -- Policy changes
  'service_cert',    -- Certificate requests
  'service_idcard',  -- ID card requests
  'service_review',  -- Policy reviews
  'service_payment', -- Payment help
  'contact_general'  -- General contact form
);

-- Add request_type column to leads table
ALTER TABLE leads 
ADD COLUMN request_type request_type DEFAULT 'quote';

-- Add read status for contact messages
ALTER TABLE leads
ADD COLUMN is_read BOOLEAN DEFAULT false;

-- Add reply_status for contact messages
ALTER TABLE leads
ADD COLUMN reply_status TEXT DEFAULT 'unread' 
CHECK (reply_status IN ('unread', 'read', 'replied'));

-- Backfill existing data based on notes field content
UPDATE leads 
SET request_type = CASE 
  WHEN notes ILIKE '%claim%' THEN 'service_claim'::request_type
  WHEN notes ILIKE '%change%' THEN 'service_change'::request_type
  WHEN notes ILIKE '%certificate%' THEN 'service_cert'::request_type
  WHEN notes ILIKE '%id card%' OR notes ILIKE '%id-card%' THEN 'service_idcard'::request_type
  WHEN notes ILIKE '%review%' THEN 'service_review'::request_type
  WHEN notes ILIKE '%payment%' THEN 'service_payment'::request_type
  WHEN notes ILIKE '%contact form%' THEN 'contact_general'::request_type
  ELSE 'quote'::request_type
END
WHERE request_type IS NULL OR request_type = 'quote';