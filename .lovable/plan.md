

## Redesign: "Industries We Serve" as Before/After Risk Cards

Replace the current tab-based industry section with interactive two-state cards that transition from a desaturated "risk scenario" (the problem) to a vibrant "protected" state (the solution) on hover (desktop) or tap (mobile).

### How It Works

Each industry gets a card with two visual states:

- **Default ("At Risk"):** Desaturated photo background, a warning-style headline describing a real risk scenario (e.g., "A kitchen fire shuts you down for months"), muted color palette
- **Hover/Tap ("Protected"):** Photo becomes full color, background shifts to a warm burgundy/cream tone, text changes to show the positive outcome and Scioto's case study result, a "Get Quote" CTA appears

### Layout

- **Desktop:** 4-column grid, 2 rows (8 industries)
- **Tablet:** 2-column grid, 4 rows
- **Mobile:** Single column, stacked cards

Each card is roughly square on desktop, with a fixed aspect ratio. The photo covers the card with a gradient overlay.

### Card Content (per industry)

| Industry | Risk State | Protected State |
|---|---|---|
| Contractors | "One injury on-site could cost you everything" | "We helped Smith Roofing reduce Workers' Comp by 18%" |
| Restaurants | "A kitchen fire can shut you down for months" | "We got Mario's Pizza claim paid in 11 days" |
| Retail | "One slip-and-fall lawsuit wipes your margins" | "A local boutique saved $3,200/year" |
| Healthcare | "A HIPAA breach triggers six-figure fines" | "40+ Ohio medical practices, zero coverage disputes" |
| Transportation | "One accident grounds your entire fleet" | "Restructured coverage, 22% premium reduction" |
| Manufacturing | "Equipment failure halts production for weeks" | "Full OSHA audit navigated with our documentation" |
| Professional | "One client dispute becomes a $500K lawsuit" | "Proper E&O coverage prevented a $500K loss" |
| Trades | "A burst pipe at a client's home — are you covered?" | "Bundled policies saved $4,100/year" |

### Interaction Details

- **Desktop:** Hover triggers a 400ms CSS transition (grayscale to color, overlay color shift, text crossfade)
- **Mobile:** Tap toggles the state; tapping another card resets the previous one
- **Animation:** Uses CSS `filter: grayscale(1)` transitioning to `grayscale(0)`, plus opacity transitions on the two text layers
- **Accessibility:** Both states are readable; no information is hidden permanently

### Section Header

```
Eyebrow: "Industries We Serve"
Headline: "Every Business Has Risks. We Eliminate the Surprises."
Subtitle: "Hover to see how we've helped Ohio businesses like yours."
```

### Technical Details

**File:** `src/pages/BusinessInsurance.tsx`

- Remove the existing tab bar (desktop underline tabs + mobile scrollable pills) and the split image/text content panel
- Remove the `selectedIndustry` state since cards are self-contained
- Update the `industries` array to add a `riskText` field for each entry
- Build a new card component inline (or extracted) with:
  - CSS transitions for grayscale, overlay color, and text opacity
  - `useState` per card (mobile) or CSS `:hover` (desktop) for state toggling
  - The existing industry photos are reused as card backgrounds
- Section background stays `bg-background` to contrast with the cream coverage grid below

No new dependencies, files, or database changes needed.

