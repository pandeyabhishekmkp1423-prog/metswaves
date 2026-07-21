import { FEATURES } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';

export function FeaturesSection() {
  return (
    <section id="features" className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Features"
          title="A polished learning environment with depth, motion, and measurable outcomes."
          description="Every layer of the experience is designed to feel intentional: premium visuals, studio-style mentorship, and coursework built for the AI economy."
          align="center"
        />
      </Reveal>
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={index * 0.08}>
              <TiltCard className="surface-card card-hover flex h-full flex-col items-center p-6 text-center md:p-8">
                <div className="icon-chip h-16 w-16">
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy md:text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{feature.description}</p>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
                
