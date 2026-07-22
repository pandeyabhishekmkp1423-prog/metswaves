import { useState, type MouseEvent, type ReactNode } from 'react';
import { MagneticButton } from '../ui/MagneticButton';

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

type GradientCtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

let rippleId = 0;

export function GradientCtaButton({ href, children, className = '', onClick }: GradientCtaButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    const id = rippleId++;
    setRipples((current) => [...current, { id, x: event.clientX - rect.left, y: event.clientY - rect.top, size }]);
    window.setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id));
    }, 650);
    onClick?.(event);
  };

  return (
    <MagneticButton href={href} onClick={handleClick} className={`btn-gradient-cta ${className}`}>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-dot"
          style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </MagneticButton>
  );
}
