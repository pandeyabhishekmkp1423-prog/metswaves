import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LayoutGrid, Search, X } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';
import { ALL_COURSES, getCategorySummaries, groupCoursesByCategory } from '../data/courseCatalog';
import { getCategoryTheme } from '../data/categoryTheme';
import { handleAnchorClick } from '../utils';

export function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category');
  const [query, setQuery] = useState('');

  const categorySummaries = useMemo(() => getCategorySummaries(), []);

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

  const setCategory = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-bg-secondary">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_32%)]" />

        <div className="section-shell relative z-10 pb-10!">
          <Reveal>
            <SectionIntro
              eyebrow="Full Catalog"
              title={`${ALL_COURSES.length} courses across ${categorySummaries.length} categories.`}
              description="Every course and certification offered at Metawaves AI, organized by category so you can browse the whole catalog in one place."
            />
          </Reveal>

          <div className="mt-10 flex items-center gap-2 rounded-[14px] border border-border-soft bg-white px-4 py-3 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:max-w-md">
            <Search size={16} className="flex-none text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search all courses..."
              className="w-full bg-transparent text-sm text-navy placeholder:text-gray-400 outline-none"
            />
            {query ? (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="flex-none text-gray-400 hover:text-navy">
                <X size={15} />
              </button>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                !activeCategory ? 'border-navy bg-navy text-white' : 'border-border-soft bg-white text-text-secondary hover:bg-gray-50'
              }`}
            >
              <LayoutGrid size={14} />
              All Categories
            </button>
            {categorySummaries.map(({ category, count }) => {
              const theme = getCategoryTheme(category);
              const Icon = theme.icon;
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCategory(category)}
                  className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive ? theme.activeChip : 'border-border-soft bg-white text-text-secondary hover:bg-gray-50'
                  }`}
                >
                  <Icon size={14} />
                  {category}
                  <span className="text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {filtered.length === 0 ? (
        <section className="section-shell">
          <div className="surface-card flex flex-col items-center gap-3 p-12 text-center">
            <p className="text-lg text-navy">No courses match your search.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategory(null);
              }}
              className="text-sm font-medium text-accent-blue hover:text-navy"
            >
              Clear filters
            </button>
          </div>
        </section>
      ) : (
        <section className="section-shell pb-32">
          <div className="grid gap-16">
            {groups.map((group) => {
              const theme = getCategoryTheme(group.category);
              const Icon = theme.icon;
              const total = group.subGroups.reduce((sum, sub) => sum + sub.courses.length, 0);

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
                      <span className="text-sm text-text-secondary">{total} courses</span>
                    </div>
                  </Reveal>

                  <div className="mt-8 grid gap-10">
                    {group.subGroups.map((subGroup) => (
                      <div key={subGroup.subCategory ?? '__general'}>
                        {subGroup.subCategory ? (
                          <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${theme.text}`}>{subGroup.subCategory}</p>
                        ) : null}
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                          {subGroup.courses.map((course, index) => (
                            <Reveal key={course.slug} delay={Math.min(index, 6) * 0.04}>
                              <a
                                href={`/courses/${course.slug}`}
                                onClick={(event) => handleAnchorClick(event, `/courses/${course.slug}`)}
                                className={`surface-card card-hover flex h-full flex-col gap-3 border-t-4 p-5 ${theme.topBorder}`}
                              >
                                <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.text}`}>
                                  {subGroup.subCategory ?? course.category}
                                </span>
                                <p className="font-ui text-lg font-semibold text-navy">{course.title}</p>
                                <span className="mt-auto text-sm font-semibold text-navy">{course.price ?? 'Certification Program'}</span>
                              </a>
                            </Reveal>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
