import { useMemo, useState } from 'react';
import { FEATURED_COURSES, FEATURED_COURSE_FILTERS } from '../../constants';
import { FeaturedCourseCard } from './FeaturedCourseCard';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function FeaturedCoursesSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof FEATURED_COURSE_FILTERS)[number]>('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return FEATURED_COURSES;
    return FEATURED_COURSES.filter(
      (course) => course.difficulty === activeFilter || course.category === activeFilter,
    );
  }, [activeFilter]);

  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Featured Courses"
          title="The most in-demand AI programs, ready to enroll."
          description="Hand-picked, mentor-led courses with real projects, certificates, and outcomes you can put on a resume."
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
        {FEATURED_COURSE_FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
              activeFilter === filter
                ? 'border-navy bg-navy text-white'
                : 'border-border-soft bg-white text-text-secondary hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((course, index) => (
          <FeaturedCourseCard key={course.id} course={course} delay={Math.min(index, 6) * 0.05} />
        ))}
      </div>
    </section>
  );
}
