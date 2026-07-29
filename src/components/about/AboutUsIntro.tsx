import { ArrowRight, Handshake, Rocket, Sparkles } from 'lucide-react';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';

const HIGHLIGHTS = [
  { icon: Sparkles, text: 'Founded by builders who shipped AI products before "AI product" was a job title.' },
  { icon: Handshake, text: 'Every mentor on the platform still works in the field, not just teaches from memory.' },
  { icon: Rocket, text: 'We measure success in shipped portfolios and job offers, not completion certificates.' },
];

export function AboutUsIntro() {
  return (
    <section className="section-shell overflow-hidden bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="surface-card relative flex justify-center overflow-hidden bg-gradient-to-b from-bg-secondary to-white p-6">
            <img
              src="/avatar.png"
              alt="Wave, the Metawaves AI mascot"
              className="h-[380px] w-auto object-contain sm:h-[440px]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="glass-panel absolute -bottom-6 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 p-4 text-center sm:w-72">
            <p className="text-sm font-medium text-navy">"We build the team we wish we had when we started."</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">About Us</span>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
            We're a small team obsessed with one outcome: you, employed.
          </h2>
          <p className="mt-5 text-text-secondary">
            MetaWaves started as a frustration, not a business plan. We watched talented people finish course after
            course and still not have anything to point to that they had actually built. So we built the opposite: a
            place where every lesson exists to get you closer to a shipped project, a strong portfolio, and a role
            you actually want.
          </p>
          <p className="mt-4 text-text-secondary">
            Today that means real mentors instead of pre-recorded silence, projects instead of quizzes, and a
            curriculum that gets rewritten the moment the industry moves — which, in AI, is often.
          </p>

          <div className="mt-8 grid gap-4">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-3.5">
                  <div className="icon-chip h-10 w-10 flex-none">
                    <Icon size={18} />
                  </div>
                  <p className="pt-1.5 text-sm text-text-secondary">{item.text}</p>
                </div>
              );
            })}
          </div>

          <MagneticButton
            href="#contact"
            onClick={(event) => handleAnchorClick(event, '#contact')}
            className="btn-premium button-glow mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm"
          >
            Meet the Team
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
