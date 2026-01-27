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
        className="relative bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100/50 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-maroon-500/10 group-hover:-translate-y-2 opacity-0 animate-slide-up"
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="aspect-[4/3] bg-gradient-to-br from-maroon-600 via-maroon-700 to-maroon-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="text-5xl font-display font-bold text-white/90">{initials}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display font-semibold text-gray-900 text-xl group-hover:text-maroon-700 transition-colors duration-300">
            {trainer.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1 font-body">
            {trainer.title}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-gold-50 text-gold-700 px-3 py-1.5 rounded-full text-sm font-medium ring-1 ring-gold-200/50">
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
