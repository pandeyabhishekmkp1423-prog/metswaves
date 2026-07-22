import type { CareerMilestone } from '../../../constants';
import { Reveal } from '../../ui/Reveal';

type CareerRoadmapMobileProps = {
  milestones: CareerMilestone[];
};

export function CareerRoadmapMobile({ milestones }: CareerRoadmapMobileProps) {
  return (
    <div className="relative mx-auto max-w-md lg:hidden">
      <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400/50 via-accent-blue/50 to-purple-400/50 sm:left-9" />

      <div className="grid gap-8">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <Reveal key={milestone.id} delay={index * 0.08} className="relative flex gap-5">
              <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl sm:h-[72px] sm:w-[72px]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)', filter: 'blur(8px)' }}
                />
                <Icon size={24} className="relative z-10" />
              </div>
              <div className="pt-1">
                <p className="text-base font-bold text-white sm:text-lg">{milestone.label}</p>
                <p className="mt-1 text-xs font-semibold text-accent-blue-light">{milestone.highlight}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{milestone.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
