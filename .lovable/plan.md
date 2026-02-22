

## Make the Bottom CTA Section Unique on the Business Insurance Page

### The Problem

Section 7 ("Protect Your Business Today") uses the exact same pattern as the bottom CTA on every other page: burgundy background, centered headline, subtitle, two buttons. It's also nearly identical to Section 4 (the Risk Assessment banner) on this same page — so you get two burgundy banners that blur together.

### The Solution: "Split Card" CTA with a Business-Specific Hook

Replace the generic burgundy banner with a distinctive two-panel layout on a cream/light background that feels completely different from every other page's closer.

### New Design: "Two Paths" Split CTA

```text
+------------------------------------------------------------------+
|  bg-cream                                                         |
|                                                                   |
|  Eyebrow: "Next Steps"                                            |
|  Headline: "Two Ways to Get Started"                              |
|                                                                   |
|  +---------------------------+  +------------------------------+  |
|  |  WHITE CARD               |  |  BURGUNDY CARD               |  |
|  |                           |  |                               |  |
|  |  "I Know What I Need"     |  |  "I'm Not Sure Yet"          |  |
|  |                           |  |                               |  |
|  |  Skip the small talk.     |  |  No problem. We'll walk      |  |
|  |  Tell us about your       |  |  you through a free risk     |  |
|  |  business and we'll       |  |  assessment and show you     |  |
|  |  have a quote ready       |  |  exactly where you're        |  |
|  |  within 24 hours.         |  |  covered — and where         |  |
|  |                           |  |  you're exposed.             |  |
|  |  [Get My Free Quote ->]   |  |  [Schedule Assessment ->]    |  |
|  |                           |  |  or call: (614) 612-0050     |  |
|  |  ~ avg response: 4 hrs ~  |  |  ~ 100% free, no strings ~  |  |
|  +---------------------------+  +------------------------------+  |
|                                                                   |
|  "Not ready? That's okay too. Bookmark us — we'll be here."      |
+------------------------------------------------------------------+
```

### Design Details

**Section background:** `bg-cream` (NOT burgundy) — immediately different from every other page CTA and from Section 4 above it.

**Left card (white):**
- White background, subtle border, rounded-xl
- Headline: "I Know What I Need" (font-display, bold)
- Body text describing the fast-track quote path
- Primary CTA button: "Get My Free Quote"
- Soft footnote: "Average response: 4 hours"
- Hover: subtle lift + shadow

**Right card (burgundy):**
- `bg-primary` background, cream/white text
- Headline: "I'm Not Sure Yet" (font-display, bold)
- Body text about the risk assessment path
- Secondary CTA: "Schedule Free Assessment" (cream button)
- Phone number as alternative
- Footnote: "100% free. No obligation."
- Hover: subtle lift + deeper shadow

**Below the cards:** A single understated line in muted text — "Not ready? That's okay too. Bookmark us — we'll be here." — to reduce pressure and feel human.

**Mobile:** Cards stack vertically (white on top, burgundy below).

### Why This Stands Out

1. **No other page has this pattern** — it's a split-choice layout, not a centered banner
2. **Different background** — cream instead of burgundy breaks the monotony
3. **User-empathy framing** — "I Know / I'm Not Sure" meets visitors where they are instead of pushing one CTA
4. **Two distinct visual treatments** side-by-side create visual contrast within the section itself
5. **The closing line** adds personality no other CTA has

### Technical Changes

**File:** `src/pages/BusinessInsurance.tsx`

- Replace Section 7 (lines ~374-395) with the new "Two Paths" split card layout
- Uses existing components: `AnimatedSection`, `Button`, `Link`
- No new files, dependencies, or database changes
- Background: `bg-cream` with `container-wide`
- Two cards in a `grid lg:grid-cols-2 gap-6` layout
- Left card: `bg-card rounded-xl border border-border p-8`
- Right card: `bg-primary rounded-xl p-8` with cream text

