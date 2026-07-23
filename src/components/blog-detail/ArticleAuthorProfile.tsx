import { Instagram, Linkedin, Twitter } from 'lucide-react';
import type { ArticleAuthorProfile as AuthorProfileType } from '../../data/articleContent';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

type ArticleAuthorProfileProps = {
  profile: AuthorProfileType;
};

export function ArticleAuthorProfile({ profile }: ArticleAuthorProfileProps) {
  return (
    <div id="author">
      <h2 className="text-2xl font-bold text-navy sm:text-[26px]">About the Author</h2>

      <Reveal delay={0.05}>
        <div className="surface-card mt-6 flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-7">
          <img
            src={profile.image}
            alt={profile.name}
            className="h-20 w-20 flex-none rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div>
            <h3 className="text-lg font-semibold text-navy">{profile.name}</h3>
            <p className="mt-1 text-sm text-text-secondary">
              {profile.role} · {profile.experience}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{profile.bio}</p>

            <div className="mt-5 flex gap-2">
              <a
                href={profile.socials.twitter}
                onClick={(event) => handleAnchorClick(event, profile.socials.twitter)}
                aria-label={`${profile.name} on Twitter`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
              >
                <Twitter size={15} />
              </a>
              <a
                href={profile.socials.linkedin}
                onClick={(event) => handleAnchorClick(event, profile.socials.linkedin)}
                aria-label={`${profile.name} on LinkedIn`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={profile.socials.instagram}
                onClick={(event) => handleAnchorClick(event, profile.socials.instagram)}
                aria-label={`${profile.name} on Instagram`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
