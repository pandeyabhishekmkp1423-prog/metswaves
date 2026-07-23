import { ArrowRight } from 'lucide-react';
import { handleAnchorClick } from '../../../utils';
import { MagneticButton } from '../../ui/MagneticButton';

export function PricingCtaBanner() {
  return (
    <div className="trust-gradient-border rounded-[32px]">
      <div className="flex flex-col items-center gap-6 rounded-[32px] bg-gradient-to-br from-navy to-navy-secondary px-6 py-12 text-center sm:px-10 sm:py-14 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue-light">
            Your Future Starts Now
          </p>
          <h3 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
            Skills compound. Certificates don&rsquo;t.
          </h3>
          <p className="mt-2 max-w-xl text-sm text-white/60 sm:text-base">
            Start building equity in yourself today — your future self will thank you.
          </p>
        </div>
        <MagneticButton
          href="#contact"
          onClick={(event) => handleAnchorClick(event, '#contact')}
          className="btn-premium button-glow inline-flex flex-none items-center gap-2 px-8 py-4 text-base"
        >
          Get Started Today
          <ArrowRight size={18} />
        </MagneticButton>
      </div>
    </div>
  );
}
