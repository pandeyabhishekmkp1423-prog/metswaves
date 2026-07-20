import type { PropsWithChildren } from 'react';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

type TiltCardProps = PropsWithChildren<{
  className?: string;
  glareClassName?: string;
}>;

export function TiltCard({ children, className = '', glareClassName = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 180,
    damping: 18,
  });
  const glareX = useTransform(pointerX, [-0.5, 0.5], ['20%', '80%']);
  const glareY = useTransform(pointerY, [-0.5, 0.5], ['20%', '80%']);

  const updatePointer = (clientX: number, clientY: number) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    pointerX.set((clientX - rect.left) / rect.width - 0.5);
    pointerY.set((clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      onMouseMove={(event) => updatePointer(event.clientX, event.clientY)}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 opacity-70 ${glareClassName}`}
          style={{
            background:
              'radial-gradient(circle at center, rgba(255,255,255,0.24), rgba(255,255,255,0) 42%)',
            backgroundPositionX: glareX,
            backgroundPositionY: glareY,
          }}
        />
      )}
      <div className="relative z-10 h-full" style={reduceMotion ? undefined : { transform: 'translateZ(40px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
