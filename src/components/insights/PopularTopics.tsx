import { motion, useReducedMotion } from 'framer-motion';
import { Hash } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

type PopularTopicsProps = {
  topics: string[];
  activeTopic: string | null;
  onSelect: (topic: string | null) => void;
};

export function PopularTopics({ topics, activeTopic, onSelect }: PopularTopicsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Popular Topics"
          title="Jump straight to what you're curious about."
          description="Tap a topic to filter the article feed above."
          align="center"
        />
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
        {topics.map((topic, index) => {
          const isActive = activeTopic === topic;
          return (
            <motion.button
              key={topic}
              type="button"
              onClick={() => onSelect(isActive ? null : topic)}
              aria-pressed={isActive}
              initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'border-accent-blue bg-accent-blue text-white'
                  : 'border-border-soft bg-white text-text-secondary hover:border-accent-blue/30 hover:text-navy'
              }`}
            >
              <Hash size={13} className={isActive ? 'text-white' : 'text-gray-400'} />
              {topic}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
