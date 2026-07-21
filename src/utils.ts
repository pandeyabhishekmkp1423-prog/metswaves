import type { MouseEvent } from 'react';
import { getNavigate } from './routerBridge';

function goToHomeAnchor(hash: string) {
  const navigate = getNavigate();
  if (navigate) {
    navigate(`/${hash}`);
  } else {
    window.location.assign(`/${hash}`);
  }
}

export function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith('#')) {
    event.preventDefault();

    if (window.location.pathname !== '/') {
      goToHomeAnchor(href);
      return;
    }

    if (href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  if (href.startsWith('/')) {
    event.preventDefault();
    const navigate = getNavigate();
    if (navigate) {
      navigate(href);
    } else {
      window.location.assign(href);
    }
  }
}

export function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  if (window.location.pathname !== '/') {
    const navigate = getNavigate();
    if (navigate) {
      navigate('/');
    } else {
      window.location.assign('/');
    }
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
