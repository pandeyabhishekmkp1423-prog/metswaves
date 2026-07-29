import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Facebook, Github, Globe, Instagram, Linkedin, MessageCircle, Twitter, Youtube } from 'lucide-react';
import {
  FOOTER_BOTTOM_LINKS,
  FOOTER_CAREER_EXTRA_LINKS,
  FOOTER_CAREER_TRACKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_EXPLORE_TOPICS,
  FOOTER_EXPLORE_VIEW_ALL,
  FOOTER_RESOURCES_LINKS,
  FOOTER_TECH_STACK,
  type FooterLinkItem,
} from '../../constants';
import { handleAnchorClick, handleLogoClick } from '../../utils';

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function FooterLink({ label, href }: FooterLinkItem) {
  return (
    <a
      href={href}
      onClick={(event) => handleAnchorClick(event, href)}
      className="group inline-flex w-fit items-center text-sm text-white/60 transition-colors duration-200 hover:text-white focus:outline-none focus:text-white"
    >
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">{label}</span>
    </a>
  );
}

type FooterColumnProps = {
  heading: string;
  links: FooterLinkItem[];
  emphasizedLink?: FooterLinkItem;
  extraLink?: FooterLinkItem;
};

function FooterColumn({ heading, links, emphasizedLink, extraLink }: FooterColumnProps) {
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

const SOCIAL_LINKS = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/metawavesai' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com/metawavesai' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/' },
  { label: 'Twitter/X', icon: Twitter, href: 'https://twitter.com/metawavesai' },
  { label: 'Discord', icon: MessageCircle, href: 'https://discord.gg/metawavesai' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/metawavesai' },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/60 transition-colors duration-200 hover:border-accent-blue-light/40 hover:bg-accent-blue/15 hover:text-white focus:outline-none focus:border-accent-blue-light/40 focus:text-white"
          >
            <Icon size={14} />
          </a>
        );
      })}
    </div>
  );
}

function LanguageSelector() {
  return (
    <div
      className="inline-flex flex-none items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/60"
      aria-label="Site language: English"
    >
      <Globe size={14} />
      English
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer sections
// ---------------------------------------------------------------------------

function PartnerStrip() {
  return (
    <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 md:flex-row">
      <p className="max-w-sm text-center text-sm text-white/80 md:text-left">
        Trusted by thousands of learners building AI careers worldwide.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {FOOTER_TECH_STACK.map((name) => (
          <span key={name} className="font-medium text-white/40 transition-colors hover:text-white">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function FooterNav() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-2 py-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-4 lg:gap-y-0">
      <FooterColumn
        heading="Explore AI Learning"
        links={FOOTER_EXPLORE_TOPICS}
        emphasizedLink={FOOTER_EXPLORE_VIEW_ALL}
      />
      <FooterColumn
        heading="Career Tracks"
        links={FOOTER_CAREER_TRACKS}
        emphasizedLink={FOOTER_CAREER_EXTRA_LINKS[1]}
        extraLink={FOOTER_CAREER_EXTRA_LINKS[0]}
      />
      <FooterColumn heading="Resources" links={FOOTER_RESOURCES_LINKS} />
      <FooterColumn heading="Company" links={FOOTER_COMPANY_LINKS} />
    </div>
  );
}

function BottomBar() {
  return (
    <div className="flex flex-col-reverse gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <a href="#hero" onClick={handleLogoClick} aria-label="Metawaves AI home">
          <img src="/logo.png" alt="Metawaves AI" className="h-5 w-auto" />
        </a>
        <p className="text-xs text-white/30">© 2026 Metawaves AI</p>
        <SocialLinks />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        {FOOTER_BOTTOM_LINKS.map((label) => (
          <a
            key={label}
            href="#"
            onClick={(event) => handleAnchorClick(event, '#')}
            className="text-xs text-white/50 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none"
          >
            {label}
          </a>
        ))}
      </div>
      <LanguageSelector />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export function Footer() {
  return (
    <footer id="footer" className="bg-navy pt-12 pb-8 text-white sm:pt-14 sm:pb-10">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <PartnerStrip />
        <FooterNav />
        <BottomBar />
      </div>
    </footer>
  );
}
