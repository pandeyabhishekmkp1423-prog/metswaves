import { ChevronDown } from 'lucide-react';
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
  if (item.mode === 'link') {
    return (
      <a
        href={item.href}
        onClick={(event) => handleAnchorClick(event, item.href)}
        onMouseEnter={onEnter}
        className={`whitespace-nowrap rounded-full px-3.5 py-2.5 text-sm font-medium transition-colors duration-200 ${
          item.emphasized
            ? 'bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/15'
            : isActive
              ? 'bg-accent-blue/10 text-accent-blue'
              : 'text-text-secondary hover:bg-gray-50 hover:text-navy'
        }`}
      >
        {item.label}
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
      className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2.5 text-sm font-medium transition-colors duration-200 ${
        isOpen ? 'bg-accent-blue/10 text-accent-blue' : 'text-text-secondary hover:bg-gray-50 hover:text-navy'
      }`}
    >
      {item.label}
      <ChevronDown size={15} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
}
