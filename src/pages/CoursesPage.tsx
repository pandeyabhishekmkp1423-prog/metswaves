import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CoursesHero } from '../components/courses/CoursesHero';
import { CourseCatalogBrowser } from '../components/courses/CourseCatalogBrowser';
import { LearningPathsSection } from '../components/courses/LearningPathsSection';
import { FeaturedCoursesSection } from '../components/courses/FeaturedCoursesSection';
import { BrowseCategoriesSection } from '../components/courses/BrowseCategoriesSection';
import { ProjectsShowcaseSection } from '../components/courses/ProjectsShowcaseSection';
import { CertificatesCareerSection } from '../components/courses/CertificatesCareerSection';
import { CoursesFaqSection } from '../components/courses/CoursesFaqSection';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { ALL_COURSES, getCategorySummaries } from '../data/courseCatalog';

export function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category');
  const [query, setQuery] = useState('');

  const categorySummaries = useMemo(() => getCategorySummaries(), []);
  const isBrowsing = Boolean(activeCategory) || query.trim().length > 0;

  const setCategory = (category: string | null) => {
    if (category) {
      setSearchParams({ category }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const clearFilters = () => {
    setQuery('');
    setCategory(null);
  };

  return (
    <>
      <CoursesHero
        totalCourses={ALL_COURSES.length}
        categorySummaries={categorySummaries}
        query={query}
        onQueryChange={setQuery}
        activeCategory={activeCategory}
        onCategorySelect={setCategory}
      />

      {isBrowsing ? (
        <CourseCatalogBrowser query={query} activeCategory={activeCategory} onClearFilters={clearFilters} />
      ) : (
        <>
          <LearningPathsSection />
          <FeaturedCoursesSection />
          <BrowseCategoriesSection categorySummaries={categorySummaries} />
          <ProjectsShowcaseSection />
          <CertificatesCareerSection />
          <CoursesFaqSection />
          <CoursesFinalCta />
        </>
      )}
    </>
  );
}
