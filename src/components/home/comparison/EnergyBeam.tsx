import { motion, useReducedMotion } from 'framer-motion';

export function EnergyBeam() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-2 left-1/2 z-0 hidden w-px -translate-x-1/2 overflow-hidden bg-gradient-to-b from-transparent via-accent-blue-light/25 to-transparent sm:block"
    >
      {!reduceMotion ? (
        <motion.span
          className="absolute left-0 h-28 w-px bg-gradient-to-b from-transparent via-white to-transparent"
          initial={{ top: '-15%' }}
          animate={{ top: ['-15%', '115%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
        />
      ) : null}
    </div>
  );
}
