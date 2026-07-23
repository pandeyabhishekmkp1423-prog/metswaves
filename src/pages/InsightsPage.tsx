import { useMemo, useState } from 'react';
import { InsightsHero } from '../components/insights/InsightsHero';
import { FeaturedArticle } from '../components/insights/FeaturedArticle';
import { TrendingArticles } from '../components/insights/TrendingArticles';
import { BrowseCategories } from '../components/insights/BrowseCategories';
import { LatestArticlesGrid } from '../components/insights/LatestArticlesGrid';
import { PopularTopics } from '../components/insights/PopularTopics';
import { NewsletterSignup } from '../components/insights/NewsletterSignup';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import {
  ARTICLES,
  ARTICLE_CATEGORIES,
  POPULAR_TOPICS,
  getArticleCounts,
  type ArticleCategory,
} from '../data/insightsContent';

function scrollToLatestArticles() {
  document.querySelector('#latest-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function InsightsPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const counts = useMemo(() => getArticleCounts(), []);
  const featured = useMemo(() => ARTICLES.find((article) => article.featured) ?? ARTICLES[0], []);
  const trending = useMemo(() => ARTICLES.filter((article) => article.trending).slice(0, 4), []);

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return ARTICLES.filter((article) => {
      const matchesCategory = !activeCategory || article.category === activeCategory;
      const matchesTopic = !activeTopic || article.tags.includes(activeTopic);
      const matchesQuery =
        !normalized ||
        article.title.toLowerCase().includes(normalized) ||
        article.excerpt.toLowerCase().includes(normalized) ||
        article.category.toLowerCase().includes(normalized) ||
        article.author.name.toLowerCase().includes(normalized) ||
        article.tags.some((tag) => tag.toLowerCase().includes(normalized));
      return matchesCategory && matchesTopic && matchesQuery;
    });
  }, [activeCategory, activeTopic, query]);

  const hasActiveFilters = Boolean(query.trim() || activeCategory || activeTopic);

  const handleCategorySelect = (category: ArticleCategory | null) => {
    setActiveCategory(category);
    if (category) scrollToLatestArticles();
  };

  const handleTopicSelect = (topic: string | null) => {
    setActiveTopic(topic);
    if (topic) scrollToLatestArticles();
  };

  const clearFilters = () => {
    setQuery('');
    setActiveCategory(null);
    setActiveTopic(null);
  };

  return (
    <>
      <InsightsHero articleCount={ARTICLES.length} query={query} onQueryChange={setQuery} />

      <FeaturedArticle article={featured} />

      <TrendingArticles articles={trending} />

      <BrowseCategories
        categories={ARTICLE_CATEGORIES}
        counts={counts}
        activeCategory={activeCategory}
        onSelect={handleCategorySelect}
      />

      <LatestArticlesGrid articles={filteredArticles} hasActiveFilters={hasActiveFilters} onClearFilters={clearFilters} />

      <PopularTopics topics={POPULAR_TOPICS} activeTopic={activeTopic} onSelect={handleTopicSelect} />

      <NewsletterSignup />

      <CoursesFinalCta />
    </>
  );
}
