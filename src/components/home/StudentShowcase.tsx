import { ArrowRight } from 'lucide-react';
import { STUDENT_PROJECTS, type StudentProjectSize } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { ShowcaseBackground } from './showcase/ShowcaseBackground';
import { StudentProjectCard } from './showcase/StudentProjectCard';

const SIZE_CLASSES: Record<StudentProjectSize, string> = {
  large: 'col-span-2 md:row-span-2',
  wide: 'col-span-2',
  tall: 'col-span-1 md:row-span-2',
  small: 'col-span-1',
};

export function StudentShowcase() {
  return (
    <section className="relative overflow-hidden bg-white">
      <ShowcaseBackground />

      <div className="section-shell relative z-10">
        <Reveal>
          <SectionIntro
            eyebrow="Student Showcase"
            title="Build Portfolio Projects That Employers Actually Want to See"
            description="Every course ships with production-ready projects students can showcase professionally — real products, not toy demos."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 grid-flow-dense gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-[220px] lg:auto-rows-[240px] lg:gap-6">
          {STUDENT_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05} className={SIZE_CLASSES[project.size]}>
              <StudentProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <MagneticButton
            href="/courses"
            onClick={(event) => handleAnchorClick(event, '/courses')}
            className="btn-premium button-glow inline-flex items-center gap-2 px-9 py-4 text-base"
          >
            Explore All Projects
            <ArrowRight size={18} />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
