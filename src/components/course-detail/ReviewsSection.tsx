import { BadgeCheck, Quote, Star } from 'lucide-react';
import type { CourseReview } from '../../data/courseContent';
import { Reveal } from '../ui/Reveal';

type ReviewsSectionProps = {
  reviews: CourseReview[];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <div id="reviews">
      <Reveal>
        <h2 className="text-2xl font-semibold text-navy sm:text-[28px]">Student reviews</h2>
        <p className="mt-2 text-text-secondary">What past students say after finishing this program.</p>
      </Reveal>

      <div className="mt-6 grid gap-4">
        {reviews.map((review, index) => (
          <Reveal key={review.name} delay={index * 0.06}>
            <div className="surface-card card-hover p-6">
              <div className="flex items-start justify-between gap-4">
                <Quote className="flex-none text-accent-blue" size={20} />
                <div className="flex text-amber-500">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-text-secondary">{review.comment}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border-soft pt-5">
                <img
                  src={`https://i.pravatar.cc/150?u=${encodeURIComponent(review.name)}`}
                  alt={review.name}
                  className="h-11 w-11 rounded-full border border-border-soft object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-medium text-navy">{review.name}</p>
                    <BadgeCheck size={14} className="text-accent-blue" aria-label="Verified student" />
                  </div>
                  <p className="text-sm text-text-secondary">{review.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
