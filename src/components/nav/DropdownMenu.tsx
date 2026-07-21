import type { MouseEvent as ReactMouseEvent } from 'react';
import type { NavListItem, NavResourceColumn } from '../../constants';
import { handleAnchorClick } from '../../utils';

type DropdownMenuProps =
  | { variant: 'list'; items: NavListItem[]; onNavigate: () => void }
  | { variant: 'columns'; columns: NavResourceColumn[]; onNavigate: () => void };

export function DropdownMenu(props: DropdownMenuProps) {
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    props.onNavigate();
  };

  if (props.variant === 'columns') {
    return (
      <div className="grid w-[620px] max-w-[88vw] grid-cols-3 gap-8 p-6">
        {props.columns.map((column) => (
          <div key={column.heading}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">{column.heading}</p>
            <div className="mt-3 grid gap-0.5">
              {column.items.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleClick(event, item.href)}
                    className="flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm text-text-secondary transition-colors duration-200 hover:bg-gray-50 hover:text-navy"
                  >
                    <Icon size={16} className="flex-none text-accent-blue" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid w-[440px] max-w-[88vw] grid-cols-1 gap-1 p-4 sm:grid-cols-2">
      {props.items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            onClick={(event) => handleClick(event, item.href)}
            className="flex items-start gap-3 rounded-[14px] p-3 transition-colors duration-200 hover:bg-gray-50"
          >
            <div className="icon-chip h-10 w-10 flex-none">
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <p className="font-ui text-sm font-semibold text-navy">{item.label}</p>
              {item.description ? <p className="mt-0.5 text-xs text-text-secondary">{item.description}</p> : null}
            </div>
          </a>
        );
      })}
    </div>
  );
}
