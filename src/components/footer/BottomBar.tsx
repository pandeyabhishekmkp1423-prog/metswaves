import { FOOTER_BOTTOM_LINKS } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { LanguageSelector } from './LanguageSelector';

export function BottomBar() {
  return (
    <div className="flex flex-col-reverse gap-8 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <a href="#hero" onClick={(e) => handleAnchorClick(e, '#hero')} aria-label="Metawaves AI home">
          <img src="/metawaves.png" alt="Metawaves AI" className="h-5 w-auto" />
        </a>
        <p className="text-xs text-white/30">© 2026 Metawaves AI</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
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
