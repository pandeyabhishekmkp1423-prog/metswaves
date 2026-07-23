import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { MENTORS } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';

export function TeamSection() {
  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Meet the Team"
          title="The mentors who build the curriculum they teach."
          description="Every instructor at MetaWaves is a working practitioner first — the courses are downstream of the actual work they do."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MENTORS.map((mentor, index) => (
          <Reveal key={mentor.name} delay={index * 0.06}>
            <TiltCard className="surface-card card-hover group h-full rounded-premium p-3">
              <div className="relative overflow-hidden rounded-[16px]">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-navy/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={mentor.socials.twitter}
                    onClick={(event) => handleAnchorClick(event, mentor.socials.twitter)}
                    aria-label={`${mentor.name} on Twitter`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-blue shadow-lg transition-transform hover:scale-110"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={mentor.socials.linkedin}
                    onClick={(event) => handleAnchorClick(event, mentor.socials.linkedin)}
                    aria-label={`${mentor.name} on LinkedIn`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-blue shadow-lg transition-transform hover:scale-110"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={mentor.socials.instagram}
                    onClick={(event) => handleAnchorClick(event, mentor.socials.instagram)}
                    aria-label={`${mentor.name} on Instagram`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-blue shadow-lg transition-transform hover:scale-110"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-navy">{mentor.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{mentor.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent-blue">{mentor.experience}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
