# Low-Level Design: Theme Alignment Implementation

This document provides exact code changes for implementing the dark premium theme. Changes are ordered by implementation sequence for safe, incremental deployment.

---

## Phase 1: Foundation (globals.css + layout.tsx)

### Step 1.1: Update Color Palette in globals.css

**File**: `kpa-trainers/src/app/globals.css`

Replace the `@theme inline` block (lines 5-39) with the new charcoal palette:

```css
@theme inline {
  /* Charcoal palette (replacing navy) */
  --color-charcoal-50: #f7f7f7;
  --color-charcoal-100: #e3e3e3;
  --color-charcoal-200: #c8c8c8;
  --color-charcoal-300: #a4a4a4;
  --color-charcoal-400: #818181;
  --color-charcoal-500: #666666;
  --color-charcoal-600: #515151;
  --color-charcoal-700: #434343;
  --color-charcoal-800: #383838;
  --color-charcoal-900: #2d2d2d;
  --color-charcoal-950: #1a1a1a;
  
  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
}
```

**Note**: We remove `navy-*`, `accent-*`, and `cream` entirely. Components will be updated to use `charcoal-*` explicitly.

### Step 1.2: Update Body Base Styles

**File**: `kpa-trainers/src/app/globals.css`

Change the body styles in `@layer base` (lines 41-54):

```css
@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-charcoal-950 text-white antialiased;
    font-family: var(--font-body);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }
}
```

### Step 1.3: Update Animation Keyframes

**File**: `kpa-trainers/src/app/globals.css`

Replace `pulse-glow` animation (lines 117-120) to use charcoal:

```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(56, 56, 56, 0.5); }
  50% { box-shadow: 0 0 40px rgba(56, 56, 56, 0.8); }
}
```

### Step 1.4: Update Utility Classes

**File**: `kpa-trainers/src/app/globals.css`

Replace gradient utilities (lines 153-167):

```css
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-white to-charcoal-300;
  }
  
  .text-gradient-accent {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-white to-charcoal-400;
  }
  
  .glass {
    @apply bg-charcoal-900/80 backdrop-blur-xl;
  }
  
  .glass-dark {
    @apply bg-charcoal-950/80 backdrop-blur-xl;
  }
```

### Step 1.5: Add Concentric Circle Texture Class

**File**: `kpa-trainers/src/app/globals.css`

Add after the `@layer utilities` block (after line 168), before the skeleton styles:

```css
/* Concentric circle texture overlay */
.texture-circles {
  background-image: 
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, rgba(255,255,255,0.03) 30.5%, transparent 31%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%, rgba(255,255,255,0.03) 50.5%, transparent 51%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%, rgba(255,255,255,0.03) 70.5%, transparent 71%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 90%, rgba(255,255,255,0.03) 90.5%, transparent 91%);
  background-size: 100% 100%;
  background-position: center;
}

/* Logo white filter */
.logo-white {
  filter: brightness(0) invert(1);
}
```

### Step 1.6: Update Skeleton Loading

**File**: `kpa-trainers/src/app/globals.css`

Replace skeleton styles (lines 171-175):

```css
/* Skeleton loading shimmer effect */
.skeleton {
  background: linear-gradient(90deg, #383838 25%, #434343 50%, #383838 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

### Step 1.7: Test Checkpoint

After Step 1.6:
```bash
cd kpa-trainers && npm run build
```

Expected: Build should succeed. Site will look broken (components still reference removed colors) but this validates the CSS syntax.

---

## Phase 2: Layout Components

### Step 2.1: Update Header.tsx

**File**: `kpa-trainers/src/components/layout/Header.tsx`

Replace the entire component:

```tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 10) {
        setVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-charcoal-900/95 backdrop-blur-sm shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-mobile py-4">
        <Link href="/trainers" className="flex items-center gap-3 group">
          <Image 
            src="/KPA-Logo.jpeg" 
            alt="KPA Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto logo-white"
          />
        </Link>
      </div>
    </header>
  );
}
```

**Changes**:
- Line 39: `bg-gradient-to-br from-navy-700 to-navy-800` → `bg-charcoal-900/95 backdrop-blur-sm`
- Line 39: `shadow-navy-900/30` → `shadow-black/20`
- Line 50: Added `logo-white` class to Image

### Step 2.2: Update Footer.tsx

**File**: `kpa-trainers/src/components/layout/Footer.tsx`

Replace the entire component:

```tsx
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 mt-auto">
      <div className="container-mobile py-10 text-center">
        <div className="flex justify-center mb-4">
          <Image 
            src="/KPA-Logo.jpeg" 
            alt="KPA Logo" 
            width={120} 
            height={40} 
            className="h-12 w-auto logo-white"
          />
        </div>
        <p className="text-sm text-white/60 mt-2 font-body">
          Master Trainer Showcase
        </p>
        <p className="text-xs text-white/40 mt-6 font-body">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
