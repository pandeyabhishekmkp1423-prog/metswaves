import type { CSSProperties } from 'react';

export function PricingBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fd_45%,#ffffff_100%)]" />

      <div
        className="trust-blob absolute -left-28 top-16 h-[420px] w-[420px] rounded-full bg-blue-200/32 blur-[135px]"
        style={{ '--blob-duration': '24s', '--blob-drift-x': '24px', '--blob-drift-y': '-18px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute right-[-12%] top-1/3 h-[400px] w-[400px] rounded-full bg-purple-100/40 blur-[140px]"
        style={{ '--blob-duration': '28s', '--blob-drift-x': '-22px', '--blob-drift-y': '20px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-sky-100/40 blur-[125px]"
        style={{ '--blob-duration': '21s', '--blob-drift-x': '20px', '--blob-drift-y': '-20px' } as CSSProperties}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 60% 55% at 50% 35%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 55% at 50% 35%, #000 30%, transparent 80%)',
        }}
      />
    </div>
  );
}
