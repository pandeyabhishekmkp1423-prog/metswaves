import { CheckCircle2 } from 'lucide-react';
import type { PricingPlan } from '../../../constants';
import { handleAnchorClick } from '../../../utils';
import { MagneticButton } from '../../ui/MagneticButton';
import { TiltCard } from '../../ui/TiltCard';

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  const Icon = plan.icon;
  const isFeatured = Boolean(plan.isFeatured);

  return (
    <TiltCard className={`h-full rounded-[28px] ${isFeatured ? 'lg:-translate-y-4' : ''}`}>
      <div className={isFeatured ? 'trust-gradient-border h-full rounded-[28px]' : 'surface-card card-hover h-full rounded-[28px]'}>
        <div
          className={`relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 sm:p-8 ${
            isFeatured ? 'bg-gradient-to-b from-navy to-navy-secondary shadow-[0_30px_60px_rgba(7,19,39,0.28)]' : ''
          }`}
        >
          {isFeatured ? (
            <span className="absolute right-7 top-7 rounded-full bg-gradient-to-r from-accent-blue to-purple-400 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_6px_16px_rgba(59,130,246,0.35)]">
              Most Popular
            </span>
          ) : null}

          <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl ${isFeatured ? 'bg-white/10 text-accent-blue-light' : 'icon-chip'}`}>
            <Icon size={22} />
          </div>

          <h3 className={`mt-5 text-2xl font-bold ${isFeatured ? 'text-white' : 'text-navy'}`}>{plan.name}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${isFeatured ? 'text-white/65' : 'text-text-secondary'}`}>{plan.description}</p>

          <div className="mt-6 flex items-baseline gap-1.5">
            <span className={`text-4xl font-extrabold sm:text-5xl ${isFeatured ? 'text-white' : 'text-navy'}`}>{plan.price}</span>
            <span className={`text-sm ${isFeatured ? 'text-white/50' : 'text-text-secondary'}`}>{plan.period}</span>
          </div>

          <ul className="mt-6 flex-1 space-y-3">
            {plan.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 size={16} className={`mt-0.5 flex-none ${isFeatured ? 'text-accent-blue-light' : 'text-accent-blue'}`} />
                <span className={isFeatured ? 'text-white/80' : 'text-text-secondary'}>{benefit}</span>
              </li>
            ))}
          </ul>

          <MagneticButton
            href="#contact"
            onClick={(event) => handleAnchorClick(event, '#contact')}
            className={`button-glow mt-8 inline-flex w-full items-center justify-center px-6 py-3.5 text-sm font-semibold ${
              isFeatured ? 'btn-premium' : 'btn-secondary'
            }`}
          >
            {plan.ctaLabel}
          </MagneticButton>
        </div>
      </div>
    </TiltCard>
  );
}
