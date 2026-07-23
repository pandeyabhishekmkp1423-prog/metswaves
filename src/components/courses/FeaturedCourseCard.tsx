import { ArrowRight, Award, Clock3, Layers, Star } from 'lucide-react';
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
            className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          {course.badge ? (
            <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              {course.badge}
            </span>
          ) : null}
          <span
            className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${DIFFICULTY_STYLES[course.difficulty]}`}
          >
            {course.difficulty}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">{course.category}</span>
          <h3 className="mt-2 text-xl font-semibold text-navy">{course.title}</h3>
          <p className="mt-2.5 line-clamp-2 text-sm text-text-secondary">{course.description}</p>

          <p className="mt-4 text-sm text-text-secondary">
            by <span className="font-medium text-navy">{course.instructor}</span>
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-secondary">
            <span className="flex items-center gap-1.5">
              <Clock3 size={13} className="text-gray-400" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Layers size={13} className="text-gray-400" />
              {course.projects} projects
            </span>
            {course.hasCertificate ? (
              <span className="flex items-center gap-1.5">
                <Award size={13} className="text-gray-400" />
                Certificate
              </span>
            ) : null}
            <span className="flex items-center gap-1 text-amber-500">
              <Star size={13} className="fill-current" />
              {course.rating}
            </span>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border-soft pt-5">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-navy">{pricing.price}</span>
              {pricing.originalPrice ? (
                <span className="text-sm text-gray-400 line-through">{pricing.originalPrice}</span>
              ) : null}
            </div>
            <span className="btn-premium button-glow inline-flex items-center gap-1.5 px-4 py-2.5 text-sm">
              Enroll
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
