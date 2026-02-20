
# Fix Hero Photo & Image Pop-In Loading

## Problems Identified

### 1. Hero Image — Too Many People, No Clear Hierarchy
The current hero image (`hero-family.jpg`) shows four people standing together at roughly the same visual weight — two adults and two children — with no clear focal point or emotional center. This creates visual noise rather than warmth. A better image should have 2-3 people maximum, with a clear subject (e.g., a couple in front of their home, or a parent and child) that instantly communicates "family protection."

**Solution:** Generate a new AI hero image — a couple (husband and wife, mid-40s) standing in front of a classic Ohio suburban home with warm golden-hour lighting. Clean, confident, emotionally clear. The home is visible and prominent in the background.

### 2. Image Pop-In — CSS Background Images Don't Preload
Every image-backed section on the homepage (the 3 service panels: Personal Insurance, Business Insurance, Employee Benefits) uses inline CSS `background-image` styles. The browser's HTML preload scanner cannot detect CSS `background-image` URLs — it can only detect `<img src>` tags and `<link rel="preload">` hints. This means those images only begin downloading after:
1. JavaScript runs
2. React renders the DOM
3. The browser paints the elements and parses their inline styles

By that point, the user is already looking at a blank/gray panel, and then the image "pops in."

**Solution:** Convert critical background images to use a hidden `<img>` tag technique: keep the visual CSS background-image approach (for `object-fit` and overlay compatibility), but add an `<img>` element with `fetchpriority` and `loading` attributes that forces early discovery by the preload scanner. Also add `<link rel="preload">` hints in `index.html` for the 3 most critical section images.

---

## Technical Implementation

### Phase 1: New Hero Image Generation
Generate a new hero image using AI with the following prompt:
- A couple in their mid-40s, husband and wife, standing confidently in front of a beautiful traditional Ohio suburban home
- Warm golden hour light, late afternoon
- Home is clearly visible — brick exterior, well-maintained lawn, mature trees
- The couple is smiling, looking at the camera, standing close together
- Photo style: professional real estate / lifestyle photography
- Horizontal landscape orientation, suitable for a full-screen website hero
- The right half of the image should be slightly less busy (for text overlay on the left)

### Phase 2: Fix Image Pop-In with Preload Hints
**In `index.html`:** Add `<link rel="preload" as="image">` for the 3 service panel images that appear just below the fold:
```html
<link rel="preload" as="image" href="/src/assets/family-home-service.jpg">
<link rel="preload" as="image" href="/src/assets/business-office.jpg">
<link rel="preload" as="image" href="/src/assets/team-meeting.jpg">
```

**In `Home.tsx`:** Add hidden `<img>` tags inside each service panel div. These are invisible to the user (aria-hidden, positioned absolutely, opacity-0) but fully visible to the preload scanner, so downloads start before React has even mounted:

```tsx
{/* Hidden img for browser preload scanner discovery */}
<img 
  src={familyHomeService} 
  alt="" 
  aria-hidden="true"
  fetchPriority="high"
  className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
/>
{/* Keep existing CSS background-image for visual rendering */}
<div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${familyHomeService})` }} />
```

This dual-layer approach ensures:
- Images start downloading as early as possible (preload scanner)
- Visual rendering stays exactly the same (CSS background-image + overlays)
- No layout shift or visible change to the design

### Phase 3: TypeScript fetchpriority Type Fix
Add an `HTMLAttributes` extension for `fetchPriority` to prevent TypeScript errors since it's a newer attribute.

---

## Files to Modify

1. **`index.html`** — Add 3 preload hints for the service panel images
2. **`src/pages/Home.tsx`** — Add hidden `<img>` tags inside each of the 3 service panels (both desktop and mobile versions)
3. **`src/assets/hero-family.jpg`** — Replace with AI-generated image of couple at home (cleaner, 2-person hierarchy)

## Expected Outcome
- Hero shows a clean, clear couple-at-home image with immediate emotional resonance
- All 3 service panel images load before or simultaneously with the page render, eliminating the "pop-in" effect
- The site feels polished and fast from the first paint

