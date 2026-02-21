

# New Logo + Mobile Performance Deep Clean

## Overview

Two things in one pass: swap in your new compressed logo and implement all the CSS/rendering performance fixes from the approved plan.

## Changes

### 1. Replace the logo file
Copy your uploaded logo to `src/assets/logo.png`, replacing the 2.2MB original. This is the single biggest performance win.

### 2. Replace `transition-all` with specific properties (~20 files)
Every instance of `transition-all` will be replaced with only the properties that element actually animates. Key files:
- `src/pages/GetQuote.tsx` -- form buttons, option cards
- `src/pages/Services.tsx` -- service cards
- `src/pages/BusinessInsurance.tsx` -- tabs, cards
- `src/pages/About.tsx` -- CTA buttons
- `src/pages/PersonalInsurance.tsx` -- carousel buttons
- `src/pages/EmployeeBenefits.tsx` -- stat cards
- `src/components/Header.tsx` -- accordion, phone link
- `src/components/CarrierLogoGrid.tsx` -- carrier tiles
- `src/components/TestimonialCard.tsx` -- card wrapper
- `src/components/ProductDetailTemplate.tsx` -- phone button
- `src/index.css` -- `.touch-card`, `.touch-industry-card`
- `src/components/ui/button.tsx` -- base variant
- `src/components/ui/accordion.tsx`
- `src/components/ui/floating-label-input.tsx`

### 3. Remove all `backdrop-blur` from components
Replace with slightly more opaque solid backgrounds:
- `src/components/TestimonialCard.tsx`
- `src/components/ProductDetailTemplate.tsx`
- `src/pages/EmployeeBenefits.tsx`
- `src/pages/PersonalInsurance.tsx`
- `src/pages/About.tsx`

### 4. Restrict hover scale to desktop only
Change `group-hover:scale-105` to `lg:group-hover:scale-105` on large images:
- `src/components/Header.tsx` -- logo
- `src/pages/Home.tsx` -- service card images

### 5. Add CSS containment
Add `contain: content` to `.touch-card` and `.touch-industry-card` in `src/index.css`.

## Expected Result
- ~2MB less memory pressure from the logo alone
- ~90 fewer per-frame property checks from transition-all removal
- 5 fewer GPU compositing operations from backdrop-blur removal
- No unnecessary GPU layers on mobile from hover transforms
- Dramatically smoother scrolling on mobile devices

