import { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  const initials = review.author.split(' ').map(n => n[0]).join('');
  
  return (
    <article 
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10 shadow-xl opacity-0 animate-fade-in-up hover:from-white/[0.12] hover:to-white/[0.07] transition-all duration-300"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-charcoal-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-white/90 text-lg italic leading-relaxed mb-6 font-body">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-charcoal-500 to-charcoal-700 flex items-center justify-center flex-shrink-0 ring-2 ring-white/10">
          <span className="text-white text-sm font-semibold font-display">{initials}</span>
        </div>
        <div>
          <span className="font-medium text-white font-body block">{review.author}</span>
          {review.date && (
            <time className="text-sm text-white/50 font-body">{review.date}</time>
          )}
        </div>
      </footer>
    </article>
  );
}
