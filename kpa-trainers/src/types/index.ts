export interface MasterTrainer {
  id: string;
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
  introVideo: string;
  biography: string;
  certifications: string[];
  specializations: string[];
  classOfferings: string[];
  stats: TrainerStats;
  contact: TrainerContact;
  socialLinks: SocialLinks;
  reviews: Review[];
}

export interface TrainerStats {
  batchesTrained: number;
  yearsExperience: number;
  studentsTrained: number;
  certificationsCount: number;
}

export interface TrainerContact {
  whatsappNumber: string;
  whatsappTemplate: string;
  email?: string;
  bookingUrl?: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  date?: string;
}
