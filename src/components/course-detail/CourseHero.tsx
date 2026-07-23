import { Clock3, GraduationCap, Layers, Star } from 'lucide-react';
import type { CategoryTheme } from '../../data/categoryTheme';
import type { CourseCatalogEntry } from '../../data/courseCatalog';
import type { GeneratedCourseContent } from '../../data/courseContent';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

type CourseHeroProps = {
  entry: CourseCatalogEntry;
  content: GeneratedCourseContent;
  theme: CategoryTheme;
};

export function CourseHero({ entry, content, theme }: CourseHeroProps) {
  const CategoryIcon = theme.icon;
  const categoryHref = `/courses?category=${encodeURIComponent(entry.category)}`;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className={`pointer-events-none absolute inset-0 ${theme.heroGradient}`} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] opacity-70" />

      <div className="section-shell relative z-10 pb-10! pt-10! md:pt-14!">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
            <a href="/" onClick={(event) => handleAnchorClick(event, '/')} className="hover:text-navy">
              Home
            </a>
            <span>/</span>
            <a href="/courses" onClick={(event) => handleAnchorClick(event, '/courses')} className="hover:text-navy">
              Courses
            </a>
            <span>/</span>
            <a href={categoryHref} onClick={(event) => handleAnchorClick(event, categoryHref)} className="text-navy hover:text-accent-blue">
              {entry.category}
            </a>
          </nav>

          <span className={`mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] ${theme.iconWrap}`}>
            <CategoryIcon size={14} />
            {content.tagline}
          </span>

          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[44px]">
            {entry.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-secondary md:text-lg">{content.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-secondary">
            <span className="flex items-center gap-2">
              <GraduationCap size={16} className="text-accent-blue" />
              {content.level}
            </span>
            <span className="flex items-center gap-2">
              <Clock3 size={16} className="text-accent-blue" />
              {content.duration}
            </span>
            <span className="flex items-center gap-2">
              <Layers size={16} className="text-accent-blue" />
              {content.format}
            </span>
            {entry.rating ? (
              <span className="flex items-center gap-1.5 text-amber-500">
                <Star size={15} className="fill-current" />
                <span className="text-navy">{entry.rating}</span>
                {entry.students ? <span className="text-text-secondary">· {entry.students} students</span> : null}
              </span>
            ) : null}
          </div>

          <p className="mt-5 text-sm text-text-secondary">
            Taught by <span className="font-medium text-navy">{content.instructor.name}</span> · {content.instructor.role}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
