import { TRUST_STATS } from '../../constants';
import { CountUp } from '../ui/CountUp';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function ImpactStats() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Impact"
          title="Numbers we hold ourselves accountable to."
          description="Every metric below is published because we want to be measured by it, not because it makes a good slide."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-5">
        {TRUST_STATS.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="surface-card card-hover h-full p-6 text-center">
                <div className="icon-chip mx-auto h-12 w-12">
                  <Icon size={20} />
                </div>
                <p className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">{stat.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
