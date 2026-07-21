import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Clock3, GraduationCap, Search, TrendingUp, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { COURSES, MENTORS, TRENDING_SEARCHES } from '../../constants';
import { useClickOutside } from '../../hooks/useClickOutside';
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

type SearchBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function SearchBar({ query, onQueryChange, onSubmit, isOpen, onOpen, onClose }: SearchBarProps) {
  const [recent, setRecent] = useState<string[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setRecent(readRecentSearches());
      setHighlightIndex(-1);
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useClickOutside(wrapperRef, onClose, isOpen);
  useEscapeKey(onClose, isOpen);

  const popularCourses = COURSES.slice(0, 4);
  const popularInstructors = MENTORS.slice(0, 3);

  const commitSearch = (term: string) => {
    onQueryChange(term);
    saveRecentSearch(term);
    onSubmit();
    onClose();
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
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => (isOpen ? onClose() : onOpen())}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Search courses"
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 ${
          isOpen ? 'border-accent-blue/30 bg-accent-blue/10 text-accent-blue' : 'border-border-soft bg-white text-text-secondary hover:text-navy'
        }`}
      >
        <Search size={18} />
      </button>

      {isOpen ? (
        <div className="surface-card absolute right-0 top-[calc(100%+12px)] z-50 w-[380px] max-w-[88vw] p-4" role="dialog" aria-label="Search courses">
          <div className="flex items-center gap-2 rounded-[14px] border border-border-soft bg-gray-50 px-3 py-2.5">
            <Search size={16} className="flex-none text-gray-400" />
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
              className="w-full bg-transparent text-sm text-navy placeholder:text-gray-400 outline-none"
              role="combobox"
              aria-expanded={isOpen}
              aria-autocomplete="list"
            />
            {query ? (
              <button type="button" onClick={() => onQueryChange('')} aria-label="Clear search" className="flex-none text-gray-400 hover:text-navy">
                <X size={14} />
              </button>
            ) : null}
          </div>

          <div className="mt-3 max-h-[360px] overflow-y-auto" role="listbox">
            {recent.length > 0 ? (
              <SearchSection label="Recent Searches" icon={Clock3}>
                {recent.map((term) => {
                  const index = runningIndex++;
                  return <SuggestionRow key={`recent-${term}`} label={term} isActive={highlightIndex === index} onClick={() => commitSearch(term)} />;
                })}
              </SearchSection>
            ) : null}

            <SearchSection label="Trending Searches" icon={TrendingUp}>
              {TRENDING_SEARCHES.map((term) => {
                const index = runningIndex++;
                return <SuggestionRow key={`trending-${term}`} label={term} isActive={highlightIndex === index} onClick={() => commitSearch(term)} />;
              })}
            </SearchSection>

            <SearchSection label="Popular Courses" icon={GraduationCap}>
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
            </SearchSection>

            <SearchSection label="Popular Instructors" icon={GraduationCap}>
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
            </SearchSection>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function SearchSection({ label, icon: Icon, children }: { label: string; icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="mb-3 last:mb-0">
      <p className="flex items-center gap-1.5 px-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
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
      className={`flex w-full items-center justify-between rounded-[10px] px-3 py-2 text-left text-sm transition-colors duration-200 ${
        isActive ? 'bg-accent-blue/10 text-accent-blue' : 'text-text-secondary hover:bg-gray-50 hover:text-navy'
      }`}
    >
      <span>{label}</span>
      {sublabel ? <span className="text-xs text-gray-400">{sublabel}</span> : null}
    </button>
  );
}
