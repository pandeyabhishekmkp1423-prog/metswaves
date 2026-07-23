import type { CourseCatalogEntry } from '../../data/courseCatalog';
import { formatPriceINR, handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';

type MobileEnrollBarProps = {
  entry: CourseCatalogEntry;
};

export function MobileEnrollBar({ entry }: MobileEnrollBarProps) {
  const price = formatPriceINR(entry.price) ?? 'Certification Program';

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-border-soft bg-white/95 px-5 py-3.5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(16,24,40,0.08)] backdrop-blur-lg lg:hidden">
      <span className="text-lg font-bold text-navy">{price}</span>
      <MagneticButton
        href="#contact"
        onClick={(event) => handleAnchorClick(event, '#contact')}
        className="btn-premium button-glow inline-flex flex-1 max-w-[220px] items-center justify-center gap-2 px-5 py-3 text-sm"
      >
        Enroll Now
      </MagneticButton>
    </div>
  );
}
