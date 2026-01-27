import { Hero } from '@/components/landing/Hero';
import { TrainerGrid } from '@/components/landing/TrainerGrid';
import { getAllTrainers } from '@/data/trainers';

export default function TrainersPage() {
  const trainers = getAllTrainers();

  return (
    <>
      <Hero />
      <TrainerGrid trainers={trainers} />
    </>
  );
}
