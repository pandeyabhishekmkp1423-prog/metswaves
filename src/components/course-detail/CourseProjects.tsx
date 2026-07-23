import type { CategoryTheme } from '../../data/categoryTheme';
import type { CourseProject } from '../../data/courseContent';
import { Reveal } from '../ui/Reveal';

const DIFFICULTY_STYLES: Record<CourseProject['difficulty'], string> = {
  Beginner: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  Intermediate: 'border-amber-100 bg-amber-50 text-amber-700',
  Advanced: 'border-rose-100 bg-rose-50 text-rose-700',
};

type CourseProjectsProps = {
  projects: CourseProject[];
  theme: CategoryTheme;
};

export function CourseProjects({ projects, theme }: CourseProjectsProps) {
  return (
    <div id="projects">
      <Reveal>
        <h2 className="text-2xl font-semibold text-navy sm:text-[28px]">Projects you'll build</h2>
        <p className="mt-2 text-text-secondary">Portfolio-ready work that proves what you can actually do.</p>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.title} delay={index * 0.06}>
              <div className="surface-card card-hover flex h-full flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${theme.iconWrap}`}>
                    <Icon size={20} />
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${DIFFICULTY_STYLES[project.difficulty]}`}
                  >
                    {project.difficulty}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{project.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
