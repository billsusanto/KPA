import { Review } from '@/types';
import { ReviewCard } from './ReviewCard';

interface ReviewSectionProps {
  reviews: Review[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-cream-100">
      <div className="container-mobile">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fusion-500/10 border border-fusion-500/20 mb-4">
            <svg className="w-4 h-4 text-fusion-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-fusion-700 text-sm font-body font-medium">Student Reviews</span>
          </div>
          
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-fusion-900">
            What Students Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
