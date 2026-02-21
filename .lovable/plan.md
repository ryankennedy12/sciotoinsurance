

# Delete Extra Pages and Simplify Navigation

## Overview

Remove all individual product detail pages and supporting components while keeping the 7 core pages (Home, About, Personal Insurance, Business Insurance, Employee Benefits, Services, Contact) plus the Get a Quote page and flow. Replace the mega menu with a simple flat navigation.

## Files to Delete

### Individual Product Pages (12 files)
- `src/pages/personal-insurance/AutoInsurance.tsx`
- `src/pages/personal-insurance/HomeInsurance.tsx`
- `src/pages/personal-insurance/LifeInsurance.tsx`
- `src/pages/personal-insurance/UmbrellaInsurance.tsx`
- `src/pages/personal-insurance/FloodInsurance.tsx`
- `src/pages/personal-insurance/HighNetWorthInsurance.tsx`
- `src/pages/business-insurance/GeneralLiability.tsx`
- `src/pages/business-insurance/WorkersComp.tsx`
- `src/pages/business-insurance/CyberLiability.tsx`
- `src/pages/business-insurance/ProfessionalLiability.tsx`
- `src/pages/business-insurance/CommercialProperty.tsx`
- `src/pages/business-insurance/CommercialAuto.tsx`

### Supporting Components (no longer needed without product pages)
- `src/components/ProductDetailTemplate.tsx`
- `src/components/ProductFAQ.tsx`
- `src/data/products.ts`
- `src/components/NavLink.tsx`
- All files in `src/components/calculators/` directory (AutoCoverageSlider, CalculatorWrapper, CyberRiskScorecard, FleetCalculator, FloodRiskChecker, HighNetWorthChecklist, IndustryRiskAssessment, LiabilityLimitTool, LifeCoverageCalculator, PropertyGapChecklist, RebuildCostEstimator, UmbrellaGapCalculator, WorkersCompEstimator, index.ts)

## File Changes

### 1. `src/App.tsx`
- Remove all 12 product page imports
- Remove all `/personal-insurance/*` sub-routes (auto, home, life, umbrella, flood, high-net-worth)
- Remove all `/business-insurance/*` sub-routes (general-liability, workers-comp, cyber-liability, professional-liability, commercial-property, commercial-auto)
- Change the wildcard redirects (`/personal-insurance/*` and `/business-insurance/*`) to redirect to `/get-quote` (they already do this -- just keep them)
- **Keep** the `/get-quote` route and `GetQuote` import
- **Keep** the `/contact` route

### 2. `src/components/Header.tsx` (rewrite)
- Remove all mega menu data arrays (personalInsuranceCategories, businessInsuranceCategories, personalInsuranceItems, businessInsuranceItems)
- Remove the `MegaMenu` component entirely
- Remove dropdown state (`activeDropdown`, `handleDropdownEnter`, `handleDropdownLeave`, `mobileDropdown`, `toggleMobileDropdown`)
- Remove the `hasDropdown` prop from `NavLink`

**Desktop nav** becomes a flat list of links:
- About
- Personal Insurance
- Business Insurance
- Employee Benefits
- Services
- Contact

**Desktop right side**: Keep the "Get a Quote" button linking to `/get-quote`

**Mobile menu**: Same flat list of links (no accordions), keep the "Get a Quote" CTA and phone number at the bottom

## What's NOT Changing
- `src/pages/GetQuote.tsx` -- stays as-is, fully functional
- `src/pages/Contact.tsx` -- stays as-is
- All 7 core page components (Home, About, PersonalInsurance, BusinessInsurance, EmployeeBenefits, Services, Contact)
- Admin pages and routes
- Footer, Layout, and all other shared components
- All image assets (remain in case they're used by the core pages)

## Technical Details

### Links on core pages that point to deleted product sub-pages
Some core pages (e.g., BusinessInsurance.tsx, PersonalInsurance.tsx) have links like `/business-insurance/general-liability` or `/personal-insurance/auto`. With the wildcard redirects in App.tsx (`/personal-insurance/*` and `/business-insurance/*` both redirect to `/get-quote`), these links will automatically redirect users to the Get a Quote page -- which is the desired behavior for lead capture.

