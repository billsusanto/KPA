import Link from 'next/link';
import { MasterTrainer } from '@/types';

interface TrainerCardProps {
  trainer: MasterTrainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <Link href={`/trainers/${trainer.id}`} className="group block">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl text-gray-400">{trainer.name.charAt(0)}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-lg">
            {trainer.name}
          </h3>
          <p className="text-sm text-gray-600 mt-0.5">
            {trainer.title}
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 bg-gold-400/20 text-gold-600 px-2.5 py-1 rounded-full text-xs font-medium">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {trainer.stats.yearsExperience} years experience
          </div>
        </div>
      </article>
    </Link>
  );
}
