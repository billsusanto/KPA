import { Review } from '@/types';
import { ReviewCard } from './ReviewCard';

interface ReviewSectionProps {
  reviews: Review[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
