import { ArrowUpRight, Clock3 } from 'lucide-react';
import { PROJECTS, type ProjectDifficulty } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

const DIFFICULTY_STYLES: Record<ProjectDifficulty, string> = {
  Beginner: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  Intermediate: 'border-amber-100 bg-amber-50 text-amber-700',
  Advanced: 'border-rose-100 bg-rose-50 text-rose-700',
};

export function ProjectsShowcaseSection() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Projects You'll Build"
          title="Real AI applications, not toy exercises."
          description="Every track ends in a shipped, portfolio-ready build. These are a sample of the real applications students take home."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.id} delay={Math.min(index, 6) * 0.05}>
              <a
                href="/courses"
                onClick={(event) => handleAnchorClick(event, '/courses')}
                className="surface-card card-hover group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="icon-chip h-12 w-12">
                    <Icon size={22} />
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${DIFFICULTY_STYLES[project.difficulty]}`}
                  >
                    {project.difficulty}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-navy">{project.title}</h3>
                <p className="mt-2.5 text-sm text-text-secondary">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border-soft pt-5">
                  <span className="flex items-center gap-1.5 text-sm text-text-secondary">
                    <Clock3 size={14} className="text-gray-400" />
                    {project.duration}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-accent-blue">
                    View
                    <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
