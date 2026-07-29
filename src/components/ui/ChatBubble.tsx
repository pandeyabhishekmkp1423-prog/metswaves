import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { handleAnchorClick } from '../../utils';

const GREETING_DISMISSED_KEY = 'metawaves-wave-greeting-dismissed';
const SHOW_SCROLL_THRESHOLD = 480;

export function ChatBubble() {
  const location = useLocation();
  const isCourseDetail = /^\/courses\/[^/]+$/.test(location.pathname);

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);
  useClickOutside(wrapperRef, close, open);
  useEscapeKey(close, open);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (sessionStorage.getItem(GREETING_DISMISSED_KEY)) return;
    const timer = window.setTimeout(() => setShowGreeting(true), 1600);
    return () => window.clearTimeout(timer);
  }, [visible]);

  const dismissGreeting = () => {
    setShowGreeting(false);
    sessionStorage.setItem(GREETING_DISMISSED_KEY, '1');
  };

  const handleAvatarClick = () => {
    setOpen((value) => !value);
    if (showGreeting) dismissGreeting();
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          ref={wrapperRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className={`fixed right-6 z-40 lg:bottom-6 ${isCourseDetail ? 'bottom-24' : 'bottom-6'}`}
        >
          <AnimatePresence>
            {showGreeting && !open ? (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-16 right-14 w-[220px] max-w-[68vw]"
              >
                <div className="surface-card relative rounded-2xl py-3 pl-4 pr-8 shadow-[0_16px_36px_rgba(16,24,40,0.16)]">
                  <button
                    type="button"
                    onClick={dismissGreeting}
                    aria-label="Dismiss message"
                    className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition-colors duration-200 hover:bg-gray-50 hover:text-navy"
                  >
                    <X size={13} />
                  </button>
                  <p className="text-sm font-semibold text-navy">Hi, I'm Wave 👋</p>
                  <p className="mt-0.5 text-sm leading-snug text-text-secondary">I'll help you find...</p>
                  <span className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-border-soft bg-white" />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="surface-card absolute bottom-24 right-0 w-[300px] max-w-[85vw] p-5"
                role="dialog"
                aria-label="Chat with Wave"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img src="/assitant.png" alt="" className="h-10 w-10 rounded-full object-cover object-top" />
                    <p className="font-heading text-base font-bold text-navy">Wave</p>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close chat"
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-gray-400 transition-colors duration-200 hover:bg-gray-50 hover:text-navy"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  Ask us about courses, cohorts, or pricing — our admissions team typically replies within a few hours.
                </p>
                <a
                  href="#contact"
                  onClick={(event) => {
                    handleAnchorClick(event, '#contact');
                    close();
                  }}
                  className="btn-premium button-glow mt-4 inline-flex w-full items-center justify-center px-5 py-2.5 text-sm"
                >
                  Message Us
                </a>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.button
            type="button"
            onClick={handleAvatarClick}
            aria-label={open ? 'Close chat with Wave' : 'Chat with Wave'}
            aria-expanded={open}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            className="block drop-shadow-[0_14px_24px_rgba(16,24,40,0.22)]"
          >
            <img src="/assitant.png" alt="Wave, the Metawaves assistant" className="h-28 w-auto sm:h-30" />
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
