import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { ExploreMenuNode } from '../../data/exploreMenu';
import { handleAnchorClick } from '../../utils';

type ExploreColumnProps = {
  nodes: ExploreMenuNode[];
  heading?: string;
  depth: number;
  onNavigate: () => void;
  autoFocusFirst?: boolean;
  onBack?: () => void;
};

export function ExploreColumn({ nodes, heading, depth, onNavigate, autoFocusFirst, onBack }: ExploreColumnProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [viaKeyboard, setViaKeyboard] = useState(false);
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoFocusFirst) rowRefs.current[0]?.focus();
  }, [autoFocusFirst]);

  const hoveredNode = hoveredIndex !== null ? nodes[hoveredIndex] : null;

  const focusRow = (index: number) => {
    rowRefs.current[index]?.focus();
  };

  const handleRowKeyDown = (event: ReactKeyboardEvent<HTMLAnchorElement>, index: number, node: ExploreMenuNode) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusRow(Math.min(index + 1, nodes.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusRow(Math.max(index - 1, 0));
    } else if (event.key === 'ArrowRight' && node.children?.length) {
      event.preventDefault();
      setHoveredIndex(index);
      setViaKeyboard(true);
    } else if (event.key === 'ArrowLeft' && depth > 0) {
      event.preventDefault();
      onBack?.();
    }
  };

  return (
    <div ref={columnRef} className={`flex ${depth > 0 ? 'border-l border-border-soft' : ''}`}>
      <div className="max-h-130 w-70 flex-none overflow-y-auto overscroll-contain p-2.5" role="menu" data-lenis-prevent>
        {heading ? (
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">{heading}</p>
        ) : null}

        {nodes.map((node, index) => {
          const isActive = hoveredIndex === index;
          return (
            <div key={node.label} className={node.emphasized ? 'mt-1 border-t border-border-soft pt-2' : undefined}>
              <a
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                href={node.href}
                role="menuitem"
                aria-haspopup={node.children?.length ? 'true' : undefined}
                aria-expanded={node.children?.length ? isActive : undefined}
                onClick={(event) => {
                  handleAnchorClick(event, node.href);
                  onNavigate();
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setViaKeyboard(false);
                }}
                onFocus={() => {
                  setHoveredIndex(index);
                  setViaKeyboard(false);
                }}
                onKeyDown={(event) => handleRowKeyDown(event, index, node)}
                className={`flex min-h-11 min-w-0 items-center justify-between gap-2 rounded-[10px] px-3 py-2.5 text-sm transition-colors duration-150 focus:outline-none ${
                  isActive
                    ? 'bg-accent-blue/8 text-accent-blue'
                    : node.emphasized
                      ? 'font-semibold text-accent-blue hover:bg-accent-blue/8'
                      : 'text-text-secondary hover:bg-gray-50 hover:text-navy'
                }`}
              >
                <span className="min-w-0 truncate font-ui">{node.label}</span>
                {node.price ? (
                  <span className="flex-none text-xs font-semibold text-navy">{node.price}</span>
                ) : node.children?.length ? (
                  <ChevronRight size={15} className="flex-none text-gray-300" />
                ) : null}
              </a>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {hoveredNode?.children?.length ? (
          <motion.div
            key={hoveredNode.label}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            <ExploreColumn
              nodes={hoveredNode.children}
              heading={hoveredNode.childHeading ?? hoveredNode.label}
              depth={depth + 1}
              onNavigate={onNavigate}
              autoFocusFirst={viaKeyboard}
              onBack={() => {
                const returnIndex = hoveredIndex;
                setViaKeyboard(false);
                setHoveredIndex(null);
                if (returnIndex !== null) focusRow(returnIndex);
              }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
