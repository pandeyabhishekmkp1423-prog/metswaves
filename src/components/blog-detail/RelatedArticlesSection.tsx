import type { Article } from '../../data/insightsContent';
import { ArticleCard } from '../insights/ArticleCard';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

type RelatedArticlesSectionProps = {
  articles: Article[];
};

export function RelatedArticlesSection({ articles }: RelatedArticlesSectionProps) {
  if (articles.length === 0) return null;

  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Keep Reading"
          title="Related articles"
          description="More from the same category, picked to build on what you just read."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} delay={index * 0.06} />
        ))}
      </div>
    </section>
  );
}
