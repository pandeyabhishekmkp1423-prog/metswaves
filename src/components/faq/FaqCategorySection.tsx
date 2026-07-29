import type { FaqCategory } from '../../data/faqPageContent';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';

type FaqCategorySectionProps = {
  category: FaqCategory;
  index: number;
};

export function FaqCategorySection({ category, index }: FaqCategorySectionProps) {
  const Icon = category.icon;

  return (
    <section className={`section-shell ${index % 2 === 0 ? 'bg-white' : 'bg-bg-secondary'}`}>
      <Reveal className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3.5">
          <div className="icon-chip h-12 w-12 flex-none">
            <Icon size={20} />
          </div>
          <div>
            <span className="eyebrow">{category.title}</span>
            <p className="mt-1 text-sm text-text-secondary">{category.description}</p>
          </div>
        </div>
        <div className="mt-8">
          <Accordion items={category.faqs} />
        </div>
      </Reveal>
    </section>
  );
}
