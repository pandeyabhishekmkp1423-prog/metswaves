import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { CAREER_MILESTONES } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { GradientCtaButton } from '../nav/GradientCtaButton';
import { Reveal } from '../ui/Reveal';
import { CareerBackground } from './career/CareerBackground';
import { CareerRoadmapDesktop } from './career/CareerRoadmapDesktop';
import { CareerRoadmapMobile } from './career/CareerRoadmapMobile';
import { CareerStats } from './career/CareerStats';

export function CareerJourney() {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="relative overflow-hidden bg-[#0a0714]">
      <CareerBackground />

      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-accent-blue-light backdrop-blur-md">
            Your Journey
          </span>
          <h2 id={headingId} className="mt-6 font-heading text-[28px] font-bold text-white sm:text-[34px] md:text-[44px]">
            Your{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-accent-blue-light to-purple-400 bg-clip-text text-transparent">
              AI Career
            </span>{' '}
            Starts Here
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            MetaWaves turns knowledge into a career through real projects, recognized certifications, hands-on
            mentorship, and a portfolio built to get you hired.
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-20">
          <CareerRoadmapDesktop milestones={CAREER_MILESTONES} />
          <CareerRoadmapMobile milestones={CAREER_MILESTONES} />
        </div>

        <div className="mt-16 lg:mt-20">
          <CareerStats />
        </div>

        <Reveal delay={0.15} className="mt-16 flex flex-col items-center gap-5 text-center lg:mt-20">
          <p className="max-w-xl text-base text-white/60 md:text-lg">
            Ready to trade tutorials for a career? Your first milestone is one click away.
          </p>
          <GradientCtaButton
            href="/courses"
            onClick={(event) => handleAnchorClick(event, '/courses')}
            className="px-10 py-4 text-base sm:text-lg"
          >
            <span className="inline-flex items-center gap-2">
              Begin Your AI Journey
              <ArrowRight size={18} />
            </span>
          </GradientCtaButton>
        </Reveal>
      </div>
    </section>
  );
}
