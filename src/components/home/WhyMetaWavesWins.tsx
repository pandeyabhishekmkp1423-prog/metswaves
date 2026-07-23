import { Reveal } from '../ui/Reveal';
import { ComparisonBackground } from './comparison/ComparisonBackground';
import { ComparisonTable } from './comparison/ComparisonTable';

export function WhyMetaWavesWins() {
  return (
    <section className="relative overflow-hidden bg-[#080a16]">
      <ComparisonBackground />

      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-accent-blue-light backdrop-blur-md">
            The Difference
          </span>
          <h2 className="mt-6 font-heading text-[28px] font-bold text-white sm:text-[34px] md:text-[44px]">
            Why{' '}
            <span className="bg-gradient-to-r from-accent-blue-light via-sky-300 to-purple-400 bg-clip-text text-transparent">
              MetaWaves
            </span>{' '}
            Wins
          </h2>
          <p className="mt-5 text-base text-white/55 md:text-lg">Same 24 hours in a day. Completely different outcome.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <ComparisonTable />
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-16 max-w-2xl text-center lg:mt-20">
          <p className="font-heading text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
            A certificate says you finished.{' '}
            <span className="bg-gradient-to-r from-accent-blue-light to-purple-300 bg-clip-text text-transparent">
              A portfolio proves you can build.
            </span>
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/40">
            Stop collecting proof. Start building your future.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
