import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'; 
import { ChevronDown } from 'lucide-react';
import type { FooterLinkItem } from '../../constants';
import { FooterLink } from './FooterLink';

type FooterColumnProps = {
  heading: string;
  links: FooterLinkItem[];
  emphasizedLink?: FooterLinkItem;
  extraLink?: FooterLinkItem;
};

export function FooterColumn({ heading, links, emphasizedLink, extraLink }: FooterColumnProps) {
  const [open, setOpen] = useState(false);

  const list = (
    <div className="grid gap-3">
      {links.map((link) => (
        <FooterLink key={link.label} label={link.label} href={link.href} />
      ))}
      {extraLink ? <FooterLink label={extraLink.label} href={extraLink.href} /> : null}
      {emphasizedLink ? (
        <div className="pt-2">
          <FooterLink label={emphasizedLink.label} href={emphasizedLink.href} />
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="border-b border-white/8 py-4 md:border-0 md:py-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open} 
        className="font-heading flex w-full items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-white md:pointer-events-none md:cursor-default"
      >
        {heading}
        <ChevronDown
          size={16}
          className={`text-white/50 transition-transform duration-200 md:hidden ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="pt-4">{list}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="hidden pt-5 md:block">{list}</div>
    </div>
  );
}
