

# Mobile and Tablet Hero: Bold Full-Bleed Image with Gradient

## Current Problem
The cream overlay at 85% opacity makes the background image look washed out and unintentional on mobile and tablet. It doesn't feel premium -- it feels like a faded afterthought.

## Proposed Solution: Dark Gradient Overlay with Light Text

Use the hero image at full impact with a rich burgundy-to-transparent gradient overlay and switch the text to white. This is the look used by premium financial and insurance brands (Chubb, USAA, Lemonade) -- bold photography, confident typography, unmistakable professionalism.

```text
MOBILE (<640px):
+-----------------------------------------------+
|  ~~~ hero image, vivid, full-bleed ~~~        |
|  [burgundy gradient from left/bottom]         |
|                                               |
|  [Headline - WHITE text]                      |
|  [Subheadline - white/90 text]                |
|  [CTA Buttons]                                |
|                                               |
+-----------------------------------------------+

TABLET (640px-1023px):
+-----------------------------------------------+
|  ~~~ hero image, vivid, full-bleed ~~~        |
|  [burgundy gradient from left]                |
|                                               |
|  [Headline - WHITE text]                      |
|  [Subheadline - white/90 text]                |
|  [CTA Buttons side-by-side]                   |
|                                               |
+-----------------------------------------------+

DESKTOP (1024px+) -- NO CHANGE:
+-------------------------------+-------------------------------+
|  [Headline - dark text]       |        [Hero Image]           |
|  [Subheadline]                |     (split layout)            |
|  [CTA Buttons]                |                               |
+-------------------------------+-------------------------------+
```

## Why This Will Get a "Wow"
- The photo is vivid and present, not hidden behind a wash
- Burgundy gradient overlay ties the image to the brand while ensuring text contrast
- White text on a photo background is the hallmark of premium, editorial web design
- The CTAs pop against the darker background -- the primary button stays burgundy-700, the secondary button switches to a white outline style
- Desktop stays exactly as-is -- only mobile and tablet change

## Technical Details (only `src/pages/Home.tsx` changes)

### 1. Replace the cream overlay with a burgundy gradient
Change the mobile/tablet overlay from:
```
bg-cream/85
```
To a multi-stop gradient:
```
bg-gradient-to-t from-burgundy-900/90 via-burgundy-800/60 to-burgundy-900/30
```
This creates a rich, dark-to-transparent gradient that keeps the image visible at the top while ensuring text readability at the bottom where the content sits.

### 2. Switch text colors on mobile/tablet
- Headline: Add `text-white lg:text-foreground` so it's white on mobile/tablet, dark on desktop
- Subheadline: Add `text-white/85 lg:text-muted-foreground`
- This ensures the text pops against the dark gradient on small screens but stays the same on desktop

### 3. Adjust the secondary CTA for mobile/tablet
The "Talk to a Real Person" button currently has `bg-card text-primary border-primary`. On the dark background, switch to:
- Mobile/tablet: white outline style (`lg:bg-card` with `border-white text-white` below lg)
- Desktop: unchanged

### 4. Adjust image object-position
Change from `object-[25%_center]` to `object-[30%_center]` to better frame the subjects on mobile.

### 5. No other files change
Same image, same desktop layout, same content. Only the mobile/tablet visual treatment changes.

