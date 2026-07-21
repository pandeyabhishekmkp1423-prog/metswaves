import { useState, type FormEvent } from 'react';
import { ArrowRight, Facebook, Github, Instagram, Linkedin, MessageCircle, Twitter, Youtube } from 'lucide-react';
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

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="border-b border-white/8 py-4 md:border-0 md:py-0">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white">Stay Updated</p>
      <p className="mt-4 text-sm leading-relaxed text-white/65">
        Get AI learning tips, new course updates and exclusive offers directly in your inbox.
      </p>

      <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2.5">
        <label className="sr-only" htmlFor="footer-newsletter-email">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-premium border border-white/12 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-accent-blue-light/50 focus:bg-white/10"
        />
        <button
          type="submit"
          className="button-glow inline-flex items-center justify-center gap-2 rounded-premium bg-[linear-gradient(135deg,#2563EB_0%,#3B82F6_100%)] px-5 py-2.5 text-sm font-semibold text-white"
        >
          {subscribed ? 'Subscribed' : 'Subscribe'}
          <ArrowRight size={15} />
        </button>
      </form>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {SOCIAL_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href="#"
              onClick={(event) => handleAnchorClick(event, '#')}
              aria-label={item.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/60 transition-colors duration-200 hover:border-accent-blue-light/40 hover:bg-accent-blue/15 hover:text-white"
            >
              <Icon size={15} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
