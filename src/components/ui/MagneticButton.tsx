import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onMouseMove' | 'onMouseLeave'> & {
    href?: never;
  };

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onMouseMove' | 'onMouseLeave'> & {
    href: string;
  };

type MagneticButtonProps = ButtonProps | AnchorProps;

type PointerState = {
  x: number;
  y: number;
};

function getPointerState(event: MouseEvent<HTMLElement>): PointerState {
  const rect = event.currentTarget.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left - rect.width / 2) * 0.1,
    y: (event.clientY - rect.top - rect.height / 2) * 0.1,
  };
}

export function MagneticButton(props: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState<PointerState>({ x: 0, y: 0 });

  if ('href' in props && props.href) {
    const { children, className, ...rest } = props;
    return (
      <motion.a
        className={`button-glow ${className ?? ''}`}
        whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        animate={reduceMotion ? undefined : { x: offset.x, y: offset.y }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        onMouseMove={
          reduceMotion
            ? undefined
            : (event) => {
                setOffset(getPointerState(event));
              }
        }
        onMouseLeave={
          reduceMotion
            ? undefined
            : (event) => {
              setOffset({ x: 0, y: 0 });
            }
        }
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  const { children, className, ...rest } = props;
  return (
    <motion.button
      className={`button-glow ${className ?? ''}`}
      whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      animate={reduceMotion ? undefined : { x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      onMouseMove={
        reduceMotion
          ? undefined
          : (event) => {
              setOffset(getPointerState(event));
            }
      }
      onMouseLeave={
        reduceMotion
          ? undefined
          : (event) => {
              setOffset({ x: 0, y: 0 });
            }
      }
      {...rest}
    >
      {children}
    </motion.button>
  );
}
