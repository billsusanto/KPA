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
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-950" />
      
      <div className="container-mobile relative z-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {statItems.map((stat, index) => (
            <div 
              key={stat.label} 
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-5 lg:p-6 text-center border border-white/10 opacity-0 animate-scale-in hover:from-white/15 hover:to-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
              <div className="text-xs lg:text-sm text-white/60 mt-2 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
