import { motion } from 'framer-motion';

type NodePosition = {
  id: string;
  x: number;
  y: number;
};

type NeuralLinesProps = {
  positions: NodePosition[];
  hoveredId: string | null;
};

export function NeuralLines({ positions, hoveredId }: NeuralLinesProps) {
  const ringPoints = positions.map((position) => `${position.x},${position.y}`).join(' ');

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {positions.length > 2 ? (
        <polygon points={ringPoints} fill="none" stroke="rgba(148,163,255,0.14)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      ) : null}

      {positions.map((position) => {
        const isActive = hoveredId === position.id;
        return (
          <motion.line
            key={position.id}
            x1={50}
            y1={50}
            x2={position.x}
            y2={position.y}
            stroke="url(#neuralGradient)"
            vectorEffect="non-scaling-stroke"
            className={isActive ? 'neural-line-flow' : undefined}
            initial={false}
            animate={{
              opacity: isActive ? 0.95 : 0.22,
              strokeWidth: isActive ? 2 : 1,
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}
    </svg>
  );
}
