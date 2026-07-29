import { BadgeCheck, Quote, Star } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TESTIMONIALS } from '../../constants';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Testimonials"
          title="Social proof framed with the confidence of a high-end product page."
          description="These cards carry depth, clarity, and restrained glow so the message feels credible instead of overdesigned."
          align="center"
        />
      </Reveal>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.05}>
            <div className="surface-card card-hover h-full p-6">
              <Quote className="text-accent-blue" />
              <p className="mt-6 text-lg text-text-primary/90">{testimonial.comment}</p>
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full border border-border-soft object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-navy">{testimonial.name}</p>
                      <BadgeCheck size={15} className="text-accent-blue" aria-label="Verified student" />
                    </div>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-amber-500">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} className="fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
