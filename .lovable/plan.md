

## Business Insurance Page Redesign: "Confident Warmth"

The previous "Command Center" approach was too cold and corporate -- the heavy charcoal hero, sidebar UI, and numbered lists feel like enterprise software, not a premium family-owned insurance agency. This new design stays warm and on-brand while still feeling distinctly "business" through its structure and content.

---

### Design Philosophy

The Business Insurance page should feel like the **confident, grown-up sibling** of the Personal Insurance page. Where Personal is light and editorial (white hero, pull-quote testimonial), Business should carry more visual weight with **rich photography and structured content** -- but using the brand's warm tones (cream, burgundy, dusty rose) instead of charcoal.

**How it differs from each page:**
- **vs. Home:** No card-stack hero or split photo panel. Uses a full-width photo hero with text overlay (but different from About -- see below).
- **vs. Personal Insurance:** No typography-only hero, no single pull-quote, no life-stage strip. Uses industry photos and interactive tabs instead.
- **vs. About:** About uses a burgundy gradient overlay on one photo. Business uses a **cream/white overlay on the left half** of the photo, keeping the right side fully visible -- a unique half-reveal treatment.

---

### Section 1: Half-Reveal Photo Hero

A warm, confident hero that leads with the Columbus skyline photo but uses a **cream panel fading into the image** rather than a dark overlay.

- Full-width photo of the Columbus skyline behind everything
- Left side: a `bg-cream/95` panel that covers roughly 55% of the width, with a soft gradient fade into the photo on the right edge
- Inside the cream panel:
  - Uppercase label: "BUSINESS INSURANCE" in dusty rose with letter-spacing
  - Headline: "Protect What You've Built" in Cormorant Garamond, charcoal text (not white -- this is the key difference from About's dark hero)
  - Dusty rose divider line
  - Subtext in muted-foreground
  - Dual CTAs: burgundy primary button + text link for phone
  - Three trust badges: "300+ Businesses" / "29 Years" / "A+ BBB" as small inline items
- Mobile: Full photo as background with cream overlay on top (stacked), keeping text legible
- Top padding clears the sticky nav

This is unique: cream-over-photo (not charcoal split, not white-only, not burgundy overlay).

---

### Section 2: Industry Tabs (Horizontal Tab Bar)

Replace the clunky sidebar UI with a clean **horizontal tab bar** -- a pattern not used on any other page.

- Background: `bg-white`
- Section header: "Industries We Serve" centered
- A single row of 8 industry names as text tabs (not chips, not sidebar rows) with the active one underlined in burgundy -- clean and professional
- Below the tabs: a two-column card with the industry photo on the left and content on the right (description, case study quote, CTA button)
- Mobile: tabs become a scrollable row of compact pills, content panel stacks below
- The tab underline animation gives it an interactive, polished feel distinct from the static cards on other pages

---

### Section 3: Coverage Grid (Icon Cards on Cream)

A clean grid of 8 coverage products using a distinct visual treatment.

- Background: `bg-cream`
- Section header: "Business Coverage Options" centered with dusty rose accent
- 2x4 grid on desktop, 2x4 on tablet, 1-column on mobile
- Each card: white background, subtle border, a top-aligned icon in a dusty rose circle, product name in display font, one-line description, and a "Learn More" arrow link
- No numbering, no left-border accents (those belong to Personal Insurance), no category headers
- Hover: card lifts slightly with shadow
- Simple, scannable, product-catalog feel

---

### Section 4: Risk Assessment CTA (Burgundy Banner)

Instead of charcoal, use a **full-width burgundy section** with a subtle radial glow -- similar in spirit to the site-wide CTA banners but with richer content.

- Background: `bg-primary` with subtle radial glow
- Two-column layout on desktop:
  - Left: headline in white ("Free Business Risk Assessment"), subtext, and a checklist with dusty rose checkmarks (coverage gap analysis, industry-specific review, claims scenario planning, pricing comparison)
  - Right: a white card with "Request Your Assessment" headline, brief description, CTA button, and phone number
- Mobile: stacks vertically
- This is the page's mid-page CTA moment and uses burgundy (on-brand) rather than charcoal (off-brand)

---

### Section 5: Why Choose Scioto (Three Stat Blocks)

A focused, data-forward section with three large stats -- not six tiny ones.

- Background: `bg-white`
- Three blocks in a horizontal row (`grid-cols-1 sm:grid-cols-3`)
- Each block: large display number in burgundy (e.g., "300+", "30+", "Same Day"), label below, one-line description
- Separated by subtle vertical borders on desktop
- Below: a centered CTA link
- Clean and confident without being cluttered

---

### Section 6: Featured Testimonial (Single Quote)

A single powerful testimonial to match the editorial feel -- but styled differently from Personal Insurance's version.

- Background: `bg-cream`
- A centered card with a left burgundy border accent (`border-l-4 border-primary`)
- Five dusty rose stars
- Large italic quote in Cormorant Garamond
- Name, location, and "Helped with" tag below
- The left-border card treatment (vs. Personal Insurance's borderless centered pull-quote) makes it visually distinct

---

### Section 7: Bottom CTA Banner

- Background: `bg-primary` with radial glow (consistent site-wide pattern)
- Headline: "Protect Your Business Today"
- Subtext and dual CTAs
- Matches the standard CTA banner used across all pages

---

### Technical Summary

**File modified:** `src/pages/BusinessInsurance.tsx` (full rewrite of JSX)

**What changes:**
- Charcoal split hero replaced with cream-over-photo half-reveal hero
- Sidebar industry selector replaced with horizontal tab bar
- Numbered category list replaced with icon card grid on cream
- Charcoal risk assessment block replaced with burgundy banner with white card
- 6-column stat strip replaced with 3 focused stat blocks
- Horizontal scroll testimonials replaced with single featured testimonial in bordered card

**What stays:**
- All existing data: `industries`, `testimonials`, `businessInsuranceProducts`, `businessInsuranceReasons`
- All image imports (Columbus skyline, industry photos, etc.)
- All links, CTAs, and phone numbers
- `useState` for industry tab selection

**No new dependencies or files needed.**
