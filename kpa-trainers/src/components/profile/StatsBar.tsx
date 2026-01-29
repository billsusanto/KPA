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
      <div className="absolute inset-0 bg-cream-100" />
      
      <div className="container-mobile relative z-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {statItems.map((stat, index) => (
            <div 
              key={stat.label} 
              className="group bg-cream-50 rounded-2xl p-5 lg:p-6 text-center border border-cream-300 opacity-0 animate-scale-in hover:shadow-xl hover:shadow-fusion-900/10 hover:border-fusion-400/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-fusion-800 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
              <div className="text-xs lg:text-sm text-fusion-600 mt-2 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
