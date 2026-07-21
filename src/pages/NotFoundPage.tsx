import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { handleAnchorClick } from '../utils';

type NotFoundPageProps = {
  title?: string;
  description?: string;
};

export function NotFoundPage({
  title = "We couldn't find that page.",
  description = "The page you're looking for may have moved or no longer exists.",
}: NotFoundPageProps) {
  return (
    <section className="section-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="badge-pill">404</span>
      <h1 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-text-secondary">{description}</p>
      <MagneticButton
        href="/"
        onClick={(event) => handleAnchorClick(event, '/')}
        className="btn-premium button-glow mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm"
      >
        Back to Home
        <ArrowRight size={15} />
      </MagneticButton>
    </section>
  );
}
