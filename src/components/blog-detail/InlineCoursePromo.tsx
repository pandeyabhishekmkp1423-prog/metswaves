import { ArrowRight, GraduationCap } from 'lucide-react';
import { getCategoryTheme } from '../../data/categoryTheme';
import type { CourseCatalogEntry } from '../../data/courseCatalog';
import { formatPriceINR, handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

type InlineCoursePromoProps = {
  course: CourseCatalogEntry;
  category: string;
};

export function InlineCoursePromo({ course, category }: InlineCoursePromoProps) {
  const theme = getCategoryTheme(category);
  const Icon = theme.icon;
  const href = `/courses/${course.slug}`;
  const price = formatPriceINR(course.price) ?? 'Certification Program';

  return (
    <Reveal className="my-10">
      <a
        href={href}
        onClick={(event) => handleAnchorClick(event, href)}
        className="trust-gradient-border group block rounded-[24px]"
      >
        <div className="flex flex-col gap-5 rounded-[24px] bg-[linear-gradient(135deg,#eef4ff_0%,#f7f9ff_60%,#eef8ff_100%)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-2xl border ${theme.iconWrap}`}>
              <GraduationCap size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Want to go deeper on {category}?
              </p>
              <p className="mt-1.5 text-lg font-semibold text-navy">{course.title}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-text-secondary">
                <Icon size={13} />
                {category} · {price}
              </p>
            </div>
          </div>

          <span className="btn-premium button-glow inline-flex flex-none items-center justify-center gap-2 px-5 py-3 text-sm">
            View Course
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}
