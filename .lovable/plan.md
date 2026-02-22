

## Elevating "The Journey" and "What We Stand For" Sections

These two sections currently blend together visually -- both use standard bordered cards on light backgrounds. The goal is to make each one feel distinct, premium, and memorable.

---

### Section 4: "The Journey" -- Immersive Dark Timeline

**Problem:** The current timeline sits on a light `bg-secondary` background with standard white cards and a thin gold line. It looks clean but reads as "just more cards." There is nothing that makes it feel like a cinematic story unfolding.

**New Design: Full-width dark burgundy section with glowing timeline**

Background and Atmosphere:
- Change the section background to a rich burgundy gradient: `bg-gradient-to-b from-burgundy-800 to-burgundy-900`
- Add a subtle radial glow behind the center line (burgundy-700 at low opacity) to create depth
- All text switches to white/white-80 for contrast
- The section heading and subheadline render in white with a gold divider

Timeline Line:
- The center line changes from `bg-accent/40` to a brighter `bg-gold-500/60` so it glows against the dark background
- Timeline nodes become larger (w-5 h-5) with a gold fill and a burgundy-800 border ring, creating a "lit" dot effect

Milestone Cards:
- Remove the white card background entirely
- Instead, each milestone becomes a "glass" card: `bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl`
- Year badge stays gold but becomes more prominent: `bg-gold-500/20 text-gold-500 border border-gold-500/30`
- Headline text in white, description in white/70
- On hover (desktop only), the card gets a subtle `bg-white/10` lift

The overall effect: the timeline feels like stepping into a darker, more dramatic chapter of the page. It visually separates from everything above and below.

---

### Section 5: "What We Stand For" -- Large Statement Cards

**Problem:** The current values section uses compact horizontal cards (icon left, text right) in a 2-column grid on `bg-white`. They feel utilitarian and blend with the timeline cards above.

**New Design: Full-width single-column statement blocks**

Background and Layout:
- Switch to `bg-cream` background to contrast with the dark timeline above
- Instead of a 2x2 grid, use a single-column layout where each value gets a full-width row
- Each row is a large, airy block with generous vertical padding (py-8 to py-10)
- Separate values with thin `border-b border-border` dividers (no border on the last one)

Card Structure (per value):
- Layout: number/index on the far left (large display numeral like "01", "02" in gold-500, `font-display text-4xl`), then the icon in its gradient badge, then the title and body text
- Desktop: horizontal row with the number, icon, and text flowing left to right
- Mobile: stack the number + icon above the text
- No card background, no border, no shadow -- just clean content with generous whitespace

The numbering adds structure and implies intentionality ("these are our four pillars, in order"). The larger format gives each value room to breathe and feel important rather than crammed into a grid.

Add a short intro line below the section heading: "Four principles that guide every recommendation we make." in `text-muted-foreground`.

---

### Technical Summary

**File: `src/pages/About.tsx`**

**Journey Section (lines 234-281):**
1. Change section background from `bg-secondary` to `bg-gradient-to-b from-burgundy-800 to-burgundy-900`
2. Update radial glow to use `burgundy-700` at higher opacity for depth
3. Change heading, all text to white (`text-white`, `text-white/70`, `text-white/80`)
4. Update gold divider under heading to `bg-gold-500`
5. Timeline center line: `bg-gold-500/60`
6. Timeline nodes: `w-5 h-5 bg-gold-500 border-[3px] border-burgundy-800`
7. Milestone cards: remove `bg-card border border-border shadow-sm`, replace with `bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl`
8. Year badges: `bg-gold-500/20 text-gold-500 border border-gold-500/30`
9. Headline: `text-white`, description: `text-white/70`
10. Add hover state on cards: `hover:bg-white/10 transition-colors`

**Values Section (lines 283-330):**
1. Change section background from `bg-white` to `bg-cream`
2. Replace 2-column grid with single-column `space-y-0` layout using `border-b border-border` dividers
3. Each value becomes a full-width row: large gold numeral ("01") on the left, icon badge, then title + body
4. Desktop: `flex items-start gap-8` horizontal layout
5. Mobile: number + icon in a row, text below
6. Remove card backgrounds, borders, and the left gold accent bar
7. Number styling: `font-display text-4xl sm:text-5xl font-bold text-gold-500/40`
8. Add intro subline below section heading

