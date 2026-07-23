import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseBySlug, getRelatedCourses } from '../data/courseCatalog';
import { generateCourseContent } from '../data/courseContent';
import { getCategoryTheme } from '../data/categoryTheme';
import { CourseHero } from '../components/course-detail/CourseHero';
import { EnrollmentCard } from '../components/course-detail/EnrollmentCard';
import { MobileEnrollBar } from '../components/course-detail/MobileEnrollBar';
import { WhatYouWillLearn } from '../components/course-detail/WhatYouWillLearn';
import { CourseProjects } from '../components/course-detail/CourseProjects';
import { CurriculumTimeline } from '../components/course-detail/CurriculumTimeline';
import { CourseTools } from '../components/course-detail/CourseTools';
import { InstructorSection } from '../components/course-detail/InstructorSection';
import { ReviewsSection } from '../components/course-detail/ReviewsSection';
import { CertificatePreviewSection } from '../components/course-detail/CertificatePreviewSection';
import { CourseFaq } from '../components/course-detail/CourseFaq';
import { RelatedCoursesSection } from '../components/course-detail/RelatedCoursesSection';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { NotFoundPage } from './NotFoundPage';

export function CourseDetailPage() {
  const { slug = '' } = useParams();
  const entry = getCourseBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!entry) {
    return (
      <NotFoundPage
        title="We couldn't find that course."
        description="It may have been renamed or is no longer offered. Browse the full catalog from the homepage instead."
      />
    );
  }

  const content = generateCourseContent(entry);
  const related = getRelatedCourses(entry);
  const theme = getCategoryTheme(entry.category);
  const lessonCount = content.curriculum.reduce((total, module) => total + module.lessons.length, 0);

  return (
    <>
      <CourseHero entry={entry} content={content} theme={theme} />

      <section className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
          <div className="grid gap-16 lg:order-1 lg:gap-20">
            <WhatYouWillLearn items={content.whatYouWillLearn} theme={theme} />
            <CourseProjects projects={content.projects} theme={theme} />
            <CurriculumTimeline modules={content.curriculum} />
            <CourseTools tools={content.tools} />
            <InstructorSection instructor={content.instructor} />
            <ReviewsSection reviews={content.reviews} />
            <CertificatePreviewSection courseTitle={entry.title} />
            <CourseFaq faq={content.faq} />
          </div>

          <aside className="lg:sticky lg:top-28 lg:order-2">
            <EnrollmentCard entry={entry} content={content} theme={theme} lessonCount={lessonCount} />
          </aside>
        </div>
      </section>

      <RelatedCoursesSection courses={related} />

      <CoursesFinalCta />

      <div className="h-20 lg:hidden" aria-hidden="true" />
      <MobileEnrollBar entry={entry} />
    </>
  );
}
