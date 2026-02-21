

# Improve Hero Text Readability Without Darkening the Overlay

## Approach
Instead of making the overlay heavier, we enhance the text itself so it punches through the image. Three complementary techniques, all CSS-only, scoped to mobile/tablet only (`lg:` reverts to current desktop style):

### 1. Text Shadow
Add a multi-layer `text-shadow` to the headline and subheadline. This creates a soft dark halo around each letter that separates it from any background -- the same technique used by Netflix, Apple TV+, and premium editorial sites.

- Headline: `[text-shadow:_0_2px_12px_rgba(0,0,0,0.5),_0_1px_3px_rgba(0,0,0,0.4)]`
- Subheadline: `[text-shadow:_0_1px_8px_rgba(0,0,0,0.4),_0_1px_2px_rgba(0,0,0,0.3)]`
- Desktop (`lg:`): `lg:[text-shadow:none]` to keep current clean look

### 2. Bump Font Weight on Mobile
Increase the headline font weight from `font-semibold` to `font-bold` on mobile/tablet only, giving the white text more visual mass against the image. Desktop stays `font-semibold`.

### 3. Roll Back Overlay to a Lighter Value
Since the text itself will now carry its own contrast, we can lighten the overlay back closer to the original to let the photo breathe more:
- From: `from-burgundy-900/95 via-burgundy-900/75 to-burgundy-800/50`
- To: `from-burgundy-900/85 via-burgundy-900/55 to-burgundy-800/30`

## Technical Details

**Only `src/pages/Home.tsx` changes.** Three targeted edits:

1. **Gradient overlay div (line 43):** Lighten opacity stops
2. **h1 (line 48):** Add text-shadow utility and `font-bold lg:font-semibold`
3. **p (line 53):** Add lighter text-shadow utility

No new files, no new dependencies.

