

# Scrolling Performance Optimization Plan

## Problem Summary

After profiling the site, I found several concrete issues causing sluggish scrolling, especially on mobile:

1. **The logo image is 2.2MB** -- this single file is larger than the entire rest of the site combined, causing slow loads and memory pressure
2. **`backdrop-blur-sm` on the sticky header** -- this CSS filter forces the browser to re-composite the blurred area on every single scroll frame, which is extremely expensive on mobile GPUs
3. **`scroll-behavior: smooth` in global CSS** -- this can cause jank when the browser tries to smooth-scroll programmatic scroll calls during page transitions
4. **Three separate scroll event listeners** all firing independently (header, hero parallax, sticky mobile CTA) -- the StickyMobileCTA listener triggers React state updates (`setState`) on every scroll, causing re-renders
5. **`transition-all` on `.interactive-card`** in index.css -- this transitions every CSS property including expensive ones like `width`, `height`, `margin`, triggering layout recalculations
6. **Hover scale transforms on card images** (`group-hover:scale-105`) -- these trigger GPU layer promotion on large image elements during scroll on some mobile browsers

---

## Changes

### 1. Compress the logo (2.2MB to ~50-100KB)

Replace the current `logo.png` with a properly compressed version. A logo does not need to be a 2MB+ PNG. I will optimize it to WebP or compress the PNG significantly.

**File:** `src/assets/logo.png`

### 2. Remove `backdrop-blur` from the sticky header

Replace the frosted-glass effect with a simple solid/semi-transparent background. This eliminates the most expensive per-frame compositing operation on mobile.

**File:** `src/components/Header.tsx`
- Change `bg-white/98 backdrop-blur-sm` to `bg-white shadow-sm`
- Change `bg-cream/80 backdrop-blur-sm` to `bg-cream`

### 3. Remove `scroll-behavior: smooth` from global CSS

This conflicts with the programmatic `window.scrollTo({ behavior: "instant" })` used in page transitions and can cause frame drops.

**File:** `src/index.css`
- Remove `scroll-behavior: smooth` from the `html` rule

### 4. Optimize the StickyMobileCTA scroll listener

The current implementation calls `setIsVisible(scrolled)` on every scroll event, which triggers a React re-render even when the value hasn't changed. I'll add a guard so `setState` only fires when the value actually changes, and wrap the handler in `requestAnimationFrame` for frame-aligned updates.

**File:** `src/components/StickyMobileCTA.tsx`

### 5. Fix `transition-all` on `.interactive-card`

Replace with specific properties (`transition-[transform,box-shadow]`) to avoid transitioning layout-triggering properties.

**File:** `src/index.css`

### 6. Disable hero parallax on mobile

The parallax effect manipulates `transform` on two elements every scroll frame. On mobile, where GPU budgets are tight, this adds unnecessary compositing work for an effect that's barely noticeable on small screens. I'll disable it below the `lg` breakpoint.

**File:** `src/pages/Home.tsx`
- Add a media query check: only attach the scroll listener on screens wider than 1024px
- On mobile, the hero will be a static background image (still looks great, just no parallax movement)

### 7. Lazy-load below-fold images

The three service card images (`familyHomeService`, `businessOffice`, `teamMeeting`) load eagerly. Adding `loading="lazy"` keeps them out of the critical path and reduces initial memory pressure during scroll.

**File:** `src/pages/Home.tsx`

---

## Expected Impact

- **Logo compression**: Page load drops by ~2MB, faster first paint
- **Removing backdrop-blur**: Eliminates the single most expensive per-frame GPU operation on mobile
- **Scroll listener optimization**: Eliminates unnecessary React re-renders during scroll
- **Parallax disabled on mobile**: Removes two DOM writes per scroll frame on mobile
- **transition-all fix**: Prevents accidental layout thrashing on card hover/active states

These changes preserve the visual design on desktop while making mobile scrolling dramatically smoother.

