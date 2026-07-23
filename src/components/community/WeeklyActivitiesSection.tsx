import { ActivityTimeline } from '../home/community/ActivityTimeline';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function WeeklyActivitiesSection() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Weekly Activities"
          title="Every week has a rhythm you can actually plan around."
          description="Same slots, every week — so showing up becomes a habit instead of one more thing you meant to do."
        />
      </Reveal>

      <div className="mx-auto mt-12 max-w-2xl">
        <ActivityTimeline />
      </div>
    </section>
  );
}
