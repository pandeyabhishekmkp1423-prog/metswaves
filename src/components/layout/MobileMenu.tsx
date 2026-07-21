import { useEffect, useState, type FormEvent, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Search, X } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { CartButton } from '../nav/CartButton';
import {
  BECOME_INSTRUCTOR,
  COURSES,
  NAV_CAREER_TRACKS,
  NAV_FOR_BUSINESS,
  NAV_ITEMS,
  NAV_PROGRAMS,
  NAV_RESOURCES,
  type NavPanelType,
} from '../../constants';
import { handleAnchorClick, handleLogoClick } from '../../utils';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
};

const linkRowClass = 'rounded-[12px] px-4 py-2.5 text-sm text-text-secondary transition-colors duration-200 hover:bg-gray-50 hover:text-navy';

export function MobileMenu({ isOpen, onClose, query, onQueryChange, onSearchSubmit }: MobileMenuProps) {
  const [openPanel, setOpenPanel] = useState<NavPanelType | null>(null);

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
    if (!isOpen) setOpenPanel(null);
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

  const renderPanelBody = (panel: NavPanelType) => {
    switch (panel) {
      case 'explore':
        return (
          <div className="grid gap-1 py-2">
            {COURSES.map((course) => (
              <a key={course.id} href="#courses" onClick={(event) => handleLinkClick(event, '#courses')} className={linkRowClass}>
                {course.title}
              </a>
            ))}
          </div>
        );
      case 'programs':
        return (
          <div className="grid gap-1 py-2">
            {NAV_PROGRAMS.map((item) => (
              <a key={item.label} href={item.href} onClick={(event) => handleLinkClick(event, item.href)} className={linkRowClass}>
                {item.label}
              </a>
            ))}
          </div>
        );
      case 'career-tracks':
        return (
          <div className="grid gap-1 py-2">
            {NAV_CAREER_TRACKS.map((item) => (
              <a key={item.label} href={item.href} onClick={(event) => handleLinkClick(event, item.href)} className={linkRowClass}>
                {item.label}
              </a>
            ))}
          </div>
        );
      case 'resources':
        return (
          <div className="grid gap-4 py-2">
            {NAV_RESOURCES.map((column) => (
              <div key={column.heading}>
                <p className="px-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">{column.heading}</p>
                <div className="mt-1 grid gap-1">
                  {column.items.map((item) => (
                    <a key={item.label} href={item.href} onClick={(event) => handleLinkClick(event, item.href)} className={linkRowClass}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'for-business':
        return (
          <div className="grid gap-1 py-2">
            {NAV_FOR_BUSINESS.map((item) => (
              <a key={item.label} href={item.href} onClick={(event) => handleLinkClick(event, item.href)} className={linkRowClass}>
                {item.label}
              </a>
            ))}
          </div>
        );
      case 'become-instructor':
        return (
          <div className="grid gap-3 px-4 py-3">
            <p className="text-sm text-text-secondary">{BECOME_INSTRUCTOR.description}</p>
            <a
              href="#contact"
              onClick={(event) => handleLinkClick(event, '#contact')}
              className="btn-premium button-glow inline-flex items-center justify-center px-5 py-2.5 text-sm"
            >
              {BECOME_INSTRUCTOR.primaryCta}
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[75] flex flex-col bg-white min-[1440px]:hidden"
        >
          <div className="flex items-center justify-between border-b border-border-soft px-5 py-4">
            <a
              href="#hero"
              onClick={(event) => {
                handleLogoClick(event);
                onClose();
              }}
              aria-label="Metawaves AI home"
              className="flex items-center"
            >
              <img src="/logo-navy.png" alt="Metawaves AI" className="h-6 w-auto" />
            </a>
            <div className="flex items-center gap-2">
              <CartButton onNavigate={onClose} />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-navy"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <form onSubmit={handleSubmitSearch} className="flex items-center gap-2 rounded-[14px] border border-border-soft bg-gray-50 px-3 py-2.5">
              <Search size={16} className="flex-none text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search AI courses, mentors, skills..."
                className="w-full bg-transparent text-sm text-navy placeholder:text-gray-400 outline-none"
              />
            </form>

            <div className="mt-4 grid gap-1">
              {NAV_ITEMS.map((item) => {
                if (item.mode === 'link') {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(event) => handleLinkClick(event, item.href)}
                      className="font-ui rounded-[14px] px-4 py-3 text-base font-medium text-navy transition-colors duration-200 hover:bg-gray-50"
                    >
                      {item.label}
                    </a>
                  );
                }

                const isPanelOpen = openPanel === item.panel;
                return (
                  <div key={item.id} className="rounded-[14px]">
                    <button
                      type="button"
                      onClick={() => setOpenPanel(isPanelOpen ? null : item.panel)}
                      aria-expanded={isPanelOpen}
                      className="font-ui flex w-full items-center justify-between rounded-[14px] px-4 py-3 text-base font-medium text-navy transition-colors duration-200 hover:bg-gray-50"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isPanelOpen ? 'rotate-180 text-accent-blue' : 'text-gray-400'}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isPanelOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-2"
                        >
                          {renderPanelBody(item.panel)}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-2 border-t border-border-soft p-5">
            <a
              href="#contact"
              onClick={(event) => handleLinkClick(event, '#contact')}
              className="rounded-[14px] px-4 py-3 text-center text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-gray-50 hover:text-navy"
            >
              Log In
            </a>
            <MagneticButton
              href="#contact"
              onClick={(event) => handleLinkClick(event, '#contact')}
              className="btn-premium button-glow inline-flex items-center justify-center px-5 py-3 text-sm"
            >
              Enroll Now
            </MagneticButton>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
