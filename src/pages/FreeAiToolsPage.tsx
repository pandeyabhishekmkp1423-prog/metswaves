import { AI_TECHNOLOGIES } from '../constants';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';

export function FreeAiToolsPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Discover"
        title="Free AI Tools"
        description="The AI tools our mentors actually use, and the ones our courses teach you to master."
      />

      <section className="section-shell bg-white">
        <Reveal>
          <SectionIntro
            eyebrow="Toolkit"
            title="Tools worth knowing."
            description="A quick reference to the platforms covered across the MetaWaves curriculum."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {AI_TECHNOLOGIES.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.name} delay={index * 0.05}>
                <div className="surface-card card-hover flex h-full flex-col items-center gap-3 p-6 text-center">
                  <span className="icon-chip h-12 w-12">
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-medium text-navy">{tech.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CoursesFinalCta />
    </>
  );
}
