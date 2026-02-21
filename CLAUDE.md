# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Scioto Insurance Group — an independent insurance agency website (Ohio-based, father-daughter team). Built with Lovable, a no-code/low-code platform that syncs with this repo. The site has a public-facing marketing frontend and a Supabase-backed admin dashboard for lead/contact management.

## Commands

- `npm run dev` — Start dev server (Vite, port 8080)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run test` — Run tests once (vitest)
- `npm run test:watch` — Run tests in watch mode

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + Supabase

**Path alias:** `@/` maps to `./src/` (configured in tsconfig and vite)

### Routing (react-router-dom v6)

All routes defined in `src/App.tsx`. Two route trees:

- **Public routes** — wrapped in `<Layout>` (Header + page transition + Footer)
  - `/` Home, `/about`, `/contact`, `/get-quote`, `/services`, `/employee-benefits`
  - `/personal-insurance/*` and `/business-insurance/*` — category pages + individual product pages
  - Unmatched product subroutes redirect to `/get-quote`
- **Admin routes** — `/admin/*` wrapped in `<AdminLayout>` (sidebar + auth guard)
  - `/admin/login`, `/admin` (dashboard), `/admin/leads`, `/admin/contacts`, `/admin/requests`

### Key Patterns

**Product detail pages** use `ProductDetailTemplate` — a shared template component that accepts props for hero, coverage items, FAQs, stats, interactive calculators, testimonials, and related products. Each product page (e.g., `src/pages/personal-insurance/AutoInsurance.tsx`) passes its data to this template. Category theming (`"personal"` vs `"business"`) controls gradient/color variations.

**Interactive calculators** live in `src/components/calculators/` — embedded in product pages via `ProductDetailTemplate`'s `interactiveElement` prop.

**Auth:** `src/hooks/useAuth.tsx` provides `AuthProvider` context wrapping the entire app. Admin role is checked against the `user_roles` Supabase table. `AdminLayout` guards admin routes (redirects unauthenticated users to `/admin/login`, shows access denied for non-admins).

### Supabase

- Client: `src/integrations/supabase/client.ts` (auto-generated, do not edit)
- Types: `src/integrations/supabase/types.ts` (auto-generated, do not edit)
- Env vars: `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env`
- Tables: `leads`, `lead_activity`, `user_roles`
- Edge functions: `supabase/functions/notify-new-lead/`
- Migrations: `supabase/migrations/`

### Design System

Brand colors defined as CSS custom properties in `src/index.css` and mapped in `tailwind.config.ts`:
- **Primary (burgundy):** `burgundy-700` (#8B2942) for CTAs/headers, `burgundy-800` for hover states
- **Neutrals:** `cream` (#FAF9F8) backgrounds, `charcoal` (#1A1A1A) body text
- **Accent:** `gold-500` (#C9A962) for icons and trust badges

Typography: `font-display` (Cormorant Garamond) for headings, `font-body` (Inter) for body text. Utility classes like `heading-xl`, `heading-md`, `body-lg`, `section-padding`, `container-wide` are defined in `src/index.css` `@layer components`.

### UI Components

shadcn/ui components in `src/components/ui/` — standard shadcn setup with `"default"` style, CSS variables enabled. Add new components via `npx shadcn-ui@latest add <component>`.

### Testing

Vitest with jsdom environment. Setup file: `src/test/setup.ts`. Test files go in `src/**/*.{test,spec}.{ts,tsx}`.

### TypeScript

Relaxed config: `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`.
