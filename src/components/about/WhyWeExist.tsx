import { EXISTENCE_REASONS } from '../../data/aboutContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function WhyWeExist() {
  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Why MetaWaves Exists"
          title="We didn't start with a curriculum. We started with a gap."
          description="Three problems kept showing up in every AI-era classroom we studied — so we built a school designed to fix them, not just work around them."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {EXISTENCE_REASONS.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Reveal key={reason.title} delay={index * 0.08}>
              <div className="surface-card card-hover flex h-full flex-col gap-5 p-7">
                <span className="icon-chip h-12 w-12">
                  <Icon size={22} />
                </span>
                <h3 className="text-xl font-semibold text-navy">{reason.title}</h3>
                <p className="text-text-secondary">{reason.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
