import { FAQS } from '../../constants';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function CoursesFaqSection() {
  return (
    <section className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="FAQ"
          title="Straight answers before you enroll."
          description="The questions students ask most often about pacing, mentorship, certificates, and payment."
          align="center"
        />
      </Reveal>
      <div className="mx-auto mt-14 max-w-3xl">
        <Accordion items={FAQS} />
      </div>
    </section>
  );
}
