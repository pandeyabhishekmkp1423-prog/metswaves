import { Award, BadgeCheck } from 'lucide-react';

type CertificateMockupProps = {
  courseTitle: string;
  studentName?: string;
  className?: string;
};

export function CertificateMockup({ courseTitle, studentName = 'Your Name Here', className = '' }: CertificateMockupProps) {
  return (
    <div className={`trust-gradient-border rounded-[28px] ${className}`}>
      <div className="relative overflow-hidden rounded-[28px] bg-white p-7 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_1px_2px_rgba(16,24,40,0.04)] sm:p-9">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_70%)]" />
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
            Certificate of Completion
          </span>
          <Award size={26} className="text-accent-blue" />
        </div>

        <p className="mt-8 text-sm text-text-secondary">This certifies that</p>
        <p className="mt-2 font-heading text-2xl font-bold text-navy sm:text-3xl">{studentName}</p>
        <p className="mt-4 text-sm text-text-secondary">has successfully completed</p>
        <p className="mt-2 text-lg font-semibold text-navy">{courseTitle}</p>

        <div className="mt-8 flex items-center justify-between border-t border-border-soft pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">Issued by</p>
            <p className="mt-1 text-sm font-semibold text-navy">MetaWaves AI</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-border-soft bg-gray-50 px-3 py-1.5 text-xs font-medium text-text-secondary">
            <BadgeCheck size={14} className="text-accent-blue" />
            Verified
          </div>
        </div>
      </div>
    </div>
  );
}
