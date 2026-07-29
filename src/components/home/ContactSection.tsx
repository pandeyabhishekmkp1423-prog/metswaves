import { ChevronRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { CONTACT_CHANNELS } from '../../constants';

export function ContactSection() {
  return (
    <section id="contact" className="section-shell bg-bg-alt">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <SectionIntro
            eyebrow="Contact"
            title="A high-trust admissions touchpoint with premium depth and zero friction."
            description="The form and contact channels feel elevated without slowing the user down. This is where the sales experience becomes tangible."
          />
          <div className="mt-8 grid gap-4">
            {CONTACT_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.title} className="glass-panel flex gap-4 p-5">
                  <div className="icon-chip h-12 w-12 flex-none">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-text-secondary">{channel.title}</p>
                    <p className="mt-2 text-lg font-medium text-navy">{channel.value}</p>
                    <p className="mt-2 text-sm text-text-secondary">{channel.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="surface-card grid gap-5 p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm text-text-secondary">Name</span>
                <input className="input-premium" type="text" placeholder="Your name" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-text-secondary">Email</span>
                <input className="input-premium" type="email" placeholder="you@example.com" />
              </label>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm text-text-secondary">Goal</span>
                <input className="input-premium" type="text" placeholder="Switch into AI product work" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-text-secondary">Preferred track</span>
                <input className="input-premium" type="text" placeholder="AI & Machine Learning" />
              </label>
            </div>
            <label className="grid gap-2">
              <span className="text-sm text-text-secondary">Message</span>
              <textarea className="input-premium min-h-36 resize-none" placeholder="Tell us where you are and where you want to go." />
            </label>
            <MagneticButton type="submit" className="btn-premium button-glow inline-flex items-center justify-center gap-2 px-6 py-4">
              Book a Strategy Call
              <ChevronRight size={18} />
            </MagneticButton>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
