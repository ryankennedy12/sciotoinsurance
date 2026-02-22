

## Contact Page Redesign: "Direct Line"

### Design Concept

The Services page became a "command center" with its bento grid. The Contact page needs its own distinct identity. The concept: **a single-scroll conversation starter** that feels more like a modern messaging app than a traditional contact form page. Instead of the standard two-column form + sidebar layout (which looks like every other insurance site), we'll use a **centered, single-column flow** with distinct visual zones stacked vertically.

The distinguishing feature: **three "channel cards"** at the top that let users pick HOW they want to connect (call, email, or form) before they even see the form. This is the only page on the site that uses this "pick your path" interaction pattern.

### Section-by-Section Design

**Section 1: Minimal Hero (matches Services page tone)**
- Clean white background, no gradient (departing from other pages)
- Small "Contact" uppercase tracking label in dusty rose
- Headline: "Let's Start a Conversation"
- One-line subtitle
- Intentionally short, like the Services hero

**Section 2: Three Channel Cards (the signature element)**
- Three side-by-side cards in a `grid-cols-1 md:grid-cols-3` layout
- Each card represents a contact method with a large icon, bold label, and direct action:
  - **Call Us**: Phone icon, "(614) 612-0050", clickable `tel:` link, subtitle "We pick up on the second ring"
  - **Email Us**: Mail icon, the email address, clickable `mailto:` link, subtitle "We respond within hours"
  - **Visit Us**: MapPin icon, the address, subtitle "New Albany, OH 43054"
- Cards have a subtle border, rounded-2xl, and hover lift effect
- The Call card gets a subtle burgundy-100 background and left border accent (like the priority claim tile on Services) since phone is the preferred contact method
- This pattern doesn't exist anywhere else on the site

**Section 3: The Form (centered, no sidebar)**
- Instead of the current two-column layout, the form lives in a **single centered column** (max-w-xl)
- Above the form: a small "Or send us a message" label
- The form itself is clean and minimal — no Card wrapper, just fields on the page background with subtle bottom borders instead of full input boxes (a more modern, app-like feel... actually, keep the current Input components for consistency, but remove the Card wrapper for a lighter feel)
- Keep all existing form fields and logic exactly as-is
- Below the submit button: a trust line "We'll respond within one business day. No spam, ever."
- Success state stays the same

**Section 4: Business Hours + Map (compact row)**
- Instead of stacking hours and map vertically in a sidebar, place them **side-by-side in a single row** below the form
- Left side: Business hours in a compact card with clock icon
- Right side: The Google Maps embed
- Both in a `grid-cols-1 md:grid-cols-2` layout
- This keeps the useful info but pushes it below the form where it's secondary

**Section 5: Schedule a Call (keep but simplify)**
- Remove the large burgundy circle around the Calendar icon
- Keep the centered CTA but make it more compact
- Add a subtle `border-b border-border` at the bottom to separate from footer

### Technical Details

**File changed:** `src/pages/Contact.tsx`

**Hero changes:**
- Replace `bg-gradient-to-b from-cream to-burgundy-50` with `bg-card`
- Add uppercase tracking label: `text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent`
- Keep headline and subtitle

**Channel cards:**
- New data array with 3 items: `{ icon, title, detail, subtitle, href, priority }`
- `grid grid-cols-1 md:grid-cols-3 gap-4` layout
- Call card: `bg-secondary border-l-4 border-primary`
- Other cards: `bg-card border border-border`
- All: `rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all`

**Form restructure:**
- Remove `grid grid-cols-1 lg:grid-cols-2` two-column layout
- Center the form in `max-w-xl mx-auto`
- Remove the `Card` / `CardContent` wrapper — form fields sit directly in a `div`
- Keep all form state, validation, submission logic, and Supabase insert unchanged

**Hours + Map row:**
- Move business hours and map into a new `grid grid-cols-1 md:grid-cols-2 gap-6` section below the form
- Hours: compact card with border
- Map: keep the existing iframe, same aspect ratio

**Schedule section:**
- Remove the `w-16 h-16 rounded-full bg-burgundy-100` icon wrapper
- Keep Calendar icon inline with heading
- Add `border-b border-border` to section

No new files, no new dependencies, no database changes. All form logic and Supabase integration stays exactly the same.
