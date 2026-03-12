

# Fix Slow Admin Login Page

## Problem

The admin login page shows a spinner for a long time because two sequential async operations must complete before the form appears:

1. **Auth session restoration** (`useAuth` — `isLoading` stays `true` until `getSession()` completes AND the admin role check query finishes)
2. **Admin existence check** (`admin_exists` RPC call in `AdminLogin`)

Both involve network requests, and the auth check includes a `setTimeout` wrapper adding extra delay. The login page waits for `isCheckingAdmins` to finish, but also depends on `authLoading` — creating a waterfall.

## Fix

**In `AdminLogin.tsx`:**
- Remove the dependency on `authLoading` for rendering the login form. The login page should show the form immediately — it doesn't need to wait for session restoration since unauthenticated users are the primary visitors.
- Run the `admin_exists` check and render the form as soon as that resolves, independent of auth state.
- Only use `authLoading`/`isAdmin` for the redirect logic (already-logged-in admin gets redirected).

**In `useAuth.tsx`:**
- When there's no session (user is not logged in), skip the admin role check and set `isLoading = false` immediately — this is the common case for the login page.
- Remove the `setTimeout` wrapper around `checkAdminRole`. The deadlock concern only applies when calling Supabase inside `onAuthStateChange` synchronously, but the `setTimeout(fn, 0)` is already deferred. Instead, use a simpler approach: only check admin role from `getSession`, and in `onAuthStateChange` just update session/user state synchronously, then trigger role check separately without awaiting inside the callback.

### Changes

**`src/hooks/useAuth.tsx`**
- In `onAuthStateChange`: Set session/user synchronously, set `isLoading = false` immediately, then fire-and-forget the admin role check (no `await` in the callback).
- In `getSession`: Same pattern — set loading false right away, check admin role after.
- Remove the `setTimeout` wrapper from `checkAdminRole`.

**`src/pages/admin/AdminLogin.tsx`**
- Don't block rendering on `authLoading`. Show the form once `isCheckingAdmins` is false.
- Keep the redirect effect for already-authenticated admins as-is.