```

**Changes**:
- Line 5: `bg-cream` → `bg-charcoal-900`
- Line 5: `border-gray-100` → `border-charcoal-700`
- Line 14: Added `logo-white` class
- Line 16: `text-gray-500` → `text-white/60`
- Line 19: `text-gray-400` → `text-white/40`

### Step 2.3: Test Checkpoint

```bash
cd kpa-trainers && npm run dev
```

Open browser, verify:
- [ ] Header logo is white
- [ ] Header background transitions correctly on scroll
- [ ] Footer is dark with white logo
- [ ] No console errors

---

## Phase 3: Landing Page Components

### Step 3.1: Update Hero.tsx

**File**: `kpa-trainers/src/components/landing/Hero.tsx`

Replace the entire component:

```tsx
export function Hero() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Concentric circle texture */}
      <div className="absolute inset-0 texture-circles opacity-50" />
      
      {/* Subtle radial overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-charcoal-700/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-charcoal-600/20 via-transparent to-transparent" />
      
      <div className="container-mobile relative z-10 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8 opacity-0 animate-fade-in" />
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight opacity-0 animate-fade-in-up">
          Meet Our
          <span className="block mt-2 text-white/90">Master Trainers</span>
        </h1>
        
        <p className="mt-8 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl opacity-0 animate-fade-in-up animation-delay-200 font-body">
          Discover the dedicated professionals behind Kaizen Pilates Academy.
          Our certified trainers bring years of experience and passion to every session.
        </p>
        
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mt-10 opacity-0 animate-fade-in animation-delay-400" />
      </div>
      
      {/* Bottom gradient fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent" />
    </section>
  );
}
```

**Changes**:
- Line 3: Gradient colors → `from-charcoal-800 via-charcoal-900 to-charcoal-950`
- Lines 4-5: Added texture overlay with `texture-circles`
- Lines 7-8: Radial overlays → charcoal colors
- Line 12: Decorative line → `via-white/40` (was `via-accent-600`)
- Line 16: "Master Trainers" → `text-white/90` (was `text-accent-500`)
- Line 19: Body text → `text-white/70` (was `text-navy-100/90`)
- Line 24: Decorative line → `via-white/30` (was `via-accent-600/50`)
- Line 28: Bottom gradient → `from-charcoal-950` (was `from-white`)

### Step 3.2: Update TrainerCard.tsx

**File**: `kpa-trainers/src/components/landing/TrainerCard.tsx`

Replace the entire component:

```tsx
import Link from 'next/link';
import { MasterTrainer } from '@/types';

interface TrainerCardProps {
  trainer: MasterTrainer;
  index?: number;
}

export function TrainerCard({ trainer, index = 0 }: TrainerCardProps) {
  const animationDelay = index * 100;
  const initials = trainer.name.split(' ').map(n => n[0]).join('');
  
  return (
    <Link href={`/trainers/${trainer.id}`} className="group block">
      <article 
        className="relative bg-charcoal-800 rounded-3xl overflow-hidden shadow-md border border-charcoal-700/50 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-black/30 group-hover:-translate-y-2 opacity-0 animate-slide-up"
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        {/* Hover accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Photo area with initials */}
        <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="text-5xl font-display font-bold text-white/80">{initials}</span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6">
          <h3 className="font-display font-semibold text-white text-xl group-hover:text-white/90 transition-colors duration-300">
            {trainer.name}
          </h3>
          <p className="text-sm text-white/60 mt-1 font-body">
            {trainer.title}
          </p>

          {/* Experience badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 text-white/80 px-3 py-1.5 rounded-full text-sm font-medium ring-1 ring-white/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {trainer.stats.yearsExperience} years experience
          </div>
        </div>
      </article>
    </Link>
  );
}
```

**Changes**:
- Line 16: `bg-white` → `bg-charcoal-800`, `border-gray-100/50` → `border-charcoal-700/50`
- Line 16: `shadow-navy-500/10` → `shadow-black/30`
- Line 20: Accent line → `from-white/60 to-white/20` (was `from-accent-500 to-accent-700`)
- Line 23: Photo gradient → charcoal colors
- Line 24: Radial overlay → `from-white/5` (was `from-accent-500/20`)
- Line 26: Initials → `text-white/80` (was `text-white/90`)
- Line 32: Card title → `text-white` (was `text-gray-900`), hover → `text-white/90`
- Line 35: Subtitle → `text-white/60` (was `text-gray-600`)
- Line 40: Badge → `bg-white/10 text-white/80 ring-white/20` (was accent colors)

### Step 3.3: Update TrainerGrid.tsx

**File**: `kpa-trainers/src/components/landing/TrainerGrid.tsx`

Replace the entire component:

```tsx
import { MasterTrainer } from '@/types';
import { TrainerCard } from './TrainerCard';

interface TrainerGridProps {
  trainers: MasterTrainer[];
}

export function TrainerGrid({ trainers }: TrainerGridProps) {
  return (
    <section className="py-16 lg:py-20 -mt-16 bg-charcoal-950">
      <div className="container-mobile">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Changes**:
- Line 10: Added `bg-charcoal-950` to section

### Step 3.4: Test Checkpoint

```bash
cd kpa-trainers && npm run dev
```

Open browser at `/trainers`, verify:
- [ ] Hero has dark background with visible concentric circle texture
- [ ] Hero text is white (no red accent on "Master Trainers")
- [ ] TrainerCards are dark with subtle borders
- [ ] Hover effects work (lift, shadow, accent line)
- [ ] Bottom gradient blends into TrainerGrid

---

## Phase 4: Profile Page Components

### Step 4.1: Update TrainerHero.tsx

**File**: `kpa-trainers/src/components/profile/TrainerHero.tsx`

Replace the entire component:

```tsx
import Link from 'next/link';
import { MasterTrainer } from '@/types';

interface TrainerHeroProps {
  trainer: MasterTrainer;
}

export function TrainerHero({ trainer }: TrainerHeroProps) {
  const initials = trainer.name.split(' ').map(n => n[0]).join('');
  
  return (
    <section className="relative bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-circles opacity-40" />
      
      {/* Subtle radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-charcoal-700/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-charcoal-600/20 via-transparent to-transparent" />
      
      <div className="container-mobile relative z-10">
        {/* Back link */}
        <Link
          href="/trainers"
          className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 text-sm mb-10 font-body"
        >
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Trainers</span>
        </Link>

        {/* Avatar */}
        <div className="relative mx-auto mb-8 w-48 h-48 lg:w-56 lg:h-56">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-charcoal-700/30 animate-pulse-glow" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-charcoal-600 via-charcoal-700 to-charcoal-800 border-4 border-white/20 flex items-center justify-center overflow-hidden animate-fade-in shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
            <span className="text-7xl lg:text-8xl font-display font-bold text-white/90 relative z-10">{initials}</span>
          </div>
        </div>

        {/* Trainer info */}
        <div className="text-center opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">{trainer.name}</h1>
          <p className="text-white/60 mt-2 text-lg font-body">{trainer.title}</p>
          <p className="text-white/80 text-base lg:text-lg mt-5 italic font-body max-w-xl mx-auto leading-relaxed">&ldquo;{trainer.tagline}&rdquo;</p>

          {/* Social links */}
          {(trainer.socialLinks.instagram || trainer.socialLinks.facebook) && (
            <div className="flex justify-center gap-5 mt-6">
              {trainer.socialLinks.instagram && (
                <a
                  href={trainer.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {trainer.socialLinks.facebook && (
                <a
                  href={trainer.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

**Changes**:
- Line 12: Gradient → charcoal colors
- Lines 13-14: Added texture overlay
- Lines 16-18: Radial overlays → charcoal colors
- Line 24: Back link → `text-white/60` (was `text-navy-200`)
- Line 34: Avatar glow → `from-white/10 to-charcoal-700/30` (was accent colors)
- Line 35: Avatar bg → charcoal gradient
- Line 36: Inner radial → `from-white/10` (was accent)
- Line 44: Title text → `text-white/60` (was `text-navy-200`)
- Lines 56, 68: Social icons → `text-white/60` (was `text-navy-200`)

### Step 4.2: Update StatsBar.tsx

**File**: `kpa-trainers/src/components/profile/StatsBar.tsx`

Replace the entire component:

```tsx
import { TrainerStats } from '@/types';

interface StatsBarProps {
  stats: TrainerStats;
}

export function StatsBar({ stats }: StatsBarProps) {
  const statItems = [
    { value: stats.batchesTrained, label: 'Batches Trained' },
    { value: stats.yearsExperience, label: 'Years Experience' },
    { value: stats.studentsTrained.toLocaleString(), label: 'Students Trained' },
    { value: stats.certificationsCount, label: 'Certifications' },
  ];

  return (
    <section className="py-10 lg:py-12 bg-charcoal-800">
      <div className="container-mobile">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {statItems.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-charcoal-700/50 rounded-2xl p-6 text-center shadow-sm border border-charcoal-600/30 opacity-0 animate-scale-in hover:shadow-md hover:bg-charcoal-700/70 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60 mt-2 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Changes**:
- Line 16: `bg-cream` → `bg-charcoal-800`
- Line 22: Card → `bg-charcoal-700/50`, `border-charcoal-600/30`
- Line 22: Added hover state `hover:bg-charcoal-700/70`
- Line 25: Numbers → `text-white` (was `text-accent-600`)
- Line 26: Labels → `text-white/60` (was `text-gray-600`)

### Step 4.3: Update VideoPlayer.tsx

**File**: `kpa-trainers/src/components/profile/VideoPlayer.tsx`

Replace the entire component:

```tsx
'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  posterImage?: string;
  trainerName: string;
}

export function VideoPlayer({ videoUrl, posterImage, trainerName }: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);
  const initials = trainerName.split(' ').map(n => n[0]).join('');

  return (
    <section className="py-12 lg:py-16 bg-charcoal-950">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-6">
          Meet {trainerName}
        </h2>
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 shadow-xl shadow-black/20">
          {hasError ? (
            <div className="aspect-video flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal-700/40 to-transparent" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <svg className="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/80 text-lg font-body">Video coming soon</p>
                <p className="text-white/60 text-sm mt-2 font-body">Check back later to see {initials}&apos;s introduction</p>
              </div>
            </div>
          ) : (
            <video
              className="w-full aspect-video"
              controls
              poster={posterImage}
              preload="metadata"
              onError={() => setHasError(true)}
            >
              <source src={videoUrl} type="video/mp4" />
              <p className="text-white text-center p-8 font-body">
                Your browser does not support the video tag.
              </p>
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
```

**Changes**:
- Line 16: Added `bg-charcoal-950` to section
- Line 18: Heading → `text-white` (was `text-gray-900`)
- Line 21: Container gradient → charcoal colors, shadow → `shadow-black/20`
- Line 24: Radial overlay → `from-charcoal-700/40`
- Line 32: Secondary text → `text-white/60` (was `text-navy-200`)

### Step 4.4: Update Biography.tsx

**File**: `kpa-trainers/src/components/profile/Biography.tsx`

Replace the entire component:

```tsx
interface BiographyProps {
  biography: string;
  name: string;
}

export function Biography({ biography, name }: BiographyProps) {
  const paragraphs = biography.split('\n\n').filter(Boolean);

  return (
    <section className="py-12 lg:py-16 bg-charcoal-950 animate-fade-in">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-6">
          About {name}
        </h2>
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-white/80 text-lg leading-relaxed font-body" style={{ lineHeight: '1.8' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Changes**:
- Line 10: Added `bg-charcoal-950`
- Line 12: Heading → `text-white` (was `text-gray-900`)
- Line 17: Paragraph → `text-white/80` (was `text-gray-700`)

### Step 4.5: Update ClassOfferings.tsx

**File**: `kpa-trainers/src/components/profile/ClassOfferings.tsx`

Replace the entire component:

```tsx
interface ClassOfferingsProps {
  classOfferings: string[];
}

export function ClassOfferings({ classOfferings }: ClassOfferingsProps) {
  return (
    <section className="py-12 lg:py-16 bg-charcoal-950">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-8">
          Class Offerings
        </h2>
        <ul className="space-y-4">
          {classOfferings.map((offering) => (
            <li key={offering} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 ring-1 ring-white/20">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-white/80 text-lg font-body">{offering}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

**Changes**:
- Line 7: Added `bg-charcoal-950`
- Line 9: Heading → `text-white` (was `text-gray-900`)
- Line 15: Checkmark circle → `bg-white/10 ring-white/20` (was `bg-accent-50 ring-accent-200/50`)
- Line 17: Checkmark icon → `text-white` (was `text-accent-600`)
- Line 29: Text → `text-white/80` (was `text-gray-700`)

### Step 4.6: Update Certifications.tsx

**File**: `kpa-trainers/src/components/profile/Certifications.tsx`

Replace the entire component:

```tsx
interface CertificationsProps {
  certifications: string[];
  specializations: string[];
}

export function Certifications({ certifications, specializations }: CertificationsProps) {
  return (
    <section className="py-12 lg:py-16 bg-charcoal-800 animate-fade-in">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-8">
          Certifications & Specializations
        </h2>

        <div className="space-y-10">
          {/* Certifications */}
          <div>
            <h3 className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider font-body">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors duration-200 font-body"
                >
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider font-body">Specializations</h3>
            <div className="flex flex-wrap gap-3">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors duration-200 font-body"
                >
                  <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Changes**:
- Line 8: `bg-cream` → `bg-charcoal-800`
- Line 10: Heading → `text-white` (was `text-gray-900`)
- Line 17: Subheading → `text-white/50` (was `text-gray-500`)
- Line 22: Cert badge → `bg-white/10 text-white ring-white/20` (was navy colors)
- Line 24: Cert icon → `text-white/70` (was `text-navy-600`)
- Line 33: Subheading → `text-white/50`
- Line 38: Spec badge → `bg-white/10 text-white ring-white/20` (was accent colors)
- Line 40: Spec icon → `text-white/70` (was `text-accent-500`)

### Step 4.7: Update ReviewSection.tsx

**File**: `kpa-trainers/src/components/profile/ReviewSection.tsx`

Replace the entire component:

```tsx
import { Review } from '@/types';
import { ReviewCard } from './ReviewCard';

interface ReviewSectionProps {
  reviews: Review[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-charcoal-800">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-8">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Changes**:
- Line 12: `bg-gray-50` → `bg-charcoal-800`
- Line 14: Heading → `text-white` (was `text-gray-900`)

### Step 4.8: Update ReviewCard.tsx

**File**: `kpa-trainers/src/components/profile/ReviewCard.tsx`

Replace the entire component:

```tsx
import { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  const initials = review.author.split(' ').map(n => n[0]).join('');
  
  return (
    <article 
      className="bg-charcoal-700/50 rounded-2xl p-6 lg:p-8 shadow-sm border-l-4 border-white/30 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Star rating */}
      <div className="flex gap-1.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < review.rating ? 'text-amber-400' : 'text-charcoal-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-white/80 text-lg italic leading-relaxed mb-6 font-body">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-charcoal-500 to-charcoal-700 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-semibold font-display">{initials}</span>
        </div>
        <div>
          <span className="font-medium text-white font-body">{review.author}</span>
          {review.date && (
            <time className="block text-sm text-white/50 font-body">{review.date}</time>
          )}
        </div>
      </footer>
    </article>
  );
}
```

**Changes**:
- Line 13: Card → `bg-charcoal-700/50` (was `bg-white`)
- Line 13: Border → `border-white/30` (was `border-accent-600`)
- Line 21: Stars → `text-amber-400` active (kept gold/amber), `text-charcoal-600` inactive (was `text-gray-200`)
- Line 30: Quote → `text-white/80` (was `text-gray-700`)
- Line 36: Avatar → charcoal gradient (was navy gradient)
- Line 40: Author → `text-white` (was `text-gray-900`)
- Line 42: Date → `text-white/50` (was `text-gray-500`)

### Step 4.9: Test Checkpoint

```bash
cd kpa-trainers && npm run dev
```

Open browser at `/trainers/sarah-tan`, verify:
- [ ] TrainerHero has dark gradient with texture
- [ ] StatsBar has dark cards with white numbers
- [ ] VideoPlayer section is dark
- [ ] Biography text is white/readable
- [ ] ClassOfferings has white checkmarks
- [ ] Certifications has white badges
- [ ] ReviewSection has dark cards
- [ ] WhatsApp CTA is still green (unchanged)

---

## Phase 5: Final Build Verification

### Step 5.1: Production Build

```bash
cd kpa-trainers && npm run build
```

Expected: Build should succeed with no errors.

### Step 5.2: Visual Regression Test

Manual verification checklist:

**Landing Page (`/trainers`)**:
- [ ] Header is transparent, becomes dark on scroll
- [ ] Logo is white (filter applied)
- [ ] Hero background is dark charcoal with visible texture
- [ ] "Master Trainers" text is white (not red)
- [ ] Decorative lines are white/gray
- [ ] TrainerCards are dark with subtle borders
- [ ] Card hover: lift effect, shadow, white accent line
- [ ] Grid background is `charcoal-950`
- [ ] Footer is dark with white logo

**Profile Page (`/trainers/sarah-tan`)**:
- [ ] TrainerHero has texture pattern
- [ ] Back link is visible (white/gray)
- [ ] Avatar has subtle glow animation
- [ ] Social icons are white on hover
- [ ] StatsBar cards are dark with white numbers
- [ ] Video container is dark
- [ ] Biography text is readable (white/80)
- [ ] Class offerings have white checkmarks
- [ ] Certification badges are white on dark
- [ ] Review cards are dark with amber stars
- [ ] WhatsApp button is green (#25D366)

**Mobile Responsiveness**:
- [ ] All layouts adapt correctly
- [ ] Touch targets remain accessible
- [ ] Text sizes are readable

---

## Complete globals.css Reference

For reference, here is the complete updated `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

@import "tailwindcss";

@theme inline {
  /* Charcoal palette (replacing navy) */
  --color-charcoal-50: #f7f7f7;
  --color-charcoal-100: #e3e3e3;
  --color-charcoal-200: #c8c8c8;
  --color-charcoal-300: #a4a4a4;
  --color-charcoal-400: #818181;
  --color-charcoal-500: #666666;
  --color-charcoal-600: #515151;
  --color-charcoal-700: #434343;
  --color-charcoal-800: #383838;
  --color-charcoal-900: #2d2d2d;
  --color-charcoal-950: #1a1a1a;
  
  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-charcoal-950 text-white antialiased;
    font-family: var(--font-body);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }
}

@layer components {
  .container-mobile {
    @apply mx-auto px-6 max-w-lg;
  }
  
  @media (min-width: 1024px) {
    .container-mobile {
      @apply max-w-4xl px-8;
    }
  }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(56, 56, 56, 0.5); }
  50% { box-shadow: 0 0 40px rgba(56, 56, 56, 0.8); }
}

@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slideUp 0.5s ease-out forwards;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.6s ease-out forwards;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .animation-delay-100 { animation-delay: 100ms; }
  .animation-delay-200 { animation-delay: 200ms; }
  .animation-delay-300 { animation-delay: 300ms; }
  .animation-delay-400 { animation-delay: 400ms; }
  .animation-delay-500 { animation-delay: 500ms; }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-white to-charcoal-300;
  }
  
  .text-gradient-accent {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-white to-charcoal-400;
  }
  
  .glass {
    @apply bg-charcoal-900/80 backdrop-blur-xl;
  }
  
  .glass-dark {
    @apply bg-charcoal-950/80 backdrop-blur-xl;
  }
}

/* Concentric circle texture overlay */
.texture-circles {
  background-image: 
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, rgba(255,255,255,0.03) 30.5%, transparent 31%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%, rgba(255,255,255,0.03) 50.5%, transparent 51%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%, rgba(255,255,255,0.03) 70.5%, transparent 71%),
    radial-gradient(circle at 50% 50%, transparent 0%, transparent 90%, rgba(255,255,255,0.03) 90.5%, transparent 91%);
  background-size: 100% 100%;
  background-position: center;
}

/* Logo white filter */
.logo-white {
  filter: brightness(0) invert(1);
}

/* Skeleton loading shimmer effect */
.skeleton {
  background: linear-gradient(90deg, #383838 25%, #434343 50%, #383838 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Font families for direct use */
.font-display {
  font-family: var(--font-display);
}

.font-body {
  font-family: var(--font-body);
}
```

---

## Summary

| Phase | Files | Changes |
|-------|-------|---------|
| 1 | globals.css | Color palette, body bg, animations, texture, logo filter |
| 2 | Header.tsx, Footer.tsx | Dark bg, logo filter, text colors |
| 3 | Hero.tsx, TrainerCard.tsx, TrainerGrid.tsx | Dark theme, texture, remove accent colors |
| 4 | TrainerHero.tsx, StatsBar.tsx, VideoPlayer.tsx, Biography.tsx, ClassOfferings.tsx, Certifications.tsx, ReviewSection.tsx, ReviewCard.tsx | All profile components to dark theme |
| 5 | - | Build verification, visual testing |

**Total files modified**: 14
**ContactCTA.tsx**: NOT MODIFIED (WhatsApp green stays)

---

*LLD completed: 2026-01-29*
*Author: Apollo (Planning Agent)*
