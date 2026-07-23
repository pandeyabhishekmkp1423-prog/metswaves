import { Trophy } from 'lucide-react';
import { COMMUNITY_CHALLENGES } from '../../data/communityContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function CommunityChallengesSection() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Community Challenges"
          title="Friendly competition keeps momentum honest."
          description="Ongoing challenges give you a deadline, a reason to ship, and a reason to show up for someone else's build too."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
    </section>
  );
}
