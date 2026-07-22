import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { handleAnchorClick } from '../../utils';
import { CommandPaletteButton } from '../nav/CommandPaletteButton';
import { GradientCtaButton } from '../nav/GradientCtaButton';
import { Logo } from '../nav/Logo';
import { MegaMenu } from '../nav/MegaMenu';
import { NavigationItem } from '../nav/NavigationItem';
import { MobileMenu } from './MobileMenu';

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

  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      <header className="font-ui sticky top-0 z-40 w-full px-3 pt-3 sm:px-4 sm:pt-4">
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
                    <MegaMenu onNavigate={closeMenu} />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </header>

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
