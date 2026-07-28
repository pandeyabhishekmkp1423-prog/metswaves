import type { ReactNode } from 'react';
import { Reveal } from '../ui/Reveal';

type ResourceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function ResourceHero({ eyebrow, title, description, children }: ResourceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg-secondary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_38%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.10),transparent_36%)]" />

      <div className="section-shell relative z-10 pt-16! pb-14! md:pt-20! md:pb-16!">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-6 text-[32px] font-bold leading-[1.15] text-navy sm:text-[42px] md:text-[48px]">{title}</h1>
          <p className="mt-6 text-base text-text-secondary md:text-lg">{description}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
