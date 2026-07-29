import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { FaqCategorySection } from '../components/faq/FaqCategorySection';
import { FaqHero } from '../components/faq/FaqHero';
import { FAQ_CATEGORIES } from '../data/faqPageContent';

export function FaqPage() {
  return (
    <>
      <FaqHero />
      {FAQ_CATEGORIES.map((category, index) => (
        <FaqCategorySection key={category.id} category={category} index={index} />
      ))}
      <CoursesFinalCta />
    </>
  );
}
