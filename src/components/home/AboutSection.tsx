import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { ABOUT_PILLARS } from '../../constants';

export function AboutSection() {
  return (
    <section id="about" className="section-shell overflow-hidden bg-bg-secondary">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-4" data-rotate>
            <div className="surface-card space-y-4 p-4">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
                alt="Students collaborating"
                className="h-60 w-full rounded-[16px] object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="glass-panel p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-text-secondary">Studio Signal</p>
                <p className="mt-3 text-2xl font-semibold text-navy">10+ years</p>
                <p className="mt-2 text-sm text-text-secondary">of refined curriculum evolution for digital-first careers.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=900"
                alt="Immersive classroom"
                className="surface-card h-52 w-full object-cover p-2"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=900"
                alt="Mentor feedback"
                className="surface-card h-72 w-full object-cover p-2"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionIntro
            eyebrow="About"
            title="Our learning system is built to feel like a product studio, not a classroom."
            description="Metawaves AI combines technical rigor, design taste, and career positioning into one immersive environment. Students do not just consume content, they rehearse real workflows."
          />
          <div className="mt-10 space-y-5">
            {ABOUT_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="glass-panel flex gap-4 p-5">
                  <div className="icon-chip h-12 w-12 flex-none">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-navy">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
