import { useMemo, type CSSProperties, type MouseEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

const PARTICLE_COUNT = 22;

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
        duration: 4 + Math.random() * 5,
        delay: Math.random() * 5,
        maxOpacity: 0.35 + Math.random() * 0.35,
      })),
    [],
  );
}

export function TrustBackground() {
  const particles = useParticles();
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 40, damping: 20, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 40, damping: 20, mass: 0.6 });
  const blobX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const blobY = useTransform(springY, [-0.5, 0.5], [-16, 16]);
  const blobXReverse = useTransform(springX, [-0.5, 0.5], [16, -16]);
  const blobYReverse = useTransform(springY, [-0.5, 0.5], [12, -12]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#15161c_0%,#0b0d16_55%,#090b12_100%)]" />

      <div
        className="absolute inset-0 opacity-60"
        style={{ background: 'linear-gradient(115deg, transparent 30%, rgba(96,165,250,0.07) 45%, transparent 62%)' }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: 'linear-gradient(255deg, transparent 35%, rgba(168,85,247,0.06) 50%, transparent 68%)' }}
      />

      <motion.div
        style={reduceMotion ? undefined : { x: blobX, y: blobY }}
        className="absolute -left-24 top-4 h-[420px] w-[420px]"
      >
        <div
          className="trust-blob h-full w-full rounded-full bg-accent-blue/25 blur-[120px]"
          style={{ '--blob-duration': '18s', '--blob-drift-x': '30px', '--blob-drift-y': '-20px' } as CSSProperties}
        />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { x: blobXReverse, y: blobYReverse }}
        className="absolute right-[-8%] top-1/4 h-[380px] w-[380px]"
      >
        <div
          className="trust-blob h-full w-full rounded-full bg-purple-500/20 blur-[130px]"
          style={{ '--blob-duration': '22s', '--blob-drift-x': '-24px', '--blob-drift-y': '18px' } as CSSProperties}
        />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { x: blobX, y: blobYReverse }}
        className="absolute bottom-[-12%] left-1/3 h-[340px] w-[340px]"
      >
        <div
          className="trust-blob h-full w-full rounded-full bg-cyan-400/15 blur-[110px]"
          style={{ '--blob-duration': '20s', '--blob-drift-x': '18px', '--blob-drift-y': '-22px' } as CSSProperties}
        />
      </motion.div>

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

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg-secondary" />
    </div>
  );
}
