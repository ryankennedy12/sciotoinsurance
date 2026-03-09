

## Plan: Update H&G Connect 2026 Event Page

### Changes to `src/pages/HGConnect2026.tsx`

1. **Update headline and subtext**
   - Hero h1: "Let's Get You Covered"
   - Subtext: "Fill out the form below and one of our agents will reach out to schedule your free risk assessment."

2. **Remove the "What can we help with?" dropdown**
   - Delete the `helpTopics` array, the Select/SelectContent imports, and the topic field from form state
   - Update `additional_info` in the submit handler to just say "H&G Connect 2026 Event Lead"

3. **Remove the message/textarea field** (optional — keeping it gives people a place to add context, but removing it simplifies the form for a QR code scan scenario)

4. **Data saving verification** — The current insert to the `leads` table is correct. The table has a public INSERT RLS policy (`Anyone can submit a lead`), so unauthenticated visitors can submit. Data will appear in the admin dashboard under Leads. No backend changes needed.

### What stays the same
- First Name, Last Name, Email, Phone fields
- Success confirmation screen
- Footer contact info
- All backend/database configuration (already working)

