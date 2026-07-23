import { VISION_POINTS } from '../../data/aboutContent';
import { Reveal } from '../ui/Reveal';

export function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_36%)]" />

      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Vision for the Future</span>
          <h2 className="mt-6 text-[28px] font-bold leading-snug text-navy sm:text-[34px] md:text-[42px]">
            We think the next decade of work belongs to people who can direct AI, not just use it.
          </h2>
          <p className="mt-5 text-base text-text-secondary md:text-lg">
            Our job is to make sure our students are the ones directing it — and to keep building the school that
            gets them there faster than anyone else.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {VISION_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={0.1 + index * 0.08}>
                <div className="glass-panel h-full p-6">
                  <span className="icon-chip h-11 w-11">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-navy">{point.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{point.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
