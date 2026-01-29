# LLD: Profile Page Redesign - Gradient Backdrop Approach

Based on Aphrodite's UI/UX review, implementing Option A to create a cohesive, flowing dark theme for the profile page.

---

## Phase 1: Critical Changes

### Step 1.1: Update TrainerHero.tsx

**File**: `kpa-trainers/src/components/profile/TrainerHero.tsx`

Replace the background section (lines 12-20) with gradient backdrop:

```tsx
export function TrainerHero({ trainer }: TrainerHeroProps) {
  const initials = trainer.name.split(' ').map(n => n[0]).join('');
  
  return (
    <section className="relative bg-charcoal-950 pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
      {/* Gradient backdrop - replaces bg-kaizen.jpg */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800 via-charcoal-900 to-charcoal-950" />
      
      {/* Warm accent glow behind avatar */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-charcoal-700/40 to-transparent blur-3xl" />
      
      {/* Subtle noise texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      
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

        {/* Avatar with enhanced glow */}
        <div className="relative mx-auto mb-8 w-40 h-40 lg:w-52 lg:h-52">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-white/10 to-charcoal-600/20 blur-xl animate-pulse-glow" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-charcoal-600 via-charcoal-700 to-charcoal-800 border-4 border-white/20 flex items-center justify-center overflow-hidden animate-fade-in shadow-2xl shadow-black/50">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent" />
            <span className="text-6xl lg:text-7xl font-display font-bold text-white/90 relative z-10">{initials}</span>
          </div>
        </div>

        {/* Trainer info */}
        <div className="text-center opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg">{trainer.name}</h1>
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
      
      {/* Bottom gradient fade for smooth transition to StatsBar */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal-900 to-transparent" />
    </section>
  );
}
```

### Step 1.2: Update StatsBar.tsx

**File**: `kpa-trainers/src/components/profile/StatsBar.tsx`

Replace entire component with glass-morphism design:

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
    <section className="relative py-10 lg:py-12 -mt-12">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-950" />
      
      <div className="container-mobile relative z-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {statItems.map((stat, index) => (
            <div 
              key={stat.label} 
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-5 lg:p-6 text-center border border-white/10 opacity-0 animate-scale-in hover:from-white/15 hover:to-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
              <div className="text-xs lg:text-sm text-white/60 mt-2 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Step 1.3: Update Certifications.tsx

**File**: `kpa-trainers/src/components/profile/Certifications.tsx`

Replace with accent colors (gold for certs, blue for specializations):

```tsx
interface CertificationsProps {
  certifications: string[];
  specializations: string[];
}

export function Certifications({ certifications, specializations }: CertificationsProps) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-10 text-center">
          Credentials & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Certifications with gold accent */}
          <div className="bg-gradient-to-br from-amber-900/20 via-charcoal-800/50 to-charcoal-900/50 rounded-3xl p-6 lg:p-8 border border-amber-700/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-amber-200 font-display">Certifications</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center px-3 lg:px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-100 border border-amber-500/30 hover:from-amber-500/30 hover:to-amber-600/30 transition-all duration-200 font-body"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Specializations with blue accent */}
          <div className="bg-gradient-to-br from-blue-900/20 via-charcoal-800/50 to-charcoal-900/50 rounded-3xl p-6 lg:p-8 border border-blue-700/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-blue-200 font-display">Specializations</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center px-3 lg:px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-100 border border-blue-500/30 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-200 font-body"
                >
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

---

## Phase 2: Enhanced Flow

### Step 2.1: Update VideoPlayer.tsx

**File**: `kpa-trainers/src/components/profile/VideoPlayer.tsx`

Add spotlight treatment:

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
    <section className="py-16 lg:py-20 bg-charcoal-950 relative overflow-hidden">
      {/* Subtle spotlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-charcoal-800/50 to-transparent blur-3xl" />
      
      <div className="container-mobile relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-2">
            Watch {trainerName}&apos;s Story
          </h2>
          <p className="text-white/60 font-body">Discover what drives their passion for Pilates</p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Glow effect around video */}
          <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-[2rem] blur-xl opacity-50" />
          
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 shadow-2xl shadow-black/50 ring-1 ring-white/10">
            {hasError ? (
              <div className="aspect-video flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-charcoal-700/40 to-transparent" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm ring-1 ring-white/20">
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
      </div>
    </section>
  );
}
```

