import { useState, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { ExploreMenuNode } from '../../data/exploreMenu';
import { handleAnchorClick } from '../../utils';

type ExploreMobileListProps = {
  nodes: ExploreMenuNode[];
  onNavigate: () => void;
};

export function ExploreMobileList({ nodes, onNavigate }: ExploreMobileListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    onNavigate();
  };

  return (
    <div className="grid gap-0.5">
      {nodes.map((node, index) => {
        const hasChildren = Boolean(node.children?.length);
        const isOpen = openIndex === index;

        return (
          <div key={node.label} className="min-w-0">
            <div className="flex min-w-0 items-center gap-1">
              <a
                href={node.href}
                onClick={(event) => handleLinkClick(event, node.href)}
                className={`flex min-h-11 min-w-0 flex-1 items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-150 ${
                  node.emphasized ? 'font-semibold text-accent-blue' : 'text-text-secondary hover:bg-gray-50 hover:text-navy'
                }`}
              >
                <span className="min-w-0 truncate">{node.label}</span>
                {node.price ? <span className="flex-none text-xs font-semibold text-navy">{node.price}</span> : null}
              </a>
              {hasChildren ? (
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${node.label}`}
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-gray-400 transition-colors duration-150 hover:bg-gray-50"
                >
                  <ChevronDown size={15} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent-blue' : ''}`} />
                </button>
              ) : null}
            </div>

            {hasChildren ? (
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-3"
                  >
                    <ExploreMobileList nodes={node.children ?? []} onNavigate={onNavigate} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
