import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, type ProjectSize } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { GradientCtaButton } from '../nav/GradientCtaButton';
import { Reveal } from '../ui/Reveal';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectsBackground } from './projects/ProjectsBackground';

const SIZE_CLASSES: Record<ProjectSize, string> = {
  large: 'col-span-2 md:row-span-2',
  wide: 'col-span-2',
  tall: 'col-span-1 md:row-span-2',
  small: 'col-span-1',
};

export function BuildRealProjects() {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="relative overflow-hidden bg-[#0b0d16]">
      <ProjectsBackground />

      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-accent-blue-light backdrop-blur-md">
            Project-First Learning
          </span>
          <h2 id={headingId} className="mt-6 font-heading text-[28px] font-bold text-white sm:text-[34px] md:text-[44px]">
            Build{' '}
            <span className="bg-gradient-to-r from-accent-blue-light via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Real AI Projects
            </span>
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            No filler tutorials. Every track ends with a shipped, portfolio-ready build — hover a card to see what's
            inside.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 grid-flow-dense gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-[190px] lg:auto-rows-[210px] lg:gap-6">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05} className={SIZE_CLASSES[project.size]}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 md:mt-20">
          <div className="trust-gradient-border rounded-[32px]">
            <div className="flex flex-col items-center gap-6 rounded-[32px] bg-white/[0.04] px-6 py-10 text-center backdrop-blur-xl sm:px-10 sm:py-12 md:flex-row md:justify-between md:text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue-light">Project Library</p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
                  Every project ships with code, mentorship, and a certificate.
                </h3>
                <p className="mt-3 max-w-xl text-sm text-white/55 sm:text-base">
                  40+ real-world AI builds across every domain — browse the full library and start shipping today.
                </p>
              </div>
              <GradientCtaButton
                href="/courses"
                onClick={(event) => handleAnchorClick(event, '/courses')}
                className="flex-none px-7 py-3.5 text-sm sm:text-base"
              >
                <span className="inline-flex items-center gap-2">
                  Explore Full Project Library
                  <ArrowRight size={16} />
                </span>
              </GradientCtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
