import { motion, useReducedMotion } from 'framer-motion';
import { handleLogoClick } from '../../utils';

type LogoProps = {
  className?: string;
  imgClassName?: string;
  onNavigate?: () => void;
};

export function Logo({ className = '', imgClassName = 'h-6 w-auto sm:h-7', onNavigate }: LogoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href="#hero"
      onClick={(event) => {
        handleLogoClick(event);
        onNavigate?.();
      }}
      aria-label="Metawaves AI home"
      className={`group flex flex-none items-center ${className}`}
      whileHover={reduceMotion ? undefined : 'hover'}
      initial="rest"
      animate="rest"
    >
      <motion.span
        className="relative flex items-center"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.035 },
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute -inset-2 -z-10 rounded-full bg-accent-blue/0 blur-md transition-colors duration-500"
          variants={{
            rest: { backgroundColor: 'rgba(59,130,246,0)' },
            hover: { backgroundColor: 'rgba(59,130,246,0.14)' },
          }}
        />
        <img src="/logo-navy.png" alt="Metawaves AI" className={imgClassName} />
      </motion.span>
    </motion.a>
  );
}
