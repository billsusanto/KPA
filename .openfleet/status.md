# Status

Shared anchor point for all agents. Read this first before starting any task.

## Current Position

**Story**: `kpa-trainers`
**Branch**: `main` (will create `feat/kpa-trainers`)
**Task**: Phase 1 - Foundation (pending)

## Context Files

- `.openfleet/stories/kpa-trainers/README.md` - Project overview
- `.openfleet/stories/kpa-trainers/HLD.md` - High-Level Design
- `.openfleet/stories/kpa-trainers/tasks/01-27_phase-1-foundation/LLD.md` - Phase 1 detailed plan

## Git Tree

```
main
 │
 └──► feat/kpa-trainers (pending)
       │
       ├──► tasks/01-27_phase-1-foundation (pending)
       ├──► tasks/01-27_phase-2-landing (pending)
       ├──► tasks/01-27_phase-3-profile (pending)
       └──► tasks/01-27_phase-4-polish (pending)
```

## Instructions

### Story: KPA Master Trainers Website

A static Next.js website to showcase Kaizen Pilates Academy master trainers.

**Tech Stack**: Next.js 14, React, Tailwind CSS, Vercel
**Design**: Mobile-first, Indonesian maroon theme

**Phase 1: Foundation** (pending)
- [ ] Create Next.js project with Tailwind CSS
- [ ] Configure maroon color theme
- [ ] Create layout components (Header, Footer)
- [ ] Set up project structure
- [ ] Create types and sample data (1 trainer)

**Phase 2: Landing Page** (pending)
- [ ] Hero section
- [ ] Trainer grid component
- [ ] Trainer card component
- [ ] Mobile-responsive grid

**Phase 3: Trainer Profile** (pending)
- [ ] TrainerHero (photo + name + tagline)
- [ ] StatsBar (4 stats)
- [ ] VideoPlayer (local video)
- [ ] Biography section
- [ ] Certifications badges
- [ ] Class offerings list
- [ ] Review section with cards
- [ ] ContactCTA (WhatsApp placeholder)

**Phase 4: Polish & Deploy** (pending)
- [ ] Animations and transitions
- [ ] Final responsive tweaks
- [ ] Deploy to Vercel
- [ ] Test all pages

## Blocked

_Nothing blocked._

## Notes

### KPA Trainers Design Decisions (2026-01-27)

**Product:**
- Static showcase site for master trainers
- Mobile-first, desktop later
- Linked from main KPA website

**Key Features:**
- Landing page with trainer grid
- Individual profile pages
- 30-second intro video (local)
- Customer reviews (hardcoded)
- WhatsApp CTA → sales agent (not trainer)

**Branding:**
- Indonesian maroon theme (#B91C1C primary)
- Gold accent (#F59E0B)
- Clean, professional, warm

**Data:**
- 1 sample trainer initially (Sarah Tan)
- Data in TypeScript files
- Assets in /public/KPA/{trainer-slug}/

**WhatsApp:**
- Single sales number for all trainers
- Template message includes trainer name
- Placeholder for now, implement later
