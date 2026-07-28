import { Facebook, Github, Instagram, Linkedin, MessageCircle, Twitter, Youtube } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/metawavesai' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com/metawavesai' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/' },
  { label: 'Twitter/X', icon: Twitter, href: 'https://twitter.com/metawavesai' },
  { label: 'Discord', icon: MessageCircle, href: 'https://discord.gg/metawavesai' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/metawavesai' },
];

export function SocialLinks() {
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
