import { MagneticButton } from '../ui/MagneticButton';
import { handleAnchorClick } from '../../utils';

export function UserMenu() {
  return (
    <div className="hidden items-center gap-2 min-[1440px]:flex">
      <a
        href="#contact"
        onClick={(event) => handleAnchorClick(event, '#contact')}
        className="rounded-full px-2.5 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-navy"
      >
        Log In
      </a>
      <MagneticButton
        href="#contact"
        onClick={(event) => handleAnchorClick(event, '#contact')}
        className="btn-premium button-glow inline-flex items-center px-4 py-2.5 text-sm"
      >
        Enroll Now
      </MagneticButton>
    </div>
  );
}
