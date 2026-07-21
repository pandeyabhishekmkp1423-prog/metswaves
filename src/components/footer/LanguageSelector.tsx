import { Globe } from 'lucide-react';

export function LanguageSelector() {
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
