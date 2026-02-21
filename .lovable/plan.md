

# Redesign the Navigation Bar

## Current Issues

**Desktop:**
- The header feels flat and utilitarian -- no visual separation or depth
- Logo is small relative to the header height
- Nav links are plain text with no visual grouping or weight
- The "Get a Quote" CTA button has sharp corners and lacks presence
- No phone number visible on desktop (important for an insurance site)
- The bottom border/shadow is too subtle

**Mobile:**
- The phone icon and hamburger are small, plain circles with no visual identity
- No branding visible in the top bar (logo is tiny)
- The full-screen burgundy overlay menu, while functional, feels heavy

## Proposed Design

### Desktop Header

```text
+-----------------------------------------------------------------------+
|  [LOGO]     About  Personal Insurance  Business Insurance              |
|             Employee Benefits  Services  Contact                       |
|                                                                        |
|                              (614) 612-0050    [ Get a Quote ]         |
+-----------------------------------------------------------------------+
```

Revised layout:
- **Taller header** (h-20 to h-[88px]) with a subtle bottom border for definition
- **Logo stays left**, slightly larger (h-16 to h-[72px] on desktop)
- **Nav links centered** with slightly more letter-spacing and uppercase text for a premium insurance feel
- **Right side**: Add a phone number with icon (styled in gold-500 for the icon, charcoal for text) PLUS the "Get a Quote" button
- **"Get a Quote" button**: Rounded-full (pill shape) with slightly more padding for a more polished, modern look
- **On scroll**: White background with a stronger shadow (`shadow-md` instead of `shadow-sm`) and slightly reduced header height for a compact feel

### Mobile Header

- **Increase header height** slightly for better tap targets
- **Show the logo** more prominently (currently it's there but small)
- **Phone button**: Keep the burgundy circle but increase size to w-12 h-12
- **Hamburger**: Style with thicker lines and a subtle rounded background on tap
- **Mobile menu overlay**: Keep the existing burgundy slide-in design (it's on-brand), but add the logo at the top of the overlay in white, and add a subtle divider between nav links

## Technical Changes

### `src/components/Header.tsx` (rewrite)

**Desktop changes:**
1. Add a phone number + icon element to the right side of the nav, before the CTA button
2. Change nav link styling: add `uppercase tracking-wide text-[13px]` for a refined insurance look
3. Make "Get a Quote" button `rounded-full` (pill) with `px-7 py-2.5`
4. Increase desktop header height from `lg:h-24` to `lg:h-[88px]`
5. Add a subtle `border-b border-gray-200/60` when not scrolled, strengthen shadow on scroll

**Mobile changes:**
1. Increase phone button and hamburger to `w-12 h-12` for better tap targets
2. Add the logo (white version or with a filter) at the top of the mobile overlay menu
3. Add subtle `border-b border-white/10` dividers between mobile nav links for visual structure
4. Slightly increase mobile header height from `h-18` to `h-16` (standardize)

**Active state refinement:**
- Replace the bottom underline animation with a more subtle approach: active links get `text-primary font-semibold` instead of the animated underline bar (cleaner for uppercase nav)

### No other files change
- All routing, Layout, Footer, pages remain untouched
- Brand colors remain exact