### Step 2.2: Update Biography.tsx

**File**: `kpa-trainers/src/components/profile/Biography.tsx`

Add contained card and decorative dividers:

```tsx
interface BiographyProps {
  biography: string;
  name: string;
}

export function Biography({ biography, name }: BiographyProps) {
  const paragraphs = biography.split('\n\n').filter(Boolean);

  return (
    <section className="py-16 lg:py-20 bg-charcoal-900">
      <div className="container-mobile max-w-3xl">
        {/* Section header with decorative lines */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white">
            About {name}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        
        {/* Content card */}
        <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-3xl p-6 lg:p-10 border border-white/10 shadow-xl">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-white/80 text-lg leading-relaxed font-body first:first-letter:text-3xl first:first-letter:font-display first:first-letter:font-bold first:first-letter:text-white first:first-letter:mr-1 first:first-letter:float-left"
                style={{ lineHeight: '1.85' }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Step 2.3: Update ClassOfferings.tsx

**File**: `kpa-trainers/src/components/profile/ClassOfferings.tsx`

Convert to card-based layout:

```tsx
interface ClassOfferingsProps {
  classOfferings: string[];
}

export function ClassOfferings({ classOfferings }: ClassOfferingsProps) {
  return (
    <section className="py-16 lg:py-20 bg-charcoal-950">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-10 text-center">
          Available Classes
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {classOfferings.map((offering, index) => (
            <div 
              key={offering}
              className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-5 lg:p-6 border border-white/10 hover:from-white/15 hover:to-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <span className="text-white/90 text-base lg:text-lg font-body font-medium">{offering}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Phase 3: Polish

### Step 3.1: Update ReviewSection.tsx

**File**: `kpa-trainers/src/components/profile/ReviewSection.tsx`

Add spotlight treatment and badge:

```tsx
import { Review } from '@/types';
import { ReviewCard } from './ReviewCard';

interface ReviewSectionProps {
  reviews: Review[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-900">
      <div className="container-mobile">
        {/* Enhanced section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 mb-4">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-yellow-200/90 text-sm font-body font-medium">Student Reviews</span>
          </div>
          
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white">
            What Students Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Step 3.2: Update ReviewCard.tsx

**File**: `kpa-trainers/src/components/profile/ReviewCard.tsx`

Enhanced with yellow stars:

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
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10 shadow-xl opacity-0 animate-fade-in-up hover:from-white/[0.12] hover:to-white/[0.07] transition-all duration-300"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-charcoal-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-white/90 text-lg italic leading-relaxed mb-6 font-body">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-charcoal-500 to-charcoal-700 flex items-center justify-center flex-shrink-0 ring-2 ring-white/10">
          <span className="text-white text-sm font-semibold font-display">{initials}</span>
        </div>
        <div>
          <span className="font-medium text-white font-body block">{review.author}</span>
          {review.date && (
            <time className="text-sm text-white/50 font-body">{review.date}</time>
          )}
        </div>
      </footer>
    </article>
  );
}
```

---

## Build Verification

After all changes:
```bash
cd kpa-trainers && npm run build
```

Expected: Build succeeds with no errors.

## Visual Flow After Changes

```
Hero: Gradient backdrop (no bg-kaizen.jpg) + noise texture
  ↓ seamless gradient transition
StatsBar: Glass-morphism cards (integrated, -mt-12)
  ↓ continues gradient
VideoPlayer: Spotlight treatment with glow
  ↓ bg change to charcoal-900
Biography: Contained card with decorative dividers
  ↓ bg back to charcoal-950
Certifications: Gold + Blue accent cards (side-by-side)
  ↓ continues gradient
ClassOfferings: Icon cards (grid layout)
  ↓ gradient transition
ReviewSection: Spotlight with yellow star badge
  ↓ 
Footer
```

## Files Modified (8 total)

1. `TrainerHero.tsx` - Gradient backdrop, noise texture, enhanced glow
2. `StatsBar.tsx` - Glass-morphism, negative margin, seamless integration
3. `Certifications.tsx` - Gold/blue accent cards, side-by-side layout
4. `VideoPlayer.tsx` - Spotlight treatment, glow effect
5. `Biography.tsx` - Contained card, decorative dividers
6. `ClassOfferings.tsx` - Card-based grid layout
7. `ReviewSection.tsx` - Yellow badge, spotlight
8. `ReviewCard.tsx` - Enhanced stars, better hover states
