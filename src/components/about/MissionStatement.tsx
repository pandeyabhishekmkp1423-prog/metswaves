import { Quote } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function MissionStatement() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="icon-chip mx-auto h-14 w-14">
          <Quote size={24} />
        </span>
        <p className="mt-8 font-heading text-2xl font-bold leading-snug text-navy sm:text-3xl md:text-4xl">
          Our mission is to make AI fluency a career advantage, not a barrier —{' '}
          <span className="bg-gradient-to-r from-accent-blue to-purple-500 bg-clip-text text-transparent">
            through real projects, real mentors, and real outcomes.
          </span>
        </p>
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-text-secondary">
          Every course, every mentor, every project — built around that one sentence.
        </p>
      </Reveal>
    </section>
  );
}
