

## Homepage Hero Redesign — Mobile/Tablet Only (Card Stack)

Replace the current full-bleed photo + dark overlay pattern on mobile/tablet with a clean, light-background layout where the hero image sits in a styled card and the text lives below it on cream.

Desktop remains completely unchanged.

---

### Layout (mobile and tablet, below `lg` breakpoint)

The hero section becomes a vertical stack on a `bg-cream` background with no photo overlay:

**1. Photo Card (top)**
- The hero image sits inside a rounded container (`rounded-2xl`) with a `border-2 border-gold-500/40` (dusty rose) and a subtle shadow
- The card has slight horizontal margins (`mx-5 sm:mx-8`) so it doesn't touch the screen edges
- Top padding of `pt-28 sm:pt-32` to clear the fixed nav
- The image uses `aspect-[16/10]` on mobile and `aspect-[16/9]` on tablet for a cinematic feel
- `object-cover object-[30%_center]` to keep the family visible

**2. Text Content (below the card)**
- Sits on the cream background with `px-6 sm:px-10 pt-8 pb-12 sm:pb-16`
- Text is centered
- Headline: `text-foreground` (charcoal) instead of white — no text shadows needed
- Subheadline: `text-muted-foreground` — clean and readable
- A small burgundy divider line (`w-12 h-1 bg-primary rounded-full mx-auto mb-6`) sits above the headline for a branded touch

**3. CTAs**
- "Get Your Free Quote" stays `bg-primary text-primary-foreground`
- "Talk to a Real Person" becomes `bg-card text-primary border border-primary` (no more white border that was designed for dark backgrounds)
- Both are full-width on mobile (`w-full sm:w-auto`), side-by-side on tablet

**4. Trust row (optional enhancement)**
- Below CTAs, a small muted line: five dusty rose stars + "Independent Agency · Est. 2023"

---

### What Stays the Same

- Desktop (`lg:` and up) layout is completely untouched — split grid with image on right, text on left
- All text content (headline, subheadline, CTA labels) stays the same
- The same `heroSplit` image is used

---

### Technical Details

**File: `src/pages/Home.tsx`** (lines 20-81)

Restructure the hero section so mobile/tablet renders the Card Stack layout while desktop renders the existing split grid:

- The outer section keeps `bg-cream`
- On `lg:`, the current grid layout is preserved exactly
- Below `lg:`, instead of the absolute-positioned background image + gradient overlay, render:
  1. A visible `<img>` inside a bordered rounded card
  2. The headline/subheadline/CTAs below on the cream background
- Remove the mobile-specific `text-white`, `text-shadow`, and white border styles — replace with charcoal text on cream
- Remove the `min-h-[85svh]` on mobile since the content naturally determines height
- The `absolute inset-0 lg:hidden` image block and its gradient overlay are removed entirely
