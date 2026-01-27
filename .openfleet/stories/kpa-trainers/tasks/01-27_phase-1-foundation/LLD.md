# Phase 1: Foundation - Low-Level Design

## Objective

Set up the Next.js project with Tailwind CSS, configure the maroon theme, create layout components, and establish the data layer with sample trainer data.

## Tasks

### 1. Project Initialization

```bash
# Create Next.js project
npx create-next-app@latest kpa-trainers --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd kpa-trainers
```

### 2. Tailwind Configuration

**File: `tailwind.config.ts`**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### 3. Global Styles

**File: `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-white text-gray-900 antialiased;
  }
}

@layer components {
  .container-mobile {
    @apply mx-auto px-4 max-w-lg;
  }
}
```

### 4. Types

**File: `src/types/index.ts`**

```typescript
export interface MasterTrainer {
  id: string;
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
  introVideo: string;
  biography: string;
  certifications: string[];
  specializations: string[];
  classOfferings: string[];
  stats: TrainerStats;
  contact: TrainerContact;
  socialLinks: SocialLinks;
  reviews: Review[];
}

export interface TrainerStats {
  batchesTrained: number;
  yearsExperience: number;
  studentsTrained: number;
  certificationsCount: number;
}

export interface TrainerContact {
  whatsappNumber: string;
  whatsappTemplate: string;
  email?: string;
  bookingUrl?: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  date?: string;
}
```

### 5. Sample Data

**File: `src/data/trainers.ts`**

```typescript
import { MasterTrainer } from '@/types';

export const trainers: MasterTrainer[] = [
  {
    id: 'sarah-tan',
    name: 'Sarah Tan',
    title: 'Senior Master Trainer',
    tagline: 'Transforming lives through mindful movement',
    profileImage: '/KPA/sarah-tan/profile.jpg',
    introVideo: '/KPA/sarah-tan/introductory_video/intro.mp4',
    biography: `Sarah discovered Pilates in 2015 after recovering from a sports injury. What started as rehabilitation became a lifelong passion. She trained under world-renowned instructors in Singapore and Australia before joining Kaizen Pilates Academy.

With over 8 years of teaching experience, Sarah specializes in helping clients recover from injuries, improve posture, and build core strength. Her patient, detail-oriented approach has earned her a loyal following among clients of all fitness levels.

Sarah believes that Pilates is not just exercise—it's a practice of mindfulness that transforms both body and mind.`,
    certifications: [
      'STOTT Pilates Certified',
      'Polestar Pilates',
      'Pre/Postnatal Specialist',
    ],
    specializations: [
      'Reformer',
      'Mat Pilates',
      'Injury Rehabilitation',
      'Senior Fitness',
    ],
    classOfferings: [
      'Private 1-on-1 Sessions',
      'Duet Sessions (2 pax)',
      'Small Group Classes (max 4)',
      'Corporate Wellness Programs',
    ],
    stats: {
      batchesTrained: 10,
      yearsExperience: 8,
      studentsTrained: 500,
      certificationsCount: 3,
    },
    contact: {
      whatsappNumber: '6281234567890', // Placeholder - sales agent
      whatsappTemplate: "Hi, I'm interested in booking a Pilates session with Sarah Tan at KPA. Could you help me with the available schedule?",
      email: 'info@kaizenpilates.com',
    },
    socialLinks: {
      instagram: 'https://instagram.com/kpa_pilates',
      facebook: 'https://facebook.com/kaizenpilates',
    },
    reviews: [
      {
        id: 1,
        rating: 5,
        text: "Sarah is an amazing instructor! Her attention to detail and patience helped me recover from my back injury. I've been training with her for 2 years now and can't imagine going anywhere else.",
        author: 'Jane D.',
        date: '2025-12',
      },
      {
        id: 2,
        rating: 5,
        text: "Best Pilates trainer I've ever had. Sarah explains every movement clearly and always ensures proper form. Highly recommend for beginners and advanced practitioners alike.",
        author: 'Michael T.',
        date: '2025-11',
      },
      {
        id: 3,
        rating: 5,
        text: "I started Pilates to improve my posture after years of desk work. Sarah's classes have been life-changing. My back pain is gone and I feel stronger than ever!",
        author: 'Lisa W.',
        date: '2025-10',
      },
    ],
  },
];

export function getTrainerBySlug(slug: string): MasterTrainer | undefined {
  return trainers.find((t) => t.id === slug);
}

export function getAllTrainers(): MasterTrainer[] {
  return trainers;
}
```

### 6. Utility Functions

**File: `src/lib/utils.ts`**

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
```

**Install dependencies:**
```bash
npm install clsx tailwind-merge
```

### 7. Layout Components

**File: `src/components/layout/Header.tsx`**

```tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-mobile py-4">
        <Link href="/trainers" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-maroon-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <div>
            <h1 className="font-bold text-maroon-800 leading-tight">Kaizen Pilates</h1>
            <p className="text-xs text-gray-500">Academy</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
```

**File: `src/components/layout/Footer.tsx`**

```tsx
export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="container-mobile py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kaizen Pilates Academy
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Master Trainer Showcase
        </p>
      </div>
    </footer>
  );
}
```

### 8. Root Layout

**File: `src/app/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Master Trainers | Kaizen Pilates Academy',
  description: 'Meet our certified master trainers at Kaizen Pilates Academy. Expert instruction in Reformer, Mat Pilates, and specialized programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

### 9. Root Page (Redirect)

**File: `src/app/page.tsx`**

```tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/trainers');
}
```

### 10. Placeholder Trainers Page

**File: `src/app/trainers/page.tsx`**

```tsx
export default function TrainersPage() {
  return (
    <div className="container-mobile py-8">
      <h1 className="text-2xl font-bold text-maroon-800">
        Meet Our Master Trainers
      </h1>
      <p className="text-gray-600 mt-2">
        Coming soon...
      </p>
    </div>
  );
}
```

### 11. Directory Structure

Create directories:
```bash
mkdir -p src/components/layout
mkdir -p src/components/landing
mkdir -p src/components/profile
mkdir -p src/components/ui
mkdir -p src/data
mkdir -p src/types
mkdir -p src/lib
mkdir -p src/app/trainers/[slug]
mkdir -p public/KPA/sarah-tan/introductory_video
```

### 12. Placeholder Assets

Create placeholder profile image (gray square with text):
- `/public/KPA/sarah-tan/profile.jpg` - Use a placeholder service or create manually

For video, note in README that it needs to be added manually.

## Verification

```bash
# Run dev server
npm run dev

# Check:
# 1. http://localhost:3000 redirects to /trainers
# 2. /trainers shows placeholder content
# 3. No console errors
# 4. Maroon theme colors work

# Build check
npm run build
```

## Deliverables

- [ ] Next.js project initialized
- [ ] Tailwind configured with maroon theme
- [ ] Types defined
- [ ] Sample trainer data created
- [ ] Layout components (Header, Footer)
- [ ] Root layout with metadata
- [ ] Placeholder trainers page
- [ ] Build passes
