import { Flame } from 'lucide-react';
import type { Article } from '../../data/insightsContent';
import { ArticleCard } from './ArticleCard';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

type TrendingArticlesProps = {
  articles: Article[];
};

export function TrendingArticles({ articles }: TrendingArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-orange-600">
            <Flame size={20} />
          </span>
          <SectionIntro
            eyebrow="Trending Now"
            title="What the community is reading"
            description="The most-read pieces from Metawaves AI this week."
          />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} rank={index + 1} delay={index * 0.06} />
        ))}
      </div>
    </section>
  );
}
