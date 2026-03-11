

## Plan: Real-time Admin Dashboard Notifications

### Goal
Ensure admins are immediately alerted when any form submission occurs, with zero chance of missing a lead. Every insert into the `leads` table — regardless of which form triggered it — will produce a real-time notification in the admin dashboard.

### Current State
- 5 forms insert into `leads`: GetQuote, Contact, BusinessInsurance, HGConnect2026, QuoteFormExitIntent
- Admin dashboard polls badge counts every 30 seconds — no real-time updates
- No notification sound or toast alerts

### Approach: Database-level Realtime Subscription
Instead of wiring each form individually, we use **Supabase Realtime** on the `leads` table. This means any INSERT — from any form, current or future — triggers the notification automatically. No form can be missed.

### Changes

**1. Database migration** — Enable realtime on `leads` table
```sql
ALTER PUBLICATION supabase_realtime ADD TABLE public.leads;
```

**2. Create notification hook** — `src/hooks/useLeadNotifications.ts`
- Subscribe to `postgres_changes` INSERT events on `leads` table
- On new lead: play a browser notification sound (Web Audio API beep — no file needed), show a toast with lead name and type
- Only activates for authenticated admin users

**3. Update Admin Dashboard** (`src/pages/admin/AdminDashboard.tsx`)
- Use the notification hook
- Auto-prepend new leads to the recent activity list and refresh metrics without page reload

**4. Update Admin Sidebar** (`src/components/admin/AdminSidebar.tsx`)
- Use the same realtime subscription to instantly update badge counts (instead of 30-second polling)

**5. Update Admin Layout** (`src/components/admin/AdminLayout.tsx`)
- Mount the notification hook at the layout level so alerts fire on any admin page, not just the dashboard

### Why This Is Reliable
- Realtime subscription is at the **database level** — it catches every single INSERT regardless of which form or page triggered it
- If a new form is added in the future, it automatically gets covered with zero code changes
- Badge counts update instantly
- Audio + visual toast ensures the admin notices even if they're looking away

