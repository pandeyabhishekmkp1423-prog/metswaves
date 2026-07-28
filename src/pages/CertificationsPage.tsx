import { ArrowRight } from 'lucide-react';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { CertificateMockup } from '../components/courses/CertificateMockup';
import { CREDENTIAL_FEATURES } from '../data/coursesPageContent';
import { handleAnchorClick } from '../utils';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Reveal } from '../components/ui/Reveal';

export function CertificationsPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Career"
        title="Certifications"
        description="Every MetaWaves course ends in a verified, LinkedIn-ready credential — here's what that actually looks like."
      />

      <section className="section-shell bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <CertificateMockup courseTitle="Building AI Agents with LangChain" />
          </Reveal>

          <div className="grid gap-4">
            {CREDENTIAL_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={0.05 + index * 0.05}>
                  <div className="glass-panel flex h-full gap-3.5 p-5">
                    <div className="icon-chip h-11 w-11 flex-none">
                      <Icon size={19} />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{feature.title}</p>
                      <p className="mt-1 text-sm text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <MagneticButton
                href="/courses"
                onClick={(event) => handleAnchorClick(event, '/courses')}
                className="btn-premium button-glow mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm"
              >
                Explore Certified Courses
                <ArrowRight size={15} />
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      <CoursesFinalCta />
    </>
  );
}
