import type { NavigateFunction } from 'react-router-dom';

let navigateFn: NavigateFunction | null = null;

export function setNavigate(fn: NavigateFunction) {
  navigateFn = fn;
}

export function getNavigate() {
  return navigateFn;
}
