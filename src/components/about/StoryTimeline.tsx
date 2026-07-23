import { STORY_TIMELINE } from '../../data/aboutContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function StoryTimeline() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Our Story"
          title="A decade of figuring out what actually works."
          description="MetaWaves didn't arrive at this curriculum overnight — it's the result of ten years of iterating in public, with real cohorts."
        />
      </Reveal>

      <div className="mx-auto mt-14 max-w-3xl">
        {STORY_TIMELINE.map((milestone, index) => {
          const Icon = milestone.icon;
          const isLast = index === STORY_TIMELINE.length - 1;

          return (
            <Reveal key={milestone.year} delay={index * 0.08} className="relative flex gap-6">
              <div className="flex flex-none flex-col items-center">
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-accent-blue/15 bg-accent-blue/10 text-accent-blue">
                  <Icon size={22} />
                </span>
                {!isLast ? <span className="mt-2 w-px flex-1 bg-border-soft" /> : null}
              </div>

              <div className={`min-w-0 flex-1 ${isLast ? 'pb-0' : 'pb-10'}`}>
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-blue">{milestone.year}</span>
                <h3 className="mt-2 text-xl font-semibold text-navy">{milestone.title}</h3>
                <p className="mt-2 text-text-secondary">{milestone.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
