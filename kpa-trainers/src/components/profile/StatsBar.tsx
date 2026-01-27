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
    <section className="bg-gray-50 py-6">
      <div className="container-mobile">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {statItems.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-gold-500">{stat.value}</div>
              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
