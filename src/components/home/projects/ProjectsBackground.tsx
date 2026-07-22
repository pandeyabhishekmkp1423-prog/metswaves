import { useMemo, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const PARTICLE_COUNT = 16;

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
        maxOpacity: 0.3 + Math.random() * 0.3,
      })),
    [],
  );
}

export function ProjectsBackground() {
  const particles = useParticles();
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0b12_0%,#0b0d16_45%,#0a0c14_100%)]" />
      <div className="universe-grid absolute inset-0" />

      <motion.div
        aria-hidden="true"
        className="trust-blob absolute -right-16 top-0 h-[360px] w-[360px] rounded-full bg-purple-500/16 blur-[130px]"
        style={reduceMotion ? undefined : ({ '--blob-duration': '19s', '--blob-drift-x': '-22px', '--blob-drift-y': '16px' } as CSSProperties)}
      />
      <motion.div
        aria-hidden="true"
        className="trust-blob absolute -left-16 bottom-0 h-[340px] w-[340px] rounded-full bg-accent-blue/18 blur-[130px]"
        style={reduceMotion ? undefined : ({ '--blob-duration': '23s', '--blob-drift-x': '20px', '--blob-drift-y': '-18px' } as CSSProperties)}
      />

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

      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-bg-alt to-transparent sm:h-44" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-white sm:h-44" />
    </div>
  );
}
