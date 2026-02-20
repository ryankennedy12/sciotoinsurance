
# Smooth Scrolling & Animation Performance Fix

## Root Cause Diagnosis

After reading through all the relevant files, I've identified **5 specific causes** of the janky scrolling experience. Every single one is fixable without changing the visual design.

---

## The 5 Problems (Ranked by Severity)

### Problem 1 — CRITICAL: JavaScript Scroll Handler Causes React Re-renders on Every Frame

**File:** `src/pages/Home.tsx`, lines 14–27

```js
const [scrollY, setScrollY] = useState(0);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY < window.innerHeight) {
      setScrollY(window.scrollY); // ← CALLED ON EVERY SCROLL EVENT
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
}, []);
```

Every pixel the user scrolls triggers `setScrollY()`, which forces React to **re-render the entire `Home` component** — all 539 lines of it. This is the #1 cause of jank. The parallax transform and opacity values are applied via inline `style={}` using this state value, which React must recalculate and repaint on every frame.

**Fix:** Replace React state with a `useRef` + direct DOM manipulation. Write the `transform` and `opacity` values directly to the element via a ref, bypassing React's render cycle entirely. The scroll handler never touches state — it only touches the DOM element directly.

---

### Problem 2 — HIGH: `transition-all` Is Being Used Everywhere

**Files:** `src/pages/Home.tsx`, `src/components/Header.tsx`, `src/components/ui/animated-section.tsx`

`transition-all` tells the browser to watch **every animatable CSS property** for changes and smooth them all. This is extremely expensive because it forces the browser to check layout-affecting properties (width, height, padding, margin) during transitions — not just compositor-friendly ones like `transform` and `opacity`.

Specific occurrences:
- Card hover: `transition-all duration-300` (lines 197, 211, 225, 277, 323, 367)
- `AnimatedSection`: `transition-all` (animated-section.tsx line 70)
- Header: `transition-all duration-300` (multiple places)
- CTA arrow: `group-hover:gap-3 transition-all duration-300` — animating `gap` forces layout recalculation

**Fix:** Replace every `transition-all` with `transition-[transform,opacity,box-shadow]` — only the properties that actually change. Also change the CTA arrow animation from `gap` change to a `translateX` on the icon itself.

---

### Problem 3 — HIGH: `will-change` Is Misapplied and Missing

**File:** `src/components/Layout.tsx`, line 60

```js
style={{ willChange: transitionStage === "hidden" ? "opacity" : "auto" }}
```

`will-change: opacity` is only being applied during the `"hidden"` stage (before the page appears). Once the page is visible and `transitionStage === "enter"`, it's reset to `"auto"` — meaning the browser gets no GPU acceleration hint for the actual scroll animations happening below.

Meanwhile, the hero background div on `Home.tsx` line 43 has `will-change-transform` correctly, but the content div on line 58 (which also translates and fades on scroll) does NOT have `will-change` set. This means the browser has to promote that layer mid-animation, causing a flash/jank.

**Fix:** Add `will-change: transform, opacity` to both the hero background and the hero content container as a static inline style (not conditional), and remove the misapplied conditional `willChange` from `Layout.tsx`.

---

### Problem 4 — MEDIUM: Too Many `AnimatedSection` Instances Creating Too Many Observers

**File:** `src/hooks/useScrollAnimation.tsx` + `src/pages/Home.tsx`

The Home page has **12+ separate `AnimatedSection` components**, each creating its own `IntersectionObserver` instance. While IntersectionObserver is generally cheap, 12+ observers all potentially firing during a single scroll movement adds up, especially when combined with Problems 1 and 2.

Additionally, `AnimatedSection` uses `transition-all` (line 70 of animated-section.tsx) on every animated element, compounding Problem 2.

**Fix:** 
1. Fix `transition-all` in `AnimatedSection` to `transition-[transform,opacity]`
2. Reduce stagger delays — currently delays go up to 300ms, meaning the last card doesn't fully appear until 300ms + 400ms = 700ms after it enters view. This creates a sluggish feel. Reduce max stagger to 150ms.

---

### Problem 5 — MEDIUM: Hero Parallax Uses `backgroundImage` + `transform` Without `contain`

**File:** `src/pages/Home.tsx`, lines 42–48

The hero background uses both `scale(1.1)` (to hide edges during parallax) AND a dynamic `translateY` on scroll. The 110% scale on a full-viewport background image is expensive to composite. Without `contain: layout` or `contain: paint`, browser repaints can cascade to sibling elements.

**Fix:** Add `contain: strict` to the parallax container and ensure the outer section has `overflow: hidden` (it already has this via `overflow-hidden` — good). Also clamp the parallax value calculation to ensure it never triggers layout.

---

## Implementation Plan

### Files to Change

**1. `src/pages/Home.tsx`** — The highest-impact file
- Replace `scrollY` state with a `ref`-based scroll handler that writes directly to DOM elements
- Remove `transition-all` from all card hover classes
- Fix the CTA arrow animation from `gap` change to `translateX`
- Add `will-change: transform, opacity` statically to both parallax elements

**2. `src/components/ui/animated-section.tsx`**
- Replace `transition-all` with `transition-[transform,opacity]`
- Reduce default duration from 400ms to 350ms (snappier feel)

**3. `src/components/Header.tsx`**
- Replace `transition-all` occurrences with specific properties
- Remove `transition-all` from the MegaMenu and NavLink components

**4. `src/components/Layout.tsx`**
- Fix the `willChange` logic — apply it statically to the `<main>` element for the transition, not conditionally

---

## What Will Stay Exactly the Same

- All visual design (colors, fonts, layout, spacing)
- All animations (fade-up, fade-in, stagger — just faster/smoother)
- The parallax hero effect (still works, just GPU-accelerated)
- All hover states (cards still lift, photos still zoom)
- All scroll-triggered reveals

## What Will Feel Different (Better)

- Scrolling will feel immediate — no React re-renders triggered by scroll
- Card hover transitions will snap cleanly instead of fighting the browser
- Section reveals will feel crisper (350ms vs 400ms, tighter easing)
- The hero parallax will be silky smooth instead of jerky

---

## Technical Summary

The core philosophy of this fix is: **keep animations on the GPU compositor thread, never trigger layout recalculation during scroll.** The rule is simple: only ever animate `transform` and `opacity`. Everything else causes jank.

| Current | Fixed |
|---|---|
| `setScrollY()` on every scroll → React re-render | Ref → direct DOM write → zero React re-renders |
| `transition-all` → browser watches all properties | `transition-[transform,opacity]` → compositor only |
| `will-change: auto` during scroll | `will-change: transform, opacity` static |
| 12+ IntersectionObservers with `transition-all` | Same observers, compositor-safe transitions |
| Gap animation on CTA arrow | `translateX` on arrow icon |
