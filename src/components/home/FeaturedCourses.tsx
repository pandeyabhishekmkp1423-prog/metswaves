import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_COURSES } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { AuroraBackground } from './featured/AuroraBackground';
import { CategoryChips } from './featured/CategoryChips';
import { CourseCarousel } from './featured/CourseCarousel';

export function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'All') return FEATURED_COURSES;
    return FEATURED_COURSES.filter(
      (course) => course.difficulty === activeCategory || course.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-white py-[60px] sm:py-[70px] md:py-[100px] lg:py-[120px]">
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Featured Courses"
            title="Featured AI Courses"
            description="Learn the most in-demand AI skills through structured, project-based programs built for the future of work."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <CategoryChips active={activeCategory} onChange={setActiveCategory} />
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative z-10 mt-12">
        {filteredCourses.length === 0 ? (
          <div className="mx-auto max-w-[1280px] px-5 text-center sm:px-6 lg:px-8">
            <p className="surface-card mx-auto max-w-md p-8 text-text-secondary">No courses match this filter yet.</p>
          </div>
        ) : (
          <CourseCarousel courses={filteredCourses} />
        )}
      </Reveal>

      <div className="relative z-10 mx-auto mt-16 flex max-w-[1280px] justify-center px-5 sm:px-6 lg:px-8">
        <MagneticButton
          href="/courses"
          onClick={(event) => handleAnchorClick(event, '/courses')}
          className="btn-premium button-glow inline-flex items-center gap-2 px-9 py-4 text-base"
        >
          Explore All Courses
          <ArrowRight size={18} />
        </MagneticButton>
      </div>
    </section>
  );
}
