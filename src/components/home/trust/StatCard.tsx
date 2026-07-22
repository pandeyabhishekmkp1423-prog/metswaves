import { motion, useReducedMotion } from 'framer-motion';
import type { TrustStat } from '../../../constants';
import { CountUp } from '../../ui/CountUp';

type StatCardProps = {
  stat: TrustStat;
};

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative h-full overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]"
      style={{ boxShadow: '0 0 40px rgba(59,130,246,0.05)' }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(140px circle at 50% 0%, rgba(59,130,246,0.22), transparent 70%)' }}
      />

      <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-accent-blue/25 via-accent-blue-light/15 to-purple-500/25 text-accent-blue-light">
        <Icon size={24} />
      </div>

      <p className="relative mt-5 font-heading text-4xl font-bold text-white sm:text-[2.6rem]">
        <CountUp value={stat.value} suffix={stat.suffix} />
      </p>

      <p className="relative mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 sm:text-xs">
        {stat.label}
      </p>
    </motion.div>
  );
}
