import { useMemo, useState } from 'react';
import { Newspaper } from 'lucide-react';
import type { Article } from '../../data/insightsContent';
import { ArticleCard } from './ArticleCard';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

const PAGE_SIZE = 6;

type LatestArticlesGridProps = {
  articles: Article[];
  hasActiveFilters: boolean;
  onClearFilters: () => void;
};

export function LatestArticlesGrid({ articles, hasActiveFilters, onClearFilters }: LatestArticlesGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visible = useMemo(() => articles.slice(0, visibleCount), [articles, visibleCount]);

  return (
    <section id="latest-articles" className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Latest Articles"
          title="Everything, in one feed."
          description="The full archive of Metawaves AI insights, newest first."
        />
      </Reveal>

      {articles.length === 0 ? (
        <div className="surface-card mt-10 flex flex-col items-center gap-3 p-12 text-center">
          <Newspaper size={28} className="text-gray-300" />
          <p className="text-lg text-navy">No articles match your filters.</p>
          <button type="button" onClick={onClearFilters} className="text-sm font-medium text-accent-blue hover:text-navy">
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((article, index) => (
              <ArticleCard key={article.slug} article={article} delay={Math.min(index, 6) * 0.05} />
            ))}
          </div>

          {visibleCount < articles.length ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="btn-secondary card-hover inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                Load more articles
              </button>
            </div>
          ) : null}
        </>
      )}

      {hasActiveFilters && articles.length > 0 ? (
        <div className="mt-8 flex justify-center">
          <button type="button" onClick={onClearFilters} className="text-sm font-medium text-accent-blue hover:text-navy">
            Clear filters
          </button>
        </div>
      ) : null}
    </section>
  );
}
