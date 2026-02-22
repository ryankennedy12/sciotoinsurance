

## About Page Redesign: "The People Behind Your Policy"

Give the About page its own distinct identity -- warmer, more personal, and story-driven compared to the homepage's clean sales-focused layout. The goal: make visitors feel like they already know Jeff and Natalie before they ever pick up the phone.

---

### The Big Idea

Instead of mirroring the homepage layout, the About page gets a **narrative-first design**. Each section tells a chapter of the story, flowing like a conversation rather than a sales pitch. The page should feel like sitting across the table from Jeff and Natalie.

---

### Section 1: Hero -- Bold Statement, No Split Layout

**What changes:** Drop the homepage-style split layout. Instead, use a full-width, immersive hero with a large-scale background photo (ohio-neighborhood.jpg) and a centered text overlay. This immediately signals "different page, different feel."

- Full-viewport background image with a warm burgundy gradient overlay (darker at bottom for text contrast)
- Centered layout with all text stacked
- Oversized display headline: "29 Years of Knowing What Matters"
- Subline: "Jeff built a career at Nationwide. Then he built something better."
- A single subtle gold divider line below the subline
- No CTAs in the hero -- let the story breathe. The CTAs come later when trust is earned.

---

### Section 2: The Origin Story -- Editorial Long-Form

**What changes:** Replace the current side-by-side text+image grid with a narrower, single-column editorial layout (max-width ~720px, centered). This reads like a magazine article, not a corporate blurb.

- Narrow centered column with generous line-height and paragraph spacing
- A large pull-quote styled in Cormorant Garamond italic, set in burgundy, breaking up the text: *"I spent 29 years learning what works. Then I went and did it myself."*
- The story is told in a more emotional, conversational arc -- not just facts but the *why* behind the agency
- After the text, a thin gold divider, then a horizontal row of 3 stats (29 Years / 30+ Carriers / 2 People) styled minimally

---

### Section 3: Meet Jeff and Natalie -- Full-Width Feature Profiles

**What changes:** This is the signature section. Instead of small cards side-by-side, each team member gets a **full-width horizontal feature block** (like a magazine profile spread). This is where the page really stands apart.

**Jeff's Block:**
- Full-width section with `bg-cream` background
- Desktop: Two columns -- left side has the photo placeholder (larger, ~280px wide), right side has his story
- Title, role, and a gold "Specialty" tag
- A personal quote in italic Cormorant Garamond: *"I started this agency because I was tired of watching good people get bad advice."*
- His bio text in body font
- A row of "credential chips" -- small pill badges showing key qualifications (e.g., "29 Years at Nationwide", "CPCU", "Licensed in OH")
- Contact info (phone + email) with icons

**Natalie's Block:**
- Same layout but reversed (photo on right, text on left) on desktop for visual variety
- White background (alternating with Jeff's cream)
- Her quote, bio, credential chips, contact info

This alternating pattern creates rhythm and gives each person the spotlight they deserve.

---

### Section 4: Timeline -- The Journey

**What changes:** Add a brand-new vertical timeline section that visually tells the agency's story through key milestones. This adds depth and makes the "new agency, deep experience" story concrete.

- Section background: `bg-secondary` with the radial glow
- Centered vertical line (gold-500, 2px wide) with milestone nodes
- Each node: a small gold circle on the line, with a card extending left or right (alternating on desktop, stacked on mobile)
- 4-5 milestones:
  - **1994** -- "Jeff begins his career at Nationwide"
  - **2010** -- "Promoted to senior agent, managing complex commercial accounts"
  - **2020** -- "After 26 years, Jeff sees how the industry is failing families"
  - **2023** -- "Scioto Insurance Group is born. Natalie joins as Account Manager."
  - **Today** -- "A two-person team serving Ohio families and businesses nationwide"
- Each milestone card has a year badge, a headline, and 1-2 sentences

---

### Section 5: Values -- Keep but Elevate

**What changes:** The current value cards are solid. Keep the content but switch from the identical homepage pattern to something that feels more personal:

- Change to a 2-column layout on desktop (instead of 3), with larger cards that have more breathing room
- Add a subtle left-side gold accent bar (instead of top border) for a different visual signature
- Keep the same Lucide icons and copy
- White background section to create contrast with the timeline above and CTA below

---

### Section 6: CTA -- Warm and Personal

**What changes:** Keep the burgundy gradient but make the messaging warmer and more personal:

- Headline: "Want to Know If We're the Right Fit?"
- Subline: "We're happy to just talk. No sales pitch. If we're not the right agency for you, we'll say so."
- Keep dual CTAs
- Add a small trust line: "Est. 2023 in New Albany, Ohio"

---

### Technical Summary

**File: `src/pages/About.tsx`** -- Full rewrite of the page component

1. **Hero:** Full-width immersive background image with centered text overlay, burgundy gradient, no split layout. No CTAs.
2. **Origin Story:** Narrow single-column editorial layout (~720px centered), pull-quote in italic display font, horizontal stats row at bottom.
3. **Team Profiles:** Two full-width horizontal feature blocks (one per person), alternating layout (photo left/right), personal quotes, credential pills, larger photo placeholders.
4. **Timeline:** New vertical timeline component built inline -- gold center line, alternating milestone cards, responsive (stacked on mobile).
5. **Values:** 2-column layout with left gold accent bars instead of top borders, same content.
6. **CTA:** Same burgundy gradient, warmer copy, trust line.

No new component files needed. Everything is built within `About.tsx` using existing utility classes, Lucide icons, and the `AnimatedSection` component. The `TeamPhotoPlaceholder` component is reused but with a larger size prop passed via className.

