import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

type CodeBlockProps = {
  language: string;
  code: string;
  filename?: string;
};

export function CodeBlock({ language, code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-[0_16px_40px_rgba(7,19,39,0.22)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <span className="font-mono text-xs text-white/50">{filename ?? language}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code"
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors duration-200 ${
            copied ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300' : 'border-white/15 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
          }`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-white/85">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}
