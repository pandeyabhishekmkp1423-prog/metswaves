import { useId } from 'react';
import { AI_TECHNOLOGIES, TRUST_STATS } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { StatCard } from './trust/StatCard';
import { TechCloudChip } from './trust/TechCloudChip';
import { TrustBackground } from './trust/TrustBackground';

export function TrustCredibility() {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="relative overflow-hidden bg-[#0b0d16]">
      <TrustBackground />

      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-accent-blue-light backdrop-blur-md">
            Trusted Worldwide
          </span>
          <h2 id={headingId} className="mt-6 font-heading text-[28px] font-bold text-white sm:text-[34px] md:text-[44px]">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-accent-blue-light via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Thousands
            </span>{' '}
            of Future AI Professionals
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            Join a fast-growing community of learners building real AI skills, shipping real projects, and launching
            real careers — backed by mentors who work in the field every day.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 [&>*:last-child]:col-span-2 sm:grid-cols-3 sm:gap-5 sm:[&>*:last-child]:col-span-1 lg:grid-cols-5">
          {TRUST_STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="h-full">
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-20 text-center md:mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/40">
            Learn the tools shaping the industry
          </p>
          <div className="mx-auto mt-9 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-7 sm:gap-x-5">
            {AI_TECHNOLOGIES.map((tech, index) => (
              <TechCloudChip key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
