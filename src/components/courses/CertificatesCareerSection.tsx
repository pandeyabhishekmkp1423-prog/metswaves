import { BadgeCheck, ShieldCheck } from 'lucide-react';
import { CAREER_STATS } from '../../constants';
import { CREDENTIAL_FEATURES, PORTFOLIO_HIGHLIGHTS } from '../../data/coursesPageContent';
import { CertificateMockup } from './CertificateMockup';
import { CountUp } from '../ui/CountUp';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function CertificatesCareerSection() {
  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Certificates & Career Outcomes"
          title="Finish with proof, not just a checkmark."
          description="Every program ends in a verified, LinkedIn-ready credential and a portfolio built to get you noticed by hiring teams."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal>
          <CertificateMockup courseTitle="Building AI Agents with LangChain" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {CREDENTIAL_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={0.05 + index * 0.04}>
                  <div className="glass-panel flex h-full gap-3.5 p-4">
                    <div className="icon-chip h-10 w-10 flex-none">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{feature.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <div className="grid gap-8">
          <Reveal delay={0.06}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {CAREER_STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="surface-card p-5 text-center">
                    <div className="icon-chip mx-auto h-11 w-11">
                      <Icon size={19} />
                    </div>
                    <p className="mt-3 font-heading text-2xl font-bold text-navy sm:text-3xl">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="surface-card p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-accent-blue" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Portfolio Highlights</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {PORTFOLIO_HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-border-soft p-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white ${item.gradient}`}>
                        <Icon size={17} />
                      </div>
                      <p className="mt-3 text-sm font-semibold leading-snug text-navy">{item.title}</p>
                      <p className="mt-1 text-xs text-text-secondary">Built by {item.builtBy}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="surface-card p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Career Preparation</p>
              <ul className="mt-5 grid gap-3 text-sm text-text-secondary sm:grid-cols-2">
                <li className="flex items-start gap-2.5">
                  <BadgeCheck size={16} className="mt-0.5 flex-none text-accent-blue" />
                  1:1 resume &amp; portfolio reviews
                </li>
                <li className="flex items-start gap-2.5">
                  <BadgeCheck size={16} className="mt-0.5 flex-none text-accent-blue" />
                  Mock interviews with mentors
                </li>
                <li className="flex items-start gap-2.5">
                  <BadgeCheck size={16} className="mt-0.5 flex-none text-accent-blue" />
                  Role-matching with hiring partners
                </li>
                <li className="flex items-start gap-2.5">
                  <BadgeCheck size={16} className="mt-0.5 flex-none text-accent-blue" />
                  Lifetime access to career resources
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
