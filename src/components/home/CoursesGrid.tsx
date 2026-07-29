import { ArrowRight, Star } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';
import { COURSES } from '../../constants';
import { handleAnchorClick } from '../../utils';

type CoursesGridProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export function CoursesGrid({ query, onQueryChange }: CoursesGridProps) {
  const normalized = query.trim().toLowerCase();
  const filteredCourses = normalized
    ? COURSES.filter(
        (course) =>
          course.title.toLowerCase().includes(normalized) ||
          course.tag.toLowerCase().includes(normalized) ||
          course.instructor.toLowerCase().includes(normalized),
      )
    : COURSES;

  return (
    <section id="courses" className="section-shell bg-bg-alt">
      <Reveal>
        <SectionIntro
          eyebrow="Courses"
          title="Modular programs with premium interaction design and serious depth."
          description="Each card carries motion, hierarchy, and depth to reinforce that these are high-value learning products rather than commodity classes."
        />
      </Reveal>

      {filteredCourses.length === 0 ? (
        <div className="surface-card mt-14 flex flex-col items-center gap-3 p-12 text-center">
          <img src="/avatar.png" alt="" aria-hidden="true" className="h-32 w-auto object-contain" />
          <p className="mt-1 text-lg text-navy">No courses match "{query}"</p>
          <button type="button" onClick={() => onQueryChange('')} className="text-sm font-medium text-accent-blue hover:text-navy">
            Clear search
          </button>
        </div>
      ) : (
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Reveal key={course.id} delay={index * 0.05}>
                <TiltCard className="surface-card card-hover flex h-full flex-col p-3">
                  <div className="relative overflow-hidden rounded-[16px]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <span className="badge-pill absolute left-4 top-4 border-white/15 bg-navy/75 text-white">{course.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.24em] text-text-secondary">{course.level}</span>
                      <div className="icon-chip h-11 w-11">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-navy">{course.title}</h3>
                    <p className="mt-3 text-text-secondary">{course.description}</p>
                    <p className="mt-4 text-sm text-text-secondary">
                      by <span className="text-navy">{course.instructor}</span>
                    </p>
                    <div className="mt-5 flex items-center justify-between text-sm text-text-secondary">
                      <span>{course.duration}</span>
                      <span className="flex items-center gap-1 text-amber-500">
                        <Star size={14} className="fill-current" />
                        {course.rating}
                      </span>
                      <span>{course.students}</span>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-border-soft pt-5">
                      <span className="text-xl font-semibold text-navy">{course.price}</span>
                      <MagneticButton
                        href={`/courses/${course.id}`}
                        onClick={(event) => handleAnchorClick(event, `/courses/${course.id}`)}
                        className="btn-premium button-glow inline-flex items-center gap-1.5 px-4 py-2.5 text-sm"
                      >
                        View Course
                        <ArrowRight size={14} />
                      </MagneticButton>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
}
