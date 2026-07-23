import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock3, Maximize2, X } from 'lucide-react';
import { getCategoryTheme } from '../../data/categoryTheme';
import type { Article } from '../../data/insightsContent';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

type ArticleHeroProps = {
  article: Article;
};

export function ArticleHero({ article }: ArticleHeroProps) {
  const [zoomed, setZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const theme = getCategoryTheme(article.category);
  const Icon = theme.icon;

  useEscapeKey(() => setZoomed(false), zoomed);
  useClickOutside(modalRef, () => setZoomed(false), zoomed);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className={`pointer-events-none absolute inset-0 ${theme.heroGradient}`} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] opacity-70" />

      <div className="relative z-10 mx-auto max-w-[840px] px-5 pb-10 pt-10 sm:px-6 md:pt-14">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
            <a href="/" onClick={(event) => handleAnchorClick(event, '/')} className="hover:text-navy">
              Home
            </a>
            <span>/</span>
            <a href="/insights" onClick={(event) => handleAnchorClick(event, '/insights')} className="hover:text-navy">
              AI Insights
            </a>
          </nav>

          <span className={`mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] ${theme.iconWrap}`}>
            <Icon size={14} />
            {article.category}
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-[42px]">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">{article.excerpt}</p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="h-12 w-12 flex-none rounded-full object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="text-sm font-medium text-navy">{article.author.name}</p>
              <p className="flex items-center gap-1.5 text-xs text-text-secondary">
                {article.date}
                <span aria-hidden="true">·</span>
                <Clock3 size={12} />
                {article.readTime}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08} className="relative z-10 mx-auto max-w-[840px] px-5 pb-14 sm:px-6">
        <button
          type="button"
          onClick={() => setZoomed(true)}
          aria-label={`View larger image for ${article.title}`}
          className="group relative block w-full overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(16,24,40,0.14)]"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
            <Maximize2 size={16} />
          </span>
        </button>
      </Reveal>

      <AnimatePresence>
        {zoomed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${article.title} — full size image`}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] max-w-5xl"
            >
              <button
                type="button"
                onClick={() => setZoomed(false)}
                aria-label="Close image"
                className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy shadow-lg"
              >
                <X size={16} />
              </button>
              <img
                src={article.image}
                alt={article.title}
                className="max-h-[85vh] w-full rounded-2xl object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
