import { ArrowRight } from 'lucide-react';
import { AuroraBackground } from '../home/featured/AuroraBackground';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';

export function LearningPathsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <AuroraBackground />

      <div className="section-shell relative z-10 pt-16! pb-14! md:pt-20! md:pb-16!">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Learning Paths</span>
          <h1 className="mt-6 text-[34px] font-bold leading-[1.1] text-navy sm:text-[44px] md:text-[56px]">
            Pick a destination. We'll build the curriculum around it.
          </h1>
          <p className="mt-6 text-base text-text-secondary md:text-lg">
            A learning path is a structured, multi-course track with a clear finish line — not a pile of unrelated
            videos. Every path bundles the courses, projects, and mentor checkpoints you need to reach one specific
            career outcome.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#paths"
              onClick={(event) => handleAnchorClick(event, '#paths')}
              className="btn-premium button-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm"
            >
              Explore the 5 Paths
              <ArrowRight size={16} />
            </a>
            <MagneticButton
              href="/courses"
              onClick={(event) => handleAnchorClick(event, '/courses')}
              className="btn-secondary card-hover inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
            >
              Browse All Courses
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
