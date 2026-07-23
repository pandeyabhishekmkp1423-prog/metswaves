import { useEffect, useState } from 'react';
import { List } from 'lucide-react';
import type { TocItem } from '../../data/articleContent';
import { ShareButtons } from './ShareButtons';

type TableOfContentsProps = {
  toc: TocItem[];
  articleTitle: string;
};

export function TableOfContents({ toc, articleTitle }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(toc[0]?.id ?? null);

  useEffect(() => {
    if (toc.length === 0) return;

    const elements = toc
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -70% 0px', threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [toc]);

  const handleJump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (toc.length === 0) return null;

  return (
    <div className="surface-card p-5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
        <List size={14} />
        On This Page
      </div>

      <nav aria-label="Table of contents" className="mt-4 grid gap-0.5 border-l border-border-soft">
        {toc.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleJump(item.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`-ml-px border-l-2 py-1.5 pl-4 text-left text-sm transition-colors duration-200 ${
                isActive
                  ? 'border-accent-blue font-medium text-accent-blue'
                  : 'border-transparent text-text-secondary hover:text-navy'
              }`}
            >
              {item.text}
            </button>
          );
        })}
      </nav>

      <div className="mt-5 border-t border-border-soft pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">Share</p>
        <ShareButtons title={articleTitle} className="mt-3" />
      </div>
    </div>
  );
}
