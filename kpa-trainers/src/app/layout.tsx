import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Master Trainers | Kaizen Pilates Academy',
    template: '%s | Kaizen Pilates Academy',
  },
  description: 'Meet our certified master trainers at Kaizen Pilates Academy. Expert instruction in Reformer, Mat Pilates, and specialized programs.',
  keywords: ['pilates', 'trainer', 'kaizen pilates', 'reformer', 'mat pilates', 'indonesia'],
  authors: [{ name: 'Kaizen Pilates Academy' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Kaizen Pilates Academy',
    title: 'Master Trainers | Kaizen Pilates Academy',
    description: 'Meet our certified master trainers at Kaizen Pilates Academy.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Trainers | Kaizen Pilates Academy',
    description: 'Meet our certified master trainers at Kaizen Pilates Academy.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
