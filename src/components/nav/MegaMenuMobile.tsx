import type { MouseEvent } from 'react';
import { NAV_RESOURCES_MEGA } from '../../constants';
import { handleAnchorClick } from '../../utils';

type MegaMenuMobileProps = {
  onNavigate: () => void;
};

export function MegaMenuMobile({ onNavigate }: MegaMenuMobileProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    onNavigate();
  };

  return (
    <div className="grid gap-5 py-2">
      {NAV_RESOURCES_MEGA.map((section) => {
        const SectionIcon = section.icon;
        return (
          <div key={section.heading}>
            <div className="mb-1.5 flex items-center gap-2 px-4">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-[8px] bg-accent-blue/10 text-accent-blue">
                <SectionIcon size={13} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">{section.heading}</p>
            </div>
            <div className="grid gap-0.5">
              {section.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleClick(event, item.href)}
                    className="flex min-h-11 items-center gap-3 rounded-[12px] px-4 py-2 text-sm text-text-secondary transition-colors duration-200 active:bg-gray-50"
                  >
                    <ItemIcon size={16} className="flex-none text-gray-400" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
