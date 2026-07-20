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
        className={`mx-auto grid max-w-[1280px] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-premium border px-4 py-3 transition-all duration-500 sm:px-6 ${
          isScrolled
            ? 'border-border-soft bg-white/85 shadow-[0_8px_30px_rgba(16,24,40,0.08)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#hero" className="flex items-center" aria-label="Metawaves AI home">
          <img src="/logo-navy.png" alt="Metawaves AI" className="h-6 w-auto sm:h-7" />
        </a>

        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === item.href
                  ? 'border border-accent-blue/20 bg-accent-blue/10 text-accent-blue'
                  : 'border border-transparent text-text-secondary hover:bg-gray-50 hover:text-navy'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-end gap-2 sm:gap-3">
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#contact"
              className="rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition hover:text-navy"
            >
              Log In
            </a>
            <MagneticButton href="#contact" className="btn-premium button-glow inline-flex items-center px-5 py-3 text-sm">
              Enroll Now
            </MagneticButton>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-white text-navy lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-[1280px] rounded-premium border border-border-soft bg-white p-4 shadow-[0_18px_50px_rgba(16,24,40,0.12)] lg:hidden"
          >
            <div className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-[14px] px-4 py-3 text-text-secondary transition hover:bg-gray-50 hover:text-navy"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid gap-2 border-t border-border-soft pt-3">
                <a
                  href="#contact"
                  className="rounded-[14px] px-4 py-3 text-center text-text-secondary transition hover:bg-gray-50 hover:text-navy"
                  onClick={() => setMenuOpen(false)}
                >
                  Log In
                </a>
                <MagneticButton href="#contact" className="btn-premium button-glow inline-flex items-center justify-center px-5 py-3 text-sm">
                  Enroll Now
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
