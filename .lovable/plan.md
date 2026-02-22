

## Replace Gold Accent with Dusty Rose (#C4A0A0)

Swap the gold accent color (`#C9A962`) with Dusty Rose (`#C4A0A0`) across the entire codebase. Since it's defined as a CSS custom property and Tailwind token, the change is mostly centralized with a few hardcoded rgba values to update.

---

### Step 1: Update the CSS Variable (source of truth)

**File: `src/index.css`**

Change `--gold-500` from `42 47% 59%` (gold) to `0 18% 70%` (dusty rose #C4A0A0). This automatically updates every place that uses `bg-accent`, `text-accent`, `bg-gold-500`, `text-gold-500`, etc.

Also update the comment from "gold" to "dusty rose."

---

### Step 2: Rename the Tailwind Token

**File: `tailwind.config.ts`**

Rename the `gold` color key to `rose` (or keep `gold` as-is for minimal churn -- renaming is optional since the variable still resolves correctly). Update the comment.

For minimal disruption, the simplest approach is to keep the Tailwind key named `gold` but update the underlying CSS variable so it outputs dusty rose. No class name changes needed anywhere.

---

### Step 3: Fix Hardcoded RGBA Values

Two places use hardcoded `rgba(201,169,98,...)` (the old gold color) instead of the CSS variable:

**File: `src/pages/About.tsx`** (timeline node glow)
- `shadow-[0_0_10px_3px_rgba(201,169,98,0.45)]` changes to `shadow-[0_0_10px_3px_rgba(196,160,160,0.45)]`

**File: `src/components/HeroVisual.tsx`** (accent circle gradient)
- Any hardcoded gold rgba references change to the dusty rose equivalent `rgba(196,160,160,...)`

---

### Step 4: Update Comments Throughout

Rename "Gold" / "gold" references in comments to "Dusty Rose" / "rose" for clarity:

- `src/index.css` -- variable comment
- `tailwind.config.ts` -- color comment
- `src/pages/About.tsx` -- "Gold divider" comments
- `src/pages/Home.tsx` -- "Gold accent bar" comment
- `src/components/HeroVisual.tsx` -- "Gold accent circle" / "Small gold dot accents" comments

---

### Files Affected

| File | What Changes |
|---|---|
| `src/index.css` | CSS variable value + comment |
| `tailwind.config.ts` | Comment update |
| `src/pages/About.tsx` | 1 hardcoded rgba + comments |
| `src/components/HeroVisual.tsx` | Hardcoded rgba + comments |
| `src/pages/Home.tsx` | Comments only |
| All other files using `text-gold-500`, `bg-gold-500`, etc. | No changes needed (resolved via CSS variable) |

This is a low-risk, high-impact change since 95% of gold references go through the CSS custom property. Only 2 hardcoded rgba values need manual updating.

