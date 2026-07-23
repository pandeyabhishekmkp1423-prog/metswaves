import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { CareerMilestone } from '../../../constants';

type RoadmapNodeProps = {
  milestone: CareerMilestone;
  index: number;
  tooltipDirection: 'top' | 'bottom';
};

export function RoadmapNode({ milestone, index, tooltipDirection }: RoadmapNodeProps) {
  const Icon = milestone.icon;
  const [isActive, setIsActive] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.6, y: 16 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center"
    >
      <AnimatePresence>
        {isActive ? (
          <motion.div
            initial={{ opacity: 0, y: tooltipDirection === 'top' ? 8 : -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: tooltipDirection === 'top' ? 8 : -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-none absolute z-50 w-56 rounded-2xl border border-white/15 bg-[#10121f]/95 p-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
              tooltipDirection === 'top' ? 'bottom-[calc(100%+18px)]' : 'top-[calc(100%+18px)]'
            }`}
          >
            <p className="text-xs font-semibold text-accent-blue-light">{milestone.highlight}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/65">{milestone.description}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        aria-label={`${milestone.label}: ${milestone.description}`}
        className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl transition-transform duration-300 hover:scale-110 focus-visible:scale-110 focus-visible:outline-none sm:h-[72px] sm:w-[72px]"
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          animate={{ opacity: isActive ? 1 : 0.55, scale: isActive ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%)', filter: 'blur(10px)' }}
        />
        <Icon size={26} className="relative z-10" />
      </button>

      <span className="mt-3 text-sm font-semibold text-white sm:text-base">{milestone.label}</span>
    </motion.div>
  );
}
