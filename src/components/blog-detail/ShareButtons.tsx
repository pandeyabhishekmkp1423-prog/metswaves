import { useState } from 'react';
import { Check, Facebook, Link2, Linkedin, Twitter } from 'lucide-react';

type ShareButtonsProps = {
  title: string;
  className?: string;
};

function getShareUrl(): string {
  return typeof window !== 'undefined' ? window.location.href : '';
}

export function ShareButtons({ title, className = '' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  const shareUrl = encodeURIComponent(getShareUrl());
  const shareText = encodeURIComponent(title);

  const links = [
    {
      label: 'Share on X',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    },
    {
      label: 'Share on LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    },
    {
      label: 'Share on Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
          >
            <LinkIcon size={15} />
          </a>
        );
      })}
      <button
        type="button"
        onClick={handleCopyLink}
        aria-label="Copy article link"
        className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
          copied
            ? 'border-emerald-200 bg-emerald-50 text-emerald-600'
            : 'border-border-soft bg-gray-50 text-text-secondary hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue'
        }`}
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />}
      </button>
    </div>
  );
}
