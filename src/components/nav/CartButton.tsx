import { ShoppingCart } from 'lucide-react';
import { handleAnchorClick } from '../../utils';

type CartButtonProps = {
  className?: string;
  onNavigate?: () => void;
};

export function CartButton({ className = '', onNavigate }: CartButtonProps) {
  return (
    <a
      href="#courses"
      onClick={(event) => {
        handleAnchorClick(event, '#courses');
        onNavigate?.();
      }}
      aria-label="View cart"
      className={`relative flex h-11 w-11 flex-none items-center justify-center rounded-full border border-border-soft bg-white text-text-secondary transition-colors duration-200 hover:text-navy ${className}`}
    >
      <ShoppingCart size={18} />
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-blue text-[9px] font-semibold text-white">
        0
      </span>
    </a>
  );
}
