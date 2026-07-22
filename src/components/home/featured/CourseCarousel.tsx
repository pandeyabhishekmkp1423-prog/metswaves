import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { FeaturedCourse } from '../../../constants';
import { FeaturedCourseCard } from './FeaturedCourseCard';

type CourseCarouselProps = {
  courses: FeaturedCourse[];
};

export function CourseCarousel({ courses }: CourseCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [courses, updateScrollState]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
      <div
        ref={scrollRef}
        role="region"
        aria-label="Featured AI courses"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex-none"
            >
              <FeaturedCourseCard course={course} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        disabled={!canScrollLeft}
        aria-label="Scroll to previous courses"
        className="absolute left-1 top-[38%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-soft bg-white/95 text-navy shadow-[0_8px_24px_rgba(16,24,40,0.14)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(16,24,40,0.18)] disabled:pointer-events-none disabled:opacity-0 sm:left-2 md:flex lg:left-3"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        disabled={!canScrollRight}
        aria-label="Scroll to next courses"
        className="absolute right-1 top-[38%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-soft bg-white/95 text-navy shadow-[0_8px_24px_rgba(16,24,40,0.14)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(16,24,40,0.18)] disabled:pointer-events-none disabled:opacity-0 sm:right-2 md:flex lg:right-3"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
