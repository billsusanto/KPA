import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTrainerBySlug, getAllTrainers } from '@/data/trainers';
import { TrainerHero } from '@/components/profile/TrainerHero';
import { StatsBar } from '@/components/profile/StatsBar';
import { VideoPlayer } from '@/components/profile/VideoPlayer';
import { Biography } from '@/components/profile/Biography';
import { Certifications } from '@/components/profile/Certifications';
import { ClassOfferings } from '@/components/profile/ClassOfferings';
import { ReviewSection } from '@/components/profile/ReviewSection';
import { ContactCTA } from '@/components/profile/ContactCTA';

interface TrainerPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const trainers = getAllTrainers();
  return trainers.map((trainer) => ({
    slug: trainer.id,
  }));
}

export async function generateMetadata({ params }: TrainerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);

  if (!trainer) {
    return {
      title: 'Trainer Not Found | Kaizen Pilates Academy',
    };
  }

  return {
    title: `${trainer.name} - ${trainer.title} | Kaizen Pilates Academy`,
    description: `${trainer.tagline}. ${trainer.stats.yearsExperience} years of experience. ${trainer.certifications.join(', ')}.`,
    openGraph: {
      title: `${trainer.name} - ${trainer.title}`,
      description: trainer.tagline,
      type: 'profile',
      siteName: 'Kaizen Pilates Academy',
    },
    twitter: {
      card: 'summary',
      title: `${trainer.name} - ${trainer.title}`,
      description: trainer.tagline,
    },
  };
}

export default async function TrainerPage({ params }: TrainerPageProps) {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);

  if (!trainer) {
    notFound();
  }

  return (
    <div>
      <TrainerHero trainer={trainer} />
      <StatsBar stats={trainer.stats} />
      <VideoPlayer
        videoUrl={trainer.introVideo}
        trainerName={trainer.displayName}
      />
      <Biography biography={trainer.biography} name={trainer.displayName} />
      <Certifications
        certifications={trainer.certifications}
        specializations={trainer.specializations}
      />
      <ClassOfferings classOfferings={trainer.classOfferings} />
      <ReviewSection reviews={trainer.reviews} />
      <ContactCTA contact={trainer.contact} trainerName={trainer.name} />
    </div>
  );
}
