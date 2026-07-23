import { Search, X } from 'lucide-react';
import { AuroraBackground } from '../home/featured/AuroraBackground';
import { Reveal } from '../ui/Reveal';

type InsightsHeroProps = {
  articleCount: number;
  query: string;
  onQueryChange: (value: string) => void;
};

export function InsightsHero({ articleCount, query, onQueryChange }: InsightsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <AuroraBackground />

      <div className="section-shell relative z-10 pt-16! pb-14! md:pt-20! md:pb-16!">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">AI Insights · {articleCount}+ articles</span>
          <h1 className="mt-6 text-[34px] font-bold leading-[1.1] text-navy sm:text-[44px] md:text-[56px]">
            The AI magazine for people who build.
          </h1>
          <p className="mt-6 text-base text-text-secondary md:text-lg">
            Sharp takes on agents, prompting, automation, and careers — written by the mentors teaching inside
            Metawaves AI, not a content farm.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
          <div className="surface-card flex items-center gap-3 rounded-full border-border-soft px-5 py-4 shadow-[0_8px_30px_rgba(16,24,40,0.08)] transition focus-within:border-accent-blue/40 focus-within:ring-2 focus-within:ring-accent-blue/15">
            <Search size={19} className="flex-none text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search articles, topics, or authors..."
              aria-label="Search articles"
              className="w-full bg-transparent text-base text-navy placeholder:text-gray-400 outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search"
                className="flex-none text-gray-400 hover:text-navy"
              >
                <X size={17} />
              </button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
