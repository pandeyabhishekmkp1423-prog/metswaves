import { ArrowRight } from 'lucide-react';
import { AuroraBackground } from '../home/featured/AuroraBackground';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <AuroraBackground />

      <div className="section-shell relative z-10 pt-16! pb-14! md:pt-20! md:pb-16!">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">About MetaWaves</span>
          <h1 className="mt-6 text-[34px] font-bold leading-[1.1] text-navy sm:text-[44px] md:text-[56px]">
            We think careers should be built, not just certified.
          </h1>
          <p className="mt-6 text-base text-text-secondary md:text-lg">
            MetaWaves exists to close the gap between watching AI change the world and being the person directing it —
            through real mentors, real projects, and a curriculum that moves as fast as the field does.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href="/courses"
              onClick={(event) => handleAnchorClick(event, '/courses')}
              className="btn-premium button-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm"
            >
              Explore Our Courses
              <ArrowRight size={16} />
            </MagneticButton>
            <a
              href="#contact"
              onClick={(event) => handleAnchorClick(event, '#contact')}
              className="btn-secondary card-hover inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
            >
              Talk to Our Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
