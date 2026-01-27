# KPA Master Trainers Website

**Story**: `kpa-trainers`
**Status**: Planning
**Created**: 2026-01-27

## Overview

A static website to showcase Kaizen Pilates Academy (KPA) master trainers for customers. This will be linked from the main KPA website when customers inquire about instructors.

## Goals

1. Professional trainer showcase with Indonesian maroon theme
2. Mobile-first responsive design
3. Easy for non-technical staff to update trainer data
4. Fast, static site deployed on Vercel

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| UI | React + Tailwind CSS |
| Backend | None (static) |
| Video | Local files (self-hosted) |
| Data | Hardcoded TypeScript |
| Deployment | Vercel |

## Site Structure

```
/trainers                    → Landing page (trainer grid)
/trainers/[slug]             → Individual trainer profile
```

## Features

### Landing Page (`/trainers`)
- Hero section with KPA branding
- Grid of trainer cards (photo, name, years experience)
- Click through to individual profiles

### Trainer Profile (`/trainers/[slug]`)
- Profile photo (hero)
- Stats bar (batches, years, students, certs)
- 30-second introductory video
- Biography
- Certifications & specializations
- Class offerings
- Customer reviews (hardcoded)
- Contact CTA (WhatsApp placeholder → sales agent)
- Social media links

## Design System

### Colors (Indonesian Maroon Theme)
- Primary: Maroon (#B91C1C - #991B1B)
- Accent: Gold/Cream (#F59E0B)
- Background: White/Light gray
- Text: Dark gray/Black

### Typography
- Clean sans-serif (Inter)
- Mobile-first sizing

## Data Structure

```
/public/KPA/{trainer-slug}/
├── profile.jpg
├── introductory_video/
│   └── intro.mp4
└── customer_reviews/
    ├── review-1.json
    ├── review-2.json
    └── review-3.json
```

## Tasks

1. **Phase 1: Foundation** - Project setup, layout, theme
2. **Phase 2: Landing Page** - Hero, trainer grid
3. **Phase 3: Trainer Profile** - All profile sections
4. **Phase 4: Polish** - Animations, responsive tweaks, deploy

## Sample Trainer Data

For initial development, create 1 sample trainer:
- Name: Sarah Tan
- Slug: sarah-tan
- Title: Senior Master Trainer
- Stats: 10 batches, 8+ years, 500+ students, 3 certs
- 3 sample reviews

## Future Enhancements

- [ ] WhatsApp integration (template message to sales)
- [ ] Desktop optimization
- [ ] CMS integration (if needed)
- [ ] More trainers
