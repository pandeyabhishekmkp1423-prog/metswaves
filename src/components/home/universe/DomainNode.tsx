import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { LearningDomain } from '../../../constants';

type DomainNodeProps = {
  domain: LearningDomain;
  x: number;
  y: number;
  isActive: boolean;
  onActivate: (id: string) => void;
  onDeactivate: () => void;
  panelId: string;
  index: number;
};

export function DomainNode({ domain, x, y, isActive, onActivate, onDeactivate, panelId, index }: DomainNodeProps) {
  const Icon = domain.icon;
  const reduceMotion = useReducedMotion();

  const floatStyle = {
    '--node-duration': `${5 + (index % 4) * 0.7}s`,
    '--node-delay': `${(index % 5) * 0.4}s`,
    '--node-float': `${index % 2 === 0 ? '-8px' : '-6px'}`,
  } as CSSProperties;

  return (
    <div className="absolute z-10" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
      <div className={reduceMotion || isActive ? '' : 'universe-node-float'} style={reduceMotion ? undefined : floatStyle}>
        <motion.button
          type="button"
          onMouseEnter={() => onActivate(domain.id)}
          onMouseLeave={onDeactivate}
          onFocus={() => onActivate(domain.id)}
          onBlur={onDeactivate}
          onClick={() => onActivate(domain.id)}
          aria-describedby={panelId}
          aria-label={`${domain.label}: ${domain.courses} courses, ${domain.projects} projects, ${domain.level} level`}
          animate={reduceMotion ? undefined : { scale: isActive ? 1.1 : 1, y: isActive ? -4 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          className="group relative flex h-[104px] w-[104px] flex-col items-center justify-center gap-1.5 rounded-3xl border border-white/10 bg-white/[0.05] px-3 text-center backdrop-blur-xl transition-colors duration-300 hover:border-accent-blue-light/40 focus-visible:border-accent-blue-light/50 focus-visible:outline-none sm:h-[118px] sm:w-[118px]"
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'radial-gradient(72px circle at 50% 30%, rgba(59,130,246,0.4), transparent 70%)' }}
          />
          <span className="relative flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/25 to-purple-500/25 text-accent-blue-light">
            <Icon size={17} />
          </span>
          <span className="relative text-[11px] font-semibold leading-tight text-white/85 sm:text-xs">{domain.label}</span>
        </motion.button>
      </div>
    </div>
  );
}
