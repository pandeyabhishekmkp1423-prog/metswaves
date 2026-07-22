import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { ANNOUNCEMENTS } from '../../constants';
import { handleAnchorClick } from '../../utils';

const DISMISS_KEY = 'metawaves-announcement-dismissed';
const ROTATE_MS = 4200;

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      setDismissed(window.sessionStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      // sessionStorage unavailable — keep visible
    }
  }, []);

  useEffect(() => {
    if (dismissed || paused || reduceMotion) return;
    timerRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % ANNOUNCEMENTS.length);
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [dismissed, paused, reduceMotion]);

  const handleDismiss = useCallback(() => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  }, []);

  const current = ANNOUNCEMENTS[index];

  return (
    <AnimatePresence initial={false}>
      {!dismissed ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[70] flex justify-center overflow-hidden bg-white px-3 pt-2.5 sm:px-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            role="status"
            aria-live="polite"
            className="announcement-gradient announcement-shimmer relative flex h-10 w-full max-w-[1400px] items-center justify-center gap-2 rounded-full border border-border-soft/70 px-4 shadow-[0_2px_10px_rgba(16,24,40,0.06)] sm:h-11 sm:gap-3 sm:px-5"
          >
            <span className="relative hidden flex-none items-center justify-center sm:flex">
              <span className="announcement-live-dot h-1.5 w-1.5 rounded-full bg-accent-blue" />
            </span>
            <Sparkles size={14} className="hidden flex-none text-accent-blue sm:block" />

            <div className="relative h-5 w-full max-w-[300px] flex-1 overflow-hidden text-center sm:w-[320px] sm:flex-none">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-0 truncate text-[13px] font-semibold text-navy sm:text-sm"
                >
                  {current.text}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="hidden items-center gap-1.5 md:flex">
              {ANNOUNCEMENTS.map((announcement, dotIndex) => (
                <button
                  key={announcement.text}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Show announcement ${dotIndex + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIndex === index ? 'w-4 bg-accent-blue' : 'w-1.5 bg-navy/15 hover:bg-navy/30'
                  }`}
                />
              ))}
            </div>

            <a
              href={current.href}
              onClick={(event) => handleAnchorClick(event, current.href)}
              className="btn-gradient-cta hidden flex-none px-3.5 py-1.5 text-[11px] tracking-wide sm:inline-flex"
              style={{ boxShadow: '0 0 0 rgba(37,99,235,0)' }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                animate={reduceMotion ? undefined : { boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 14px rgba(59,130,246,0.55)', '0 0 0px rgba(59,130,246,0)'] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="relative">{current.ctaLabel}</span>
            </a>

            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Dismiss announcement"
              className="flex h-6 w-6 flex-none items-center justify-center rounded-full text-navy/40 transition-colors duration-200 hover:bg-navy/5 hover:text-navy"
            >
              <X size={13} />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
