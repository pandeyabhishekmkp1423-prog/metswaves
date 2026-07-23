import { Clock3, Rocket } from 'lucide-react';
import type { Project, ProjectDifficulty } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

const DIFFICULTY_STYLES: Record<ProjectDifficulty, string> = {
  Beginner: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  Intermediate: 'border-amber-100 bg-amber-50 text-amber-700',
  Advanced: 'border-rose-100 bg-rose-50 text-rose-700',
};

type RelatedProjectsSectionProps = {
  projects: Project[];
};

export function RelatedProjectsSection({ projects }: RelatedProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <div id="related-projects">
      <div className="flex items-center gap-2.5">
        <Rocket size={18} className="text-accent-blue" />
        <h2 className="text-2xl font-bold text-navy sm:text-[26px]">Put it into practice</h2>
      </div>
      <p className="mt-2 text-text-secondary">Projects that apply the ideas from this article.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.id} delay={index * 0.06}>
              <a
                href="/courses"
                onClick={(event) => handleAnchorClick(event, '/courses')}
                className="surface-card card-hover group flex h-full flex-col gap-4 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="icon-chip h-11 w-11">
                    <Icon size={20} />
                  </span>
                  <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${DIFFICULTY_STYLES[project.difficulty]}`}>
                    {project.difficulty}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{project.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <Clock3 size={12} />
                  {project.duration}
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
