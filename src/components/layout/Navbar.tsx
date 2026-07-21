import { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import {
  NAV_CAREER_TRACKS,
  NAV_FOR_BUSINESS,
  NAV_ITEMS,
  NAV_PROGRAMS,
  NAV_RESOURCES,
} from '../../constants';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { handleLogoClick } from '../../utils';
import { BecomeInstructorPanel } from '../nav/BecomeInstructorPanel';
import { CartButton } from '../nav/CartButton';
import { DropdownMenu } from '../nav/DropdownMenu';
import { MegaMenu } from '../nav/MegaMenu';
import { NavigationItem } from '../nav/NavigationItem';
import { SearchBar } from '../nav/SearchBar';
import { UserMenu } from '../nav/UserMenu';
import { MobileMenu } from './MobileMenu';

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
};

export function Navbar({ query, onQueryChange, onSearchSubmit }: NavbarProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const scheduleOpen = useCallback((id: string) => {
    clearTimers();
    setOpenMenuId((current) => {
      if (current && current !== 'search') return id;
      return current;
    });
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

  const isPanelOpen = openMenuId !== null && openMenuId !== 'search';
  useClickOutside(containerRef, closeMenu, isPanelOpen);
  useEscapeKey(closeMenu, openMenuId !== null);

  const handleSelectCourse = (title: string) => {
    onQueryChange(title);
    onSearchSubmit();
    closeMenu();
  };

  const renderPanel = () => {
    switch (openMenuId) {
      case 'explore':
        return <MegaMenu onSelectCourse={handleSelectCourse} />;
      case 'programs':
        return <DropdownMenu variant="list" items={NAV_PROGRAMS} onNavigate={closeMenu} />;
      case 'career-tracks':
        return <DropdownMenu variant="list" items={NAV_CAREER_TRACKS} onNavigate={closeMenu} />;
      case 'resources':
        return <DropdownMenu variant="columns" columns={NAV_RESOURCES} onNavigate={closeMenu} />;
      case 'for-business':
        return <DropdownMenu variant="list" items={NAV_FOR_BUSINESS} onNavigate={closeMenu} />;
      case 'become-instructor':
        return <BecomeInstructorPanel onNavigate={closeMenu} />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="font-ui sticky top-0 z-40 border-b border-border-soft bg-white shadow-[0_4px_20px_rgba(16,24,40,0.06)]">
        <div ref={containerRef} className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-5 sm:px-6 lg:px-6 xl:px-8">
          <a
            href="#hero"
            onClick={handleLogoClick}
            className="flex flex-none items-center"
            aria-label="Metawaves AI home"
          >
            <img src="/logo-navy.png" alt="Metawaves AI" className="h-6 w-auto sm:h-7" />
          </a>

          <nav className="hidden items-center gap-1 min-[1440px]:flex">
            {NAV_ITEMS.map((item) => (
              <NavigationItem
                key={item.id}
                item={item}
                isOpen={openMenuId === (item.mode === 'panel' ? item.panel : '')}
                isActive={false}
                onEnter={() => (item.mode === 'panel' ? scheduleOpen(item.panel) : scheduleClose())}
                onLeave={scheduleClose}
                onToggle={() => {
                  if (item.mode !== 'panel') return;
                  clearTimers();
                  setOpenMenuId((current) => (current === item.panel ? null : item.panel));
                }}
              />
            ))}
          </nav>

          <div className="flex flex-none items-center gap-2 sm:gap-3">
            <SearchBar
              query={query}
              onQueryChange={onQueryChange}
              onSubmit={onSearchSubmit}
              isOpen={openMenuId === 'search'}
              onOpen={() => {
                clearTimers();
                setOpenMenuId('search');
              }}
              onClose={closeMenu}
            />
            <CartButton className="hidden sm:flex" />
            <UserMenu />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-white text-navy min-[1440px]:hidden"
            >
              <Menu size={20} />
            </button>
          </div>

          <AnimatePresence>
            {isPanelOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                className="absolute inset-x-0 top-full z-50 hidden justify-center pt-5 min-[1440px]:flex"
              >
                <div className="surface-card overflow-hidden" role="menu">
                  {renderPanel()}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
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
