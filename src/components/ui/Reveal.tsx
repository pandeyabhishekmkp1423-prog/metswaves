import type { PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
}>;

export function Reveal({ children, className, delay = 0, y = 36 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
