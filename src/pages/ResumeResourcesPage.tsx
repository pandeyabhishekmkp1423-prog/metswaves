import { ArrowRight, FileText } from 'lucide-react';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';
import { MagneticButton } from '../components/ui/MagneticButton';
import { handleAnchorClick } from '../utils';

const RESUME_TIPS = [
  { title: 'Lead with outcomes, not tasks', description: 'Replace "responsible for X" with the measurable result of doing X.' },
  { title: 'Feature your best project', description: 'One well-explained project beats five vague bullet points.' },
  { title: 'Keep it to one page', description: 'Hiring managers scan resumes in seconds — make every line earn its place.' },
  { title: 'Optimize for ATS', description: 'Match the language of the job description without keyword-stuffing.' },
  { title: 'Add a portfolio link', description: 'A live project or GitHub link is worth more than another bullet point.' },
  { title: 'Get a second pair of eyes', description: 'A mentor review catches what you have gone blind to after ten edits.' },
];

export function ResumeResourcesPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Career"
        title="Resume Resources"
        description="Practical, AI-era resume advice — built around getting you an interview, not just a finished document."
      />

      <section className="section-shell bg-white">
        <Reveal>
          <SectionIntro eyebrow="Resume Checklist" title="Six changes that make the biggest difference." description="Simple edits that consistently improve callback rates." />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESUME_TIPS.map((tip, index) => (
            <Reveal key={tip.title} delay={index * 0.06}>
              <div className="surface-card card-hover flex h-full gap-3.5 p-6">
                <FileText size={19} className="mt-0.5 flex-none text-accent-blue" />
                <div>
                  <h3 className="font-semibold text-navy">{tip.title}</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{tip.description}</p>
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
            Get a Resume Review
            <ArrowRight size={18} />
          </MagneticButton>
        </Reveal>
      </section>

      <CoursesFinalCta />
    </>
  );
}
