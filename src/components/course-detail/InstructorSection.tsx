import { Instagram, Linkedin, Twitter } from 'lucide-react';
import type { CourseInstructor } from '../../data/courseContent';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';

type InstructorSectionProps = {
  instructor: CourseInstructor;
};

export function InstructorSection({ instructor }: InstructorSectionProps) {
  return (
    <div id="instructor">
      <Reveal>
        <h2 className="text-2xl font-semibold text-navy sm:text-[28px]">Meet your instructor</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="surface-card mt-6 flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-7">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="h-24 w-24 flex-none rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div>
            <h3 className="text-xl font-semibold text-navy">{instructor.name}</h3>
            <p className="mt-1 text-sm text-text-secondary">
              {instructor.role} · {instructor.experience}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{instructor.bio}</p>

            <div className="mt-5 flex gap-2">
              <a
                href={instructor.socials.twitter}
                onClick={(event) => handleAnchorClick(event, instructor.socials.twitter)}
                aria-label={`${instructor.name} on Twitter`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
              >
                <Twitter size={15} />
              </a>
              <a
                href={instructor.socials.linkedin}
                onClick={(event) => handleAnchorClick(event, instructor.socials.linkedin)}
                aria-label={`${instructor.name} on LinkedIn`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={instructor.socials.instagram}
                onClick={(event) => handleAnchorClick(event, instructor.socials.instagram)}
                aria-label={`${instructor.name} on Instagram`}
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
