import { useEffect, useState, type RefObject } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type ReadingProgressBarProps = {
  targetRef: RefObject<HTMLElement | null>;
};

export function ReadingProgressBar({ targetRef }: ReadingProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const element = targetRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(rect.top <= 0 ? 100 : 0);
        return;
      }

      const scrolled = -rect.top;
      setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [targetRef]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent" aria-hidden="true">
      <motion.div
        className="h-full bg-[linear-gradient(90deg,#2563eb,#60a5fa)]"
        animate={{ width: `${progress}%` }}
        transition={{ duration: reduceMotion ? 0 : 0.15, ease: 'linear' }}
      />
    </div>
  );
}
