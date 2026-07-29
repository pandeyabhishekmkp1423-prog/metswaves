import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Clock3, GraduationCap, Menu, Search, TrendingUp, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { COURSES, MENTORS, NAV_ITEMS, NAV_RESOURCES_MEGA, TRENDING_SEARCHES, type NavItem } from '../../constants';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { handleAnchorClick } from '../../utils';
import { GradientCtaButton } from '../nav/GradientCtaButton';
import { Logo } from '../nav/Logo';

const RECENT_SEARCHES_KEY = 'metawaves-recent-searches';
const HIDE_SCROLL_THRESHOLD = 120;

// ---------------------------------------------------------------------------
// Desktop primary nav link / mega-menu trigger
// ---------------------------------------------------------------------------

type NavigationItemProps = {
  item: NavItem;
  isOpen: boolean;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
  triggerRef?: (el: HTMLButtonElement | null) => void;
};

function NavigationItem({ item, isOpen, isActive, onEnter, onLeave, onToggle, triggerRef }: NavigationItemProps) {
  const highlighted = isOpen || isActive;

  if (item.mode === 'link') {
    return (
      <a
        href={item.href}
        onClick={(event) => handleAnchorClick(event, item.href)}
        onMouseEnter={onEnter}
        className="group relative whitespace-nowrap rounded-full px-3.5 py-2.5 text-[13.5px] font-medium text-text-secondary transition-colors duration-200 hover:text-navy"
      >
        <span className="relative z-10">{item.label}</span>
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 z-0 rounded-full bg-navy/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: highlighted ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-3.5 bottom-1.5 h-0.5 rounded-full bg-accent-blue"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: highlighted ? 1 : 0 }}
          style={{ originX: 0.5 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </a>
    );
  }

  return (
    <button
      ref={triggerRef}
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onToggle}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className="group relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2.5 text-[13.5px] font-medium text-text-secondary transition-colors duration-200 hover:text-navy"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-full bg-navy/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: highlighted ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <span className="relative z-10">{item.label}</span>
      <motion.span
        className="relative z-10 flex items-center"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <ChevronDown size={15} />
      </motion.span>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Desktop "Resources" mega menu panel
// ---------------------------------------------------------------------------

function DesktopMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    onNavigate();
  };

  return (
    <div className="grid w-[820px] max-w-[86vw] grid-cols-4 gap-1 p-5" role="menu" data-lenis-prevent>
      {NAV_RESOURCES_MEGA.map((section, sectionIndex) => {
        const SectionIcon = section.icon;
        return (
          <div key={section.heading} className={`min-w-0 px-3 ${sectionIndex > 0 ? 'border-l border-border-soft' : ''}`}>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-accent-blue/10 text-accent-blue">
                <SectionIcon size={16} />
              </span>
              <p className="text-sm font-semibold text-navy">{section.heading}</p>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-text-secondary">{section.description}</p>
            <div className="grid gap-1">
              {section.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleClick(event, item.href)}
                    role="menuitem"
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="group flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-sm text-text-secondary transition-colors duration-200 hover:bg-accent-blue/8 hover:text-accent-blue"
                  >
                    <motion.span
                      className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-gray-50 text-gray-400 transition-colors duration-200 group-hover:bg-accent-blue/12 group-hover:text-accent-blue"
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 16 }}
                    >
                      <ItemIcon size={14} />
                    </motion.span>
                    <span className="truncate font-ui">{item.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile "Resources" accordion contents
// ---------------------------------------------------------------------------

function MobileMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    onNavigate();
  };

  return (
    <div className="grid gap-5 py-2">
      {NAV_RESOURCES_MEGA.map((section) => {
        const SectionIcon = section.icon;
        return (
          <div key={section.heading}>
            <div className="mb-1.5 flex items-center gap-2 px-4">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-[8px] bg-accent-blue/10 text-accent-blue">
                <SectionIcon size={13} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">{section.heading}</p>
            </div>
            <div className="grid gap-0.5">
              {section.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleClick(event, item.href)}
                    className="flex min-h-11 items-center gap-3 rounded-[12px] px-4 py-2 text-sm text-text-secondary transition-colors duration-200 active:bg-gray-50"
                  >
                    <ItemIcon size={16} className="flex-none text-gray-400" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Command palette (search) — trigger button + modal
// ---------------------------------------------------------------------------

function readRecentSearches(): string[] {
  try {
    const raw = window.localStorage.getItem(RECENT_SEARCHES_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(term: string) {
  try {
    const existing = readRecentSearches().filter((entry) => entry.toLowerCase() !== term.toLowerCase());
    const next = [term, ...existing].slice(0, 5);
    window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(next));
  } catch {
    // localStorage unavailable — ignore
  }
}

function PaletteSection({ label, icon: Icon, children }: { label: string; icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="mb-3 last:mb-0">
      <p className="flex items-center gap-1.5 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
        <Icon size={12} />
        {label}
      </p>
      <div className="mt-1.5 grid gap-0.5">{children}</div>
    </div>
  );
}

function SuggestionRow({
  label,
  sublabel,
  isActive,
  onClick,
}: {
  label: string;
  sublabel?: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="option"
      aria-selected={isActive}
      className={`flex w-full items-center justify-between rounded-[10px] px-3 py-2.5 text-left text-sm transition-colors duration-200 ${
        isActive ? 'bg-accent-blue/10 text-accent-blue' : 'text-text-secondary hover:bg-gray-50 hover:text-navy'
      }`}
    >
      <span>{label}</span>
      {sublabel ? <span className="text-xs text-gray-400">{sublabel}</span> : null}
    </button>
  );
}

type CommandPaletteButtonProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
  className?: string;
};

function CommandPaletteButton({ query, onQueryChange, onSubmit, className = '' }: CommandPaletteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [recent, setRecent] = useState<string[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      setRecent(readRecentSearches());
      setHighlightIndex(-1);
      window.setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((current) => !current);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEscapeKey(close, isOpen);

  const popularCourses = COURSES.slice(0, 4);
  const popularInstructors = MENTORS.slice(0, 3);

  const commitSearch = (term: string) => {
    onQueryChange(term);
    saveRecentSearch(term);
    onSubmit();
    close();
  };

  const suggestions = useMemo(() => {
    const list: { key: string; label: string; onSelect: () => void }[] = [];
    recent.forEach((term) => list.push({ key: `recent-${term}`, label: term, onSelect: () => commitSearch(term) }));
    TRENDING_SEARCHES.forEach((term) => list.push({ key: `trending-${term}`, label: term, onSelect: () => commitSearch(term) }));
    popularCourses.forEach((course) =>
      list.push({ key: `course-${course.id}`, label: course.title, onSelect: () => commitSearch(course.title) }),
    );
    popularInstructors.forEach((mentor) =>
      list.push({ key: `mentor-${mentor.name}`, label: mentor.name, onSelect: () => commitSearch(mentor.name) }),
    );
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recent]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightIndex((index) => Math.min(index + 1, suggestions.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightIndex((index) => Math.max(index - 1, -1));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (highlightIndex >= 0 && suggestions[highlightIndex]) {
        suggestions[highlightIndex].onSelect();
      } else if (query.trim()) {
        commitSearch(query.trim());
      }
    }
  };

  let runningIndex = 0;

  return (
    <>
      <motion.button
        type="button"
        onClick={open}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        aria-label="Open search"
        className={`flex h-11 items-center gap-2.5 rounded-full border border-border-soft bg-white/60 px-4 text-sm text-text-secondary backdrop-blur-md transition-colors duration-200 hover:border-accent-blue/30 hover:text-navy ${className}`}
      >
        <Search size={16} className="flex-none text-gray-400" />
        <span className="hidden whitespace-nowrap lg:inline">Search Courses...</span>
        <span className="ml-1 hidden flex-none items-center gap-0.5 rounded-md border border-border-soft bg-gray-50 px-1.5 py-0.5 text-[10px] font-semibold text-gray-400 lg:flex">
          <span aria-hidden="true">⌘</span>K
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] flex items-start justify-center bg-navy/30 px-4 pt-[14vh] backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) close();
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Search courses"
          >
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="surface-card w-full max-w-[560px] overflow-hidden"
            >
              <div className="flex items-center gap-3 border-b border-border-soft px-5 py-4">
                <Search size={18} className="flex-none text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => {
                    onQueryChange(event.target.value);
                    setHighlightIndex(-1);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search AI courses, mentors, skills..."
                  className="w-full bg-transparent text-base text-navy placeholder:text-gray-400 outline-none"
                  role="combobox"
                  aria-expanded={isOpen}
                  aria-autocomplete="list"
                />
                {query ? (
                  <button type="button" onClick={() => onQueryChange('')} aria-label="Clear search" className="flex-none text-gray-400 hover:text-navy">
                    <X size={16} />
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close search"
                  className="flex-none rounded-md border border-border-soft px-1.5 py-0.5 text-[10px] font-semibold text-gray-400"
                >
                  ESC
                </button>
              </div>

              <div className="max-h-[420px] overflow-y-auto p-3" role="listbox">
                {recent.length > 0 ? (
                  <PaletteSection label="Recent Searches" icon={Clock3}>
                    {recent.map((term) => {
                      const index = runningIndex++;
                      return <SuggestionRow key={`recent-${term}`} label={term} isActive={highlightIndex === index} onClick={() => commitSearch(term)} />;
                    })}
                  </PaletteSection>
                ) : null}

                <PaletteSection label="Trending Searches" icon={TrendingUp}>
                  {TRENDING_SEARCHES.map((term) => {
                    const index = runningIndex++;
                    return <SuggestionRow key={`trending-${term}`} label={term} isActive={highlightIndex === index} onClick={() => commitSearch(term)} />;
                  })}
                </PaletteSection>

                <PaletteSection label="Popular Courses" icon={GraduationCap}>
                  {popularCourses.map((course) => {
                    const index = runningIndex++;
                    return (
                      <SuggestionRow
                        key={course.id}
                        label={course.title}
                        sublabel={`by ${course.instructor}`}
                        isActive={highlightIndex === index}
                        onClick={() => commitSearch(course.title)}
                      />
                    );
                  })}
                </PaletteSection>

                <PaletteSection label="Popular Instructors" icon={GraduationCap}>
                  {popularInstructors.map((mentor) => {
                    const index = runningIndex++;
                    return (
                      <SuggestionRow
                        key={mentor.name}
                        label={mentor.name}
                        sublabel={mentor.role}
                        isActive={highlightIndex === index}
                        onClick={() => commitSearch(mentor.name)}
                      />
                    );
                  })}
                </PaletteSection>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

// ---------------------------------------------------------------------------
// Full-screen mobile menu
// ---------------------------------------------------------------------------

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
};

function MobileMenu({ isOpen, onClose, query, onQueryChange, onSearchSubmit }: MobileMenuProps) {
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
                          <MobileMegaMenu onNavigate={onClose} />
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

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
};

export function Navbar({ query, onQueryChange, onSearchSubmit }: NavbarProps) {
  const location = useLocation();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [panelLeft, setPanelLeft] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (currentY < HIDE_SCROLL_THRESHOLD) {
        setHidden(false);
      } else if (currentY > lastScrollY.current) {
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const scheduleOpen = useCallback((id: string) => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpenMenuId(id), 100);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpenMenuId(null), 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  const closeMenu = useCallback(() => {
    clearTimers();
    setOpenMenuId(null);
  }, []);

  const isPanelOpen = openMenuId !== null;
  useClickOutside(containerRef, closeMenu, isPanelOpen);
  useEscapeKey(closeMenu, isPanelOpen);

  useEffect(() => {
    if (hidden) closeMenu();
  }, [hidden, closeMenu]);

  useLayoutEffect(() => {
    if (!isPanelOpen || !openMenuId) return;

    const container = containerRef.current;
    const trigger = triggerRefs.current[openMenuId];
    const panel = panelRef.current;
    if (!container || !trigger || !panel) return;

    const updatePosition = () => {
      const containerRect = container.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const panelWidth = panel.getBoundingClientRect().width;
      const desiredLeft = triggerRect.left - containerRect.left;
      const maxLeft = Math.max(8, containerRect.width - panelWidth - 8);
      setPanelLeft(Math.max(8, Math.min(desiredLeft, maxLeft)));
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(panel);
    window.addEventListener('resize', updatePosition);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updatePosition);
    };
  }, [isPanelOpen, openMenuId]);

  const registerTrigger = (id: string) => (el: HTMLButtonElement | null) => {
    triggerRefs.current[id] = el;
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-130%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="font-ui sticky top-0 z-40 w-full px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <motion.div
          initial={false}
          animate={{
            height: scrolled ? 64 : 80,
            backgroundColor: scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0.44)',
            boxShadow: scrolled ? '0 12px 34px rgba(16,24,40,0.12)' : '0 1px 0 rgba(16,24,40,0)',
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`relative mx-auto flex w-[92%] max-w-[1400px] items-center justify-between gap-3 rounded-[28px] border px-4 backdrop-blur-xl transition-[border-color] duration-500 sm:px-6 ${
            scrolled ? 'border-border-soft/80' : 'border-white/50'
          }`}
        >
          <div ref={containerRef} className="relative flex w-full items-center justify-between gap-3">
            <Logo />

            <nav className="hidden items-center gap-0.5 min-[1200px]:flex" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <NavigationItem
                  key={item.id}
                  item={item}
                  isOpen={openMenuId === (item.mode === 'panel' ? item.panel : '')}
                  isActive={item.mode === 'link' && !item.href.startsWith('#') && (location.pathname === item.href || location.pathname.startsWith(`${item.href}/`))}
                  onEnter={() => (item.mode === 'panel' ? scheduleOpen(item.panel) : scheduleClose())}
                  onLeave={scheduleClose}
                  onToggle={() => {
                    if (item.mode !== 'panel') return;
                    clearTimers();
                    setOpenMenuId((current) => (current === item.panel ? null : item.panel));
                  }}
                  triggerRef={item.mode === 'panel' ? registerTrigger(item.panel) : undefined}
                />
              ))}
            </nav>

            <div className="flex flex-none items-center gap-2 sm:gap-2.5">
              <CommandPaletteButton
                query={query}
                onQueryChange={onQueryChange}
                onSubmit={onSearchSubmit}
                className="hidden min-[1200px]:flex"
              />

              <a
                href="#contact"
                onClick={(event) => handleAnchorClick(event, '#contact')}
                className="btn-glass-nav hidden px-4 py-2.5 text-sm hover:-translate-y-0.5 min-[1200px]:inline-flex"
              >
                Login
              </a>

              <GradientCtaButton
                href="#contact"
                onClick={(event) => handleAnchorClick(event, '#contact')}
                className="hidden px-5 py-2.5 text-sm min-[1200px]:inline-flex"
              >
                Start Learning
              </GradientCtaButton>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="btn-glass-nav flex h-11 w-11 items-center justify-center text-navy min-[1200px]:hidden"
              >
                <Menu size={19} />
              </button>
            </div>

            <AnimatePresence>
              {isPanelOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                  style={{ left: panelLeft }}
                  className="absolute top-full z-50 hidden pt-4 min-[1200px]:block"
                >
                  <div ref={panelRef} className="surface-card overflow-hidden bg-white/95 backdrop-blur-xl">
                    <DesktopMegaMenu onNavigate={closeMenu} />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        query={query}
        onQueryChange={onQueryChange}
        onSearchSubmit={onSearchSubmit}
      />
    </>
  );
}
