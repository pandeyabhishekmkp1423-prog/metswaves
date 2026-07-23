import { CheckCircle2 } from 'lucide-react';
import type { CategoryTheme } from '../../data/categoryTheme';
import { Reveal } from '../ui/Reveal';

type WhatYouWillLearnProps = {
  items: string[];
  theme: CategoryTheme;
};

export function WhatYouWillLearn({ items, theme }: WhatYouWillLearnProps) {
  return (
    <div id="what-youll-learn">
      <Reveal>
        <h2 className="text-2xl font-semibold text-navy sm:text-[28px]">What you'll learn</h2>
        <p className="mt-2 text-text-secondary">Practical, job-relevant outcomes — not just theory.</p>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="surface-card mt-6 grid gap-4 p-6 sm:grid-cols-2 sm:p-7">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 size={18} className={`mt-0.5 flex-none ${theme.text}`} />
              <span className="text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
