import { Metadata } from 'next';
import { Hero } from '@/components/landing/Hero';
import { TrainerGrid } from '@/components/landing/TrainerGrid';
import { getAllTrainers } from '@/data/trainers';

export const metadata: Metadata = {
  description: 'Meet our certified master trainers at Kaizen Pilates Academy. Expert instruction in Reformer, Mat Pilates, and specialized programs.',
  openGraph: {
    title: 'Kaizen Pilates Academy',
    description: 'Discover the dedicated professionals behind Kaizen Pilates Academy.',
    type: 'website',
  },
};

export default function TrainersPage() {
  const trainers = getAllTrainers();

  return (
    <>
      <Hero />
      <TrainerGrid trainers={trainers} />
    </>
  );
}
