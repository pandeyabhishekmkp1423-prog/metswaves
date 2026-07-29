import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';
import { MENTORS } from '../../constants';
import { handleAnchorClick } from '../../utils';

export function TeachersSection() {
  return (
    <section id="teachers" className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Teachers"
          title="Mentors who combine technical depth with creative standards."
          description="These profiles are treated like product talent cards, with elevated surfaces, restrained motion, and premium spacing."
        />
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {MENTORS.map((mentor, index) => (
          <Reveal key={mentor.name} delay={index * 0.05}>
            <TiltCard className="surface-card card-hover h-full p-3">
              <div className="relative overflow-hidden rounded-[16px]">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="badge-pill absolute left-4 top-4 border-white/15 bg-navy/75 text-white">{mentor.experience}</span>
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-navy">{mentor.name}</h3>
                <p className="mt-2 text-text-secondary">{mentor.role}</p>
                <div className="mt-5 flex gap-2">
                  <a
                    href={mentor.socials.twitter}
                    onClick={(event) => handleAnchorClick(event, mentor.socials.twitter)}
                    aria-label={`${mentor.name} on Twitter`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
                  >
                    <Twitter size={15} />
                  </a>
                  <a
                    href={mentor.socials.linkedin}
                    onClick={(event) => handleAnchorClick(event, mentor.socials.linkedin)}
                    aria-label={`${mentor.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href={mentor.socials.instagram}
                    onClick={(event) => handleAnchorClick(event, mentor.socials.instagram)}
                    aria-label={`${mentor.name} on Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
                  >
                    <Instagram size={15} />
                  </a>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
