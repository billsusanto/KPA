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
    <section className="py-10 lg:py-12 bg-cream">
      <div className="container-mobile">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {statItems.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100/50 opacity-0 animate-scale-in hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-2 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
