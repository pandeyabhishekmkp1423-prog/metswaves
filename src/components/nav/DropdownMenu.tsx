import type { MouseEvent as ReactMouseEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { NavListItem, NavResourceColumn } from '../../constants';
import { handleAnchorClick } from '../../utils';

type DropdownMenuProps =
  | { variant: 'list'; items: NavListItem[]; onNavigate: () => void }
  | { variant: 'columns'; columns: NavResourceColumn[]; onNavigate: () => void };

type RowProps = {
  label: string;
  href: string;
  icon?: LucideIcon;
  onClick: (event: ReactMouseEvent<HTMLAnchorElement>) => void;
};

function Row({ label, href, icon: Icon, onClick }: RowProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      role="menuitem"
      className="flex min-h-11 min-w-0 items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-sm text-text-secondary transition-colors duration-150 hover:bg-accent-blue/8 hover:text-accent-blue focus:bg-accent-blue/8 focus:text-accent-blue focus:outline-none"
    >
      {Icon ? <Icon size={16} className="flex-none text-gray-400" /> : null}
      <span className="min-w-0 truncate font-ui">{label}</span>
    </a>
  );
}

export function DropdownMenu(props: DropdownMenuProps) {
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href);
    props.onNavigate();
  };

  if (props.variant === 'columns') {
    return (
      <div className="flex">
        {props.columns.map((column, index) => (
          <div
            key={column.heading}
            className={`max-h-130 w-70 flex-none overflow-y-auto overscroll-contain p-2.5 ${index > 0 ? 'border-l border-border-soft' : ''}`}
            role="menu"
            data-lenis-prevent
          >
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">{column.heading}</p>
            {column.items.map((item) => (
              <Row key={item.label} label={item.label} href={item.href} icon={item.icon} onClick={(event) => handleClick(event, item.href)} />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-h-130 w-70 overflow-y-auto overscroll-contain p-2.5" role="menu" data-lenis-prevent>
      {props.items.map((item) => (
        <Row key={item.label} label={item.label} href={item.href} icon={item.icon} onClick={(event) => handleClick(event, item.href)} />
      ))}
    </div>
  );
}
