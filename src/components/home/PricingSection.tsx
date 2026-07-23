import { PRICING_FAQS, PRICING_PLANS } from '../../constants';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { PaymentMethods } from './pricing/PaymentMethods';
import { PricingBackground } from './pricing/PricingBackground';
import { PricingCard } from './pricing/PricingCard';
import { PricingCtaBanner } from './pricing/PricingCtaBanner';
import { TrustBadges } from './pricing/TrustBadges';

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white">
      <PricingBackground />

      <div className="section-shell relative z-10">
        <Reveal>
          <SectionIntro
            eyebrow="Pricing"
            title="Invest in Skills That Compound for Life"
            description="MetaWaves isn't a course subscription — it's an investment in practical AI skills, real projects, mentorship, and long-term career growth."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.08}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-20 lg:mt-24">
          <TrustBadges />
        </Reveal>

        <Reveal delay={0.24} className="mt-8">
          <PaymentMethods />
        </Reveal>

        <Reveal delay={0.28} className="mx-auto mt-20 max-w-3xl lg:mt-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">
            Pricing FAQ
          </p>
          <div className="mt-6">
            <Accordion items={PRICING_FAQS} />
          </div>
        </Reveal>

        <Reveal delay={0.32} className="mt-20 lg:mt-24">
          <PricingCtaBanner />
        </Reveal>
      </div>
    </section>
  );
}
