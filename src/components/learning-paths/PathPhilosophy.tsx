import { Compass, Flag, Layers } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';

const PILLARS = [
  {
    icon: Compass,
    title: 'One clear destination',
    description: 'Every path maps directly to a career outcome — not a vague, disconnected list of skills.',
  },
  {
    icon: Layers,
    title: 'Sequenced, not scattered',
    description: 'Courses are ordered so each one builds on the last, with no redundant ground covered twice.',
  },
  {
    icon: Flag,
    title: 'Checkpoints, not guesswork',
    description: 'Milestones and mentor reviews tell you exactly how far along you are — and what comes next.',
  },
];

export function PathPhilosophy() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Why Paths"
          title="A course teaches a skill. A path builds a career."
          description="Single courses are great for picking up a specific tool. Paths exist for the bigger goal: becoming job-ready in a defined role."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {PILLARS.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <TiltCard className="surface-card card-hover flex h-full flex-col items-center p-8 text-center">
                <div className="icon-chip h-14 w-14">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{pillar.description}</p>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
