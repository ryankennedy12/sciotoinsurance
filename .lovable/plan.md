

## Mobile Hero: Bottom-Fade Reveal

Replace the current flat `bg-cream/90` mobile overlay with a vertical gradient that is transparent at the top (revealing the Columbus skyline) and fades to solid cream where the text content sits.

### What changes

**File:** `src/pages/BusinessInsurance.tsx`

Replace the mobile overlay div (line 62):
```
<div className="absolute inset-0 bg-cream/90 sm:hidden" />
```
with a vertical gradient version:
```
<div className="absolute inset-0 sm:hidden" 
     style={{ background: 'linear-gradient(to bottom, hsl(30 20% 98% / 0) 0%, hsl(30 20% 98% / 0.3) 15%, hsl(30 20% 98% / 0.85) 40%, hsl(30 20% 98% / 0.98) 55%, hsl(30 20% 98% / 1) 100%)' }} />
```

This creates a top-to-bottom fade: the top ~15% of the hero shows the skyline clearly, then it gradually transitions to solid cream by around halfway down where the headline and CTAs sit, keeping text fully legible.

No other files, dependencies, or data changes needed.

