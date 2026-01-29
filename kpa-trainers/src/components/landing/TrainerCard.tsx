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
        className="relative bg-cream-50 rounded-2xl overflow-hidden shadow-md border border-cream-300/50 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-fusion-900/20 group-hover:-translate-y-2 opacity-0 animate-slide-up"
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-fusion-500 to-fusion-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="aspect-square bg-gradient-to-br from-fusion-100 via-cream-200 to-fusion-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fusion-400/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="text-5xl font-display font-bold text-fusion-700">{initials}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display font-semibold text-fusion-900 text-xl group-hover:text-fusion-700 transition-colors duration-300">
            {trainer.name}
          </h3>
          <p className="text-sm text-fusion-600 mt-1 font-body">
            {trainer.title}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-fusion-500/10 text-fusion-700 px-3 py-1.5 rounded-full text-sm font-medium ring-1 ring-fusion-500/20">
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
