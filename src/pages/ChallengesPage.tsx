import { ArrowRight, Trophy } from 'lucide-react';
import { COMMUNITY_CHALLENGES } from '../data/communityContent';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';
import { MagneticButton } from '../components/ui/MagneticButton';
import { handleAnchorClick } from '../utils';

export function ChallengesPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Community"
        title="Challenges"
        description="Ongoing build challenges that give you a deadline, a reason to ship, and a reason to show up for someone else's work too."
      />

      <section className="section-shell bg-white">
        <Reveal>
          <SectionIntro eyebrow="Live Challenges" title="Pick one and start building." description="Every challenge is open to the whole community, any skill level." />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {COMMUNITY_CHALLENGES.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Reveal key={challenge.id} delay={index * 0.07}>
                <div className="surface-card card-hover flex h-full flex-col gap-4 p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="icon-chip h-12 w-12">
                      <Icon size={22} />
                    </span>
                    <span className="badge-pill">{challenge.format}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{challenge.title}</h3>
                  <p className="text-sm text-text-secondary">{challenge.description}</p>
                  <div className="mt-auto flex items-center gap-2.5 border-t border-border-soft pt-4 text-sm text-text-secondary">
                    <Trophy size={15} className="flex-none text-amber-500" />
                    {challenge.reward}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <MagneticButton
            href="/community"
            onClick={(event) => handleAnchorClick(event, '/community')}
            className="btn-premium button-glow inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Join the Community
            <ArrowRight size={18} />
          </MagneticButton>
        </Reveal>
      </section>

      <CoursesFinalCta />
    </>
  );
}
