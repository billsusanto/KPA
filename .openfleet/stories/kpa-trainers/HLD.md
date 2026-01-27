# KPA Master Trainers - High-Level Design

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      NEXT.JS APP                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  /trainers (Landing)          /trainers/[slug] (Profile)   │
│  ┌─────────────────┐          ┌─────────────────────────┐  │
│  │ Header          │          │ Header + Back nav       │  │
│  │ Hero            │          │ TrainerHero             │  │
│  │ TrainerGrid     │ ──────►  │ StatsBar                │  │
│  │   └─TrainerCard │          │ VideoPlayer             │  │
│  │ Footer          │          │ Biography               │  │
│  └─────────────────┘          │ Certifications          │  │
│                               │ ClassOfferings          │  │
│                               │ ReviewSection           │  │
│                               │ ContactCTA              │  │
│                               │ Footer                  │  │
│                               └─────────────────────────┘  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                       DATA LAYER                            │
│  /src/data/trainers.ts  ←──  Static TypeScript objects     │
│  /public/KPA/*          ←──  Images & Videos               │
└─────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
app/
├── layout.tsx (RootLayout)
│   └── Header
│   └── {children}
│   └── Footer
│
├── trainers/
│   ├── page.tsx (TrainersLanding)
│   │   └── Hero
│   │   └── TrainerGrid
│   │       └── TrainerCard (×n)
│   │
│   └── [slug]/
│       └── page.tsx (TrainerProfile)
│           └── TrainerHero
│           └── StatsBar
│           └── VideoPlayer
│           └── Biography
│           └── Certifications
│           └── ClassOfferings
│           └── ReviewSection
│           │   └── ReviewCard (×n)
│           └── ContactCTA
```

## Page Flow

```
┌──────────────┐      click       ┌──────────────────┐
│              │    ─────────►    │                  │
│  /trainers   │                  │ /trainers/[slug] │
│  (Grid view) │    ◄─────────    │ (Profile view)   │
│              │    back button   │                  │
└──────────────┘                  └──────────────────┘
```

## Mobile-First Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile (default) | < 640px | Single column, stacked |
| Tablet (sm) | ≥ 640px | 2-column grid |
| Desktop (lg) | ≥ 1024px | 3-column grid, wider content |

## Color System

```
Primary Maroon Scale:
┌────────┬────────┬────────┬────────┬────────┐
│  100   │  300   │  500   │  700   │  900   │
│#fee2e2 │#fca5a5 │#ef4444 │#b91c1c │#7f1d1d │
│ light  │  mid   │ accent │PRIMARY │ dark   │
└────────┴────────┴────────┴────────┴────────┘

Accent Gold:
┌────────┬────────┐
│  400   │  500   │
│#fbbf24 │#f59e0b │
│ light  │ accent │
└────────┴────────┘

Neutrals:
- Background: white, gray-50
- Text: gray-900, gray-700
- Muted: gray-500
```

## Data Model

```typescript
interface MasterTrainer {
  // Identity
  id: string;           // URL slug
  name: string;
  title: string;
  tagline: string;
  
  // Media
  profileImage: string;
  introVideo: string;
  
  // Content
  biography: string;
  certifications: string[];
  specializations: string[];
  classOfferings: string[];
  
  // Stats
  stats: {
    batchesTrained: number;
    yearsExperience: number;
    studentsTrained: number;
    certificationsCount: number;
  };
  
  // Contact
  contact: {
    whatsappNumber: string;      // Sales agent number
    whatsappTemplate: string;    // Pre-filled message
    email?: string;
    bookingUrl?: string;
  };
  
  // Social
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  
  // Reviews
  reviews: Review[];
}

interface Review {
  id: number;
  rating: number;       // 1-5
  text: string;
  author: string;
  date?: string;
}
```

## File Organization

```
kpa-trainers/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Redirect → /trainers
│   │   └── trainers/
│   │       ├── page.tsx          # Landing
│   │       └── [slug]/
│   │           └── page.tsx      # Profile
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── landing/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrainerGrid.tsx
│   │   │   └── TrainerCard.tsx
│   │   │
│   │   ├── profile/
│   │   │   ├── TrainerHero.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── Biography.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── ClassOfferings.tsx
│   │   │   ├── ReviewSection.tsx
│   │   │   ├── ReviewCard.tsx
│   │   │   └── ContactCTA.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       └── Card.tsx
│   │
│   ├── data/
│   │   └── trainers.ts           # All trainer data
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── lib/
│       └── utils.ts              # cn() helper
│
├── public/
│   └── KPA/
│       └── sarah-tan/
│           ├── profile.jpg
│           └── introductory_video/
│               └── intro.mp4
│
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## WhatsApp Integration (Placeholder)

```typescript
// Template for WhatsApp link
const whatsappUrl = `https://wa.me/${SALES_NUMBER}?text=${encodeURIComponent(
  `Hi, I'm interested in booking a session with ${trainerName}. Please help me with the available schedule.`
)}`;
```

## SEO Considerations

- Dynamic metadata per trainer
- Open Graph images (trainer photo)
- Structured data (Person schema)
- Semantic HTML

## Performance

- Next.js Image optimization
- Video lazy loading
- Static generation (SSG)
- Minimal JS bundle
