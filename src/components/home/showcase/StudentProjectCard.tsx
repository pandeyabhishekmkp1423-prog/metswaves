import { ArrowUpRight, Award, Eye, Github, Globe } from 'lucide-react';
import type { StudentProject, StudentProjectDifficulty } from '../../../constants';
import { handleAnchorClick } from '../../../utils';
import { MagneticButton } from '../../ui/MagneticButton';
import { TiltCard } from '../../ui/TiltCard';
import { ProjectThumbnail } from './ProjectThumbnail';

const DIFFICULTY_STYLES: Record<StudentProjectDifficulty, string> = {
  Beginner: 'border-emerald-200 bg-emerald-50 text-emerald-600',
  Intermediate: 'border-amber-200 bg-amber-50 text-amber-600',
  Advanced: 'border-rose-200 bg-rose-50 text-rose-600',
};

type StudentProjectCardProps = {
  project: StudentProject;
};

export function StudentProjectCard({ project }: StudentProjectCardProps) {
  const isLarge = project.size === 'large';
  const chips = [...project.technologies, ...project.skills.slice(0, 2)];

  return (
    <TiltCard className="group h-full rounded-[24px]">
      <article
        aria-labelledby={`${project.id}-title`}
        className="surface-card card-hover relative flex h-full flex-col overflow-hidden"
      >
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
            <ProjectThumbnail icon={project.icon} gradient={project.gradient} large={isLarge} />
          </div>

          <span
            className={`absolute left-4 top-4 inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${DIFFICULTY_STYLES[project.difficulty]}`}
          >
            {project.difficulty}
          </span>

          <div className="absolute right-4 top-4 flex items-center gap-1.5">
            {project.hasLivePreview ? (
              <span
                aria-label="Live preview available"
                title="Live preview available"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur-sm"
              >
                <Globe size={13} />
              </span>
            ) : null}
            {project.hasGithub ? (
              <span
                aria-label="GitHub ready"
                title="GitHub ready"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur-sm"
              >
                <Github size={13} />
              </span>
            ) : null}
            {project.hasCertificate ? (
              <span
                aria-label="Certificate included"
                title="Certificate included"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-accent-blue shadow-sm backdrop-blur-sm"
              >
                <Award size={13} />
              </span>
            ) : null}
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/50 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
              <Eye size={18} />
            </span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/40 to-transparent pb-2 pt-6">
            <p className="px-4 text-[10px] text-text-secondary">
              {project.duration} · by <span className="font-medium text-navy">{project.builtBy}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-none flex-col p-4 sm:p-5">
          <h3
            id={`${project.id}-title`}
            className={`font-bold text-navy ${isLarge ? 'text-xl sm:text-2xl' : 'line-clamp-1 text-base'}`}
          >
            {project.title}
          </h3>
          <p className={`mt-1.5 text-sm leading-snug text-text-secondary ${isLarge ? 'line-clamp-2' : 'line-clamp-1'}`}>
            {project.description}
          </p>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="flex flex-wrap gap-1.5 pt-3">
                {chips.map((chip, index) => {
                  const isTech = index < project.technologies.length;
                  return (
                    <span
                      key={chip}
                      className={`translate-y-1 rounded-full border px-2.5 py-1 text-[10px] font-medium opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                        isTech ? 'border-accent-blue/15 bg-accent-blue/8 text-accent-blue' : 'border-border-soft bg-gray-50 text-text-secondary'
                      }`}
                      style={{ transitionDelay: `${index * 45}ms` }}
                    >
                      {chip}
                    </span>
                  );
                })}
              </div>

              <MagneticButton
                href="/courses"
                onClick={(event) => handleAnchorClick(event, '/courses')}
                aria-label={`View ${project.title} project details`}
                className="btn-premium button-glow mt-3 inline-flex w-full items-center justify-center gap-1.5 px-4 py-2 text-xs"
              >
                View Project
                <ArrowUpRight size={13} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
