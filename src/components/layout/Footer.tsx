import { useState, type FormEvent } from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants';
import { handleAnchorClick, handleLogoClick } from '../../utils';

const socialLinks = [
  { label: 'Facebook', icon: Facebook },
  { label: 'Twitter', icon: Twitter },
  { label: 'Instagram', icon: Instagram },
  { label: 'LinkedIn', icon: Linkedin },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.08),transparent_28%)]" />
      <div className="section-shell relative z-10 py-16!">
        <div className="surface-card flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-[-0.02em] text-navy sm:text-[28px]">
              Get cohort drops and career signal in your inbox.
            </h3>
            <p className="mt-2 text-text-secondary">No spam — just admissions windows, events, and new tracks.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="input-premium"
              placeholder="you@example.com"
            />
            <button type="submit" className="btn-premium button-glow inline-flex items-center justify-center gap-2 px-6 py-3 text-sm">
              {subscribed ? 'Subscribed' : 'Subscribe'}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <a
              href="#hero"
              onClick={handleLogoClick}
              className="inline-flex items-center"
              aria-label="Metawaves AI home"
            >
              <img src="/logo.png" alt="Metawaves AI" className="h-7 w-auto" />
            </a>
            <p className="mt-6 max-w-md text-white/65">
              Premium education for learners who want to build AI fluency, creative confidence, and career momentum in one intentional ecosystem.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    onClick={(event) => handleAnchorClick(event, '#')}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/60 transition hover:border-accent-blue-light/40 hover:bg-accent-blue/15 hover:text-white"
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
                <a key={item} href="#" onClick={(event) => handleAnchorClick(event, '#')} className="footer-link">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">Resources</p>
            <div className="mt-5 grid gap-3">
              {FOOTER_LINKS.resources.map((item) => (
                <a key={item} href="#" onClick={(event) => handleAnchorClick(event, '#')} className="footer-link">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">Legal</p>
            <div className="mt-5 grid gap-3">
              {FOOTER_LINKS.contact.map((item) => (
                <a key={item} href="#" onClick={(event) => handleAnchorClick(event, '#')} className="footer-link">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Metawaves AI. Crafted for the next generation of AI-native careers.</p>
          <p>Built with React, Tailwind CSS, React Three Fiber, Framer Motion, GSAP, and Lenis.</p>
        </div>
      </div>
    </footer>
  );
}
