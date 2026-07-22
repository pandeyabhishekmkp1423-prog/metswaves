import { LEARNING_FEATURES, type LearningFeatureSize } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { FeatureBentoCard } from './methodology/FeatureBentoCard';
import { LightAtmosphere } from './methodology/LightAtmosphere';

const SIZE_CLASSES: Record<LearningFeatureSize, string> = {
  large: 'col-span-2 md:row-span-2',
  wide: 'col-span-2',
  tall: 'col-span-1 md:row-span-2',
  small: 'col-span-1',
};

export function LearningMethodology() {
  return (
    <section className="relative overflow-hidden bg-white">
      <LightAtmosphere />

      <div className="section-shell relative z-10">
        <Reveal>
          <SectionIntro
            eyebrow="How You'll Learn"
            title="Learn the Way AI Professionals Actually Work"
            description="Not another passive video course. A hands-on system built around live cohorts, real mentorship, and shipped projects."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 grid-flow-dense gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-[190px] lg:auto-rows-[210px] lg:gap-6">
          {LEARNING_FEATURES.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 0.05} className={SIZE_CLASSES[feature.size]}>
              <FeatureBentoCard feature={feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
