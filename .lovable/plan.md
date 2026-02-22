

## Employee Benefits Page Redesign

### Current State
The page has 6 sections: split hero (text + burgundy stat cards), product grid, ROI calculator, process timeline with photos, testimonials, and a burgundy bottom CTA. The hero feels like a generic SaaS landing page, the product cards are identical to other pages, and the process timeline cards blend in.

### Design Direction: "Data-Driven Advisor"

Employee benefits is fundamentally about numbers and outcomes. The redesign leans into that with a **dashboard-inspired aesthetic** — clean data visualization, comparison tables, and an interactive calculator that feels like a tool, not a brochure. This contrasts with Personal Insurance (editorial/lifestyle) and Business Insurance (industry-focused Polaroids).

### Section-by-Section Redesign

**Section 1: Hero — "The Problem" Opening**
- Switch to a **centered typographic hero** (similar to Personal Insurance's clean approach, but with a twist)
- Large headline: "Your Benefits Package Is Costing You Talent"
- Below the headline, a **horizontal stat ticker** — three stats in a single row with large numbers and animated counters (keep existing AnimatedCounter)
- Stats sit inside a subtle cream card strip, not burgundy panels
- CTAs below: "Get Custom Quote" + phone link (text only, no icon)
- No split layout, no burgundy half-screen — just clean, authoritative typography

**Section 2: Benefits Products — "Comparison Table" Style**
- Instead of the current icon+text cards, present products in a **clean two-column layout** with a left column showing the product name and a right column with a brief description
- Each row has a subtle bottom border, hover highlights the row
- This feels like a dashboard/spreadsheet — distinct from the card grids on other pages
- A "Get a Quote" link on hover for each row

**Section 3: ROI Calculator — Keep but Elevate**
- This is already unique and strong. Keep the slider-based calculator
- Improve the sliders with custom-styled range inputs (Dusty Rose track, burgundy thumb)
- Move the results panel from a burgundy card to a **charcoal card** (#1A1A1A) — differentiates from the bottom CTA
- Add a second result metric: "Estimated Hiring Cost Savings" alongside "Potential Annual Savings"

**Section 4: Process Timeline — Horizontal Stepper**
- Replace the 4 photo cards with a **horizontal stepper/timeline**
- A single horizontal line connecting 4 numbered circles
- Active/hovered step expands to show the description below
- No photos — just clean numbered steps with icons
- This is a completely different pattern from any other page

**Section 5: Testimonials — Keep As-Is**
- The 3-card testimonial grid works well and is consistent across the site
- No changes needed here

**Section 6: Bottom CTA — Match Other Pages**
- Keep the burgundy full-width CTA
- Fix the phone button legibility (use `variant="secondary"` like we did on Business Insurance)
- Remove the phone icon, just show the number

### Technical Details

**File changed:** `src/pages/EmployeeBenefits.tsx` (full rewrite of sections 1, 2, and 4; modifications to sections 3 and 6)

**Hero changes:**
- Remove the `grid lg:grid-cols-2` split layout
- Center-align content with `max-w-3xl mx-auto text-center`
- Stats become a horizontal row of 3 items in a cream strip below the headline

**Products section:**
- Replace the card grid with a table-like layout using `divide-y` borders
- Each product is a flex row: icon-less, just name + description + hover arrow

**Process section:**
- Replace photo cards with a CSS-only horizontal stepper
- 4 circles connected by a line, each with step number, title, and description below

**Calculator tweaks:**
- Change results card from `bg-primary` to `bg-foreground` (charcoal)
- Add second metric row

**Bottom CTA fix:**
- Phone button: `variant="secondary"`, remove `Phone` icon

No new dependencies or database changes needed. All changes are purely presentational within the single file.
