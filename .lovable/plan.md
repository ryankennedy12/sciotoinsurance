

## Personal Insurance Page Redesign

The current page feels too similar to the homepage -- same split-screen hero pattern, same bg-secondary card grid, same layout rhythms. Here's a plan to give it a distinct identity while staying on-brand.

---

### Design Philosophy: "Editorial Product Page"

Where the homepage is warm and inviting (Card Stack, cream tones) and the About page is narrative and immersive (dark burgundy hero, timeline), the Personal Insurance page should feel like a **curated product catalog** -- clean, organized, and confidence-inspiring. Think of a high-end brochure.

**Key differentiators from other pages:**
- No split-screen or card-stack hero -- instead, a compact **text-only hero on a white background** with a bold typographic headline (no hero image at all)
- Coverage products presented in a **two-column editorial layout** with larger cards (not a 4-column grid)
- A **horizontal scrolling life-stage strip** instead of the current full-height dark slideshow
- Alternating white/cream sections (no dark sections like the About page)

---

### Section 1: Typographic Hero (No Photo)

A clean, typography-driven hero that immediately signals "this is a different page." No background image -- just beautiful type on white.

- Background: `bg-white`
- Top padding: `pt-32 sm:pt-40` to clear nav
- Small uppercase label: "PERSONAL INSURANCE" in dusty rose with tracking
- Large display headline: "Coverage That Fits Your Life" -- `text-4xl sm:text-5xl lg:text-6xl` in Cormorant Garamond, charcoal
- A gold divider line (`w-16 h-0.5 bg-accent`)
- Subtext: one sentence in Inter, muted -- "We shop 30+ carriers so you get the right protection at the right price."
- Dual CTAs: "Get Your Free Quote" (primary) + "Call (614) 612-0050" (text link, not a button)
- Bottom padding: `pb-16 sm:pb-20`

This is a complete departure from both the Home (card stack/split) and About (dark immersive photo) heroes.

---

### Section 2: Life Stage Strip (Horizontal Scroll)

Replace the current tall, dark, full-bleed slideshow with a compact horizontal scroll strip on cream background.

- Background: `bg-cream`
- Section header: "Coverage for Every Stage of Life" with burgundy divider
- Horizontal scrollable row of 5 cards (not a full-viewport carousel)
- Each card: `w-[260px]` fixed width, rounded-xl, with the life stage photo on top (aspect-[4/3]), stage name, coverage type in dusty rose, and a "Learn More" link
- Cards scroll horizontally on mobile with `overflow-x-auto` and snap-scroll behavior
- On desktop (lg), all 5 cards fit in a single row without scrolling
- No dark overlay, no navigation arrows, no autoplay -- simple and clean

This is visually distinct from the Home page's large service cards and the About page's timeline.

---

### Section 3: Coverage Products (Two-Column Editorial Grid)

Replace the current compact 4-column card grid with a more spacious, editorial two-column layout.

- Background: `bg-white`
- No category subheadings ("Most Popular", "Property & Specialty") -- instead, all 8 products in one flowing grid
- Each card is larger: `p-8`, with the icon in a dusty-rose-tinted circle, product name in display font, 2-3 line description, and a "Get a Quote" link
- Grid: `grid-cols-1 md:grid-cols-2` with generous `gap-6`
- Cards have a left border accent (`border-l-3 border-primary/40`) instead of the rounded icon-box pattern used on the homepage
- Hover: border becomes full primary color, subtle lift

---

### Section 4: Why Choose Scioto (Horizontal Stats Bar)

Replace the current image + text split with a clean stats/reasons bar.

- Background: `bg-cream`
- Three stat blocks in a horizontal row (`grid-cols-1 sm:grid-cols-3`)
- Each block: large number/stat in display font (primary color), label below, brief description
  - "$847/yr" / "Average Savings"
  - "30+" / "Insurance Carriers"
  - "Same Day" / "Quote Response"
- Below the stats: a single centered CTA -- "See What You Could Save"

This replaces the photo-heavy split layout used on the homepage, keeping it data-forward.

---

### Section 5: Testimonials (Single Featured Quote)

Instead of a 3-column testimonial grid (used on the homepage), use a single large featured testimonial.

- Background: `bg-white`
- Large pull-quote style: Cormorant Garamond italic, `text-2xl`, centered
- Name, location, and "Helped with" below
- Five dusty-rose stars above the quote
- Simple and elegant -- one powerful story instead of three shorter ones

---

### Section 6: CTA Banner

- Background: `bg-primary` (burgundy) with subtle radial glow (matches Home page CTA style for consistency)
- Headline: "Ready to See What You Could Save?"
- Subtext + dual CTAs (Get Quote button in white, phone as text link)
- This section can stay similar to the homepage CTA for brand consistency -- it's a recurring site-wide pattern

---

### Technical Summary

**File modified:** `src/pages/PersonalInsurance.tsx` (full rewrite of the JSX)

**What's removed:**
- Split-screen hero with background image
- Full-height dark slideshow carousel (Embla/Autoplay imports removed)
- 4-column coverage card grid with category headers
- Photo + text split "Why Choose" section
- 3-column testimonial grid
- Generic rounded CTA card

**What's added:**
- Typography-only hero on white
- Horizontal scroll life-stage strip on cream
- Two-column editorial coverage grid on white
- Stats bar on cream
- Single featured testimonial on white
- Burgundy CTA banner

**Data:** Still uses `personalInsuranceProducts` and `personalInsuranceReasons` from `src/data/products.ts`. Life stages data stays inline.

**No new dependencies or files needed.**
