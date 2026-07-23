import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { handleAnchorClick } from '../../utils';

export function ChatBubble() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);
  useClickOutside(wrapperRef, close, open);
  useEscapeKey(close, open);

  return (
    <div ref={wrapperRef} className="fixed bottom-24 left-6 z-40 lg:bottom-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="surface-card absolute bottom-16 left-0 w-[300px] max-w-[85vw] p-5"
            role="dialog"
            aria-label="Chat with Metawaves"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="icon-chip h-11 w-11 flex-none">
                <MessageCircle size={20} />
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
            <p className="font-heading mt-4 text-lg font-bold text-navy">Need a hand?</p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
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
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border-soft bg-white text-accent-blue shadow-[0_12px_28px_rgba(16,24,40,0.14)] transition-colors duration-200 hover:text-navy"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>
    </div>
  );
}
