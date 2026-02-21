

## Mobile Menu: Premium Redesign

Transform the current flat burgundy overlay into a refined, high-end mobile menu experience.

### Current Issues
- Plain burgundy background with no visual depth or texture
- Navigation links lack structure or visual hierarchy
- Close button feels basic (plain circle with X)
- No brand presence (logo missing from menu)
- CTA buttons at bottom feel disconnected
- No trust signals or secondary info

### Design Direction

**Background and Layout:**
- Keep the burgundy-700 base but add a subtle gradient from burgundy-700 at top to burgundy-800 at bottom for depth
- Add a thin gold-500 accent line at the very top of the menu (h-0.5)
- Include the brand logo (white/light version via mix-blend or opacity) at the top left, opposite the close button

**Navigation Links:**
- Add subtle bottom borders (white at 10% opacity) between each link to create visual separation
- Stagger the entrance animation so links animate in one after another (50ms delay each) for a polished reveal
- Add a small gold-500 left border accent (3px) on the active route link
- Slightly reduce font size from text-2xl to text-xl for more refined proportions

**Close Button:**
- Upgrade from plain circle to a more defined button with a thin white border (border-white/30) and slightly larger tap target

**CTA Section at Bottom:**
- Add a thin separator line (white/15) above the CTA area
- Style "Get a Quote" button with gold-500 text on white background for premium contrast
- Add small trust line below CTAs: "29 Years Serving Ohio Families" in white/50 text

### Technical Details

**File: `src/components/Header.tsx`**

1. **Gold accent bar**: Add a `div` with `h-0.5 bg-gold-500` as the first child inside the overlay background
2. **Logo in menu**: Add the brand logo image at the top of the nav, `h-10 opacity-90`, with `brightness-0 invert` filter to make it white
3. **Link separators**: Add `border-b border-white/10` to each link wrapper
4. **Staggered animation**: Apply inline `transitionDelay` of `${index * 50}ms` to each link, with opacity/translateX transition
5. **Active indicator**: Check `location.pathname` against link href, apply `border-l-3 border-gold-500 pl-3` on match
6. **Close button border**: Add `border border-white/30` to the close button
7. **CTA separator**: Add a `div` with `h-px bg-white/15` above the CTA buttons
8. **Trust line**: Add a `p` tag below CTAs with "29 Years Serving Ohio Families" in `text-white/50 text-xs`
9. **Background gradient**: Change the overlay background from `bg-primary` to `bg-gradient-to-b from-burgundy-700 to-burgundy-800`

