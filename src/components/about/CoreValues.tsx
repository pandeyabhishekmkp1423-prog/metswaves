import { CORE_VALUES } from '../../data/aboutContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';

export function CoreValues() {
  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Core Values"
          title="The six beliefs behind every decision we make."
          description="Not a poster on a wall — these are the filters we run every course, every mentor hire, and every product decision through."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CORE_VALUES.map((value, index) => {
          const Icon = value.icon;
          return (
            <Reveal key={value.title} delay={index * 0.06}>
              <TiltCard className="h-full rounded-premium">
                <div className="surface-card card-hover flex h-full flex-col gap-4 p-7">
                  <span className="icon-chip h-12 w-12">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                  <p className="text-sm text-text-secondary">{value.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
