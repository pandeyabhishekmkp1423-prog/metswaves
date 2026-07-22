import type { CSSProperties } from 'react';

export function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div
        className="trust-blob absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-blue-300/25 blur-[140px]"
        style={{ '--blob-duration': '24s', '--blob-drift-x': '28px', '--blob-drift-y': '-18px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute right-[-15%] top-1/4 h-[440px] w-[440px] rounded-full bg-violet-300/25 blur-[150px]"
        style={{ '--blob-duration': '28s', '--blob-drift-x': '-24px', '--blob-drift-y': '20px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute bottom-[-12%] left-1/3 h-[380px] w-[380px] rounded-full bg-sky-200/20 blur-[130px]"
        style={{ '--blob-duration': '22s', '--blob-drift-x': '22px', '--blob-drift-y': '-24px' } as CSSProperties}
      />
    </div>
  );
}
