import { CAREER_STATS } from '../../../constants';
import { CountUp } from '../../ui/CountUp';
import { Reveal } from '../../ui/Reveal';

export function CareerStats() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      {CAREER_STATS.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Reveal key={stat.label} delay={index * 0.08}>
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-5 text-center backdrop-blur-xl sm:p-6">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/30 to-purple-500/30 text-accent-blue-light">
                <Icon size={20} />
              </div>
              <p className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">{stat.label}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
