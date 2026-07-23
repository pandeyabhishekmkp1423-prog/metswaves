import type { CSSProperties } from 'react';

const NOISE_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function ShowcaseBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_55%,#ffffff_100%)]" />

      <div
        className="trust-blob absolute -left-28 top-10 h-[420px] w-[420px] rounded-full bg-blue-200/35 blur-[130px]"
        style={{ '--blob-duration': '23s', '--blob-drift-x': '26px', '--blob-drift-y': '-18px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute right-[-12%] top-1/3 h-[400px] w-[400px] rounded-full bg-sky-200/30 blur-[140px]"
        style={{ '--blob-duration': '27s', '--blob-drift-x': '-22px', '--blob-drift-y': '20px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute bottom-0 left-1/4 h-[360px] w-[360px] rounded-full bg-blue-100/40 blur-[120px]"
        style={{ '--blob-duration': '21s', '--blob-drift-x': '20px', '--blob-drift-y': '-22px' } as CSSProperties}
      />

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: `url("${NOISE_URI}")` }}
      />
    </div>
  );
}
