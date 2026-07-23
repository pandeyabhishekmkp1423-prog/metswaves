import type { CSSProperties } from 'react';

const MAP_DOTS = [
  // west cluster
  { x: 8, y: 32 }, { x: 12, y: 40 }, { x: 16, y: 30 }, { x: 10, y: 48 }, { x: 18, y: 46 }, { x: 14, y: 58 },
  // central cluster
  { x: 42, y: 26 }, { x: 47, y: 34 }, { x: 44, y: 44 }, { x: 50, y: 40 }, { x: 46, y: 54 }, { x: 52, y: 50 },
  { x: 40, y: 62 }, { x: 48, y: 66 },
  // east cluster
  { x: 74, y: 28 }, { x: 80, y: 36 }, { x: 76, y: 46 }, { x: 84, y: 42 }, { x: 78, y: 56 }, { x: 88, y: 32 },
  { x: 70, y: 60 }, { x: 82, y: 62 },
  // scattered
  { x: 30, y: 20 }, { x: 60, y: 22 }, { x: 92, y: 50 }, { x: 24, y: 70 },
];

const MAP_ARCS = [
  'M8,32 Q30,10 42,26',
  'M52,50 Q65,20 74,28',
  'M50,40 Q60,55 70,60',
  'M18,46 Q30,65 40,62',
  'M78,56 Q85,72 82,62',
];

export function CommunityBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fd_45%,#ffffff_100%)]" />

      <div
        className="trust-blob absolute -left-24 top-10 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[130px]"
        style={{ '--blob-duration': '24s', '--blob-drift-x': '24px', '--blob-drift-y': '-18px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full bg-sky-200/28 blur-[140px]"
        style={{ '--blob-duration': '28s', '--blob-drift-x': '-22px', '--blob-drift-y': '20px' } as CSSProperties}
      />
      <div
        className="trust-blob absolute bottom-0 left-1/3 h-[340px] w-[340px] rounded-full bg-blue-100/35 blur-[120px]"
        style={{ '--blob-duration': '21s', '--blob-drift-x': '20px', '--blob-drift-y': '-20px' } as CSSProperties}
      />

      <svg
        className="absolute inset-x-[8%] top-[14%] h-[65%] w-[84%] opacity-70"
        viewBox="0 0 100 90"
        preserveAspectRatio="none"
        fill="none"
      >
        {MAP_ARCS.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke="rgba(59,130,246,0.18)"
            strokeWidth="0.9"
            vectorEffect="non-scaling-stroke"
            className="neural-line-flow"
          />
        ))}
        {MAP_DOTS.map((dot, index) => (
          <circle key={index} cx={dot.x} cy={dot.y} r="0.7" fill="#3b82f6" opacity={0.45 + (index % 4) * 0.08} />
        ))}
      </svg>
    </div>
  );
}
