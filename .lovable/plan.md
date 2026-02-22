

## Mobile Navigation Menu Redesign

Replace the current heavy full-screen burgundy overlay with a refined, light-themed slide-in panel that feels premium and unique to the Scioto brand.

---

### What Changes

**Current:** Full-screen burgundy gradient overlay with white text, standard link list, and a "Get a Quote" button at the bottom. Feels like every other mobile menu.

**New:** A right-side slide-in panel (roughly 85% width) on a clean white/cream background with the brand's burgundy and gold used as accents rather than dominant fills. The result is lighter, more breathable, and distinctly premium.

---

### Layout and Structure

**Backdrop:** Semi-transparent dark overlay behind the panel (`bg-black/40 backdrop-blur-sm`) that fades in. Clicking it closes the menu.

**Panel:** Slides in from the right. White background with a thin gold accent line on the left edge (the border between the dark backdrop and the panel). Rounded top-left and bottom-left corners for a softer, modern feel.

**Close Button:** Top-right corner, a simple X icon in charcoal (not in a circle border). Clean and minimal.

---

### Content Sections (Top to Bottom)

**1. Brand Header**
- Logo at the top left of the panel (normal colors, not inverted)
- Below the logo, a thin gold divider line

**2. Navigation Links**
- Each link is a full-width row with generous padding (py-4)
- Text in charcoal using the display font (Cormorant Garamond), medium weight, ~18px
- Active link gets a left gold accent bar (3px) and burgundy text color
- No border-bottom dividers between links -- use spacing instead for a cleaner look
- Subtle staggered fade-in animation on open (50ms delay per item)

**3. Divider + CTAs**
- A thin `bg-border` divider line
- "Get a Quote" button: burgundy-700 background, white text, full-width, rounded
- "Call Us" button: outlined with burgundy border, burgundy text, phone icon, full-width
- Both buttons have generous padding (py-3.5)

**4. Trust Footer**
- Small text at the bottom: "Est. 2023 in New Albany, Ohio"
- Star rating line: 5 gold stars + "5.0 on Google"
- Text in muted-foreground, centered

---

### Animations

- **Backdrop:** Fades in over 300ms
- **Panel:** Slides in from right over 400ms with an ease-out curve
- **Nav links:** Each fades in with a slight upward translate, staggered 50ms apart
- **Close:** Panel slides out, backdrop fades out, faster (300ms)

---

### Technical Summary

**File: `src/components/Header.tsx`** (lines 131-224)

Replace the existing mobile menu overlay with:

1. **Backdrop:** `fixed inset-0 bg-black/40 backdrop-blur-sm` with fade transition
2. **Panel:** `fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white border-l-2 border-l-gold-500 rounded-l-2xl shadow-2xl` with slide-in from right
3. **Logo:** Normal logo (no invert filter), smaller size
4. **Links:** `font-display text-lg text-charcoal` with active state using `text-primary border-l-[3px] border-l-gold-500 pl-3`
5. **CTAs:** "Get a Quote" in `bg-primary text-white`, "Call Us" in `border border-primary text-primary`
6. **Trust footer:** Muted text with gold stars, centered at bottom
7. **Close button:** Simple X in charcoal, no border/circle

The header bar itself and the hamburger icon remain unchanged. Only the overlay content (lines 131-224) is rewritten.

