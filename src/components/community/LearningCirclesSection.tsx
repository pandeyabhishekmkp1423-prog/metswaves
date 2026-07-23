import { ArrowRight, CalendarClock, Users } from 'lucide-react';
import { LEARNING_CIRCLES } from '../../data/communityContent';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function LearningCirclesSection() {
  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Learning Circles"
          title="Small groups, one focus, real momentum."
          description="Every circle meets on a fixed weekly slot to work through the same domain together — pick the one closest to what you're building."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEARNING_CIRCLES.map((circle, index) => {
          const Icon = circle.icon;
          return (
            <Reveal key={circle.id} delay={index * 0.06}>
              <a
                href="#contact"
                onClick={(event) => handleAnchorClick(event, '#contact')}
                className="surface-card card-hover group flex h-full flex-col gap-4 p-7"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${circle.gradient}`}>
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{circle.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{circle.description}</p>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border-soft pt-4 text-xs text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <Users size={13} className="text-accent-blue" />
                    {circle.members}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarClock size={13} className="text-accent-blue" />
                    {circle.cadence}
                  </span>
                </div>

                <span className="flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Join this circle
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
