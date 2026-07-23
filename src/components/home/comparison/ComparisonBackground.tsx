import { useMemo, type CSSProperties } from 'react';

const PARTICLE_COUNT = 18;

type Particle = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  maxOpacity: number;
};

function useParticles(): Particle[] {
  return useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
        id,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 2.5,
        duration: 4.5 + Math.random() * 5,
        delay: Math.random() * 5,
        maxOpacity: 0.3 + Math.random() * 0.35,
      })),
    [],
  );
}

const TRAILS = [
  { top: '20%', width: '50%', angle: -14, duration: 11, delay: 0, opacity: 0.3 },
  { top: '60%', width: '45%', angle: -18, duration: 14, delay: 4, opacity: 0.25 },
];

export function ComparisonBackground() {
  const particles = useParticles();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#070914_0%,#0a0d1f_45%,#080a16_100%)]" />

      <div
        className="trust-blob aurora-pulse absolute -left-24 top-0 h-[440px] w-[440px] rounded-full bg-blue-500/20 blur-[140px]"
        style={{ '--blob-duration': '22s', '--blob-drift-x': '26px', '--blob-drift-y': '-18px' } as CSSProperties}
      />
      <div
        className="trust-blob aurora-pulse absolute right-[-10%] top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/16 blur-[150px]"
        style={{ '--blob-duration': '26s', '--blob-drift-x': '-22px', '--blob-drift-y': '20px' } as CSSProperties}
      />
      <div
        className="trust-blob aurora-pulse absolute bottom-10 left-1/3 h-[380px] w-[380px] rounded-full bg-indigo-500/18 blur-[140px]"
        style={{ '--blob-duration': '19s', '--blob-drift-x': '20px', '--blob-drift-y': '-22px' } as CSSProperties}
      />

      {TRAILS.map((trail, index) => (
        <span
          key={index}
          className="light-trail absolute h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          style={
            {
              top: trail.top,
              width: trail.width,
              '--trail-angle': `${trail.angle}deg`,
              '--trail-duration': `${trail.duration}s`,
              '--trail-delay': `${trail.delay}s`,
              '--trail-opacity': trail.opacity,
            } as CSSProperties
          }
        />
      ))}

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="trust-particle absolute rounded-full bg-white"
          style={
            {
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: particle.size,
              height: particle.size,
              '--particle-duration': `${particle.duration}s`,
              '--particle-delay': `${particle.delay}s`,
              '--particle-max-opacity': particle.maxOpacity,
            } as CSSProperties
          }
        />
      ))}

      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white to-transparent sm:h-44" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-white sm:h-44" />
    </div>
  );
}
