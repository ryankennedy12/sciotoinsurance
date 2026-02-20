

# Fix Hero Section for Mobile & Tablet

## Problems Identified

Looking at the screenshots, two clear issues:

1. **People are cropped awkwardly on mobile/tablet** — The hero image uses `bg-center` at all breakpoints, but on narrower screens the couple gets cut off at strange points (half a face, bodies displaced to edges). The focal point of the photo (the couple) needs to shift based on screen width.

2. **Text is hard to read over the photo** — The current overlay is too light: just `bg-burgundy-800/20` plus a gradient `from-charcoal/60 via-charcoal/40 to-transparent`. On mobile where the text sits directly over the brightest parts of the photo, this doesn't provide enough contrast. The text blends into the sunlit background.

---

## The Fix

### 1. Responsive Image Focal Point

Change `bg-center` to responsive positioning so the couple stays visible:

- **Mobile (default):** `bg-[center_30%]` — shift the focal point slightly left so the people stay centered in the narrow viewport
- **Tablet (md):** `bg-center` — standard centering works at this width  
- **Desktop (lg+):** `bg-center` — no change, already looks good

### 2. Stronger Text-Contrast Overlay on Mobile/Tablet

Add a stronger gradient overlay that kicks in only on smaller screens where text sits directly over the bright photo. Two changes:

- **Increase the base overlay** from `bg-burgundy-800/20` to a responsive value: stronger on mobile (`/40`), lighter on desktop (`/20`)
- **Add a bottom-heavy gradient on mobile** so the lower portion of the hero (where CTAs and trust badges sit) has a darker scrim. On desktop where text sits to the left with the `from-charcoal/60` gradient, it's already fine — but on mobile, text spans the full width and needs help everywhere.

Specifically:
- Keep the existing left-to-right gradient for desktop
- Add a separate overlay div that uses `bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent` and is only visible on mobile/tablet (`block lg:hidden`)

### 3. Optional: Add a subtle text-shadow to white text

Add `[text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)]` to the headline and subheadline on mobile. This is a lightweight way to ensure legibility regardless of what's behind the text, without making the overlay too dark.

---

## Technical Details

**File:** `src/pages/Home.tsx`

### Changes to the hero background div (line 51):
- Change `bg-center` to `bg-[center_30%] md:bg-center` so the couple stays visible on mobile

### Changes to the overlay divs (lines 61-64):
- Line 61: Change `bg-burgundy-800/20` to `bg-burgundy-800/40 lg:bg-burgundy-800/20` (stronger tint on mobile, lighter on desktop)
- Line 64: Strengthen the gradient on mobile — change `from-charcoal/60 via-charcoal/40` to `from-charcoal/70 via-charcoal/50 lg:from-charcoal/60 lg:via-charcoal/40`
- Add a new mobile-only bottom gradient div: `<div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent lg:hidden" />`

### Text shadow for headlines (lines 75, 84):
- Add a style prop with `textShadow: "0 2px 12px rgba(0,0,0,0.3)"` to the h1 and the subheadline paragraph for extra contrast insurance

### No other files need to change.

---

## What Stays the Same
- Desktop hero looks identical (overlays match current values at lg+ breakpoint)
- Parallax effect unchanged
- All text content, CTAs, trust badges unchanged
- Animation timings unchanged

## What Improves
- Mobile: People stay centered and visible in the photo
- Mobile/Tablet: Text pops clearly against a darker scrim
- Subtle text-shadow adds legibility without making the overlay too heavy

