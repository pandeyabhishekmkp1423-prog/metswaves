import { TEACHING_PRINCIPLES } from '../../data/aboutContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function HowWeTeach() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="How We Teach"
          title="Four principles, applied to every single course."
          description="It's not a bento grid of buzzwords — it's the operating system behind every module we ship."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {TEACHING_PRINCIPLES.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <Reveal key={principle.title} delay={index * 0.07}>
              <div className="surface-card card-hover flex h-full items-start gap-5 p-7">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-accent-blue/15 bg-accent-blue/10 font-ui text-base font-semibold text-accent-blue">
                  {index + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2.5">
                    <Icon size={18} className="text-accent-blue" />
                    <h3 className="text-lg font-semibold text-navy">{principle.title}</h3>
                  </div>
                  <p className="mt-2.5 text-text-secondary">{principle.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
