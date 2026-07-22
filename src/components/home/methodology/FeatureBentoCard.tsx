import { motion } from 'framer-motion';
import type { LearningFeature } from '../../../constants';
import { TiltCard } from '../../ui/TiltCard';

type FeatureBentoCardProps = {
  feature: LearningFeature;
};

export function FeatureBentoCard({ feature }: FeatureBentoCardProps) {
  const Icon = feature.icon;
  const isLarge = feature.size === 'large';
  const isSpacious = feature.size === 'large' || feature.size === 'tall';

  return (
    <TiltCard className="group h-full rounded-[20px]">
      <div className="surface-card card-hover relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
        {isSpacious ? (
          <Icon
            aria-hidden="true"
            strokeWidth={1}
            size={isLarge ? 176 : 130}
            className="pointer-events-none absolute -bottom-8 -right-8 rotate-[-10deg] text-slate-50 transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105"
          />
        ) : null}

        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-[0.12] blur-2xl transition-opacity duration-500 group-hover:opacity-25 ${feature.gradient}`}
        />

        <motion.div
          whileHover={{ scale: 1.08, rotate: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 16 }}
          className={`relative z-10 flex flex-none items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)] ${feature.gradient} ${
            isLarge ? 'h-16 w-16' : 'h-14 w-14'
          }`}
        >
          <Icon size={isLarge ? 28 : 22} />
        </motion.div>

        <h3 className={`relative z-10 mt-5 font-bold text-navy ${isLarge ? 'text-2xl' : 'text-lg'}`}>{feature.title}</h3>
        <p className={`relative z-10 mt-2.5 leading-relaxed text-text-secondary ${isLarge ? 'text-base' : 'text-sm'}`}>
          {feature.description}
        </p>
      </div>
    </TiltCard>
  );
}
