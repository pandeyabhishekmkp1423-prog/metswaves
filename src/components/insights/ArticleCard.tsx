import { Clock3 } from 'lucide-react';
import { getCategoryTheme } from '../../data/categoryTheme';
import type { Article } from '../../data/insightsContent';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

type ArticleCardProps = {
  article: Article;
  delay?: number;
  rank?: number;
};

export function ArticleCard({ article, delay = 0, rank }: ArticleCardProps) {
  const theme = getCategoryTheme(article.category);
  const Icon = theme.icon;
  const href = `/insights/${article.slug}`;

  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={href}
        onClick={(event) => handleAnchorClick(event, href)}
        className="surface-card card-hover group flex h-full flex-col overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          {rank ? (
            <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-navy/80 text-sm font-semibold text-white backdrop-blur-sm">
              {String(rank).padStart(2, '0')}
            </span>
          ) : null}
          <span className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${theme.iconWrap}`}>
            <Icon size={12} />
            {article.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold leading-snug text-navy transition-colors duration-200 group-hover:text-accent-blue">
            {article.title}
          </h3>
          <p className="mt-2.5 line-clamp-2 text-sm text-text-secondary">{article.excerpt}</p>

          <div className="mt-5 flex items-center gap-3 border-t border-border-soft pt-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="h-9 w-9 flex-none rounded-full object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-navy">{article.author.name}</p>
              <p className="text-xs text-text-secondary">{article.date}</p>
            </div>
            <span className="flex flex-none items-center gap-1 text-xs text-text-secondary">
              <Clock3 size={12} />
              {article.readTime}
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
