

## Redesign: Risk Assessment Section — Make It Stand Out

### The Problem
Right now, Section 4 (Risk Assessment) and Section 7 (Bottom CTA) are nearly identical: same burgundy background, same radial glow, same layout pattern. The Risk Assessment is a unique, high-value offer (a free analysis even if you don't buy) but it looks like just another "contact us" banner.

### The New Concept: "Blueprint Assessment" Card

Instead of a full-width burgundy banner, this section becomes a **single, oversized card** floating on a cream background — giving it a completely different visual DNA from every other section on the page.

**Layout:**
- Section background: `bg-cream` (not burgundy — immediately different)
- One large card with a split design: left side has a dark charcoal background with content, right side has an inline form (not a link to /contact)
- The card has a thick left border in Dusty Rose (#C4A0A0) and a subtle shadow to feel "lifted"

**Left Side (Dark Charcoal — #1A1A1A):**
- Eyebrow: "FREE FOR OHIO BUSINESSES" in Dusty Rose, letter-spaced
- Headline: "Find Out What You're Missing" in white, large display font
- Subtext: "We'll review your current coverage, identify gaps, and give you an honest recommendation — no strings attached."
- Checklist items with Dusty Rose checkmarks (same 4 items), but laid out vertically for better readability
- A small trust line at the bottom: "300+ businesses assessed since 1995"

**Right Side (White card panel):**
- A simple **inline form** with 4 fields: Business Name, Your Name, Email, Phone
- Submit button: "Request Free Assessment" in burgundy
- Below: "Or call us: (614) 612-0050"
- This keeps users on-page instead of sending them to /contact

**Why this works:**
1. Cream background breaks the burgundy-burgundy-burgundy pattern
2. Charcoal left panel is unique to this section — no other section uses charcoal as a primary bg
3. Inline form reduces friction (no page navigation needed)
4. The "card on cream" treatment feels premium and distinct from the full-bleed bottom CTA

### Technical Changes

**File: `src/pages/BusinessInsurance.tsx`** (lines 268-306)

Replace the entire Section 4 with:
- Change section bg from `bg-primary` to `bg-cream`
- Remove the radial glow overlay
- Build a single card container with `grid lg:grid-cols-5` (3 cols left, 2 cols right)
- Left panel: charcoal bg (`bg-[#1A1A1A]`), rounded-l-2xl, with the headline, description, and checklist
- Right panel: white bg, rounded-r-2xl, with a simple contact form (4 inputs + submit)
- Form submission: POST to the existing `contact_submissions` or `leads` table via the Supabase client, with a success toast
- Thick left border accent: `border-l-4 border-l-accent` on the outer card
- On mobile: stack vertically (left panel on top, form below)

**No new files needed.** The form logic will use the existing Supabase client and toast notifications already in the project.

### Mobile Behavior
- Card stacks vertically: charcoal content panel on top, white form panel below
- Full-width, no side margins (edge-to-edge card feel)
- Form fields stack single-column

