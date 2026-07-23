import { AlertTriangle, BadgeCheck, Lightbulb } from 'lucide-react';
import type { ArticleBlock } from '../../data/articleContent';

type CalloutBlock = Extract<ArticleBlock, { type: 'callout' }>;

const VARIANT_STYLES: Record<CalloutBlock['variant'], { icon: typeof Lightbulb; label: string; classes: string; iconClasses: string }> = {
  tip: {
    icon: Lightbulb,
    label: 'AI Tip',
    classes: 'border-accent-blue/20 bg-accent-blue/5',
    iconClasses: 'border-accent-blue/20 bg-accent-blue/10 text-accent-blue',
  },
  warning: {
    icon: AlertTriangle,
    label: 'Warning',
    classes: 'border-amber-200 bg-amber-50/70',
    iconClasses: 'border-amber-200 bg-amber-100 text-amber-600',
  },
  'best-practice': {
    icon: BadgeCheck,
    label: 'Best Practice',
    classes: 'border-emerald-200 bg-emerald-50/70',
    iconClasses: 'border-emerald-200 bg-emerald-100 text-emerald-600',
  },
};

type ArticleCalloutProps = {
  block: CalloutBlock;
};

export function ArticleCallout({ block }: ArticleCalloutProps) {
  const variant = VARIANT_STYLES[block.variant];
  const Icon = variant.icon;

  return (
    <div className={`my-8 flex gap-4 rounded-2xl border p-5 sm:p-6 ${variant.classes}`}>
      <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border ${variant.iconClasses}`}>
        <Icon size={17} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">{variant.label}</p>
        <p className="mt-1.5 font-semibold text-navy">{block.title}</p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-text-secondary">{block.text}</p>
      </div>
    </div>
  );
}
