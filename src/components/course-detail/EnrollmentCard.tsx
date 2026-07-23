import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, CheckCircle2, Infinity as InfinityIcon, Layers, Play, ShieldCheck, X } from 'lucide-react';
import type { CategoryTheme } from '../../data/categoryTheme';
import type { CourseCatalogEntry } from '../../data/courseCatalog';
import type { GeneratedCourseContent } from '../../data/courseContent';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { formatPriceINR, handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';

type EnrollmentCardProps = {
  entry: CourseCatalogEntry;
  content: GeneratedCourseContent;
  theme: CategoryTheme;
  lessonCount: number;
};

export function EnrollmentCard({ entry, content, theme, lessonCount }: EnrollmentCardProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const CategoryIcon = theme.icon;
  const price = formatPriceINR(entry.price) ?? 'Certification Program';

  useEscapeKey(() => setPreviewOpen(false), previewOpen);
  useClickOutside(modalRef, () => setPreviewOpen(false), previewOpen);

  return (
    <div className={`surface-card overflow-hidden border-t-4 ${theme.topBorder}`}>
      <button
        type="button"
        onClick={() => setPreviewOpen(true)}
        aria-label={`Watch a preview of ${entry.title}`}
        className="group relative block h-44 w-full overflow-hidden"
      >
        {entry.image ? (
          <img
            src={entry.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className={`h-full w-full ${theme.heroGradient} bg-navy`} />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,39,0.05),rgba(7,19,39,0.55))]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Play size={22} className="ml-0.5 text-white" />
          </span>
        </div>
        <span className="absolute bottom-3 left-3 rounded-full bg-navy/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Preview this course
        </span>
      </button>

      <div className="p-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-navy">{price}</span>
        </div>

        <MagneticButton
          href="#contact"
          onClick={(event) => handleAnchorClick(event, '#contact')}
          className="btn-premium button-glow mt-5 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm"
        >
          Enroll Now
        </MagneticButton>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-text-secondary">
          <ShieldCheck size={13} className="text-accent-blue" />
          30-day money-back guarantee
        </p>

        <ul className="mt-6 grid gap-3 border-t border-border-soft pt-6 text-sm text-text-secondary">
          <li className="flex items-center gap-2.5">
            <Layers size={16} className={`flex-none ${theme.text}`} />
            {lessonCount} lessons across {content.curriculum.length} modules
          </li>
          <li className="flex items-center gap-2.5">
            <Award size={16} className={`flex-none ${theme.text}`} />
            Certificate of completion
          </li>
          <li className="flex items-center gap-2.5">
            <InfinityIcon size={16} className={`flex-none ${theme.text}`} />
            Lifetime access to materials
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle2 size={16} className={`flex-none ${theme.text}`} />
            Mentor-reviewed feedback
          </li>
          <li className="flex items-center gap-2.5">
            <CategoryIcon size={16} className={`flex-none ${theme.text}`} />
            Part of the {entry.category} track
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {previewOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-navy/60 px-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Course preview"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[24px] bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setPreviewOpen(false)}
                aria-label="Close preview"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm hover:bg-white"
              >
                <X size={16} />
              </button>
              {entry.image ? (
                <img
                  src={entry.image}
                  alt=""
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              ) : null}
              <div className="p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">Course Preview</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{entry.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Full lesson previews unlock once you enroll. Ready to get started?
                </p>
                <MagneticButton
                  href="#contact"
                  onClick={(event) => {
                    setPreviewOpen(false);
                    handleAnchorClick(event, '#contact');
                  }}
                  className="btn-premium button-glow mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm"
                >
                  Enroll Now
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
