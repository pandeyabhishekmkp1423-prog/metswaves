import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock3, GraduationCap, Search, TrendingUp, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { COURSES, MENTORS, TRENDING_SEARCHES } from '../../constants';
import { useEscapeKey } from '../../hooks/useEscapeKey';

const RECENT_SEARCHES_KEY = 'metawaves-recent-searches';

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

type CommandPaletteButtonProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
  className?: string;
};

export function CommandPaletteButton({ query, onQueryChange, onSubmit, className = '' }: CommandPaletteButtonProps) {
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
