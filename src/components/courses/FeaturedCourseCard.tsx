import { ArrowRight, Star } from 'lucide-react';
import type { FeaturedCourse, FeaturedCourseDifficulty } from '../../constants';
import { getFeaturedCoursePricing } from '../../data/coursesPageContent';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

const DIFFICULTY_STYLES: Record<FeaturedCourseDifficulty, string> = {
  Beginner: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  Intermediate: 'border-amber-100 bg-amber-50 text-amber-700',
  Advanced: 'border-rose-100 bg-rose-50 text-rose-700',
};

type FeaturedCourseCardProps = {
  course: FeaturedCourse;
  delay?: number;
};

export function FeaturedCourseCard({ course, delay = 0 }: FeaturedCourseCardProps) {
  const pricing = getFeaturedCoursePricing(course);
  const href = '#contact';

  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={href}
        onClick={(event) => handleAnchorClick(event, href)}
        className="surface-card card-hover group flex h-full flex-col overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="h-28 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-32"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          {course.badge ? (
            <span className="absolute left-2 top-2 rounded-full bg-navy/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              {course.badge}
            </span>
          ) : null}
          <span
            className={`absolute right-2 top-2 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${DIFFICULTY_STYLES[course.difficulty]}`}
          >
            {course.difficulty}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-4">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-accent-blue">{course.category}</span>
          <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-navy sm:text-base">{course.title}</h3>

          <div className="mt-1.5 flex items-center gap-1 text-xs text-text-secondary">
            <span>{course.duration}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-0.5 text-amber-500">
              <Star size={11} className="fill-current" />
              {course.rating}
            </span>
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 border-t border-border-soft pt-2.5">
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold text-navy sm:text-base">{pricing.price}</span>
              {pricing.originalPrice ? (
                <span className="text-[11px] text-gray-400 line-through">{pricing.originalPrice}</span>
              ) : null}
            </div>
            <span className="btn-premium button-glow flex h-7 w-7 flex-none items-center justify-center rounded-full">
              <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
