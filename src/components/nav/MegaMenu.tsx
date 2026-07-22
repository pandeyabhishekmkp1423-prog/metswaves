import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { NAV_RESOURCES_MEGA } from '../../constants';
import { handleAnchorClick } from '../../utils';

type MegaMenuProps = {
  onNavigate: () => void;
};

export function MegaMenu({ onNavigate }: MegaMenuProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    onNavigate();
  };

  return (
    <div className="grid w-[820px] max-w-[86vw] grid-cols-4 gap-1 p-5" role="menu" data-lenis-prevent>
      {NAV_RESOURCES_MEGA.map((section, sectionIndex) => {
        const SectionIcon = section.icon;
        return (
          <div key={section.heading} className={`min-w-0 px-3 ${sectionIndex > 0 ? 'border-l border-border-soft' : ''}`}>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-accent-blue/10 text-accent-blue">
                <SectionIcon size={16} />
              </span>
              <p className="text-sm font-semibold text-navy">{section.heading}</p>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-text-secondary">{section.description}</p>
            <div className="grid gap-1">
              {section.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleClick(event, item.href)}
                    role="menuitem"
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="group flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-sm text-text-secondary transition-colors duration-200 hover:bg-accent-blue/8 hover:text-accent-blue"
                  >
                    <motion.span
                      className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-gray-50 text-gray-400 transition-colors duration-200 group-hover:bg-accent-blue/12 group-hover:text-accent-blue"
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 16 }}
                    >
                      <ItemIcon size={14} />
                    </motion.span>
                    <span className="truncate font-ui">{item.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
