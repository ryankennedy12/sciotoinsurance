

# Redesign the Hero Section

## Problem
The current hero uses a full-bleed photo with text overlaid directly on top, causing the headline and body text to cover the people's faces. This looks unprofessional and reduces both readability and the emotional impact of the image.

## Proposed Solution: Split-Layout Hero

Instead of trying to find a photo where subjects happen to be on the right, switch to a **split layout** where text and image occupy separate halves of the hero. This is a proven, premium pattern used by top insurance and financial services websites.

```text
DESKTOP (1024px+):
+-------------------------------+-------------------------------+
|                               |                               |
|  [Headline]                   |                               |
|  [Subheadline]                |        [Hero Image]           |
|  [Trust Row]                  |     (full height, rounded)    |
|  [CTA Buttons]                |                               |
|                               |                               |
+-------------------------------+-------------------------------+
  burgundy-100 background             image with no overlay

TABLET (640-1023px):
Same split but 50/50 with smaller text

MOBILE (<640px):
+-----------------------------------------------+
|          [Hero Image - top half]              |
|          (shorter, cropped nicely)            |
+-----------------------------------------------+
|  [Headline]                                   |
|  [Subheadline]                                |
|  [Trust Row]                                  |
|  [CTA Buttons]                                |
+-----------------------------------------------+
  cream/burgundy-100 background for text area
```

## Why Split Layout
- Text never covers the image -- both elements get full visual impact
- Works perfectly at every breakpoint without complex object-position hacks
- Feels premium and intentional (not "stock photo with overlay")
- The image can be a generated, high-quality lifestyle photo composed for a portrait/square crop

## AI-Generated Hero Image
Use Lovable AI image generation to create a custom hero image of an Ohio family on a front porch or in front of a home -- warm, natural, and professional. The image will be composed for a **portrait/square aspect ratio** (right half of desktop, top portion of mobile) so subjects are always fully visible.

## Technical Changes

### 1. Generate hero image
- Use the AI image generation API to create a warm, professional photo of a family in front of a suburban Ohio home
- Save it as a new asset (e.g., `src/assets/hero-split.jpg`)

### 2. Rewrite the hero section in `src/pages/Home.tsx` (lines 27-130 approximately)
- Replace the full-bleed image + overlay layout with a CSS Grid split layout
- **Desktop**: `grid-cols-2` with text on left (vertically centered, `bg-burgundy-100` or `bg-cream`) and image on right (object-cover, optional rounded corners)
- **Mobile**: Stack vertically -- image on top (constrained height ~45vh), text below on a solid background
- Remove all dark overlays and text-shadow hacks (no longer needed since text sits on a solid background)
- Keep the exact same content: headline, subheadline, trust row, dual CTAs
- Text color changes from white to `charcoal` (since it's on a light background now)
- Trust row icons stay `gold-500`
- CTA buttons keep their current styling (burgundy primary, white outline secondary)

### 3. No other files change
- Header, Footer, Layout, routing -- all untouched
- The `HeroVisual.tsx` abstract shapes component is not used in Home.tsx currently, so no impact

