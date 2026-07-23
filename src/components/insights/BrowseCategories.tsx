import { getCategoryTheme } from '../../data/categoryTheme';
import type { ArticleCategory } from '../../data/insightsContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

type BrowseCategoriesProps = {
  categories: ArticleCategory[];
  counts: Record<ArticleCategory, number>;
  activeCategory: ArticleCategory | null;
  onSelect: (category: ArticleCategory | null) => void;
};

export function BrowseCategories({ categories, counts, activeCategory, onSelect }: BrowseCategoriesProps) {
  return (
    <section id="categories" className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Browse Categories"
          title="Read by the topic you care about."
          description="Every category filters the article feed below — click again to clear it."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((category, index) => {
          const theme = getCategoryTheme(category);
          const Icon = theme.icon;
          const isActive = activeCategory === category;

          return (
            <Reveal key={category} delay={index * 0.05}>
              <button
                type="button"
                onClick={() => onSelect(isActive ? null : category)}
                aria-pressed={isActive}
                className={`card-hover flex w-full flex-col items-start gap-4 rounded-premium border p-5 text-left transition-colors duration-200 ${
                  isActive ? theme.activeChip : 'border-border-soft bg-white'
                }`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${theme.iconWrap}`}>
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-semibold text-navy">{category}</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {counts[category] ?? 0} {counts[category] === 1 ? 'article' : 'articles'}
                  </p>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
