import { useEffect, useRef, useState } from 'react';
import type { LearningDomain } from '../../../constants';

type DomainCarouselProps = {
  domains: LearningDomain[];
  onActiveChange?: (domain: LearningDomain) => void;
};

export function DomainCarousel({ domains, onActiveChange }: DomainCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce(
          (best, entry) => (entry.intersectionRatio > (best?.intersectionRatio ?? 0) ? entry : best),
          entries[0],
        );
        if (mostVisible && mostVisible.intersectionRatio > 0.6) {
          const index = cardRefs.current.findIndex((el) => el === mostVisible.target);
          if (index >= 0) {
            setActiveIndex(index);
            onActiveChange?.(domains[index]);
          }
        }
      },
      { root: container, threshold: [0.6, 0.75, 0.9] },
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [domains, onActiveChange]);

  return (
    <div>
      <div
        ref={containerRef}
        role="region"
        aria-label="AI learning domains"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="trust-gradient-border w-[78vw] max-w-[300px] flex-none snap-center rounded-[28px]"
            >
              <div className="flex h-full flex-col rounded-[28px] bg-white/[0.04] p-5 backdrop-blur-xl">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/25 to-purple-500/25 text-accent-blue-light">
                  <Icon size={20} />
                </span>
                <p className="mt-3 text-base font-bold text-white">{domain.label}</p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Courses</p>
                    <p className="text-lg font-bold text-white">{domain.courses}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Projects</p>
                    <p className="text-lg font-bold text-white">{domain.projects}</p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Level</p>
                  <p className="text-sm text-white/80">{domain.level}</p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {domain.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
        {domains.map((domain, index) => (
          <span
            key={domain.id}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-5 bg-accent-blue-light' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
