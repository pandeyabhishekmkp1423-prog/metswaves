import { AuroraBackground } from '../home/featured/AuroraBackground';
import { Reveal } from '../ui/Reveal';

export function FaqHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <AuroraBackground />

      <div className="section-shell relative z-10 grid items-center gap-10 pt-16! pb-14! md:grid-cols-[1.1fr_0.9fr] md:pt-20! md:pb-16!">
        <Reveal className="text-center md:text-left">
          <span className="eyebrow">FAQ</span>
          <h1 className="mt-6 text-[34px] font-bold leading-[1.1] text-navy sm:text-[44px] md:text-[52px]">
            Straight answers before you commit your time and budget.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-text-secondary md:mx-0 md:text-lg">
            Everything students, parents, and working professionals ask us most — about pacing, mentorship, pricing,
            certificates, and what happens after you enroll. Still stuck? Wave is in the corner of every page and
            happy to help.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto md:mx-0 md:justify-self-end">
          <img
            src="/avatar.png"
            alt="Wave, the Metawaves AI mascot"
            className="h-56 w-auto object-contain sm:h-64 md:h-72"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  );
}
