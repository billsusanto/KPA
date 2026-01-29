import Link from 'next/link';
import { MasterTrainer } from '@/types';

interface TrainerHeroProps {
  trainer: MasterTrainer;
}

export function TrainerHero({ trainer }: TrainerHeroProps) {
  const initials = trainer.name.split(' ').map(n => n[0]).join('');
  
  return (
    <section className="relative bg-charcoal-950 pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg-kaizen.jpg)' }}
      />
      
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
