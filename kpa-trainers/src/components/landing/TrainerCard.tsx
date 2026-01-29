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
