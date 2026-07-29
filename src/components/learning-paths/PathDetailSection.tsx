import { ArrowRight, BookOpen, Check, Clock3, Target } from 'lucide-react';
import { getCategoryTheme } from '../../data/categoryTheme';
import type { EnrichedLearningPath } from '../../data/learningPathsPageContent';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';

type PathDetailSectionProps = {
  path: EnrichedLearningPath;
  index: number;
};

export function PathDetailSection({ path, index }: PathDetailSectionProps) {
  const Icon = path.icon;
  const reversed = index % 2 === 1;
  const browseHref = `/courses?category=${encodeURIComponent(path.categories[0])}`;

  return (
    <section
      id={index === 0 ? 'paths' : undefined}
      className={`section-shell ${index % 2 === 0 ? 'bg-white' : 'bg-bg-secondary'}`}
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className={reversed ? 'lg:order-2' : undefined}>
          <div className="relative overflow-hidden rounded-[24px]">
            <img
              src={path.image}
              alt=""
              className="h-[340px] w-full object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,39,0)_45%,rgba(7,19,39,0.6)_100%)]" />
            <div
              className={`absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${path.gradient} text-white shadow-lg`}
            >
              <Icon size={24} />
            </div>
            <span className="badge-pill absolute bottom-6 left-6 border-white/15 bg-navy/75 text-white">
              Path {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={reversed ? 'lg:order-1' : undefined}>
          <span className="eyebrow">{path.careerOutcome}</span>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">{path.title}</h2>
          <p className="mt-4 text-text-secondary">{path.description}</p>
          <p className="mt-3 text-sm text-text-secondary">
            <span className="font-medium text-navy">Who it's for:</span> {path.audience}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-text-secondary">
            <span className="flex items-center gap-2">
              <Clock3 size={16} className="text-accent-blue" />
              {path.duration}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen size={16} className="text-accent-blue" />
              {path.courseCount}+ courses
            </span>
            <span className="flex items-center gap-2">
              <Target size={16} className="text-accent-blue" />
              {path.careerOutcome}
            </span>
          </div>

          <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {path.skills.map((skill) => (
              <div key={skill} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <Check size={16} className="mt-0.5 flex-none text-accent-blue" />
                {skill}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">Path milestones</p>
            <ol className="mt-4 space-y-3">
              {path.milestones.map((milestone, milestoneIndex) => (
                <li key={milestone} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="icon-chip h-7 w-7 flex-none text-xs font-semibold">{milestoneIndex + 1}</span>
                  <span className="pt-0.5">{milestone}</span>
                </li>
              ))}
            </ol>
          </div>

          <MagneticButton
            href={browseHref}
            onClick={(event) => handleAnchorClick(event, browseHref)}
            className="btn-premium button-glow mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm"
          >
            Start This Path
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </div>

      {path.courses.length > 0 ? (
        <Reveal delay={0.12} className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">Courses in this path</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {path.courses.map((course) => {
              const theme = getCategoryTheme(course.category);
              const CourseIcon = theme.icon;
              return (
                <a
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  onClick={(event) => handleAnchorClick(event, `/courses/${course.slug}`)}
                  className={`surface-card card-hover group flex h-full flex-col gap-3 border-t-4 p-5 ${theme.topBorder}`}
                >
                  <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border ${theme.iconWrap}`}>
                    <CourseIcon size={16} />
                  </span>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.text}`}>
                      {course.subCategory ?? course.category}
                    </span>
                    <p className="mt-1 font-ui text-base font-semibold text-navy">{course.title}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-sm font-semibold text-navy">{course.price ?? 'Certification Program'}</span>
                    <ArrowRight size={15} className="text-gray-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-blue" />
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
