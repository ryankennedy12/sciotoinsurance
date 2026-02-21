
# Fix Mobile Hero Image Zoom on Scroll

## Root Cause

Mobile browsers (Safari, Chrome) hide their URL/address bar when you scroll down and show it again when you scroll back up. This changes the meaning of `100vh` -- the hero section uses `min-h-screen` (which is `100vh`), so when the address bar hides, the viewport grows, the section grows, and `bg-cover` rescales the background image to fill the larger area. This is the "zoom in/out" effect.

## Fix (1 file)

### `src/pages/Home.tsx` (line 27)

Replace the height classes on the hero `<section>`:

**Before:**
```
className="relative min-h-screen lg:h-screen flex items-center overflow-hidden"
```

**After:**
```
className="relative min-h-[100svh] lg:h-[100svh] flex items-center overflow-hidden"
```

`100svh` ("small viewport height") is the viewport height with the address bar **visible**. It never changes as you scroll, so the hero stays a fixed size and the background image never rescales.

Tailwind v3 supports arbitrary values like `min-h-[100svh]` and `h-[100svh]` natively -- no config changes needed.

## Expected Result

The hero image stays perfectly static on mobile scroll. No zoom, no resize, no jank. Desktop behavior is unchanged since desktop browsers don't have a collapsing address bar.
