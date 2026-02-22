

## About Page Redesign - Section by Section

The current About page feels disconnected from the homepage's polished split-layout design. Here is a full section-by-section redesign to bring it up to the same level.

---

### Section 1: Hero - Match the Homepage Pattern

**Problem:** The current hero uses a heavy burgundy gradient with SVG patterns and floating shapes. It feels like a different site from the homepage's clean split-layout hero.

**New Design:** Mirror the homepage hero approach exactly.

- **Desktop:** Split layout with cream background. Text on the left, photography on the right with rounded corners and gold border accent (same as homepage).
- **Mobile/Tablet:** Full-bleed background image (ohio-neighborhood.jpg) with burgundy gradient overlay and white text with text-shadows for legibility.
- Headline: "A Father-Daughter Team That Picks Up the Phone" (keep the great copy).
- Subheadline with the "Est. 2023" badge inline, not in a separate pill.
- Remove all decorative SVG patterns, blur shapes, floating cards, and bottom fade gradients.
- Add the same dual-CTA pattern: "Get a Quote" primary button + "Call Us" secondary button.

---

### Section 2: Our Story - Cleaner Split Layout

**Problem:** The current two-column layout works but the "What We Bring" card feels heavy and disconnected with its cream background box.

**New Design:**
- Keep the two-column layout but use the office-interior.jpg image on the right instead of the "What We Bring" card.
- Image gets the same rounded corners + gold border treatment as homepage cards.
- Move the "What We Bring" stats (29 years, 30+ carriers, 2 people) into a horizontal stats bar below the story text -- similar to the homepage's trust row pattern. Clean, minimal, no boxes.
- White background, consistent spacing.

---

### Section 3: Values - Card Style Matching Homepage

**Problem:** The value cards use custom SVG icons in plain white boxes. They lack the visual weight and polish of the homepage's value prop cards.

**New Design:**
- Use the same card pattern as homepage "Why Ohio Families Work With Us" section: white cards with `border-t-[3px] border-t-primary/60`, gradient icon badges, hover lift effect.
- Replace custom SVGs with Lucide icons (ShieldCheck, Users, MessageSquare) in the same `bg-gradient-to-br from-burgundy-100 to-primary/10` icon badges.
- Background: `bg-secondary` (burgundy-100) with the same subtle radial glow as the homepage section.
- Keep the same copy -- it's good.

---

### Section 4: Team - More Professional Cards

**Problem:** The team cards feel basic with the placeholder photos. The cream background cards lack depth.

**New Design:**
- White cards with the `border-t-[3px] border-t-primary/60` accent (matching the pattern).
- Show the specialty field that exists in the data but isn't currently displayed.
- Add a subtle hover shadow lift effect.
- Keep photo placeholders but refine them slightly (larger, cleaner).
- Add a small gold accent divider between bio and contact info.
- Background: white for the section, cream cards become white cards on cream bg for contrast.

---

### Section 5: CTA - Stronger Final Push

**Problem:** The current CTA section is plain cream with minimal visual weight.

**New Design:**
- Use a burgundy gradient background (like the homepage's pre-footer CTA areas on other pages) with white text.
- Larger headline, more impactful.
- Dual CTAs: white "Schedule a Call" button + outlined "Call Us" button.
- Add the "29 Years Serving Ohio" trust line beneath.

---

### Technical Summary

**File: `src/pages/About.tsx`**

1. **Hero:** Replace the multi-layer gradient hero with a split-layout matching the homepage (cream bg, image right on desktop, image-bg on mobile with burgundy overlay). Remove all SVG patterns and blur shapes.
2. **Story:** Replace the "What We Bring" cream card with the office-interior.jpg image. Add a horizontal stats row below the story paragraphs.
3. **Values:** Swap to homepage-style cards with border-top accent, gradient icon badges using Lucide icons, and `bg-secondary` background with radial glow.
4. **Team:** Restyle cards with border-top accent, display specialty field, add gold divider, use `bg-secondary` section background.
5. **CTA:** Burgundy gradient background with white text and dual CTAs.

All changes are in a single file (`src/pages/About.tsx`). No new components needed -- reuses existing patterns from the homepage.

