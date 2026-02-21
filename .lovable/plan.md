

# Fix Hero Image on Mobile and Tablet

## Problem
The current "image stacked on top" approach crops the subjects badly on smaller screens and pushes the headline/CTAs below the fold.

## Solution: Background Image with Overlay on Mobile/Tablet

On mobile and tablet, use the hero image as a **full-section background** behind the text with a cream/burgundy gradient overlay for readability. This keeps the photo visible and atmospheric without fighting the text for space. On desktop, keep the clean split layout as-is.

```text
DESKTOP (1024px+) -- NO CHANGE:
+-------------------------------+-------------------------------+
|  [Headline]                   |                               |
|  [Subheadline]                |        [Hero Image]           |
|  [Trust Row]                  |     (full height, cover)      |
|  [CTA Buttons]                |                               |
+-------------------------------+-------------------------------+

MOBILE / TABLET (<1024px) -- NEW:
+-----------------------------------------------+
|  ~~~ hero image as background ~~~             |
|  [soft cream overlay for contrast]            |
|                                               |
|  [Headline]                                   |
|  [Subheadline]                                |
|  [Trust Row]                                  |
|  [CTA Buttons]                                |
|  [Trust Reassurances]                         |
|                                               |
+-----------------------------------------------+
  Image fills section, overlay ensures text readability
```

## Why This Works
- The photo is always present, giving the hero visual impact on every screen
- No awkward cropping -- the image is background-sized to cover, so composition shifts naturally
- Text readability is guaranteed by the overlay (no faces-under-text problem since the overlay handles contrast)
- Content is immediately visible without scrolling past a separate image block
- On desktop, the split layout stays untouched -- best of both worlds

## Technical Details (changes only in `src/pages/Home.tsx`, hero section ~lines 27-114)

1. **Restructure the image panel**: Change from a separate stacked `div` to a background layer that only shows on mobile/tablet:
   - Add an `absolute inset-0` image container with `lg:hidden` so it renders behind text on small screens
   - Add a `bg-cream/85` overlay on top of the image so text stays readable (light, warm feel -- not a dark moody overlay)
   - Keep the existing separate image column for desktop (`hidden lg:block`)

2. **Remove stacked image div on mobile**: The current `h-[45svh]` image block becomes `hidden lg:block lg:order-2` (desktop only)

3. **Add background image for mobile/tablet**: New absolutely-positioned image + overlay inside the text panel wrapper, visible only below `lg`

4. **Text panel adjustments**:
   - Add `relative z-10` so text sits above the background image
   - Add `min-h-[85svh] lg:min-h-0` so the mobile hero has enough height for the background to be visible
   - Center text on mobile: `text-center lg:text-left`, `items-center lg:items-start`
   - Center CTAs: `justify-center lg:justify-start` on the button row

5. **No other files change** -- same image asset, same content, same desktop layout

