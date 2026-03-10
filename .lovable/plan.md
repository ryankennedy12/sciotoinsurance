

## Plan: Stacked Card Hero for Business Insurance Page

Replace the current half-reveal photo hero with a stacked card layout, matching the pattern already used on the Homepage hero (mobile/tablet view) but adapted for the Business Insurance context.

### Layout

```text
┌─────────────────────────────────────┐
│  "Business Insurance" label         │
│  Headline (large, balanced)         │
│  ── burgundy divider ──            │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │   business-insurance-hero   │    │
│  │   (rounded, framed card)    │    │
│  │                             │    │
│  └─────────────────────────────┘    │
├─────────────────────────────────────┤
│  Subtext paragraph                  │
│  [Get Your Free Quote] [Call Us]    │
└─────────────────────────────────────┘
        ↑ All screen sizes

On desktop (lg+): switches to a 2-column split
  Left: headline + divider + subtext + CTAs
  Right: framed photo card (rounded-2xl, Dusty Rose border)
```

### Changes to `src/pages/BusinessInsurance.tsx`

**Delete** the entire current hero section (lines 203-243) — the full-bleed background image with gradient overlays.

**Replace with** a stacked card hero on cream background:
- Desktop: 2-column grid (`lg:grid-cols-2`), text left, photo right in a rounded card with the Dusty Rose border treatment
- Mobile/Tablet: Stacked vertically — label, headline, divider, photo card, subtext, CTAs (centered)
- Photo uses `aspect-[16/10]` on mobile, natural aspect on desktop
- Reuses the same `businessInsuranceHero` image
- Same CTAs: "Get Your Free Quote" + "Give Us a Call"
- Matches Homepage hero styling conventions (font sizes, spacing, border treatment)

### What stays the same
- All other sections (coverage grid, polaroid cards, CTA banner)
- All imports except removing the gradient overlay divs

