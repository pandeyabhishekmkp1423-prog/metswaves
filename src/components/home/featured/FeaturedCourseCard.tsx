import { Award, Clock3, Layers, PlayCircle, Star, Users } from 'lucide-react';
import type { FeaturedCourse } from '../../../constants';
import { handleAnchorClick } from '../../../utils';
import { MagneticButton } from '../../ui/MagneticButton';
import { TiltCard } from '../../ui/TiltCard';

const DIFFICULTY_STYLES: Record<FeaturedCourse['difficulty'], string> = {
  Beginner: 'border-emerald-200 bg-emerald-50 text-emerald-600',
  Intermediate: 'border-amber-200 bg-amber-50 text-amber-600',
  Advanced: 'border-rose-200 bg-rose-50 text-rose-600',
};

const BADGE_STYLES: Record<NonNullable<FeaturedCourse['badge']>, string> = {
  'Best Seller': 'bg-gradient-to-r from-amber-500 to-orange-500',
  New: 'bg-gradient-to-r from-accent-blue to-purple-500',
};

type FeaturedCourseCardProps = {
  course: FeaturedCourse;
};

export function FeaturedCourseCard({ course }: FeaturedCourseCardProps) {
  return (
    <TiltCard className="group h-full w-[300px] flex-none snap-center rounded-[24px] sm:w-[330px] lg:w-[350px]">
      <article
        aria-labelledby={`${course.id}-title`}
        className="surface-card card-hover relative flex h-full flex-col overflow-hidden"
      >
        <div className="relative h-44 w-full flex-none overflow-hidden sm:h-48">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />

          {course.badge ? (
            <span
              className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white shadow-sm ${BADGE_STYLES[course.badge]}`}
            >
              {course.badge}
            </span>
          ) : null}

          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${DIFFICULTY_STYLES[course.difficulty]}`}
            >
              {course.difficulty}
            </span>
            <span className="flex items-center gap-1 text-xs text-text-secondary">
              <Clock3 size={13} />
              {course.duration}
            </span>
          </div>

          <h3 id={`${course.id}-title`} className="mt-4 text-lg font-bold text-navy sm:text-xl">
            {course.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{course.description}</p>

          <p className="mt-3 text-xs text-text-secondary">
            by <span className="font-medium text-navy">{course.instructor}</span>
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border-soft pt-4 text-center">
            <div>
              <p className="flex items-center justify-center gap-1 text-sm font-semibold text-navy">
                <Layers size={13} className="text-gray-400" />
                {course.projects}
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-text-secondary">Projects</p>
            </div>
            <div>
              <p className="flex items-center justify-center gap-1 text-sm font-semibold text-navy">
                <Users size={13} className="text-gray-400" />
                {course.students}
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-text-secondary">Students</p>
            </div>
            <div>
              <p className="flex items-center justify-center gap-1 text-sm font-semibold text-navy">
                <Award size={13} className={course.hasCertificate ? 'text-accent-blue' : 'text-gray-300'} />
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-text-secondary">
                {course.hasCertificate ? 'Certified' : 'No Cert'}
              </p>
            </div>
          </div>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <MagneticButton
                href="/courses"
                onClick={(event) => handleAnchorClick(event, '/courses')}
                aria-label={`View ${course.title} course details`}
                className="btn-premium button-glow mt-4 inline-flex w-full items-center justify-center gap-1.5 px-5 py-3 text-sm"
              >
                View Course
                <PlayCircle size={15} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
