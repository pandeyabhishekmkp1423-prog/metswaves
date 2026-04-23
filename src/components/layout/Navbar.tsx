import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { NAV_ITEMS } from '../../constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] px-4 py-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6 ${
          isScrolled
            ? 'border-white/10 bg-slate-950/75 shadow-[0_18px_60px_rgba(2,6,23,0.55)] backdrop-blur-xl'
            : 'border-white/10 bg-slate-950/35 backdrop-blur-md'
        }`}
      >
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.28),rgba(139,92,246,0.35),rgba(249,115,22,0.28))] shadow-[0_0_40px_rgba(56,189,248,0.2)]">
            <span className="text-lg font-semibold tracking-[-0.08em] text-white">M</span>
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[-0.04em] text-white">Metawaves AI</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Immersive Education</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === item.href ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="#contact" className="btn-premium inline-flex items-center px-5 py-3 text-sm">
            Enroll Now
          </MagneticButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-[0_18px_60px_rgba(2,6,23,0.55)] backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <MagneticButton href="#contact" className="btn-premium mt-2 inline-flex items-center justify-center px-5 py-3 text-sm">
                Enroll Now
              </MagneticButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
