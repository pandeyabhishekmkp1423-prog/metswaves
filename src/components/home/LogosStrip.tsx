const LOGOS = ['OpenAI Workflows', 'Cohort Labs', 'Design Ops', 'Career Launchpad'];

export function LogosStrip() {
  return (
    <section className="relative z-10 border-y border-border-soft bg-bg-secondary">
      <div className="section-shell !py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm uppercase tracking-[0.32em] text-gray-400">
          {LOGOS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
