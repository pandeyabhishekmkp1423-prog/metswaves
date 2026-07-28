import { useMemo, type CSSProperties } from 'react';
import { SectionDivider } from '../../ui/SectionDivider';

const PARTICLE_COUNT = 20;

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
  { top: '15%', width: '55%', angle: -16, duration: 10, delay: 0, opacity: 0.35 },
  { top: '45%', width: '40%', angle: -10, duration: 13, delay: 3, opacity: 0.25 },
  { top: '72%', width: '48%', angle: -20, duration: 11, delay: 6, opacity: 0.3 },
];

export function CareerBackground() {
  const particles = useParticles();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#0a0714_0%,#0b0d20_45%,#0a0c18_100%)]" />

      <div
        className="trust-blob aurora-pulse absolute -left-24 top-10 h-[440px] w-[440px] rounded-full bg-emerald-400/20 blur-[140px]"
        style={{ '--blob-duration': '21s', '--blob-drift-x': '26px', '--blob-drift-y': '-18px' } as CSSProperties}
      />
      <div
        className="trust-blob aurora-pulse absolute right-[-10%] top-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/22 blur-[150px]"
        style={{ '--blob-duration': '25s', '--blob-drift-x': '-22px', '--blob-drift-y': '20px' } as CSSProperties}
      />
      <div
        className="trust-blob aurora-pulse absolute bottom-10 left-1/3 h-[380px] w-[380px] rounded-full bg-blue-500/18 blur-[140px]"
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

      <SectionDivider position="top" />
      <SectionDivider position="bottom" />
    </div>
  );
}
