import { useId, useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSignup() {
  const inputId = useId();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Enter a valid email address.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section className="section-shell bg-white">
      <Reveal>
        <div className="trust-gradient-border rounded-[28px]">
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#eef4ff_0%,#f7f9ff_55%,#eef8ff_100%)] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_70%)]" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_70%)]" />

            <div className="relative mx-auto max-w-xl">
              <span className="icon-chip mx-auto h-14 w-14">
                <Mail size={24} />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-navy sm:text-[32px]">Never miss an AI Insight.</h2>
              <p className="mt-3 text-text-secondary">
                One email a week: the ideas, tools, and workflows actually worth your time. No spam, unsubscribe anytime.
              </p>

              {submitted ? (
                <div className="mt-8 flex items-center justify-center gap-2.5 rounded-[14px] border border-emerald-100 bg-emerald-50 px-5 py-4 text-emerald-700">
                  <CheckCircle2 size={19} />
                  <span className="font-medium">You&rsquo;re subscribed — welcome aboard.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row" noValidate>
                  <label htmlFor={inputId} className="sr-only">
                    Email address
                  </label>
                  <input
                    id={inputId}
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    className="input-premium flex-1"
                  />
                  <button
                    type="submit"
                    className="btn-premium button-glow inline-flex flex-none items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold"
                  >
                    <Sparkles size={16} />
                    Subscribe
                  </button>
                </form>
              )}
              {error ? (
                <p id={`${inputId}-error`} role="alert" className="mt-3 text-sm font-medium text-error">
                  {error}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
