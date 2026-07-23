import { ArrowRight } from 'lucide-react';
import type { CourseCatalogEntry } from '../../data/courseCatalog';
import { getCategoryTheme } from '../../data/categoryTheme';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

type RelatedCoursesSectionProps = {
  courses: CourseCatalogEntry[];
};

export function RelatedCoursesSection({ courses }: RelatedCoursesSectionProps) {
  if (courses.length === 0) return null;

  const theme = getCategoryTheme(courses[0].category);
  const CategoryIcon = theme.icon;

  return (
    <section className="section-shell bg-bg-alt">
      <Reveal>
        <div className="flex items-center gap-3.5">
          <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-[14px] border ${theme.iconWrap}`}>
            <CategoryIcon size={20} />
          </span>
          <h2 className="text-2xl font-semibold text-navy">Related courses</h2>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {courses.map((course, index) => {
          const relatedTheme = getCategoryTheme(course.category);
          const RelatedIcon = relatedTheme.icon;
          return (
            <Reveal key={course.slug} delay={index * 0.05}>
              <a
                href={`/courses/${course.slug}`}
                onClick={(event) => handleAnchorClick(event, `/courses/${course.slug}`)}
                className={`surface-card card-hover group flex h-full flex-col gap-3 border-t-4 p-5 ${relatedTheme.topBorder}`}
              >
                <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border ${relatedTheme.iconWrap}`}>
                  <RelatedIcon size={16} />
                </span>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${relatedTheme.text}`}>
                    {course.subCategory ?? course.category}
                  </span>
                  <p className="mt-1 font-ui text-lg font-semibold text-navy">{course.title}</p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-sm font-semibold text-navy">{course.price ?? 'Certification Program'}</span>
                  <ArrowRight size={15} className="text-gray-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-blue" />
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
