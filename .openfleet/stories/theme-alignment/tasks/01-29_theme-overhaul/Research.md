# Research: Theme Alignment - Dark Premium Aesthetic

## Executive Summary

The KPA Trainers site currently uses a **navy blue + red accent + cream** color scheme with white card backgrounds. The target design calls for a **dark charcoal (#1a1a1a-#2d2d2d)** premium aesthetic with concentric circle textures, white monochrome logo, and pill-shaped white CTA buttons.

---

## 1. Current State Analysis

### Color Palette (from `globals.css`)

| Token | Current Value | Usage |
|-------|---------------|-------|
| `navy-700` | `#1E3A7B` | Hero backgrounds, headers |
| `navy-800` | `#1a3269` | Gradient midpoints |
| `navy-900` | `#162a55` | Deepest background |
| `accent-500` | `#e54860` | Highlights, "Master Trainers" text |
| `accent-600` | `#C41E3A` | Decorative lines, borders |
| `cream` | `#FEF9F5` | Section backgrounds (StatsBar, Certifications, Footer) |
| `white` | `#FFFFFF` | Card backgrounds, body background |

### Typography
- **Display font**: Playfair Display (serif) - used for headings
- **Body font**: DM Sans (sans-serif) - used for body text
- Both fonts are loaded via Google Fonts in `globals.css` and `layout.tsx`

### Background Patterns
- Uses `radial-gradient` overlays with `ellipse_at_top_right` and `ellipse_at_bottom_left`
- No concentric circle texture pattern currently

### Current Logo
- Located at `/public/KPA-Logo.jpeg` (JPEG format)
- Used in Header and Footer components
- Currently displayed with original colors (not monochrome white)

---

## 2. Gap Analysis

| Aspect | Current | Target | Gap |
|--------|---------|--------|-----|
| **Primary Background** | Navy blue gradients (#1E3A7B) | Dark charcoal (#1a1a1a - #2d2d2d) | Color palette change |
| **Card Backgrounds** | White (#FFFFFF) | Dark gray or semi-transparent | Invert approach |
| **Section Backgrounds** | Cream (#FEF9F5) | Dark charcoal variants | Remove cream, use dark |
| **Text on Dark** | White/navy-200 | White | Mostly compatible |
| **Text on Light** | Gray-900, gray-700 | White (on dark bg) | Full inversion |
| **Accent Color** | Red (#C41E3A, #e54860) | White/subtle gray | Remove red accents |
| **Logo** | Color JPEG | White monochrome SVG/PNG | Need new asset |
| **Background Texture** | Radial gradients only | Concentric circle pattern | Need CSS/SVG pattern |
| **CTA Buttons** | Various styles | White pill-shaped | Standardize buttons |

---

## 3. Component Inventory & Required Changes

### Layout Components

#### `Header.tsx`
**Current**: Navy gradient when scrolled (`from-navy-700 to-navy-800`)
**Changes**:
- Background: `bg-charcoal-900` when scrolled (or semi-transparent dark)
- Remove navy color references
- Update logo to white monochrome version

#### `Footer.tsx`
**Current**: `bg-cream`, `border-gray-100`, `text-gray-500/400`
**Changes**:
- Background: `bg-charcoal-900` or `bg-charcoal-950`
- Border: `border-charcoal-700` or remove
- Text: `text-white/60`, `text-white/40`
- Update logo to white monochrome version

### Landing Page Components

#### `Hero.tsx`
**Current**: `bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900`
**Changes**:
- Background: `bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950`
- Remove `text-accent-500` on "Master Trainers" - use `text-white` instead
- Remove accent-600 decorative lines or change to white/gray
- Bottom gradient: `from-charcoal-900` instead of `from-white`
- Add concentric circle texture pattern overlay

#### `TrainerCard.tsx`
**Current**: `bg-white` card, navy gradient photo area, `text-gray-900/600`, accent badge
**Changes**:
- Card: `bg-charcoal-800` or `bg-charcoal-800/50` with subtle border
- Photo area: `bg-gradient-to-br from-charcoal-700 to-charcoal-900`
- Text: `text-white`, `text-white/70`
- Badge: `bg-white text-charcoal-900` or `bg-charcoal-700 text-white`
- Hover shadow: change from `shadow-navy-500/10` to `shadow-black/30`

#### `TrainerGrid.tsx`
**Current**: White background (inherited from body)
**Changes**:
- Add `bg-charcoal-900` explicitly
- No other changes needed (it's just a layout wrapper)

### Profile Page Components

#### `TrainerHero.tsx`
**Current**: Navy gradient background, accent highlights, white/navy text
**Changes**:
- Background: `from-charcoal-800 via-charcoal-900 to-charcoal-950`
- Remove accent color from glow effect (`from-accent-500/30` -> `from-white/10`)
- Avatar ring: `border-white/20` -> keep or make `border-white/30`
- Social icons: `bg-white/10`, `text-white` -> keep (already monochrome)

#### `StatsBar.tsx`
**Current**: `bg-cream` section, `bg-white` cards, `text-accent-600` numbers
**Changes**:
- Section: `bg-charcoal-800`
- Cards: `bg-charcoal-700` or `bg-white/5` with border
- Numbers: `text-white` instead of `text-accent-600`
- Labels: `text-white/60` instead of `text-gray-600`

#### `VideoPlayer.tsx`
**Current**: Navy gradient container, white text
**Changes**:
- Container: `from-charcoal-800 to-charcoal-900`
- Heading: `text-white` instead of `text-gray-900`
- Already uses white text inside - mostly compatible

#### `Biography.tsx`
**Current**: White background (inherited), `text-gray-900/700`
**Changes**:
- Add dark background or rely on parent
- Heading: `text-white`
- Paragraph: `text-white/80`

#### `ClassOfferings.tsx`
**Current**: White background, `text-gray-900`, accent checkmarks
**Changes**:
- Heading: `text-white`
- Text: `text-white/80`
- Checkmark: `bg-white/10`, `text-white` instead of accent

#### `Certifications.tsx`
**Current**: `bg-cream`, navy/accent pill badges
**Changes**:
- Section: `bg-charcoal-800`
- Heading/labels: `text-white`, `text-white/60`
- Certification badges: `bg-white/10 text-white` instead of navy
- Specialization badges: `bg-white/10 text-white` instead of accent

#### `ReviewSection.tsx`
**Current**: `bg-gray-50`, nested ReviewCard
**Changes**:
- Section: `bg-charcoal-800`
- Heading: `text-white`

#### `ReviewCard.tsx`
**Current**: `bg-white`, `border-accent-600`, navy avatar, gray text
**Changes**:
- Card: `bg-charcoal-700` or `bg-white/5`
- Border: `border-white/20` or remove
- Stars: Keep yellow/gold or use white
- Quote text: `text-white/80`
- Avatar: `bg-charcoal-600`
- Author name: `text-white`

#### `ContactCTA.tsx`
**Current**: Green WhatsApp button - **NO CHANGE NEEDED**
This is a functional WhatsApp CTA; the green (#25D366) is on-brand for WhatsApp and should remain.

---

## 4. Color Mapping

### New Color Palette (proposed)

```css
/* Dark Charcoal palette */
--color-charcoal-50: #f7f7f7;
--color-charcoal-100: #e3e3e3;
--color-charcoal-200: #c8c8c8;
--color-charcoal-300: #a4a4a4;
--color-charcoal-400: #818181;
--color-charcoal-500: #666666;
--color-charcoal-600: #515151;
--color-charcoal-700: #434343;
--color-charcoal-800: #383838;  /* Cards, elevated surfaces */
--color-charcoal-900: #2d2d2d;  /* Primary background */
--color-charcoal-950: #1a1a1a;  /* Deepest background */
```

### Direct Replacements

| Old Token | New Token | Notes |
|-----------|-----------|-------|
| `navy-700` | `charcoal-800` | Hero/header backgrounds |
| `navy-800` | `charcoal-900` | Gradient midpoint |
| `navy-900` | `charcoal-950` | Deepest backgrounds |
| `navy-600/30` | `charcoal-700/30` | Gradient overlays |
| `navy-500` | `charcoal-700` | Various uses |
| `navy-200` | `white/60` | Secondary text on dark |
| `navy-100` | `white/80` | Primary text on dark |
| `accent-*` | `white` or remove | All accent colors → white |
| `cream` | `charcoal-800` | Section backgrounds |
| `gray-900` | `white` | Headings (on dark bg) |
| `gray-700` | `white/80` | Body text (on dark bg) |
| `gray-600` | `white/60` | Secondary text |
| `gray-500` | `white/50` | Tertiary text |
| `white` (bg) | `charcoal-900` | Page background |
| `white` (card) | `charcoal-800` | Card backgrounds |

---

## 5. Additional Assets Needed

### 1. White Monochrome Logo
- **Current**: `/public/KPA-Logo.jpeg` (color)
- **Needed**: `/public/KPA-Logo-White.svg` or `.png` (white monochrome)
- Used in: Header.tsx, Footer.tsx

### 2. Concentric Circle Texture
- **Option A**: CSS-only using multiple radial gradients
- **Option B**: SVG pattern as background-image
- **Implementation suggestion**: Create reusable CSS class `.texture-circles`

Example CSS pattern:
```css
.texture-circles {
  background-image: 
    radial-gradient(circle at center, transparent 0%, transparent 20%, rgba(255,255,255,0.02) 20.5%, transparent 21%),
    radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(255,255,255,0.02) 40.5%, transparent 41%),
    radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(255,255,255,0.02) 60.5%, transparent 61%);
}
```

---

## 6. Recommendations - Priority Order

### Phase 1: Foundation (Critical Path)
1. **Update `globals.css`** - Add charcoal color palette, change body background
2. **Update `layout.tsx`** - Ensure dark background on body
3. **Obtain white logo asset** - Critical for header/footer

### Phase 2: Landing Page
4. **Header.tsx** - Update scroll background, swap logo
5. **Hero.tsx** - Full color overhaul, add texture pattern
6. **TrainerCard.tsx** - Dark card styling
7. **TrainerGrid.tsx** - Add explicit dark background
8. **Footer.tsx** - Dark styling, swap logo

### Phase 3: Profile Page
9. **TrainerHero.tsx** - Color updates
10. **StatsBar.tsx** - Dark cards
11. **VideoPlayer.tsx** - Minor color updates
12. **Biography.tsx** - Text color updates
13. **ClassOfferings.tsx** - Icon/text color updates
14. **Certifications.tsx** - Badge restyling
15. **ReviewSection.tsx** + **ReviewCard.tsx** - Dark styling

### Phase 4: Polish
16. Add concentric circle texture pattern
17. Review animations (pulse-glow uses navy rgba - update)
18. Test all hover/focus states
19. Verify accessibility contrast ratios

---

## 7. Files to Modify (Complete List)

| File | Priority | Scope |
|------|----------|-------|
| `kpa-trainers/src/app/globals.css` | P1 | Color palette, body bg, animations |
| `kpa-trainers/src/app/layout.tsx` | P1 | Body class if needed |
| `kpa-trainers/src/components/layout/Header.tsx` | P2 | Background, logo |
| `kpa-trainers/src/components/layout/Footer.tsx` | P2 | Background, text, logo |
| `kpa-trainers/src/components/landing/Hero.tsx` | P2 | Full restyle |
| `kpa-trainers/src/components/landing/TrainerCard.tsx` | P2 | Card styling |
| `kpa-trainers/src/components/landing/TrainerGrid.tsx` | P2 | Background |
| `kpa-trainers/src/components/profile/TrainerHero.tsx` | P3 | Colors |
| `kpa-trainers/src/components/profile/StatsBar.tsx` | P3 | Section + card colors |
| `kpa-trainers/src/components/profile/VideoPlayer.tsx` | P3 | Colors |
| `kpa-trainers/src/components/profile/Biography.tsx` | P3 | Text colors |
| `kpa-trainers/src/components/profile/ClassOfferings.tsx` | P3 | Icon + text colors |
| `kpa-trainers/src/components/profile/Certifications.tsx` | P3 | Section + badge colors |
| `kpa-trainers/src/components/profile/ReviewSection.tsx` | P3 | Section color |
| `kpa-trainers/src/components/profile/ReviewCard.tsx` | P3 | Card styling |

**ContactCTA.tsx** - NO CHANGES (WhatsApp brand color stays)

---

## 8. Risk Assessment

### Low Risk
- Color palette swaps in `globals.css`
- Text color changes (well-isolated)

### Medium Risk
- Logo asset swap (need to obtain/create white version)
- Card styling changes (visual regression possible)
- Gradient overlays (may need fine-tuning)

### Potential Gotchas
1. **Tailwind v4 CSS variables** - The codebase uses `@theme inline` which is Tailwind v4 syntax. New colors must follow this pattern.
2. **Animation colors** - `pulse-glow` keyframes hardcode navy rgba values - must update.
3. **Gradient utilities** - Many components use arbitrary gradient values like `from-navy-600/30` - need careful replacement.
4. **Contrast accessibility** - White text on charcoal-800 cards needs 4.5:1 minimum ratio (charcoal-800 #383838 with white passes).

---

## 9. Testing Checklist

After implementation, verify:
- [ ] Landing page hero renders with dark background
- [ ] Trainer cards have dark styling with readable text
- [ ] Profile pages have consistent dark theme
- [ ] Header background transition works on scroll
- [ ] Footer matches dark theme
- [ ] Logo appears white/monochrome on dark backgrounds
- [ ] All text has sufficient contrast
- [ ] Hover/focus states are visible
- [ ] Mobile responsiveness unchanged
- [ ] WhatsApp CTA button unchanged (green)

---

*Research completed: 2026-01-29*
*Author: Athena (Scout Agent)*
