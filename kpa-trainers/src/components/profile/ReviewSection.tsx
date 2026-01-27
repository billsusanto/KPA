import { Review } from '@/types';
import { ReviewCard } from './ReviewCard';

interface ReviewSectionProps {
  reviews: Review[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container-mobile">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
