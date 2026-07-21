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
        return (
          <div key={module.title} className="surface-card overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-ui text-lg font-medium text-navy">{module.title}</span>
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
        );
      })}
    </div>
  );
}
