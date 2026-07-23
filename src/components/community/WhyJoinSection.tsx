import { WHY_JOIN_REASONS } from '../../data/communityContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';

export function WhyJoinSection() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Why Join the Community"
          title="A course teaches the skill. The community makes it stick."
          description="Here's what changes the moment you're not learning alone anymore."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_JOIN_REASONS.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Reveal key={reason.title} delay={index * 0.06}>
              <TiltCard className="h-full rounded-premium">
                <div className="surface-card card-hover flex h-full flex-col gap-4 p-7">
                  <span className="icon-chip h-12 w-12">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-semibold text-navy">{reason.title}</h3>
                  <p className="text-sm text-text-secondary">{reason.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
