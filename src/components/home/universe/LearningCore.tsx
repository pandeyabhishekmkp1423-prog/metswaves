import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { LearningDomain } from '../../../constants';

type LearningCoreProps = {
  activeDomain: LearningDomain | null;
  panelId: string;
};

export function LearningCore({ activeDomain, panelId }: LearningCoreProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative z-20">
      <div
        aria-hidden="true"
        className={`absolute inset-[-32px] rounded-full border border-accent-blue/20 ${reduceMotion ? '' : 'universe-ring-spin'}`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-[-56px] rounded-full border border-dashed border-purple-400/15 ${reduceMotion ? '' : 'universe-ring-spin-reverse'}`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-[-16px] rounded-full bg-accent-blue/20 blur-2xl ${reduceMotion ? '' : 'universe-core-pulse'}`}
      />

      <div className="trust-gradient-border relative h-[210px] w-[210px] rounded-[2.5rem] sm:h-[230px] sm:w-[230px] lg:h-[260px] lg:w-[260px]">
        <div
          id={panelId}
          role="status"
          aria-live="polite"
          className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#0d0f1a]/90 px-6 text-center backdrop-blur-xl"
        >
          <AnimatePresence mode="wait">
            {activeDomain ? (
              <DomainDetail key={activeDomain.id} domain={activeDomain} />
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full flex-col items-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/30 to-purple-500/30 text-accent-blue-light">
                  <Sparkles size={20} />
                </span>
                <p className="mt-3 font-heading text-base font-bold text-white sm:text-lg">MetaWaves Core</p>
                <p className="mt-1.5 text-[11px] text-white/50">8 domains. One ecosystem.</p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/30">Hover a node to explore</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function DomainDetail({ domain }: { domain: LearningDomain }) {
  const Icon = domain.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="flex w-full flex-col items-center"
    >
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/30 to-purple-500/30 text-accent-blue-light">
        <Icon size={18} />
      </span>
      <p className="mt-2 text-sm font-bold text-white sm:text-base">{domain.label}</p>

      <div className="mt-3 grid w-full grid-cols-2 gap-x-3 gap-y-1.5">
        <StatRow label="Courses" value={String(domain.courses)} />
        <StatRow label="Projects" value={String(domain.projects)} />
      </div>

      <div className="mt-2 w-full">
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">Level</p>
        <p className="text-[11px] font-medium text-white/80">{domain.level}</p>
      </div>

      <div className="mt-2.5 flex flex-wrap justify-center gap-1">
        {domain.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] text-white/60">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">{label}</p>
      <p className="text-sm font-bold text-white">{value}</p>
    </div>
  );
}
