import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';
import { MagneticButton } from '../components/ui/MagneticButton';
import { handleAnchorClick } from '../utils';

const PREP_AREAS = [
  { title: 'Technical Screens', description: 'Practice explaining your project decisions out loud, not just building them.' },
  { title: 'Behavioral Questions', description: 'Prepare specific stories that show impact, not just responsibilities.' },
  { title: 'Portfolio Walkthroughs', description: 'Be ready to talk through one project for twenty minutes, in depth.' },
  { title: 'Take-Home Assignments', description: 'Practice shipping something scoped and polished under a deadline.' },
  { title: 'Salary Negotiation', description: 'Know your number and your reasoning before the offer call happens.' },
  { title: 'Mock Interviews', description: 'Run at least three practice interviews with a mentor before the real one.' },
];

export function InterviewPrepPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Career"
        title="Interview Prep"
        description="Structured practice for every stage of the hiring process — from the first screen to the offer call."
      />

      <section className="section-shell bg-white">
        <Reveal>
          <SectionIntro eyebrow="Prep Areas" title="Six things to get ready before you apply." description="Mentors run live mock interviews covering each of these areas." />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PREP_AREAS.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.06}>
              <div className="surface-card card-hover flex h-full gap-3.5 p-6">
                <CheckCircle2 size={19} className="mt-0.5 flex-none text-accent-blue" />
                <div>
                  <h3 className="font-semibold text-navy">{area.title}</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{area.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <MagneticButton
            href="#contact"
            onClick={(event) => handleAnchorClick(event, '#contact')}
            className="btn-premium button-glow inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Book a Mock Interview
            <ArrowRight size={18} />
          </MagneticButton>
        </Reveal>
      </section>

      <CoursesFinalCta />
    </>
  );
}
