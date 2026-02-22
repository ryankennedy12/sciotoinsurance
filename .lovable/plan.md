

## Employee Benefits Page: Dashboard-Style Redesign

### The Core Idea

Right now the page reads like a typical marketing page with text blocks. The "Data-Driven Advisor" concept needs actual data visualization to sell it. We'll use **recharts** (already installed) to add real chart components and restructure the layout to feel like you're looking at a benefits analytics dashboard, not a brochure.

### Section-by-Section Changes

**Section 1: Hero — Keep Centered, Add a "Dashboard Preview" Below**
- Keep the centered headline and stat ticker (they work well)
- Below the CTAs, add a **mini dashboard strip** — three small chart cards side-by-side:
  - Card 1: A tiny **donut/pie chart** showing "Benefits vs. No Benefits" retention split (visual, not interactive)
  - Card 2: A tiny **bar chart** showing "Average Savings by Category" (Health, 401k, Dental)
  - Card 3: A tiny **line chart** showing "Turnover Reduction Over Time" (a simple downward curve)
- These are decorative/illustrative — they set the tone that "we speak in data" without needing real API data
- Each mini chart sits in a white card with a subtle border, like dashboard widgets

**Section 2: Benefits Products — "Dashboard Table" with Metric Columns**
- Keep the comparison-table concept but add **two small data columns** on the right:
  - "Avg. Savings" — a dollar figure per product (e.g., "$2,400/yr")
  - "Adoption Rate" — a small **inline progress bar** showing a percentage (e.g., 85%)
- This makes the table feel like a dashboard data grid, not just a list
- On mobile, hide the metric columns and keep the simple name + description layout

**Section 3: ROI Calculator — Add a Live Chart**
- Keep all sliders and the charcoal results panel
- Add a **bar chart** (recharts `BarChart`) inside the results panel showing:
  - "Current Cost" bar (turnover + hiring costs at current rate) in a muted color
  - "With Better Benefits" bar (reduced costs) in burgundy
  - This makes the savings visual and instantly understandable
- The chart updates live as users move the sliders — this is the wow moment

**Section 4: Process Timeline — Keep As-Is**
- The horizontal stepper is already distinct. No changes needed here.

**Section 5: Testimonials — Keep As-Is**
- Works well, consistent with other pages.

**Section 6: Bottom CTA — Keep As-Is**
- Already fixed for legibility.

### Technical Details

**File changed:** `src/pages/EmployeeBenefits.tsx`

**New imports needed:**
- `BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid` from `recharts`

**Hero dashboard strip:**
- Three cards in a `grid grid-cols-1 md:grid-cols-3` below the CTA buttons
- Each card: white bg, rounded-xl, subtle border, ~150px height
- Charts use hardcoded illustrative data (no API calls)
- Donut: two segments (burgundy + muted), no labels, just the visual
- Bar: 3 small bars with category labels
- Line: simple 5-point downward trend line

**Products table metrics:**
- Add `avgSavings` and `adoptionRate` fields to the inline product data (not changing the data file — just extending locally)
- Progress bar: a simple `div` with `bg-primary` width set by percentage
- Hide metric columns on mobile with `hidden lg:flex`

**Calculator chart:**
- `BarChart` with 2 bars: "Current" and "Improved"
- Data recalculates from existing `calc` state — no new state needed
- Chart height: ~200px, sits inside the charcoal results card
- Bar colors: muted gray for "Current", burgundy for "Improved"
- Minimal axis labels, clean look

**No new files, no new dependencies, no database changes.** Everything uses the already-installed `recharts` library and existing component patterns.

