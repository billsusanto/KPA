import { MasterTrainer } from '@/types';

export const trainers: MasterTrainer[] = [
  {
    id: 'sarah-tan',
    name: 'Sarah Tan',
    title: 'Senior Master Trainer',
    tagline: 'Transforming lives through mindful movement',
    profileImage: '/KPA/sarah-tan/profile.jpg',
    introVideo: '/KPA/sarah-tan/introductory_video/intro.mp4',
    biography: `Sarah discovered Pilates in 2015 after recovering from a sports injury. What started as rehabilitation became a lifelong passion. She trained under world-renowned instructors in Singapore and Australia before joining Kaizen Pilates Academy.

With over 8 years of teaching experience, Sarah specializes in helping clients recover from injuries, improve posture, and build core strength. Her patient, detail-oriented approach has earned her a loyal following among clients of all fitness levels.

Sarah believes that Pilates is not just exercise—it's a practice of mindfulness that transforms both body and mind.`,
    certifications: [
      'STOTT Pilates Certified',
      'Polestar Pilates',
      'Pre/Postnatal Specialist',
    ],
    specializations: [
      'Reformer',
      'Mat Pilates',
      'Injury Rehabilitation',
      'Senior Fitness',
    ],
    classOfferings: [
      'Private 1-on-1 Sessions',
      'Duet Sessions (2 pax)',
      'Small Group Classes (max 4)',
      'Corporate Wellness Programs',
    ],
    stats: {
      batchesTrained: 10,
      yearsExperience: 8,
      studentsTrained: 500,
      certificationsCount: 3,
    },
    contact: {
      whatsappNumber: '6281234567890',
      whatsappTemplate: "Hi, I'm interested in booking a Pilates session with Sarah Tan at KPA. Could you help me with the available schedule?",
      email: 'info@kaizenpilates.com',
    },
    socialLinks: {
      instagram: 'https://instagram.com/kpa_pilates',
      facebook: 'https://facebook.com/kaizenpilates',
    },
    reviews: [
      {
        id: 1,
        rating: 5,
        text: "Sarah is an amazing instructor! Her attention to detail and patience helped me recover from my back injury. I've been training with her for 2 years now and can't imagine going anywhere else.",
        author: 'Jane D.',
        date: '2025-12',
      },
      {
        id: 2,
        rating: 5,
        text: "Best Pilates trainer I've ever had. Sarah explains every movement clearly and always ensures proper form. Highly recommend for beginners and advanced practitioners alike.",
        author: 'Michael T.',
        date: '2025-11',
      },
      {
        id: 3,
        rating: 5,
        text: "I started Pilates to improve my posture after years of desk work. Sarah's classes have been life-changing. My back pain is gone and I feel stronger than ever!",
        author: 'Lisa W.',
        date: '2025-10',
      },
    ],
  },
];

export function getTrainerBySlug(slug: string): MasterTrainer | undefined {
  return trainers.find((t) => t.id === slug);
}

export function getAllTrainers(): MasterTrainer[] {
  return trainers;
}
