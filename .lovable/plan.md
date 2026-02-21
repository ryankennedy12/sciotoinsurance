

# Page Cleanup Plan

## Pages to KEEP
- **Home** (`src/pages/Home.tsx`)
- **About** (`src/pages/About.tsx`)
- **Personal Insurance** (`src/pages/PersonalInsurance.tsx`)
- **Business Insurance** (`src/pages/BusinessInsurance.tsx`)
- **Employee Benefits** (`src/pages/EmployeeBenefits.tsx`)
- **Services** (`src/pages/Services.tsx`)
- **NotFound** (`src/pages/NotFound.tsx`)
- **All Admin pages** (`src/pages/admin/*`)

## Pages to DELETE (18 files)

| File | Reason |
|------|--------|
| `src/pages/Contact.tsx` | Not one of the kept pages |
| `src/pages/GetQuote.tsx` | Not one of the kept pages |
| `src/pages/personal-insurance/AutoInsurance.tsx` | Product detail page |
| `src/pages/personal-insurance/HomeInsurance.tsx` | Product detail page |
| `src/pages/personal-insurance/LifeInsurance.tsx` | Product detail page |
| `src/pages/personal-insurance/UmbrellaInsurance.tsx` | Product detail page |
| `src/pages/personal-insurance/FloodInsurance.tsx` | Product detail page |
| `src/pages/personal-insurance/HighNetWorthInsurance.tsx` | Product detail page |
| `src/pages/business-insurance/GeneralLiability.tsx` | Product detail page |
| `src/pages/business-insurance/WorkersComp.tsx` | Product detail page |
| `src/pages/business-insurance/CyberLiability.tsx` | Product detail page |
| `src/pages/business-insurance/ProfessionalLiability.tsx` | Product detail page |
| `src/pages/business-insurance/CommercialProperty.tsx` | Product detail page |
| `src/pages/business-insurance/CommercialAuto.tsx` | Product detail page |

## Components to DELETE (only used by deleted pages)

| File | Used by |
|------|---------|
| `src/components/ProductDetailTemplate.tsx` | All 12 product detail pages only |
| `src/components/ProductFAQ.tsx` | ProductDetailTemplate only |
| `src/components/QuoteFormExitIntent.tsx` | GetQuote page only |
| `src/components/calculators/AutoCoverageSlider.tsx` | Product pages only |
| `src/components/calculators/RebuildCostEstimator.tsx` | Product pages only |
| `src/components/calculators/LifeCoverageCalculator.tsx` | Product pages only |
| `src/components/calculators/UmbrellaGapCalculator.tsx` | Product pages only |
| `src/components/calculators/FloodRiskChecker.tsx` | Product pages only |
| `src/components/calculators/HighNetWorthChecklist.tsx` | Product pages only |
| `src/components/calculators/LiabilityLimitTool.tsx` | Product pages only |
| `src/components/calculators/IndustryRiskAssessment.tsx` | Product pages only |
| `src/components/calculators/PropertyGapChecklist.tsx` | Product pages only |
| `src/components/calculators/FleetCalculator.tsx` | Product pages only |
| `src/components/calculators/WorkersCompEstimator.tsx` | Product pages only |
| `src/components/calculators/CyberRiskScorecard.tsx` | Product pages only |
| `src/components/calculators/CalculatorWrapper.tsx` | Calculator components only |
| `src/components/calculators/index.ts` | Calculator barrel export |

## Files to UPDATE

### `src/App.tsx`
- Remove all imports for deleted pages (Contact, GetQuote, all 12 product detail pages)
- Remove all routes for those pages
- Keep wildcard redirects under `/personal-insurance/*` and `/business-insurance/*` but point them to `/` instead of `/get-quote`

### `src/components/Header.tsx`
- Remove "Get a Quote" button from desktop nav
- Remove Contact nav link from mobile menu
- Update any remaining `/get-quote` or `/contact` links

### Links across kept pages
The kept pages (Home, About, PersonalInsurance, BusinessInsurance, EmployeeBenefits, Services) contain many links to `/get-quote` and `/contact`. These will be updated to point to the Services page (`/services`) or removed, since Services is the main client action hub. Specific files:
- `src/pages/Home.tsx` -- CTA links
- `src/pages/About.tsx` -- contact CTA
- `src/pages/BusinessInsurance.tsx` -- quote CTAs, product card links
- `src/pages/PersonalInsurance.tsx` -- quote CTAs
- `src/pages/EmployeeBenefits.tsx` -- quote CTAs
- `src/pages/Services.tsx` -- "Get a Free Quote" link in bottom section
- `src/components/Footer.tsx` -- any quote/contact links
- `src/components/TestimonialCard.tsx` -- if it links to quote
- `src/components/CarrierLogoGrid.tsx` -- if it links to quote

### `src/data/products.ts`
- Keep this file (still used by PersonalInsurance, BusinessInsurance, EmployeeBenefits pages for card grids)
- Remove any `slug` references that pointed to now-deleted product detail pages, so product cards link to `/services` or just show info without linking to detail pages

## Hero images to DELETE (no longer referenced)
These images were only used by the deleted product detail pages:
- `src/assets/hero-auto-insurance.jpg`
- `src/assets/hero-home-insurance.jpg`
- `src/assets/hero-life-insurance.jpg`
- `src/assets/hero-umbrella-insurance.jpg`
- `src/assets/hero-flood-insurance.jpg`
- `src/assets/hero-high-net-worth.jpg`
- `src/assets/hero-general-liability.jpg`
- `src/assets/hero-workers-comp.jpg`
- `src/assets/hero-cyber-liability.jpg`
- `src/assets/hero-professional-liability.jpg`
- `src/assets/hero-commercial-property.jpg`
- `src/assets/hero-commercial-auto.jpg`

## Summary
- **Delete**: 14 page files + 17 component files + 12 hero images = 43 files
- **Update**: ~10 files to fix broken links
- **Keep intact**: Home, About, PersonalInsurance, BusinessInsurance, EmployeeBenefits, Services, NotFound, all admin pages, all shared UI components, data file

