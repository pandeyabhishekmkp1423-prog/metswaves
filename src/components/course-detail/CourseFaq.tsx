import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import type { Faq } from '../../constants';

type CourseFaqProps = {
  faq: Faq[];
};

export function CourseFaq({ faq }: CourseFaqProps) {
  return (
    <div id="faq">
      <Reveal>
        <h2 className="text-2xl font-semibold text-navy sm:text-[28px]">Frequently asked questions</h2>
      </Reveal>
      <div className="mt-6">
        <Accordion items={faq} />
      </div>
    </div>
  );
}
