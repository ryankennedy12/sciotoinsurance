

## Fix Polaroid Cards: Real Content, Working Links, Better Photos

Three issues to address:

### 1. Remove Fake Case Studies — Replace with Real Service Descriptions

The back of each card currently shows fabricated case studies ("We helped Smith Roofing...") and fake savings numbers. We'll replace these with **honest, benefit-focused descriptions** of what Scioto actually covers for each industry — no fake names, no made-up numbers.

**Updated back-of-card content:**

| Industry | Back Text (replaces fake case study) | Tagline (replaces fake savings) |
|---|---|---|
| Contractors | General liability, tools & equipment, workers' comp — built for the jobsite. | Coverage that works as hard as you do |
| Restaurants | Liquor liability, food spoilage, kitchen fires — we know the risks. | From front-of-house to back-of-house |
| Retail | Inventory protection, customer liability, theft — keep your doors open. | Protect your storefront and your margins |
| Healthcare | Malpractice, HIPAA compliance, specialized professional coverage. | Compliance-ready coverage for your practice |
| Transportation | Fleet coverage, cargo insurance, driver protection for every mile. | Keep your fleet on the road |
| Manufacturing | Equipment breakdown, product liability, workplace safety programs. | Engineered coverage for your operation |
| Professional | E&O, cyber liability, professional indemnity for knowledge workers. | Protect your reputation and your clients |
| Trades | Tools, vehicles, and liability for HVAC, plumbing, and electrical pros. | Built for the trades, priced for your budget |

### 2. Make "Get Quote" Actually Navigate

The current "Get Quote" on the card back is a `<span>` inside a `<button>` — it doesn't navigate anywhere. We'll change the card structure so:

- The **flip interaction** stays on the outer `<button>` (tap/hover to flip)
- The **"Get Quote" element** on the back becomes a real `<Link to="/get-quote">` that navigates to the quote page
- To prevent the link click from also triggering the flip-back, we'll add `e.stopPropagation()` on the link

### 3. Remove Location from Card Front

The caption strip currently shows "{industry.name}" and "{location}, OH" underneath. We'll remove the location line since these are not real office locations — just keep the industry name for a cleaner look.

### 4. Generate Better Industry Photos

The current photos are decent but some are generic (e.g., "Trades" reuses the same `constructionSite.jpg` as "Contractors"). We'll use the AI image generation model to create 8 high-quality, realistic photos tailored to each industry:

1. **Contractors** — Workers on an active residential construction site, hard hats, Ohio suburban setting
2. **Restaurants** — Busy restaurant kitchen with chefs plating food, warm lighting
3. **Retail** — Modern boutique storefront interior with displays and customers
4. **Healthcare** — Medical clinic reception/exam room, clean and professional
5. **Transportation** — Fleet of commercial trucks lined up at a depot
6. **Manufacturing** — Factory floor with CNC machines and workers
7. **Professional** — Corporate office meeting room with professionals collaborating
8. **Trades** — Plumber or electrician working in a residential setting (distinct from contractors)

These will be generated via an edge function using the Nano banana pro model for higher quality, uploaded to file storage, and referenced by URL. This gives each card a unique, industry-specific photo instead of reusing assets.

### Technical Changes

**File: `src/pages/BusinessInsurance.tsx`**

- Update the `industries` array:
  - Replace `caseStudy` with `backDescription` (honest service text)
  - Replace `savings` with `tagline` (benefit phrase)
  - Remove `location`, `pinX`, `pinY` fields (no longer used)
  - Update image imports if new generated photos are added
- In `PolaroidCard` front face:
  - Remove the location line (`{industry.location}, OH`) from the caption strip
- In `PolaroidCard` back face:
  - Replace the quoted `caseStudy` text with `backDescription`
  - Replace `savings` stat with `tagline`
  - Change the "Get Quote" `<span>` to a `<Link to="/get-quote">` with `onClick={e => e.stopPropagation()}` to prevent flip-back
- Generate new photos using AI image generation edge function, store in Lovable Cloud storage, and update image references

**New edge function: `supabase/functions/generate-industry-photos/index.ts`**
- Calls the image generation API for each industry prompt
- Uploads results to a `industry-photos` storage bucket
- Returns public URLs

No other files or database schema changes needed.

