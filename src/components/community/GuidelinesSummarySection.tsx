import { COMMUNITY_GUIDELINES } from '../../data/communityContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function GuidelinesSummarySection() {
  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Community Guidelines"
          title="Six rules keep 28,000 people feeling like a small room."
          description="The full guidelines land in your inbox on day one — here's the summary that matters most."
          align="center"
        />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
        {COMMUNITY_GUIDELINES.map((guideline, index) => {
          const Icon = guideline.icon;
          return (
            <Reveal key={guideline.title} delay={index * 0.05}>
              <div className="glass-panel flex h-full gap-4 p-5">
                <span className="icon-chip h-11 w-11 flex-none">
                  <Icon size={19} />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{guideline.title}</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{guideline.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
