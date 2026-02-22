

## Services Page Redesign: "Client Command Center"

### Design Concept

Every other page on the site is a marketing page — selling, persuading, building trust. The Services page is different: it's for **existing clients who need to get something done**. The redesign leans into that by making it feel like a **lightweight client portal or command center** — app-like, utility-first, with clear visual hierarchy that says "we respect your time."

This is the only page that will use a **bento grid layout** — mixed-size tiles instead of uniform cards — giving it an immediately distinct look from the 3-column grids on other pages.

### Section-by-Section Design

**Section 1: Minimal Greeting Hero**
- No gradient background, no big photo — just a clean white section
- Small "Client Services" label in uppercase tracking (dusty rose accent)
- Headline: "How Can We Help Today?"
- Subtitle: one line, warm and direct
- Below: a prominent **"Need Help Now?"** phone link styled as a pill — not a big circle+number like the current design, but a compact, app-style action chip
- This hero is intentionally short — gets out of the way fast

**Section 2: Bento Grid — Action Tiles**
- A **2x3 bento grid on desktop** where the first tile (Report a Claim) is double-width, spanning both columns — it's the most urgent/important action
- The claim tile gets a subtle burgundy-100 background and a left border accent in burgundy, making it visually distinct as the "priority action"
- Remaining 5 tiles are single-width in a clean grid
- Each tile is minimal: large icon (centered), bold title, one-line description, and a subtle arrow link at the bottom
- No card borders — just a light background fill with rounded corners and hover shadow
- On mobile: single column, all tiles same size, claim tile keeps its accent styling

**Section 3: Response Times Strip**
- A new section that doesn't exist on any other page: a **horizontal strip with 3 response-time promises**
- Cream background with three inline items:
  - "Claims: Within 1 hour"
  - "Policy Changes: Same day"  
  - "Certificates: Within 2 hours"
- Each item has a small clock icon and uses a monospace-style number treatment (large, bold number + unit)
- This builds trust while being purely functional — no other page has this pattern

**Section 4: Contact Fallback (Simplified)**
- Keep the "Can't Find What You Need?" section but simplify it
- Remove the large burgundy circle around the phone icon — just show the phone number large and clickable
- Stack phone, email, and hours vertically in a compact card with a subtle border
- Move the "Not a client yet?" CTA into a small, understated text link — this page is for existing clients, so the quote CTA should be secondary

### Technical Details

**File changed:** `src/pages/Services.tsx`

**Bento grid implementation:**
- CSS Grid with `grid-cols-1 md:grid-cols-2` and `col-span-2` on the first tile (Report a Claim)
- No Card component wrapper — use plain `div` with `rounded-2xl bg-card` for a lighter feel
- Claim tile: `bg-burgundy-50 border-l-4 border-primary`

**Response times strip:**
- New data array with 3 items: `{ label, time, unit }` 
- Horizontal flex on desktop, vertical stack on mobile
- Numbers styled with `font-display text-3xl font-bold text-primary`

**Hero simplification:**
- Remove gradient background classes
- Replace with `bg-white pt-28 pb-10`
- Phone pill: `inline-flex rounded-full bg-primary/10 text-primary px-5 py-2`

**Contact section cleanup:**
- Remove the `w-16 h-16 rounded-full bg-primary` phone circle
- Phone number: `text-3xl font-display font-bold text-primary` (direct, no wrapper)
- Compact vertical card for all contact methods

No new dependencies, no database changes. All changes are purely presentational within the single file.

