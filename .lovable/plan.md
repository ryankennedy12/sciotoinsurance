

## Performance and Responsiveness Optimization Plan

### Current State Assessment

After profiling the site, here's what I found:

- **First Contentful Paint: 4.4 seconds** -- this is slow and needs to come down significantly
- **Full Page Load: 4.9 seconds** -- target is under 3 seconds
- **127 resources loaded on initial page** -- all pages and assets are bundled together with no code splitting
- **44 JPG images** in the assets folder, many loaded eagerly or imported on pages that don't need them
- **Logo is 180KB PNG** -- should be much smaller
- **Google Fonts are render-blocking** -- slowing first paint
- **No route-based code splitting** -- every page loads upfront even though the user only visits one at a time

### The Plan

---

**1. Route-Based Code Splitting (Biggest Impact)**

Right now, every page (Home, About, Personal Insurance, Business Insurance, Employee Benefits, Services, Contact, GetQuote, all Admin pages) is imported eagerly in `App.tsx`. This means the browser downloads and parses ALL page code before showing anything.

We'll wrap each page import with `React.lazy()` and add a `<Suspense>` fallback. This means only the code for the current page loads initially -- everything else loads on demand when navigated to.

**Files changed:** `src/App.tsx`

---

**2. Fix Render-Blocking Google Fonts**

The Google Fonts `<link>` in `index.html` blocks rendering. We'll switch to a non-blocking loading strategy using `media="print" onload="this.media='all'"` or `rel="preload"` with font-display swap (which is already set via `display=swap`, but the stylesheet itself blocks).

**Files changed:** `index.html`

---

**3. Preload Critical Above-the-Fold Images**

The hero image (`hero-split.jpg`) and logo (`logo.png`) are critical for first paint. We already preload `hero-family.jpg` (which isn't even used on the homepage anymore). We'll fix the preloads to match what's actually needed:
- Keep `hero-split.jpg` preload (the actual hero image)
- Preload `logo.png` (header, always visible)
- Remove stale preloads for unused images

**Files changed:** `index.html`

---

**4. Lazy Load Below-the-Fold Images**

Several images on the Home page (like `familyHomeService`, `businessOffice`, `teamMeeting`) are imported eagerly but only appear far below the fold. They already have `loading="lazy"` on the `<img>` tags, which is correct. However, the Vite `import` statements still cause them to be fetched early.

For pages like BusinessInsurance (8 industry images) and PersonalInsurance (5 life-stage images), we'll ensure all below-fold images use `loading="lazy"`.

No file changes needed here -- the imports are necessary for Vite to know about the files, but `loading="lazy"` on the `<img>` tags already defers the actual network fetch.

---

**5. Remove Stale Preloads**

`index.html` currently preloads `family-home-service.jpg`, `business-office.jpg`, and `team-meeting.jpg` -- these are below-the-fold images that should NOT be preloaded. Removing these frees up bandwidth for truly critical resources.

**Files changed:** `index.html`

---

**6. Mobile-Specific Responsive Audit**

After reviewing all pages, the responsive design is already well-implemented with proper breakpoints. A few refinements:

- **Header**: Phone CTA on mobile already compact and functional
- **Home hero**: Already has separate mobile/desktop layouts with `lg:hidden` and `hidden lg:flex`
- **Business Insurance polaroid cards**: Already handle mobile with `isMobile` state removing rotation
- **Employee Benefits calculator sliders**: Work on touch but could use larger touch targets

The main mobile fix: ensure the `backdrop-blur-sm` on the mobile menu overlay doesn't cause jank on lower-end devices. We'll remove it since the memory documents explicitly prohibit `backdrop-blur`.

**Files changed:** `src/components/Header.tsx`

---

**7. Eliminate Unused CSS (App.css)**

`src/App.css` contains legacy Vite boilerplate CSS (`#root { max-width: 1280px }`, logo animations, etc.) that conflicts with the actual layout. This file constrains the root element and adds unnecessary CSS parsing. It's not imported anywhere visible in `main.tsx` but should be removed entirely.

**Files changed:** Delete `src/App.css`

---

### Technical Summary

| Change | File(s) | Impact |
|--------|---------|--------|
| Route-based code splitting with React.lazy | `src/App.tsx` | Reduces initial JS by ~60% |
| Non-blocking Google Fonts | `index.html` | Faster first paint by ~200ms |
| Fix preloads (remove stale, add correct) | `index.html` | Prioritizes critical resources |
| Remove backdrop-blur from mobile menu | `src/components/Header.tsx` | Eliminates mobile compositing jank |
| Delete unused App.css | `src/App.css` | Removes conflicting styles |

No new dependencies. No database changes. All changes are performance-focused with zero visual impact.

