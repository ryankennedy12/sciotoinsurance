

## Business Insurance Page Redesign

### The Problem

The current Business Insurance page uses a dark, full-bleed photo hero with text overlay -- nearly identical to the About page's pattern. The coverage grid and "Why Choose" section also mirror layouts found on the homepage. It needs its own visual identity.

### Design Philosophy: "Command Center"

Where the homepage is warm (card stack, cream), Personal Insurance is editorial (white typography, two-column grid), and About is narrative (dark immersive, timeline), the Business Insurance page should feel like a **confident, structured command center** -- geometric, data-driven, and authoritative. Think corporate annual report, not family brochure.

**Key differentiators from other pages:**
- No full-bleed photo hero -- instead, a **structured split hero** with a charcoal left panel and a cropped industry photo on the right (geometric, not immersive)
- Industry selector becomes a **sidebar + content panel layout** instead of pill tabs
- Coverage products shown as a **numbered list with category headers** (not cards, not editorial two-column)
- A **dark charcoal section** for the risk assessment CTA (unique to this page -- no other page uses charcoal backgrounds)

---

### Section 1: Structured Split Hero

A geometric, confident hero that immediately says "business" -- not warm and family-oriented like the homepage, and not minimal like Personal Insurance.

- **Left panel** (60% width on desktop): `bg-charcoal` (#1A1A1A) background
  - Small uppercase label: "BUSINESS INSURANCE" in gold/accent with wide tracking
  - Large headline: "Protect What You've Built" in white, Cormorant Garamond
  - Gold divider line (same as Personal Insurance for brand consistency)
  - Subtext in white/80
  - Dual CTAs: Gold "Get Your Free Quote" button + white outline "Call" button
  - Trust badges row at bottom: "300+ Businesses" / "Nationwide Coverage" / "A+ BBB"
- **Right panel** (40% width): The Columbus skyline photo cropped into a clean rectangle, no overlay -- just the raw image filling the space
- **Mobile**: Stacks vertically -- charcoal text block on top, photo below (compact, `aspect-[16/10]`)

This is completely distinct: charcoal background (unique), geometric split (different from Home's cream card-stack and Personal's white typography).

---

### Section 2: Industry Selector (Sidebar Layout)

Replace the current pill-tab selector with a more structured sidebar-and-panel layout that feels like a professional tool.

- Background: `bg-white`
- **Desktop**: Two-column layout with a narrow left sidebar listing all 8 industries as rows (icon + name), with the selected one highlighted with a primary left-border accent. Right panel shows the selected industry's photo, description, and case study.
- **Mobile**: Industries become a horizontal scrollable row of compact chips, with the content panel below
- The selected industry panel keeps the photo + case study + CTA pattern but in a cleaner card layout
- This sidebar pattern is unique to this page -- no other page uses it

---

### Section 3: Coverage Products (Numbered Category List)

Instead of the current 4-column card grid (similar to homepage patterns), use a clean **numbered list grouped by category** -- a pattern unique to this page.

- Background: `bg-cream`
- Two category groups: "Core Coverage" and "Professional & Cyber" -- each with a bold category header
- Products listed as clean rows (not cards): number badge on the left (1-8 in primary circles), product name in display font, description to the right, and a subtle arrow link
- On desktop: two columns of 4 products each (one column per category)
- Hover: the row gets a subtle cream-to-white background shift

This numbered-list pattern is distinct from Home (service cards), Personal Insurance (two-column editorial cards), and About (timeline).

---

### Section 4: Risk Assessment CTA (Charcoal Block)

Keep the risk assessment section but redesign it on a solid charcoal background (no background photo) for a sharp, modern feel unique to this page.

- Background: solid `bg-charcoal` (#1A1A1A) -- no photo overlay
- Left side: headline in white, checklist items with gold checkmarks
- Right side: a white card with the CTA form/button (high contrast)
- This solid dark section is unique -- the About page uses burgundy overlay on a photo, which is different

---

### Section 5: Why Choose (Compact Stat Cards)

Replace the current 3-column reason cards with a **single-row stat strip** -- compact, horizontal, data-forward.

- Background: `bg-white`
- Six items from `businessInsuranceReasons` displayed in a `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6` layout
- Each item: icon on top (gold), bold title below, one-line description in small muted text
- No card borders -- clean and airy, separated by subtle vertical dividers on desktop
- Compact and punchy compared to the large padded reason cards used elsewhere

---

### Section 6: Testimonials (Horizontal Scroll Cards)

Instead of the 3-column grid (used on Home), display testimonials in a **horizontal scroll strip** -- similar in mechanic to Personal Insurance's life stage strip, but visually distinct with a charcoal-tinted card style.

- Background: `bg-cream`
- Three testimonial cards in a horizontal scrollable row on mobile, fitting inline on desktop
- Cards have a subtle `bg-white` with a top accent line in primary color
- Keeps the existing testimonial data

---

### Section 7: CTA Banner

- Background: `bg-primary` (burgundy) -- consistent site-wide pattern
- Headline: "Protect Your Business Today"
- Dual CTAs matching other pages

---

### Technical Summary

**File modified:** `src/pages/BusinessInsurance.tsx` (full rewrite of JSX)

**What changes:**
- Full-bleed dark photo hero replaced with geometric charcoal split hero
- Pill-tab industry selector replaced with sidebar/panel layout
- 4-column coverage card grid replaced with numbered category list on cream
- Photo-overlay risk assessment replaced with solid charcoal block
- 3-column reason cards replaced with compact 6-column stat strip
- 3-column testimonial grid replaced with horizontal scroll strip

**What stays:**
- All existing data arrays (industries, testimonials, products from `products.ts`)
- All image imports
- All links and CTAs

**No new dependencies or files needed.**

