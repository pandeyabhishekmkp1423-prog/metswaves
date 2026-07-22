import { useEffect, useId, useMemo, useState } from 'react';
import { LEARNING_DOMAINS } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { DomainCarousel } from './universe/DomainCarousel';
import { DomainNode } from './universe/DomainNode';
import { LearningCore } from './universe/LearningCore';
import { NeuralLines } from './universe/NeuralLines';
import { UniverseBackground } from './universe/UniverseBackground';

const ORBIT_RADIUS = 38;

function useOrbitNodeCount() {
  const [count, setCount] = useState(() => {
    if (typeof window === 'undefined') return 8;
    const width = window.innerWidth;
    if (width < 768) return 0;
    if (width < 1024) return 6;
    return 8;
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 768) setCount(0);
      else if (width < 1024) setCount(6);
      else setCount(8);
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return count;
}

export function LearningUniverse() {
  const headingId = useId();
  const panelId = useId();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const nodeCount = useOrbitNodeCount();

  const orbitDomains = useMemo(() => LEARNING_DOMAINS.slice(0, nodeCount), [nodeCount]);

  const positions = useMemo(
    () =>
      orbitDomains.map((domain, index) => {
        const angle = (-90 + index * (360 / Math.max(orbitDomains.length, 1))) * (Math.PI / 180);
        return {
          id: domain.id,
          x: 50 + ORBIT_RADIUS * Math.cos(angle),
          y: 50 + ORBIT_RADIUS * Math.sin(angle),
        };
      }),
    [orbitDomains],
  );

  const activeDomain = useMemo(
    () => LEARNING_DOMAINS.find((domain) => domain.id === hoveredId) ?? null,
    [hoveredId],
  );

  return (
    <section aria-labelledby={headingId} className="relative overflow-hidden bg-[#0b0d16]">
      <UniverseBackground />

      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-accent-blue-light backdrop-blur-md">
            The Ecosystem
          </span>
          <h2 id={headingId} className="mt-6 font-heading text-[28px] font-bold text-white sm:text-[34px] md:text-[44px]">
            Explore Your{' '}
            <span className="bg-gradient-to-r from-accent-blue-light via-sky-300 to-purple-400 bg-clip-text text-transparent">
              AI Learning Universe
            </span>
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            Every domain orbits one connected core. Hover a node to see the courses, projects, and tools waiting
            inside it.
          </p>
        </Reveal>

        <div
          role="group"
          aria-label="AI learning domains"
          onMouseLeave={() => setHoveredId(null)}
          className="relative mx-auto mt-16 hidden aspect-square w-full max-w-[560px] md:block lg:mt-20 lg:max-w-[760px]"
        >
          <NeuralLines positions={positions} hoveredId={hoveredId} />

          {orbitDomains.map((domain, index) => {
            const position = positions[index];
            return (
              <DomainNode
                key={domain.id}
                domain={domain}
                x={position.x}
                y={position.y}
                isActive={hoveredId === domain.id}
                onActivate={setHoveredId}
                onDeactivate={() => setHoveredId(null)}
                panelId={panelId}
                index={index}
              />
            );
          })}

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <LearningCore activeDomain={activeDomain} panelId={panelId} />
          </div>
        </div>

        <div className="mt-14 md:hidden">
          <div className="mb-10 flex justify-center">
            <LearningCore activeDomain={activeDomain} panelId={panelId} />
          </div>
          <DomainCarousel domains={LEARNING_DOMAINS} onActiveChange={(domain) => setHoveredId(domain.id)} />
        </div>
      </div>
    </section>
  );
}
