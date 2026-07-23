import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ALL_COURSES } from '../data/courseCatalog';
import { generateArticleContent } from '../data/articleContent';
import { getArticleBySlug, getRelatedArticles } from '../data/insightsContent';
import { ReadingProgressBar } from '../components/blog-detail/ReadingProgressBar';
import { ArticleHero } from '../components/blog-detail/ArticleHero';
import { TableOfContents } from '../components/blog-detail/TableOfContents';
import { ArticleContent } from '../components/blog-detail/ArticleContent';
import { InlineCoursePromo } from '../components/blog-detail/InlineCoursePromo';
import { RelatedProjectsSection } from '../components/blog-detail/RelatedProjectsSection';
import { ArticleAuthorProfile } from '../components/blog-detail/ArticleAuthorProfile';
import { RelatedArticlesSection } from '../components/blog-detail/RelatedArticlesSection';
import { NewsletterSignup } from '../components/insights/NewsletterSignup';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { NotFoundPage } from './NotFoundPage';

export function BlogDetailPage() {
  const { slug = '' } = useParams();
  const article = getArticleBySlug(slug);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const content = useMemo(() => (article ? generateArticleContent(article) : null), [article]);
  const related = useMemo(() => (article ? getRelatedArticles(article) : []), [article]);
  const promoCourse = useMemo(
    () => (article ? ALL_COURSES.find((course) => course.category === article.category && course.image) ?? ALL_COURSES.find((course) => course.category === article.category) : undefined),
    [article],
  );

  if (!article || !content) {
    return (
      <NotFoundPage
        title="We couldn't find that article."
        description="It may have been renamed or unpublished. Browse the full archive from AI Insights instead."
      />
    );
  }

  const midpoint = Math.ceil(content.blocks.length / 2);
  const firstHalf = content.blocks.slice(0, midpoint);
  const secondHalf = content.blocks.slice(midpoint);

  return (
    <>
      <ReadingProgressBar targetRef={contentRef} />

      <div ref={contentRef}>
        <ArticleHero article={article} />

        <section className="mx-auto w-full max-w-[1060px] px-5 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-start lg:gap-12">
            <div className="order-2 min-w-0 lg:order-1">
              <ArticleContent blocks={firstHalf} />

              {promoCourse ? <InlineCoursePromo course={promoCourse} category={article.category} /> : null}

              <ArticleContent blocks={secondHalf} />

              <div className="mt-16 grid gap-16">
                <RelatedProjectsSection projects={content.relatedProjects} />
                <ArticleAuthorProfile profile={content.authorProfile} />
              </div>
            </div>

            <aside className="order-1 lg:order-2 lg:sticky lg:top-28">
              <TableOfContents toc={content.toc} articleTitle={article.title} />
            </aside>
          </div>
        </section>
      </div>

      <RelatedArticlesSection articles={related} />

      <NewsletterSignup />

      <CoursesFinalCta />
    </>
  );
}
