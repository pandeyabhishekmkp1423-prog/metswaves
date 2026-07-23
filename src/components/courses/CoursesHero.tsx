import { LayoutGrid, Search, X } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { getCategoryTheme } from '../../data/categoryTheme';
import type { CategorySummary } from '../../data/courseCatalog';

type CoursesHeroProps = {
  totalCourses: number;
  categorySummaries: CategorySummary[];
  query: string;
  onQueryChange: (value: string) => void;
  activeCategory: string | null;
  onCategorySelect: (category: string | null) => void;
};

export function CoursesHero({
  totalCourses,
  categorySummaries,
  query,
  onQueryChange,
  activeCategory,
  onCategorySelect,
}: CoursesHeroProps) {
  const popularCategories = categorySummaries.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_38%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.10),transparent_36%),radial-gradient(circle_at_bottom,rgba(96,165,250,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] opacity-70" />

      <div className="section-shell relative z-10 pt-16! pb-14! md:pt-20! md:pb-16!">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Course Catalog · {totalCourses}+ programs</span>
          <h1 className="mt-6 text-[34px] font-bold leading-[1.1] text-navy sm:text-[44px] md:text-[56px]">
            Every AI skill you need,
            <br className="hidden sm:block" /> in one catalog.
          </h1>
          <p className="mt-6 text-base text-text-secondary md:text-lg">
            Project-based courses across generative AI, agents, automation, data science, and design — built with
            mentors, certificates, and career support baked in from day one.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
          <div className="surface-card flex items-center gap-3 rounded-full border-border-soft px-5 py-4 shadow-[0_8px_30px_rgba(16,24,40,0.08)] transition focus-within:border-accent-blue/40 focus-within:ring-2 focus-within:ring-accent-blue/15">
            <Search size={19} className="flex-none text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search courses, skills, or instructors..."
              aria-label="Search courses"
              className="w-full bg-transparent text-base text-navy placeholder:text-gray-400 outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search"
                className="flex-none text-gray-400 hover:text-navy"
              >
                <X size={17} />
              </button>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={() => onCategorySelect(null)}
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
              !activeCategory
                ? 'border-navy bg-navy text-white'
                : 'border-border-soft bg-white text-text-secondary hover:bg-gray-50'
            }`}
          >
            <LayoutGrid size={14} />
            All Categories
          </button>
          {popularCategories.map(({ category, count }) => {
            const theme = getCategoryTheme(category);
            const Icon = theme.icon;
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategorySelect(category)}
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
        </Reveal>
      </div>
    </section>
  );
}
