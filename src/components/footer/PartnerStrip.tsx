import { FOOTER_TECH_STACK } from '../../constants';

export function PartnerStrip() {
  return ( 
    <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 md:flex-row">
      <p className="max-w-sm text-center text-sm text-white/80 md:text-left">
        Trusted by thousands of learners building AI careers worldwide.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {FOOTER_TECH_STACK.map((name) => (
          <span key={name} className="font-medium text-white/40 transition-colors hover:text-white">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
