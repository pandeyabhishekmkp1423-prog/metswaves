import { ArrowRight, MessageCircle } from 'lucide-react';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';

export function CoursesFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1d4ed8_0%,#2563eb_45%,#3b82f6_100%)] py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white backdrop-blur-md">
            Start Today
          </span>
          <h2 className="mt-6 font-heading text-[28px] font-bold text-white sm:text-[34px] md:text-[44px]">
            Your next role starts with your next course.
          </h2>
          <p className="mt-5 text-base text-white/80 md:text-lg">
            Join 25,000+ learners building real AI products with mentor support, certificates, and career prep built
            in. Pick a path or talk to an advisor today.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href="#contact"
              onClick={(event) => handleAnchorClick(event, '#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-premium bg-white px-8 py-4 text-base font-semibold text-navy shadow-[0_14px_34px_rgba(7,19,39,0.28)]"
            >
              Talk to an Advisor
              <ArrowRight size={18} />
            </MagneticButton>
            <a
              href="#contact"
              onClick={(event) => handleAnchorClick(event, '#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-premium border border-white/30 px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              <MessageCircle size={18} />
              Chat with Admissions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
