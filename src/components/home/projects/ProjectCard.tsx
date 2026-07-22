import { ArrowRight, Award, Clock3, PlayCircle } from 'lucide-react';
import type { Project, ProjectDifficulty } from '../../../constants';
import { handleAnchorClick } from '../../../utils';
import { TiltCard } from '../../ui/TiltCard';
import { ProjectMockup } from './ProjectMockup';

const DIFFICULTY_STYLES: Record<ProjectDifficulty, string> = {
  Beginner: 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300',
  Intermediate: 'border-amber-400/25 bg-amber-500/10 text-amber-300',
  Advanced: 'border-rose-400/25 bg-rose-500/10 text-rose-300',
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isLarge = project.size === 'large';

  return (
    <TiltCard className="group h-full rounded-[28px]">
      <article
        aria-labelledby={`${project.id}-title`}
        className="relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-colors duration-300 group-hover:border-accent-blue-light/30 sm:p-6"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: 'radial-gradient(240px circle at 25% 0%, rgba(59,130,246,0.16), transparent 70%)' }}
        />

        <div className="relative flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${DIFFICULTY_STYLES[project.difficulty]}`}
          >
            {project.difficulty}
          </span>
          <div className="flex items-center gap-1.5">
            {project.hasLiveDemo ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/60">
                <PlayCircle size={11} className="text-accent-blue-light" />
                Live Demo
              </span>
            ) : null}
            {project.hasCertificate ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/60">
                <Award size={11} className="text-purple-300" />
                Certificate
              </span>
            ) : null}
          </div>
        </div>

        <div className={`relative mt-4 min-h-[110px] flex-1 ${isLarge ? 'sm:min-h-[160px]' : ''}`}>
          <ProjectMockup icon={project.icon} large={isLarge} />
        </div>

        <div className="relative mt-5">
          <h3 id={`${project.id}-title`} className={`font-bold text-white ${isLarge ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">{project.description}</p>
        </div>

        <div className="relative mt-3 grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex items-center gap-1.5 pt-1 text-xs text-white/45">
              <Clock3 size={13} />
              {project.duration}
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="translate-y-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/60 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="/courses"
              onClick={(event) => handleAnchorClick(event, '/courses')}
              aria-label={`View ${project.title} project details`}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue-light transition-colors duration-200 hover:text-white focus-visible:text-white"
            >
              View Project
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
