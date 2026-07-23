import { ArrowRight, Users2 } from 'lucide-react';
import { CommunityBackground } from '../home/community/CommunityBackground';
import { CommunityStats } from '../home/community/CommunityStats';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';

export function CommunityHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <CommunityBackground />

      <div className="section-shell relative z-10 pt-16! pb-14! md:pt-20! md:pb-16!">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">MetaWaves Community</span>
          <h1 className="mt-6 text-[34px] font-bold leading-[1.1] text-navy sm:text-[44px] md:text-[56px]">
            Learning is better with 28,000 people building alongside you.
          </h1>
          <p className="mt-6 text-base text-text-secondary md:text-lg">
            Mentorship, learning circles, live challenges, and a place to show your work — MetaWaves extends past the
            curriculum into a community that keeps you accountable long after a course ends.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href="#contact"
              onClick={(event) => handleAnchorClick(event, '#contact')}
              className="btn-premium button-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm"
            >
              <Users2 size={16} />
              Join the Community
            </MagneticButton>
            <a
              href="/courses"
              onClick={(event) => handleAnchorClick(event, '/courses')}
              className="btn-secondary card-hover inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
            >
              Explore Courses First
              <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-14">
          <CommunityStats />
        </Reveal>
      </div>
    </section>
  );
}
