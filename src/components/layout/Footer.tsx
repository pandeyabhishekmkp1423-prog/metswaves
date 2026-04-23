import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants';

const socialLinks = [
  { label: 'Facebook', icon: Facebook },
  { label: 'Twitter', icon: Twitter },
  { label: 'Instagram', icon: Instagram },
  { label: 'LinkedIn', icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.1),transparent_25%)]" />
      <div className="section-shell relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.28),rgba(139,92,246,0.35),rgba(249,115,22,0.28))]">
                <span className="text-lg font-semibold tracking-[-0.08em] text-white">M</span>
              </div>
              <div>
                <p className="text-xl font-semibold tracking-[-0.04em] text-white">Metawaves AI</p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Immersive Education</p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-8 text-slate-300">
              Premium education for learners who want to build AI fluency, creative confidence, and career momentum in one intentional ecosystem.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                    aria-label={item.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="footer-title">Company</p>
            <div className="mt-5 grid gap-3">
              {FOOTER_LINKS.company.map((item) => (
                <a key={item} href="#" className="footer-link">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">Resources</p>
            <div className="mt-5 grid gap-3">
              {FOOTER_LINKS.resources.map((item) => (
                <a key={item} href="#" className="footer-link">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">Legal</p>
            <div className="mt-5 grid gap-3">
              {FOOTER_LINKS.contact.map((item) => (
                <a key={item} href="#" className="footer-link">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Metawaves AI. Crafted for the next generation of AI-native careers.</p>
          <p>Built with React, Tailwind CSS, React Three Fiber, Framer Motion, GSAP, and Lenis.</p>
        </div>
      </div>
    </footer>
  );
}
