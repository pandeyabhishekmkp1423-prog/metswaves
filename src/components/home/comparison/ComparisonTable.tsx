import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { COMPARISON_ROWS } from '../../../constants';
import { EnergyBeam } from './EnergyBeam';

export function ComparisonTable() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const activate = (index: number) => setHoveredIndex(index);
  const deactivate = (index: number) => setHoveredIndex((current) => (current === index ? null : current));

  return (
    <div className="relative mx-auto grid max-w-[980px] grid-cols-2 gap-3 sm:gap-4 md:gap-5">
      <EnergyBeam />

      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:rounded-[28px]">
        <div className="border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35 sm:text-sm">Traditional Learning</p>
        </div>
        <div>
          {COMPARISON_ROWS.map((row, index) => {
            const Icon = row.traditionalIcon;
            const isActive = hoveredIndex === index;
            return (
              <motion.div
                key={row.id}
                tabIndex={0}
                onMouseEnter={() => activate(index)}
                onMouseLeave={() => deactivate(index)}
                onFocus={() => activate(index)}
                onBlur={() => deactivate(index)}
                animate={reduceMotion ? undefined : { x: isActive ? 6 : 0, opacity: isActive ? 0.4 : 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                className="flex items-center gap-2.5 border-t border-white/5 px-4 py-4 first:border-t-0 focus-visible:outline-none sm:gap-3 sm:px-6 sm:py-5"
              >
                <motion.span
                  animate={reduceMotion ? undefined : { scale: isActive ? 0.9 : 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white/5 text-white/40 sm:h-9 sm:w-9"
                >
                  <Icon size={16} />
                </motion.span>
                <span className="truncate text-xs text-white/50 line-through decoration-white/20 sm:text-sm md:text-base">
                  {row.traditionalLabel}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] border border-accent-blue/20 bg-gradient-to-br from-white/[0.06] to-accent-blue/[0.05] backdrop-blur-xl sm:rounded-[28px]">
        <div className="border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">
          <p className="bg-gradient-to-r from-accent-blue-light to-purple-300 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent sm:text-sm">
            MetaWaves
          </p>
        </div>
        <div>
          {COMPARISON_ROWS.map((row, index) => {
            const Icon = row.metawavesIcon;
            const isActive = hoveredIndex === index;
            return (
              <motion.div
                key={row.id}
                tabIndex={0}
                onMouseEnter={() => activate(index)}
                onMouseLeave={() => deactivate(index)}
                onFocus={() => activate(index)}
                onBlur={() => deactivate(index)}
                animate={reduceMotion ? undefined : { x: isActive ? -6 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                className="relative flex items-center justify-end gap-2.5 overflow-hidden border-t border-white/5 px-4 py-4 text-right first:border-t-0 focus-visible:outline-none sm:gap-3 sm:px-6 sm:py-5"
              >
                <AnimatePresence>
                  {isActive ? (
                    <motion.span
                      aria-hidden="true"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pointer-events-none absolute inset-0"
                      style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.14), rgba(168,85,247,0.08))' }}
                    />
                  ) : null}
                </AnimatePresence>
                <span className="relative truncate text-xs font-semibold text-white sm:text-sm md:text-base">
                  {row.metawavesLabel}
                </span>
                <motion.span
                  animate={reduceMotion ? undefined : { scale: isActive ? 1.15 : 1, rotate: isActive ? -6 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="relative flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue/35 to-purple-500/35 text-accent-blue-light shadow-[0_0_18px_rgba(59,130,246,0.25)] sm:h-9 sm:w-9"
                >
                  <Icon size={16} />
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
