import { MasterTrainer } from '@/types';
import { TrainerCard } from './TrainerCard';

interface TrainerGridProps {
  trainers: MasterTrainer[];
}

export function TrainerGrid({ trainers }: TrainerGridProps) {
  return (
    <section className="py-16 lg:py-20 bg-cream-100">
      <div className="container-mobile">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
