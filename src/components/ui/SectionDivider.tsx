type SectionDividerProps = {
  position: 'top' | 'bottom';
};

export function SectionDivider({ position }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-10 flex justify-center ${position === 'top' ? 'top-0' : 'bottom-0'}`}
    >
      <div className="relative flex w-full max-w-4xl items-center px-10 sm:px-16">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/20" />
        <span className="relative mx-3 flex flex-none items-center gap-2.5">
          <span className="h-1 w-1 rounded-full bg-accent-blue-light/60" />
          <span className="universe-core-pulse h-2 w-2 rounded-full bg-gradient-to-br from-accent-blue-light to-purple-400 shadow-[0_0_14px_rgba(96,165,250,0.75)]" />
          <span className="h-1 w-1 rounded-full bg-purple-400/60" />
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/20" />
      </div>
    </div>
  );
}
