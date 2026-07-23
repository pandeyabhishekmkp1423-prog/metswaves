import { ArrowRight } from 'lucide-react';
import { getCategoryTheme } from '../../data/categoryTheme';
import type { Article } from '../../data/insightsContent';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

type FeaturedArticleProps = {
  article: Article;
};

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const theme = getCategoryTheme(article.category);
  const Icon = theme.icon;
  const href = `/insights/${article.slug}`;

  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro eyebrow="Editor's Pick" title="Featured Article" description="The story shaping this week's AI conversation." />
      </Reveal>

      <Reveal delay={0.08}>
        <a
          href={href}
          onClick={(event) => handleAnchorClick(event, href)}
          className="surface-card card-hover group mt-10 grid overflow-hidden md:grid-cols-2"
        >
          <div className="relative h-64 overflow-hidden md:h-full">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,39,0)_40%,rgba(7,19,39,0.5)_100%)] md:hidden" />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${theme.iconWrap}`}>
              <Icon size={13} />
              {article.category}
            </span>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-navy sm:text-[28px]">{article.title}</h3>
            <p className="mt-4 text-text-secondary">{article.excerpt}</p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-11 w-11 flex-none rounded-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-medium text-navy">{article.author.name}</p>
                <p className="text-xs text-text-secondary">
                  {article.date} · {article.readTime}
                </p>
              </div>
            </div>

            <span className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-navy">
              Read Article
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </a>
      </Reveal>
    </section>
  );
}
