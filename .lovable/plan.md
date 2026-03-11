

## Plan: Restrict Admin Accounts to Approved Emails Only

### Goal
Only three email addresses can ever create admin accounts: the current admin, natalie@sciotoinsurancegroup.com, and jeff@sciotoinsurancegroup.com. All other signup attempts are rejected.

### Changes

**1. Database: Create approved_admin_emails table + validation function**
- New table `approved_admin_emails` with a single `email` column (pre-populated with the 3 approved emails)
- New `SECURITY DEFINER` function `is_approved_admin_email(text)` that checks if an email is in the allowlist
- RLS: only admins can read/modify the table

**2. Update AdminLogin.tsx**
- Before calling `supabase.auth.signUp`, check the email against `is_approved_admin_email` via RPC
- If not approved, show an error: "This email is not authorized to create an admin account"
- Remove the "first admin only" logic — any approved email can sign up at any time (but only if no account exists yet for that email)
- Always show both Login and Signup tabs (since new admins may still need to register)

**3. Edge function validation (defense in depth)**
- Add a database trigger on `user_roles` INSERT that checks `is_approved_admin_email` for the user's email before allowing the role grant — this prevents bypassing the client-side check

### Approved emails
- Current admin (already exists)
- natalie@sciotoinsurancegroup.com
- jeff@sciotoinsurancegroup.com

