

# Re-implement Contact Page

## Overview

Recreate the `/contact` page with a contact form that submits to the existing `leads` table (using `request_type: "contact_general"`), matching the pattern the admin dashboard already expects. Also restore routing and navigation links.

## Changes

### 1. Create `src/pages/Contact.tsx`

A full contact page with:

- **Hero section** -- gradient background matching other pages, headline "Get in Touch", subheadline about reaching a real person
- **Two-column layout below hero:**
  - **Left column: Contact form** with fields:
    - First Name + Last Name (side-by-side)
    - Email
    - Phone (optional)
    - Subject (dropdown: General Inquiry, Quote Request, Policy Question, Claims Help, Other)
    - Message (textarea)
    - Preferred contact method (radio: Email, Phone, Text)
    - Submit button
  - **Right column: Contact info sidebar** with:
    - Phone number (clickable `tel:` link)
    - Email address (clickable `mailto:` link)
    - Office address
    - Business hours
    - Small trust line ("We respond within 1 business day")

- **Form submission:** Inserts into the `leads` table with:
  - `request_type: "contact_general"`
  - `coverage_type: "not_sure"`
  - `status: "new"`
  - `reply_status: "unread"`
  - `is_read: false`
  - `notes: "Contact form inquiry: {subject}"`
  - `additional_info: {message text}`
  - Standard name/email/phone/preferred_contact fields

- **Success state:** After submission, show a confirmation message with expected response timeline

### 2. Update `src/App.tsx`

- Import the new `Contact` page
- Replace the `/contact` redirect (`Navigate to="/services"`) with a proper route to the Contact component

### 3. Update `src/components/Header.tsx`

- Re-add "Contact" link in the desktop navigation
- Re-add "Contact" link in the mobile menu

### 4. Update `src/components/Footer.tsx`

- No changes needed (footer currently links to `/services` which is fine, but can optionally add a Contact link back to Quick Links)

## Technical Details

- Uses `react-hook-form` + `zod` for form validation (already installed)
- Uses `supabase` client to insert into the `leads` table
- Uses `sonner` toast for success/error feedback
- Follows existing brand styling: `heading-xl`, `body-lg`, `section-padding`, burgundy color scheme
- The admin contacts dashboard already filters for `request_type: "contact_general"`, so submissions will appear there automatically
