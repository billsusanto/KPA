import Link from 'next/link';
import { MasterTrainer } from '@/types';

interface TrainerHeroProps {
  trainer: MasterTrainer;
}

export function TrainerHero({ trainer }: TrainerHeroProps) {
  return (
    <section className="bg-gradient-to-br from-maroon-700 to-maroon-800 pt-4 pb-8">
      <div className="container-mobile">
        <Link
          href="/trainers"
          className="inline-flex items-center gap-1.5 text-maroon-200 hover:text-white transition-colors text-sm mb-6 hover:gap-2.5"
        >
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Trainers
        </Link>

        <div className="aspect-square max-w-[200px] mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-white/20 animate-fade-in">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl text-gray-400">{trainer.name.charAt(0)}</span>
          </div>
        </div>

        <div className="text-center animate-fade-in opacity-0 animation-delay-200" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-2xl font-bold text-white">{trainer.name}</h1>
          <p className="text-maroon-200 mt-1">{trainer.title}</p>
          <p className="text-white/80 text-sm mt-3 italic">&ldquo;{trainer.tagline}&rdquo;</p>

          {(trainer.socialLinks.instagram || trainer.socialLinks.facebook) && (
            <div className="flex justify-center gap-4 mt-4">
              {trainer.socialLinks.instagram && (
                <a
                  href={trainer.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon-200 hover:text-white transition-all duration-200 hover:scale-110"
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
                  className="text-maroon-200 hover:text-white transition-all duration-200 hover:scale-110"
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
