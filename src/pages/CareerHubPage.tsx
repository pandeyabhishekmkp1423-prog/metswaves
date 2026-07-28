import { ArrowRight } from 'lucide-react';
import { CAREER_MILESTONES, CAREER_STATS } from '../constants';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { CountUp } from '../components/ui/CountUp';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';
import { handleAnchorClick } from '../utils';
import { MagneticButton } from '../components/ui/MagneticButton';

export function CareerHubPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Career"
        title="Career Hub"
        description="Everything MetaWaves offers to turn your learning into a job offer — mentorship, portfolio support, and outcomes."
      />

      <section className="section-shell bg-white">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {CAREER_STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="surface-card p-5 text-center">
                  <div className="icon-chip mx-auto h-11 w-11">
                    <Icon size={19} />
                  </div>
                  <p className="mt-3 font-heading text-2xl font-bold text-navy sm:text-3xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary">{stat.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell bg-bg-secondary">
        <Reveal>
          <SectionIntro eyebrow="Your Journey" title="The path from learner to hired." description="Every milestone is backed by mentor support and real career prep." />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAREER_MILESTONES.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <Reveal key={milestone.id} delay={index * 0.06}>
                <div className="surface-card card-hover flex h-full flex-col gap-3 p-6">
                  <span className="icon-chip h-11 w-11">
                    <Icon size={19} />
                  </span>
                  <h3 className="text-lg font-semibold text-navy">{milestone.label}</h3>
                  <p className="text-sm text-text-secondary">{milestone.description}</p>
                  <p className="mt-auto text-xs font-semibold uppercase tracking-[0.16em] text-accent-blue">{milestone.highlight}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <MagneticButton
            href="/courses?category=Career%20Programs"
            onClick={(event) => handleAnchorClick(event, '/courses?category=Career%20Programs')}
            className="btn-premium button-glow inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Explore Career Programs
            <ArrowRight size={18} />
          </MagneticButton>
        </Reveal>
      </section>

      <CoursesFinalCta />
    </>
  );
}
