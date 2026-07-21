import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, X } from 'lucide-react';
import { ANNOUNCEMENTS } from '../../constants';
import { handleAnchorClick } from '../../utils';

const DISMISS_KEY = 'metawaves-announcement-dismissed';

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      setDismissed(window.sessionStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      // sessionStorage unavailable — keep visible
    }
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence initial={false}>
      {!dismissed ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative z-[70] overflow-hidden bg-navy"
        >
          <div className="font-ui grid h-9 grid-cols-[auto_1fr_auto] items-center gap-3 px-4 text-white">
            <Volume2 size={14} className="hidden flex-none text-accent-blue-light sm:block" />

            <div className="flex items-center justify-center gap-3">
              <div className="relative h-4 max-w-[62vw] flex-1 overflow-hidden text-center sm:max-w-none sm:w-[360px] sm:flex-none">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-x-0 truncate text-xs font-medium"
                  >
                    {ANNOUNCEMENTS[index]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="hidden items-center gap-1.5 sm:flex">
                {ANNOUNCEMENTS.map((announcement, dotIndex) => (
                  <button
                    key={announcement}
                    type="button"
                    onClick={() => setIndex(dotIndex)}
                    aria-label={`Show announcement ${dotIndex + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIndex === index ? 'w-4 bg-accent-blue-light' : 'w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-none items-center gap-3">
              <a
                href="#contact"
                onClick={(event) => handleAnchorClick(event, '#contact')}
                className="hidden flex-none items-center gap-1 text-xs font-semibold text-white transition-colors duration-200 hover:text-accent-blue-light sm:flex"
              >
                Enroll Now
                <span aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                onClick={handleDismiss}
                aria-label="Dismiss announcement"
                className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-white/50 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <X size={12} />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
