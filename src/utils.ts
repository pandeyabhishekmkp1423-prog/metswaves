import type { MouseEvent } from 'react';

export function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#')) return;

  event.preventDefault();

  if (href.length > 1) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
