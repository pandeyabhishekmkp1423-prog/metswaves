import { CalendarClock } from 'lucide-react';
import { getMentorsWithOfficeHours } from '../../data/communityContent';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';

export function MentorshipSection() {
  const mentorSlots = getMentorsWithOfficeHours();

  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Mentorship & Office Hours"
          title="Working practitioners, on the calendar every single week."
          description="No waiting for a reply in a support inbox — office hours are live, recurring, and open to anyone in the community."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mentorSlots.map(({ mentor, slot }, index) => (
          <Reveal key={mentor.name} delay={index * 0.06}>
            <TiltCard className="surface-card card-hover h-full rounded-premium p-3">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="h-56 w-full rounded-[16px] object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-navy">{mentor.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{mentor.role}</p>
                {slot ? (
                  <div className="mt-4 flex items-start gap-2.5 border-t border-border-soft pt-4">
                    <CalendarClock size={15} className="mt-0.5 flex-none text-accent-blue" />
                    <div>
                      <p className="text-sm font-medium text-navy">
                        {slot.day} · {slot.time}
                      </p>
                      <p className="mt-0.5 text-xs text-text-secondary">{slot.focus}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
