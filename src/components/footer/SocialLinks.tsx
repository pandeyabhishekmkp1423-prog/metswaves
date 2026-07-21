import { Facebook, Github, Instagram, Linkedin, MessageCircle, Twitter, Youtube } from 'lucide-react';
import { handleAnchorClick } from '../../utils';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Instagram', icon: Instagram },
  { label: 'YouTube', icon: Youtube },
  { label: 'Facebook', icon: Facebook },
  { label: 'Twitter/X', icon: Twitter },
  { label: 'Discord', icon: MessageCircle },
  { label: 'GitHub', icon: Github },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href="#"
            onClick={(event) => handleAnchorClick(event, '#')}
            aria-label={item.label}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/60 transition-colors duration-200 hover:border-accent-blue-light/40 hover:bg-accent-blue/15 hover:text-white focus:outline-none focus:border-accent-blue-light/40 focus:text-white"
          >
            <Icon size={14} />
          </a>
        );
      })}
    </div>
  );
}
