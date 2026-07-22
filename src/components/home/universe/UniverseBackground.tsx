import { useMemo, type CSSProperties, type MouseEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

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

export function UniverseBackground() {
  const particles = useParticles();
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 35, damping: 20, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 35, damping: 20, mass: 0.6 });
  const blobX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const blobY = useTransform(springY, [-0.5, 0.5], [-14, 14]);
  const blobXReverse = useTransform(springX, [-0.5, 0.5], [14, -14]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0b12_0%,#0b0d16_45%,#0a0c14_100%)]" />
      <div className="universe-grid absolute inset-0" />

      <motion.div
        style={reduceMotion ? undefined : { x: blobX, y: blobY }}
        className="absolute -left-20 top-1/4 h-[380px] w-[380px] rounded-full bg-accent-blue/20 blur-[130px]"
      />
      <motion.div
        style={reduceMotion ? undefined : { x: blobXReverse, y: blobY }}
        className="absolute right-[-8%] top-10 h-[340px] w-[340px] rounded-full bg-purple-500/18 blur-[130px]"
      />
      <motion.div
        style={reduceMotion ? undefined : { x: blobX, y: blobY }}
        className="absolute bottom-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-400/14 blur-[140px]"
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

      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white to-transparent sm:h-44" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-bg-alt sm:h-44" />
    </div>
  );
}

function blobYFallback(reduceMotion: boolean | null) {
  return reduceMotion ? undefined : undefined;
}
