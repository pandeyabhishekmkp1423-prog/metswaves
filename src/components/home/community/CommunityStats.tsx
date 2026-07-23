import { COMMUNITY_STATS } from '../../../constants';
import { CountUp } from '../../ui/CountUp';
import { Reveal } from '../../ui/Reveal';

export function CommunityStats() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      {COMMUNITY_STATS.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Reveal key={stat.label} delay={index * 0.08}>
            <div className="surface-card card-hover h-full p-5 text-center sm:p-6">
              <div className="icon-chip mx-auto h-12 w-12 sm:h-14 sm:w-14">
                <Icon size={22} />
              </div>
              <p className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary sm:text-xs">
                {stat.label}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
