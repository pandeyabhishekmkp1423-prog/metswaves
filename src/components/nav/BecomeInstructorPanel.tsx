import type { MouseEvent } from 'react';
import { GraduationCap } from 'lucide-react';
import { BECOME_INSTRUCTOR } from '../../constants';
import { handleAnchorClick } from '../../utils';

type BecomeInstructorPanelProps = {
  onNavigate: () => void;
};

export function BecomeInstructorPanel({ onNavigate }: BecomeInstructorPanelProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    onNavigate();
  };

  return (
    <div className="grid w-[620px] max-w-[88vw] grid-cols-[1fr_auto] items-center gap-8 p-8">
      <div>
        <span className="eyebrow">{BECOME_INSTRUCTOR.eyebrow}</span>
        <h3 className="mt-4 text-2xl font-bold text-navy">{BECOME_INSTRUCTOR.headline}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{BECOME_INSTRUCTOR.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#contact"
            onClick={(event) => handleClick(event, '#contact')}
            className="btn-premium button-glow inline-flex items-center px-5 py-2.5 text-sm"
          >
            {BECOME_INSTRUCTOR.primaryCta}
          </a>
          <a
            href="#teachers"
            onClick={(event) => handleClick(event, '#teachers')}
            className="btn-secondary button-glow inline-flex items-center px-5 py-2.5 text-sm"
          >
            {BECOME_INSTRUCTOR.secondaryCta}
          </a>
        </div>
      </div>
      <div className="hidden h-40 w-40 flex-none items-center justify-center rounded-premium bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(96,165,250,0.18))] sm:flex">
        <GraduationCap size={64} className="text-accent-blue" />
      </div>
    </div>
  );
}
