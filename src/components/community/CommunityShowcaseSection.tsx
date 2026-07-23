import { ArrowRight } from 'lucide-react';
import { STUDENT_PROJECTS } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { StudentProjectCard } from '../home/showcase/StudentProjectCard';

export function CommunityShowcaseSection() {
  const featured = STUDENT_PROJECTS.slice(0, 6);

  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Student Showcase"
          title="Posted in #showcase this month."
          description="A small sample of what community members have shipped and shared for feedback recently."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, index) => (
          <Reveal key={project.id} delay={Math.min(index, 6) * 0.06} className="h-[320px]">
            <StudentProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14 flex justify-center">
        <MagneticButton
          href="#contact"
          onClick={(event) => handleAnchorClick(event, '#contact')}
          className="btn-premium button-glow inline-flex items-center gap-2 px-9 py-4 text-base"
        >
          Share Your Own Project
          <ArrowRight size={18} />
        </MagneticButton>
      </Reveal>
    </section>
  );
}
