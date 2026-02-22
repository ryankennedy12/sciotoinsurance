

## Redesign: "Industries We Serve" as Scattered Polaroid Cards

Replace the interactive map section with a tactile, photo-forward "stack of Polaroids" layout where each industry is a slightly rotated photo card that flips on hover/tap to reveal the case study on the back.

### Visual Concept

Cards are arranged in a responsive grid but each has a slight random rotation (-3 to +3 degrees), giving the feel of photos scattered on a table. On hover (desktop) or tap (mobile), a card "lifts" off the surface, straightens, and flips to reveal the back side with a burgundy background, case study quote, savings stat, and CTA.

### Card Design

**Front Side:**
- Full photo background (existing industry images) with a subtle vignette
- White border (8px) mimicking a Polaroid frame
- Bottom "caption strip": industry name in a handwritten-style font treatment (Cormorant Garamond italic) + location
- Industry icon in a small circle at the top-right corner
- Slight drop shadow to feel lifted off the page

**Back Side:**
- Solid burgundy-700 background with cream text
- Industry icon centered at top
- Case study quote in italic serif
- Savings/result stat with a gold accent line
- "Get Quote" CTA button (cream on burgundy)
- Small "tap to flip back" hint on mobile

### Layout

- **Desktop:** 4-column grid with staggered rotations (-2deg, 1deg, -1deg, 3deg, etc.)
- **Tablet:** 2-column grid
- **Mobile:** 2-column grid with smaller cards (no rotation on mobile for cleaner feel)

### Interactions

- **Desktop hover:** Card lifts (translateY -8px, shadow deepens), rotation resets to 0deg, then performs a Y-axis 3D flip (180deg) to show the back. 500ms total transition.
- **Mobile tap:** Tapping a card flips it; tapping again (or tapping another card) flips it back. Only one card flipped at a time.
- **Accessibility:** Both sides have readable text; screen readers get all content without needing the flip.

### Section Header

```
Eyebrow: "Industries We Serve"
Headline: "Real Stories from Real Ohio Businesses"
Subtitle: "Flip a card to see how we helped."
```

### Technical Details

**File:** `src/pages/BusinessInsurance.tsx`

Changes:
1. Remove the entire map SVG, pin system, and detail panel (lines ~103-235)
2. Remove the `selectedIndustry` state; replace with `flippedCard` state (number | null) for mobile tap toggling
3. Build inline `PolaroidCard` component with:
   - CSS `perspective` on the grid container (1000px)
   - `transform-style: preserve-3d` on the card wrapper
   - Front/back faces using `backface-visibility: hidden` and `rotateY(180deg)` for the back
   - Desktop: CSS-only flip via `@media (hover: hover)` using `:hover` pseudo-class with `rotateY(180deg)`
   - Mobile: flip controlled by `flippedCard` state + `onClick`
   - Random rotation per card using a static array of rotation values
4. Each card reuses the existing `industries` array data (photo, icon, name, location, caseStudy, savings)
5. White Polaroid-style border via padding + white background on the outer card wrapper
6. Section background: `bg-background` (cream)

No new files, dependencies, or database changes needed. All existing industry photos are reused.

