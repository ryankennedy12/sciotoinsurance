

## Phone Button: Premium Pill-Shaped Redesign

Replace the circular phone icon button in the mobile header with a sleek pill-shaped button displaying the phone icon alongside the number.

### Design

The new button will look like:

`[ phone-icon  (614) 612-0050 ]`

- Pill shape with rounded-full corners
- Burgundy border (border-primary) with burgundy text
- Phone icon (w-3.5 h-3.5) + number in a compact font (text-xs, font-semibold)
- On hover/tap: fills burgundy with white text
- Keeps the click-to-call (tel:) functionality

### Technical Details

**File: `src/components/Header.tsx`**

- Replace the current 11x11 circle `<a>` tag with a pill-shaped `<a>` containing both the Phone icon and the text "(614) 612-0050"
- Classes: `rounded-full px-3 py-1.5 border border-primary text-primary text-xs font-body font-semibold flex items-center gap-1.5`
- Hover: `hover:bg-primary hover:text-primary-foreground transition-colors duration-200`
- Remove the separate hamburger menu's negative margin (`-mr-2`) since the phone button will be wider and spacing will balance naturally

