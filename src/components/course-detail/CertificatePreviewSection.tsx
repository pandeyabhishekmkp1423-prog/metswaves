import { CREDENTIAL_FEATURES } from '../../data/coursesPageContent';
import { CertificateMockup } from '../courses/CertificateMockup';
import { Reveal } from '../ui/Reveal';

type CertificatePreviewSectionProps = {
  courseTitle: string;
};

export function CertificatePreviewSection({ courseTitle }: CertificatePreviewSectionProps) {
  return (
    <div id="certificate">
      <Reveal>
        <h2 className="text-2xl font-semibold text-navy sm:text-[28px]">Your certificate</h2>
        <p className="mt-2 text-text-secondary">A verified, LinkedIn-ready credential the moment you finish.</p>
      </Reveal>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal delay={0.05}>
          <CertificateMockup courseTitle={courseTitle} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {CREDENTIAL_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={0.1 + index * 0.04}>
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
      </div>
    </div>
  );
}
