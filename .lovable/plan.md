
# Option A: Split Photo/Text Cards — Coverage Section Redesign

## What's Changing

The current "Coverage for Every Chapter" section uses a cascading staircase layout with 3 cards that progressively shrink (col-span-5, col-span-4, col-span-3) and progressively drop lower (mt-0, mt-16, mt-32). All text sits on top of dark photo overlays, making it hard to read. This will be replaced with 3 equal-height split cards stacked vertically, each with a photo on the left and clean text on the right.

## Visual Design — Option A

```text
┌────────────────────────────────────────────────────────────┐
│  [PHOTO — left 45%]  │  Personal Insurance                │
│  family home photo   │  Protect your family, home, future │
│  (soft right-fade)   │  • Auto  • Home  • Life  • Umbrella │
│                      │  Explore Personal Coverage →        │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│  [PHOTO — left 45%]  │  Business Insurance                │
│  business office     │  Risk management for your business  │
│  photo               │  • Liability • Property • Workers   │
│                      │  Explore Business Coverage →        │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│  [PHOTO — left 45%]  │  Employee Benefits                 │
│  team meeting        │  Attract and keep great people      │
│  photo               │  • Group Health • 401(k) • Dental   │
│                      │  Explore Benefits →                 │
└────────────────────────────────────────────────────────────┘
```

Each card is exactly **360px tall** on desktop. The left photo panel fades into the right text panel using a CSS `mask-image` gradient (white → transparent, right edge). The text panel sits on a clean **cream/white background** — no dark overlay, no contrast issues.

## Technical Implementation

**File to edit:** `src/pages/Home.tsx`, lines 255–455 (the entire Services Overview section)

### Desktop Layout (lg+)
- Section `<section>`: background `bg-cream`, `py-space-2xl`
- A `flex flex-col gap-6` container holding 3 cards
- Each card: `flex flex-row h-[360px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- **Left panel** (45% width): `relative w-[45%] flex-shrink-0 overflow-hidden`
  - `<img>` with `object-cover w-full h-full group-hover:scale-105 transition-transform duration-500`
  - Fade mask: `::after` pseudo-element OR an absolutely positioned `<div>` with `bg-gradient-to-r from-transparent to-cream` on the right edge (last 30%) to softly blend photo into text panel
- **Right panel** (55% width): `bg-white` (or `bg-cream`) with padding `p-10 xl:p-12`, `flex flex-col justify-center`
  - 2px burgundy-700 accent bar at the very top of the card (`absolute top-0 left-0 right-0 h-0.5 bg-primary`)
  - Category label in gold-500, small uppercase tracking: e.g. "PERSONAL COVERAGE"
  - H3 in `font-display font-semibold text-2xl` in `text-foreground`
  - Description paragraph in `text-muted-foreground`
  - Coverage bullet list: 4 items with small gold checkmark icons (`CheckCircle` lucide icon, `text-gold-500`)
  - Arrow CTA link in `text-primary font-medium` with hover underline and animated `→`

### Mobile Layout (below lg)
- Cards stack vertically
- Each card: `flex flex-col rounded-xl overflow-hidden shadow-md` (no min-height needed)
- Top portion: photo at `h-48` with `object-cover`
- Bottom portion: text on cream background with padding `p-6`
- Same gold checkmark bullets and burgundy CTA

### Hover Effects
- Entire card lifts: `hover:-translate-y-1 hover:shadow-xl transition-all duration-300`
- Photo subtly zooms: `group-hover:scale-105 transition-transform duration-500`
- CTA arrow widens gap: `group-hover:gap-3`
- No other color changes needed — the clean background already reads well

### Coverage Bullet Items

**Personal Insurance**
- Auto Insurance
- Home Insurance
- Life Insurance
- Umbrella & Renters

**Business Insurance**
- General Liability
- Commercial Property
- Workers' Compensation
- Cyber Liability

**Employee Benefits**
- Group Health Insurance
- Dental & Vision
- Life & Disability
- 401(k) & Retirement

### Imports Required
- Add `CheckCircle` to the existing lucide-react import on line 2 of `Home.tsx`
- All 3 image imports already exist (`familyHomeService`, `businessOffice`, `teamMeeting`)

## What Stays the Same
- Section headline "Coverage for Every Chapter" and its AnimatedSection wrapper
- The `AnimatedSection` scroll animations on each card (staggered delay)
- All link destinations (`/personal-insurance`, `/business-insurance`, `/employee-benefits`)
- Everything below this section (testimonials, CTA section, footer) is completely untouched
