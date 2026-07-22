import type { CareerMilestone } from '../../../constants';
import { RoadmapNode } from './RoadmapNode';

type CareerRoadmapDesktopProps = {
  milestones: CareerMilestone[];
};

const POINT_Y = [28, 72, 28, 72, 28, 72];

export function CareerRoadmapDesktop({ milestones }: CareerRoadmapDesktopProps) {
  const count = milestones.length;
  const points = milestones.map((milestone, index) => ({
    milestone,
    x: 8 + index * (84 / (count - 1)),
    y: POINT_Y[index % POINT_Y.length],
  }));

  const pathD = points.reduce((acc, point, index) => {
    if (index === 0) return `M ${point.x},${point.y}`;
    const prev = points[index - 1];
    const midX = (prev.x + point.x) / 2;
    return `${acc} C ${midX},${prev.y} ${midX},${point.y} ${point.x},${point.y}`;
  }, '');

  return (
    <div className="relative mx-auto hidden h-[420px] w-full max-w-[1100px] py-10 lg:block">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="careerPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d={pathD} fill="none" stroke="rgba(148,163,255,0.18)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        <path
          d={pathD}
          fill="none"
          stroke="url(#careerPathGradient)"
          strokeWidth="1.8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="neural-line-flow"
        />
      </svg>

      {points.map((point, index) => (
        <div
          key={point.milestone.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
        >
          <RoadmapNode milestone={point.milestone} index={index} tooltipDirection={point.y === 28 ? 'top' : 'bottom'} />
        </div>
      ))}
    </div>
  );
}
