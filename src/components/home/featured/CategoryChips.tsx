import { motion } from 'framer-motion';
import { FEATURED_COURSE_FILTERS } from '../../../constants';

type CategoryChipsProps = {
  active: string;
  onChange: (category: string) => void;
};

export function CategoryChips({ active, onChange }: CategoryChipsProps) {
  return (
    <div role="group" aria-label="Filter courses by category" className="flex flex-wrap justify-center gap-2">
      {FEATURED_COURSE_FILTERS.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-text-secondary hover:text-navy'
            }`}
          >
            {isActive ? (
              <motion.span
                layoutId="featured-chip-active"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue to-purple-500 shadow-[0_8px_20px_rgba(59,130,246,0.28)]"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            ) : (
              <span className="absolute inset-0 rounded-full border border-border-soft bg-white" />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
