import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, PlayCircle } from 'lucide-react';
import type { CourseModule } from '../../data/courseContent';

type CourseCurriculumProps = {
  modules: CourseModule[];
};

export function CourseCurriculum({ modules }: CourseCurriculumProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4">
      {modules.map((module, index) => {
        const isOpen = openIndex === index;
        const isLast = index === modules.length - 1;
        return (
          <div key={module.title} className="relative flex gap-4">
            <div className="flex flex-none flex-col items-center">
              <span
                className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                  isOpen ? 'border-accent-blue bg-accent-blue text-white' : 'border-border-soft bg-white text-navy'
                }`}
              >
                {index + 1}
              </span>
              {!isLast ? <span className="mt-1.5 w-px flex-1 bg-border-soft" /> : null}
            </div>

            <div className="surface-card mb-1 min-w-0 flex-1 overflow-hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>
                  <span className="font-ui block text-lg font-medium text-navy">{module.title}</span>
                  <span className="mt-1 block text-xs text-text-secondary">{module.lessons.length} lessons</span>
                </span>
                <span
                  className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border border-border-soft bg-accent-blue/10 text-accent-blue transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="grid gap-3 px-6 pb-6">
                      {module.lessons.map((lesson) => (
                        <li key={lesson} className="flex items-start gap-3 text-text-secondary">
                          <PlayCircle size={16} className="mt-0.5 flex-none text-accent-blue" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
