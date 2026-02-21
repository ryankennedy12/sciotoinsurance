

# Upgrade "Why Ohio Families Work With Us" Section to Premium

## Current State
The section has flat white cards with small icons, uniform text sizing, and minimal visual distinction between elements. It reads as functional but generic -- there's no clear visual hierarchy drawing the eye through headline, cards, and CTA.

## Proposed Changes

### 1. Elevated Icon Treatment
Wrap each icon in a rounded container with a soft gold-to-burgundy gradient background, giving them a "badge" feel. Increase icon size slightly and add a subtle ring/border in gold-500 around the container.

### 2. Stronger Card Visual Hierarchy
- Add a thin gold-500 top border accent to each card (2-3px) for a premium stripe effect
- Increase card padding and internal spacing
- Make card headlines larger (text-xl to text-2xl on desktop) with tighter letter-spacing
- Add a subtle "Learn more" or arrow link at the bottom of each card in burgundy-700 to create a clear endpoint

### 3. Section Header Upgrade
- Replace the thin decorative line with a small gold accent element (short gold bar or double-line)
- Increase headline size for more dominance (text-[42px] to text-[48px] on desktop)
- Add a subtle serif italic style to a keyword in the subtitle for personality (e.g., "picks up the phone" in italic)

### 4. Background Depth
- Add a very subtle background pattern or a light radial gradient behind the section to separate it from flat cream -- e.g., a soft burgundy-100 radial glow centered behind the cards

### 5. Bottom CTA Enhancement
- Convert the plain text link into a more prominent styled element -- a bordered pill button or a card-like callout strip with the review stars inline
- Add the star rating (5 gold stars) next to "See Our Reviews" for immediate social proof

### 6. Staggered Card Layout Polish
- On desktop, make the center card slightly elevated (larger shadow, slight scale) to create a "featured" center-card pattern, drawing the eye to the 29-year experience differentiator

## Technical Details

**File changed:** `src/pages/Home.tsx` only (lines ~84-158)

**Specific edits:**

1. **Icon containers** (lines 105-106, 119-120, 133-134): Wrap each icon in a `w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-gold-500/10 flex items-center justify-center border border-gold-500/20` container

2. **Card styling** (lines 103, 117, 131): Add `border-t-[3px] border-t-gold-500/60` to each card, increase padding to `p-7 sm:p-8`, and add `relative` for potential accent positioning

3. **Card headlines** (lines 108, 122, 136): Bump to `text-xl sm:text-2xl` with added `tracking-tight`

4. **Center card emphasis** (line 117): Add `md:scale-[1.03] md:shadow-md md:z-10` to make the middle card visually dominant

5. **Card CTAs**: Add a small "Learn more" arrow link at the bottom of each card in `text-primary text-sm font-medium mt-4`

6. **Section header** (lines 90-97): Change the decorative bar to gold-500, bump h2 to `lg:text-[48px]`, wrap "picks up the phone" in `<em>` with `italic text-primary`

7. **Bottom CTA** (lines 146-157): Replace plain link with a flex row containing 5 gold stars + "5.0 on Google" + a styled pill button "See Our Reviews"

No new files or dependencies needed. All changes are CSS/markup only within the existing component.

