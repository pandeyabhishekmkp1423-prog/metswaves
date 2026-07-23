import { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { ALL_COURSES, groupCoursesByCategory } from '../../data/courseCatalog';
import { getCategoryTheme } from '../../data/categoryTheme';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

type CourseCatalogBrowserProps = {
  query: string;
  activeCategory: string | null;
  onClearFilters: () => void;
};

export function CourseCatalogBrowser({ query, activeCategory, onClearFilters }: CourseCatalogBrowserProps) {
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return ALL_COURSES.filter((course) => {
      const matchesCategory = !activeCategory || course.category === activeCategory;
      const matchesQuery =
        !normalized ||
        course.title.toLowerCase().includes(normalized) ||
        course.category.toLowerCase().includes(normalized) ||
        (course.subCategory ?? '').toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const groups = useMemo(() => groupCoursesByCategory(filtered), [filtered]);

  if (filtered.length === 0) {
    return (
      <section className="section-shell bg-white">
        <div className="surface-card flex flex-col items-center gap-3 p-12 text-center">
          <p className="text-lg text-navy">No courses match your search.</p>
          <button type="button" onClick={onClearFilters} className="text-sm font-medium text-accent-blue hover:text-navy">
            Clear filters
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-28 pt-4 sm:px-6 lg:px-8">
      <div className="grid gap-12">
        {groups.map((group) => {
          const theme = getCategoryTheme(group.category);
          const Icon = theme.icon;
          const courses = group.subGroups.flatMap((sub) => sub.courses);

          return (
            <div key={group.category} id={group.category.toLowerCase().replace(/\s+/g, '-')}>
              <Reveal>
                <div className="flex items-center justify-between gap-4 border-b border-border-soft pb-4">
                  <div className="flex items-center gap-3.5">
                    <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-[14px] border ${theme.iconWrap}`}>
                      <Icon size={20} />
                    </span>
                    <h2 className="text-2xl font-semibold text-navy">{group.category}</h2>
                  </div>
                  <span className="text-sm text-text-secondary">{courses.length} courses</span>
                </div>
              </Reveal>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {courses.map((course, index) => (
                  <Reveal key={course.slug} delay={Math.min(index, 7) * 0.03}>
                    <a
                      href={`/courses/${course.slug}`}
                      onClick={(event) => handleAnchorClick(event, `/courses/${course.slug}`)}
                      className={`surface-card card-hover group flex h-full flex-col gap-3 border-t-4 p-5 ${theme.topBorder}`}
                    >
                      <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border ${theme.iconWrap}`}>
                        <Icon size={16} />
                      </span>
                      <div>
                        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.text}`}>
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
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
