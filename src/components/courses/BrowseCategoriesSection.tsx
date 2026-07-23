import { ArrowRight } from 'lucide-react';
import { getCategoryTheme } from '../../data/categoryTheme';
import type { CategorySummary } from '../../data/courseCatalog';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

type BrowseCategoriesSectionProps = {
  categorySummaries: CategorySummary[];
};

export function BrowseCategoriesSection({ categorySummaries }: BrowseCategoriesSectionProps) {
  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Browse by Category"
          title="Find your domain, then go deep."
          description="Every category below links straight into the full catalog, grouped and ready to filter."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categorySummaries.map((summary, index) => {
          const theme = getCategoryTheme(summary.category);
          const Icon = theme.icon;
          const href = `/courses?category=${encodeURIComponent(summary.category)}`;

          return (
            <Reveal key={summary.category} delay={index * 0.04}>
              <a
                href={href}
                onClick={(event) => handleAnchorClick(event, href)}
                className="surface-card card-hover group flex h-full flex-col gap-5 p-6"
              >
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${theme.iconWrap}`}>
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{summary.category}</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{summary.count} courses</p>
                </div>
                <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium ${theme.text}`}>
                  Browse
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
