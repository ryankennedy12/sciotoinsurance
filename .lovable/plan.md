

## Plan: Remove All Fake Reviews/Testimonials

### Scope

Three pages contain fake reviews that need to be removed:

1. **Home.tsx** (lines 376-463) — Entire "What Our Clients Say" section with a featured testimonial (Jennifer Morrison) and 3 testimonial cards (David Reynolds, Marcus Chen, Michelle Torres). Remove the full section and the `TestimonialCard` import.

2. **PersonalInsurance.tsx** (lines 144-173) — "Section 4: Featured Testimonial" with a fake quote from "Marcus W., Westerville, OH". Remove the entire section.

3. **BusinessInsurance.tsx** — The `testimonials` array (lines 134-138) and "Section 3: Featured Testimonial" section (~lines 293-325) that renders it. Remove the data and section.

### Components to keep (but unused for now)

- `src/components/TestimonialCard.tsx` — Keep the component file for when real reviews are added later.
- `src/components/TestimonialCallout.tsx` — Keep for future use.

### Summary of changes

| File | Action |
|------|--------|
| `src/pages/Home.tsx` | Delete testimonials section (lines 376-463), remove `TestimonialCard` and `Star` imports |
| `src/pages/PersonalInsurance.tsx` | Delete featured testimonial section (lines 144-173), remove `Star` import |
| `src/pages/BusinessInsurance.tsx` | Delete `testimonials` array and testimonial section, remove unused `Star` import |

