import type { CSSProperties } from 'react';

export function LightAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 85%)',
        }}
      />

      <div
        className="trust-blob absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-200/35 blur-[120px]"
        style={{ '--blob-duration': '22s', '--blob-drift-x': '26px', '--blob-drift-y': '-16px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full bg-purple-200/30 blur-[130px]"
        style={{ '--blob-duration': '26s', '--blob-drift-x': '-22px', '--blob-drift-y': '18px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute bottom-0 left-1/3 h-[340px] w-[340px] rounded-full bg-cyan-200/25 blur-[120px]"
        style={{ '--blob-duration': '20s', '--blob-drift-x': '20px', '--blob-drift-y': '-20px' } as CSSProperties}
      />
    </div>
  );
}
