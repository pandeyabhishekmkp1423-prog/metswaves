import { useEffect, useState, type FormEvent, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Search, X } from 'lucide-react';
import { GradientCtaButton } from '../nav/GradientCtaButton';
import { Logo } from '../nav/Logo';
import { MegaMenuMobile } from '../nav/MegaMenuMobile';
import { NAV_ITEMS } from '../../constants';
import { handleAnchorClick } from '../../utils';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
};

export function MobileMenu({ isOpen, onClose, query, onQueryChange, onSearchSubmit }: MobileMenuProps) {
  const location = useLocation();
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setResourcesOpen(false);
  }, [isOpen]);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    onClose();
  };

  const handleSubmitSearch = (event: FormEvent) => {
    event.preventDefault();
    onSearchSubmit();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[75] flex flex-col bg-white/90 backdrop-blur-xl min-[1200px]:hidden"
        >
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="flex items-center justify-between border-b border-border-soft px-5 py-4"
          >
            <Logo onNavigate={onClose} />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="btn-glass-nav flex h-11 w-11 items-center justify-center text-navy"
            >
              <X size={19} />
            </button>
          </motion.div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <motion.form
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              onSubmit={handleSubmitSearch}
              className="flex items-center gap-2 rounded-[16px] border border-border-soft bg-gray-50 px-4 py-3.5"
            >
              <Search size={17} className="flex-none text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search Courses..."
                className="w-full bg-transparent text-[15px] text-navy placeholder:text-gray-400 outline-none"
              />
            </motion.form>

            <div className="mt-4 grid gap-1">
              {NAV_ITEMS.map((item, index) => {
                const delay = 0.12 + index * 0.04;

                if (item.mode === 'link') {
                  const Icon = item.icon;
                  const isActive =
                    !item.href.startsWith('#') && (location.pathname === item.href || location.pathname.startsWith(`${item.href}/`));
                  return (
                    <motion.a
                      key={item.id}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay }}
                      href={item.href}
                      onClick={(event) => handleLinkClick(event, item.href)}
                      className={`font-ui flex min-h-[52px] items-center gap-3 rounded-[16px] px-4 text-[17px] font-semibold transition-colors duration-200 ${
                        isActive ? 'bg-accent-blue/10 text-accent-blue' : 'text-navy active:bg-gray-50'
                      }`}
                    >
                      {Icon ? <Icon size={19} className={isActive ? 'text-accent-blue' : 'text-gray-400'} /> : null}
                      {item.label}
                    </motion.a>
                  );
                }

                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay }}
                    className="min-w-0 rounded-[16px]"
                  >
                    <button
                      type="button"
                      onClick={() => setResourcesOpen((current) => !current)}
                      aria-expanded={resourcesOpen}
                      className="font-ui flex min-h-[52px] w-full items-center justify-between gap-3 rounded-[16px] px-4 text-[17px] font-semibold text-navy transition-colors duration-200 active:bg-gray-50"
                    >
                      <span className="flex items-center gap-3">
                        {Icon ? <Icon size={19} className="text-gray-400" /> : null}
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${resourcesOpen ? 'rotate-180 text-accent-blue' : 'text-gray-400'}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {resourcesOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-1"
                        >
                          <MegaMenuMobile onNavigate={onClose} />
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="grid gap-2.5 border-t border-border-soft p-5"
          >
            <a
              href="#contact"
              onClick={(event) => handleLinkClick(event, '#contact')}
              className="btn-glass-nav inline-flex items-center justify-center px-5 py-3.5 text-[15px]"
            >
              Login
            </a>
            <GradientCtaButton href="#contact" onClick={(event) => handleLinkClick(event, '#contact')} className="px-5 py-3.5 text-[15px]">
              Start Learning
            </GradientCtaButton>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
