

# Remove All Hero Section Animations

## Overview

Every page's hero section currently uses either `AnimatedSection` wrappers or `isPageReady`-based fade-up transitions. This plan removes all of them so hero content renders instantly -- no fade, no slide, no delay.

## Changes by File

### 1. `src/pages/Home.tsx`
The hero uses `isPageReady` state-based transitions (not AnimatedSection). Four elements have conditional opacity/translate classes and `transitionDelay`:
- h1 (line ~50-53)
- Subheadline p (line ~59-63)
- Trust row div (line ~69-73)
- Dual CTAs div (line ~100-104)

**Change:** Remove the ternary `isPageReady ? "opacity-100 ..." : "opacity-0 ..."` from all four, replace with static `opacity-100 translate-y-0`. Remove the `transitionDelay` style props and the `transition-[transform,opacity]` classes. The `isPageReady` variable and `usePageReady` import can stay (used elsewhere or harmless).

### 2. `src/pages/About.tsx`
Four `AnimatedSection` wrappers in the hero (lines ~51-98):
- Badge pill
- h1
- Subheadline p
- Desktop image block

**Change:** Replace each `<AnimatedSection>` with a plain `<div>`, removing `animation` and `delay` props.

### 3. `src/pages/PersonalInsurance.tsx`
One `AnimatedSection` wrapping the entire hero text content (line ~53-70).

**Change:** Replace with a plain `<div>` keeping the className.

### 4. `src/pages/BusinessInsurance.tsx`
One `AnimatedSection` wrapping the hero content block (lines ~49-61).

**Change:** Replace with a plain `<div>`.

### 5. `src/pages/EmployeeBenefits.tsx`
Two `AnimatedSection` wrappers in the hero:
- Left side text content (line ~84-96)
- Right side stat cards (line ~99)

**Change:** Replace both with plain `<div>` tags keeping classNames.

### 6. `src/pages/Contact.tsx`
One `AnimatedSection` wrapping the hero heading/subheading (line ~131-138).

**Change:** Replace with a plain `<div>` keeping the className.

### 7. `src/components/ProductDetailTemplate.tsx`
One `AnimatedSection` wrapping the hero subtitle, h1, description, and CTA buttons (lines ~146-168). This affects all product detail pages (Auto, Home, Life, Umbrella, Flood, High Net Worth, General Liability, Professional Liability, Workers Comp, Cyber Liability, Commercial Auto, Commercial Property, etc.).

**Change:** Replace with a plain `<div>`.

## What's NOT Changing

- AnimatedSection usage outside of hero sections (value prop cards, testimonials, coverage grids, etc.) remains untouched
- The `AnimatedSection` component itself stays in the codebase
- No other CSS or structural changes

## Expected Result

All hero content on every page renders instantly on load with zero animation delay, improving perceived load speed and eliminating any initial content shift.

