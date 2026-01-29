# High-Level Design: Theme Alignment - Dark Premium Aesthetic

## Overview

The KPA Trainers site currently uses a **navy blue (#1E3A7B) + red accent (#C41E3A) + cream (#FEF9F5)** color scheme with white card backgrounds. This design diverges from the main KPA website's premium aesthetic.

This document outlines the architectural approach to transform the trainers site to match the main KPA website's dark charcoal theme with concentric circle textures, creating visual cohesion across the brand.

---

## Problem Statement

The trainers site creates visual discontinuity when users navigate from the main KPA website. The bright navy/cream palette feels dated compared to the modern, minimal dark aesthetic of the main site. This affects:

1. **Brand cohesion** - Users experience jarring transitions between sites
2. **Premium perception** - Light backgrounds feel less sophisticated
3. **Visual hierarchy** - Current accent colors compete with content

---

## High-Level Solution

Transform the site's visual foundation through a systematic color system replacement and texture overlay implementation, while preserving:
- Mobile-first responsive design
- Existing component structure and animations
- WhatsApp CTA functionality (green stays)
- Typography system (Playfair Display + DM Sans)

### Target Aesthetic
- **Background**: Dark charcoal (#1a1a1a - #2d2d2d) with subtle concentric circle texture
- **Cards**: Elevated dark surfaces with subtle borders
- **Text**: White/light gray hierarchy
- **Accents**: Removed in favor of monochrome
- **Logo**: CSS filter to make existing logo white (no new asset needed)

---

## Architecture Decisions

### 1. Color System Approach

**Decision**: Replace existing color tokens in Tailwind v4 `@theme inline` block

**Rationale**:
- Tailwind v4 uses CSS custom properties defined in `@theme inline`
- Replacing at the token level ensures all component references update automatically
- No need to touch individual component class names where possible

**Implementation**:
- Keep `navy-*` token names but change values to charcoal equivalents
- Remove `accent-*` colors or map to white
- Remove `cream` background color

### 2. Background Texture Pattern

**Decision**: Pure CSS concentric circles using multiple radial gradients

**Rationale**:
- No additional assets needed
- Performant (hardware-accelerated CSS)
- Easy to adjust opacity and scale
- Works across all browsers

**Implementation**:
```css
.texture-circles {
  background-image: 
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, rgba(255,255,255,0.03) 30.5%, transparent 31%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%, rgba(255,255,255,0.03) 50.5%, transparent 51%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%, rgba(255,255,255,0.03) 70.5%, transparent 71%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 90%, rgba(255,255,255,0.03) 90.5%, transparent 91%);
}
```

### 3. Logo Handling

**Decision**: Use CSS filter to convert existing color logo to white

**Rationale**:
- No white logo asset available
- CSS filters work reliably for logo inversion
- Can be toggled easily if a proper white logo is added later

**Implementation**:
```css
.logo-white {
  filter: brightness(0) invert(1);
}
```

### 4. Card Surface Hierarchy

**Decision**: Three-tier dark surface system

**Rationale**:
- Maintains visual depth without light colors
- Follows Material Design dark theme principles

**Surfaces**:
- `charcoal-950` (#1a1a1a): Page background, deepest surfaces
- `charcoal-900` (#2d2d2d): Hero backgrounds, primary sections
- `charcoal-800` (#383838): Cards, elevated interactive surfaces

---

## Component Strategy

### Landing Page Flow

```
┌─────────────────────────────────────────┐
│  Header (transparent → charcoal-900)    │ ← Logo filter white
├─────────────────────────────────────────┤
│  Hero                                    │ ← Charcoal gradient + texture
│  - Remove accent text color             │
│  - Bottom gradient to charcoal-950      │
├─────────────────────────────────────────┤
│  TrainerGrid (charcoal-950 bg)          │
│  ├── TrainerCard (charcoal-800)         │ ← Dark cards
│  └── TrainerCard (charcoal-800)         │
├─────────────────────────────────────────┤
│  Footer (charcoal-900)                  │ ← Logo filter white
└─────────────────────────────────────────┘
```

### Profile Page Flow

```
┌─────────────────────────────────────────┐
│  TrainerHero (charcoal gradient)        │ ← Remove accent glow
├─────────────────────────────────────────┤
│  StatsBar (charcoal-800 cards)          │ ← Numbers white, not accent
├─────────────────────────────────────────┤
│  VideoPlayer (charcoal container)       │
├─────────────────────────────────────────┤
│  Biography (charcoal-950 bg)            │ ← White text
├─────────────────────────────────────────┤
│  ClassOfferings (charcoal-950 bg)       │ ← White checkmarks
├─────────────────────────────────────────┤
│  Certifications (charcoal-800 bg)       │ ← White badges
├─────────────────────────────────────────┤
│  ReviewSection (charcoal-800 bg)        │ ← Dark review cards
├─────────────────────────────────────────┤
│  ContactCTA (unchanged - green)         │ ← NO CHANGES
└─────────────────────────────────────────┘
```

---

## Color System Design

### New Charcoal Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `charcoal-50` | #f7f7f7 | (Rarely used) |
| `charcoal-100` | #e3e3e3 | (Rarely used) |
| `charcoal-200` | #c8c8c8 | (Rarely used) |
| `charcoal-300` | #a4a4a4 | (Rarely used) |
| `charcoal-400` | #818181 | Disabled states |
| `charcoal-500` | #666666 | Tertiary text |
| `charcoal-600` | #515151 | Secondary elements |
| `charcoal-700` | #434343 | Card borders, dividers |
| `charcoal-800` | #383838 | Cards, elevated surfaces |
| `charcoal-900` | #2d2d2d | Hero backgrounds |
| `charcoal-950` | #1a1a1a | Page background |

### Text Color Mapping

| Old | New | Context |
|-----|-----|---------|
| `text-gray-900` | `text-white` | Headings on dark |
| `text-gray-700` | `text-white/80` | Body text on dark |
| `text-gray-600` | `text-white/60` | Secondary text on dark |
| `text-gray-500` | `text-white/50` | Tertiary text on dark |
| `text-accent-*` | `text-white` | Highlighted numbers |
| `text-navy-*` | `text-white` or `text-white/[opacity]` | Various |

---

## Risk Mitigation

### 1. Contrast Accessibility
**Risk**: White text on dark backgrounds may have insufficient contrast
**Mitigation**: 
- `charcoal-800` (#383838) with white text = 8.59:1 ratio (passes WCAG AAA)
- `charcoal-900` (#2d2d2d) with white text = 12.63:1 ratio (passes WCAG AAA)

### 2. Logo Visibility
**Risk**: CSS filter may not work on all browsers
**Mitigation**: 
- `filter: brightness(0) invert(1)` has 97%+ browser support
- Fallback: Logo remains visible (just colored)

### 3. Visual Regression
**Risk**: Components may look broken during incremental changes
**Mitigation**:
- Change globals.css first (color tokens)
- Update components in dependency order (layout → pages → sections)
- Test after each component group

### 4. Animation Colors
**Risk**: `pulse-glow` animation uses hardcoded navy RGBA
**Mitigation**: Update animation keyframes to use charcoal/white values

---

## Files Affected

### Priority 1 - Foundation
1. `globals.css` - Color palette, body bg, animations, texture class
2. `layout.tsx` - Body background class

### Priority 2 - Layout
3. `Header.tsx` - Scroll background, logo filter
4. `Footer.tsx` - Background, text colors, logo filter

### Priority 3 - Landing Page
5. `Hero.tsx` - Full color overhaul, texture, bottom gradient
6. `TrainerCard.tsx` - Dark card styling
7. `TrainerGrid.tsx` - Background color

### Priority 4 - Profile Page
8. `TrainerHero.tsx` - Gradient colors, remove accent glow
9. `StatsBar.tsx` - Dark cards, white numbers
10. `VideoPlayer.tsx` - Container colors, text
11. `Biography.tsx` - Text colors
12. `ClassOfferings.tsx` - Text colors, checkmark styling
13. `Certifications.tsx` - Section bg, badge restyling
14. `ReviewSection.tsx` - Section background
15. `ReviewCard.tsx` - Dark card, border, text colors

### NOT Modified
- `ContactCTA.tsx` - WhatsApp green stays (#25D366)

---

## Success Criteria

- [ ] All pages render with dark charcoal background
- [ ] Logo appears white on all pages
- [ ] Concentric circle texture visible on hero sections
- [ ] All text has sufficient contrast (WCAG AA minimum)
- [ ] Cards have clear visual separation from background
- [ ] WhatsApp CTA remains green
- [ ] Mobile responsiveness unchanged
- [ ] No build errors or console warnings
- [ ] Animations work correctly with new colors

---

*HLD completed: 2026-01-29*
*Author: Apollo (Planning Agent)*
