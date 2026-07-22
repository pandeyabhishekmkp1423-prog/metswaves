import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import type { NavItem } from '../../constants';
import { handleAnchorClick } from '../../utils';

type NavigationItemProps = {
  item: NavItem;
  isOpen: boolean;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
  triggerRef?: (el: HTMLButtonElement | null) => void;
};

export function NavigationItem({ item, isOpen, isActive, onEnter, onLeave, onToggle, triggerRef }: NavigationItemProps) {
  const highlighted = isOpen || isActive;

  if (item.mode === 'link') {
    return (
      <a
        href={item.href}
        onClick={(event) => handleAnchorClick(event, item.href)}
        onMouseEnter={onEnter}
        className="group relative whitespace-nowrap rounded-full px-3.5 py-2.5 text-[13.5px] font-medium text-text-secondary transition-colors duration-200 hover:text-navy"
      >
        <span className="relative z-10">{item.label}</span>
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 z-0 rounded-full bg-navy/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: highlighted ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-3.5 bottom-1.5 h-0.5 rounded-full bg-accent-blue"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: highlighted ? 1 : 0 }}
          style={{ originX: 0.5 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </a>
    );
  }

  return (
    <button
      ref={triggerRef}
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onToggle}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className="group relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2.5 text-[13.5px] font-medium text-text-secondary transition-colors duration-200 hover:text-navy"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-full bg-navy/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: highlighted ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <span className="relative z-10">{item.label}</span>
      <motion.span
        className="relative z-10 flex items-center"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <ChevronDown size={15} />
      </motion.span>
    </button>
  );
}
