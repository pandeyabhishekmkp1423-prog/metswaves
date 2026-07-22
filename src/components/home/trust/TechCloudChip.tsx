import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { AiTechnology } from '../../../constants';

type TechCloudChipProps = {
  tech: AiTechnology;
  index: number;
};

export function TechCloudChip({ tech, index }: TechCloudChipProps) {
  const Icon = tech.icon;
  const reduceMotion = useReducedMotion();
  const alternate = index % 2 === 0 ? -1 : 1;

  const floatStyle = {
    '--float-duration': `${4.5 + (index % 5) * 0.6}s`,
    '--float-delay': `${(index % 6) * 0.35}s`,
    '--float-distance': `${alternate * (8 + (index % 3) * 2)}px`,
    '--float-rotate': `${alternate * (1.5 + (index % 3))}deg`,
  } as CSSProperties;

  return (
    <div className={reduceMotion ? '' : 'trust-chip-float'} style={reduceMotion ? undefined : floatStyle}>
      <motion.div
        whileHover={reduceMotion ? undefined : { scale: 1.08, y: -4 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        className="trust-gradient-border rounded-full"
      >
        <div className="flex items-center gap-2 rounded-full bg-[#0f1119]/90 px-4 py-2.5 text-sm font-medium text-white/85 backdrop-blur-md sm:px-5 sm:py-3">
          <Icon size={15} className="flex-none text-accent-blue-light" />
          <span className="whitespace-nowrap">{tech.name}</span>
        </div>
      </motion.div>
    </div>
  );
}
