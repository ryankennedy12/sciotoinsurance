

## Redesign: "Industries We Serve" as Interactive Central Ohio Map

Replaced the tab-based industry section with an interactive map of Central Ohio featuring clickable industry pins and a slide-out detail panel.

### Implementation (Completed)

- **Map:** SVG-based stylized map with road grid and I-270 beltway representation
- **Pins:** 8 industry pins positioned at real Central Ohio locations (Dublin, Hilliard, Westerville, etc.)
- **Detail Panel:** Clicking a pin shows the industry photo, description, case study, savings highlight, and a quote CTA
- **Mobile:** Industry pills shown below the empty-state card for easy tap access on small screens
- **Interactions:** Pin pulse animation on selection, hover scale, tooltips showing location names

### File Changed
- `src/pages/BusinessInsurance.tsx`
