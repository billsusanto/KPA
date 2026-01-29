# Apollo - Planning Agent Scratchpad

## Role
Design and plan implementation strategies for development tasks. Create HLD and LLD documents for Actors to follow.

## Learnings

### Tailwind v4 Theme System
- Uses `@theme inline` block in CSS, not separate config file
- Define CSS custom properties directly: `--color-{name}-{shade}: #hex`
- Can remove entire color palettes by not including them
- Components must use explicit color classes (e.g., `charcoal-800` not `navy-700`)

### CSS Logo Inversion
- `filter: brightness(0) invert(1)` converts any image to white
- 97%+ browser support, no fallback needed
- Alternative: `filter: grayscale(1) brightness(2)` for softer white

### Concentric Circle Texture Pattern
- Pure CSS approach using stacked radial gradients
- Use `transparent` for most of ring, thin `rgba(255,255,255,0.03)` for line
- `background-size: 100% 100%` centers pattern
- Stack multiple gradients at different radii for multiple rings

### Dark Theme Color Strategy
- Three-tier surface hierarchy: 950 (page) → 900 (sections) → 800 (cards)
- Text hierarchy: white → white/80 → white/60 → white/50
- Borders: Use lighter charcoal (700) with low opacity
- Shadows: Use `shadow-black/*` instead of colored shadows

### Implementation Ordering
- Foundation first (globals.css) even if it breaks components temporarily
- Layout components next (Header, Footer)
- Landing page before profile page (users see it first)
- Test checkpoints after each phase

## Patterns to Reuse

### Standard LLD Structure
1. Phase-based organization (Foundation → Layout → Pages)
2. Each step has: File, Code block, Changes summary
3. Test checkpoints between phases
4. Complete file reference at end

### Color Migration Approach
1. Add new color palette (keep old temporarily)
2. Update components one by one
3. Remove old colors from theme
4. Verify build succeeds

## TODOs
- [ ] Create runbook for "dark theme migration" pattern
- [ ] Document Tailwind v4 syntax differences from v3
