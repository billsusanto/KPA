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
    <section className="py-10 lg:py-12 bg-charcoal-800">
      <div className="container-mobile">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {statItems.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-charcoal-700/50 rounded-2xl p-6 text-center shadow-sm border border-charcoal-600/30 opacity-0 animate-scale-in hover:shadow-md hover:bg-charcoal-700/70 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60 mt-2 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
