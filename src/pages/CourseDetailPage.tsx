import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, GraduationCap, Layers, Star } from 'lucide-react';
import { Accordion } from '../components/ui/Accordion';
import { CourseCurriculum } from '../components/courses/CourseCurriculum';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Reveal } from '../components/ui/Reveal';
import { getCourseBySlug, getRelatedCourses } from '../data/courseCatalog';
import { generateCourseContent } from '../data/courseContent';
import { getCategoryTheme } from '../data/categoryTheme';
import { handleAnchorClick } from '../utils';
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
  const CategoryIcon = theme.icon;
  const categoryHref = `/courses?category=${encodeURIComponent(entry.category)}`;

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className={`pointer-events-none absolute inset-0 ${theme.heroGradient}`} />
        <div className="section-shell relative z-10 py-16!">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-white/50">
            <a href="/" onClick={(event) => handleAnchorClick(event, '/')} className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <a href="/courses" onClick={(event) => handleAnchorClick(event, '/courses')} className="hover:text-white">
              Courses
            </a>
            <span>/</span>
            <a href={categoryHref} onClick={(event) => handleAnchorClick(event, categoryHref)} className="text-white/80 hover:text-white">
              {entry.category}
            </a>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white">
                <CategoryIcon size={14} />
                {content.tagline}
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px]">{entry.title}</h1>
              <p className="mt-4 max-w-xl text-white/70">{content.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-accent-blue-light" />
                  {content.level}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-accent-blue-light" />
                  {content.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Layers size={16} className="text-accent-blue-light" />
                  {content.format}
                </span>
                {entry.rating ? (
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <Star size={15} className="fill-current" />
                    {entry.rating}
                    {entry.students ? <span className="text-white/50">· {entry.students} students</span> : null}
                  </span>
                ) : null}
              </div>

              {entry.instructor ? <p className="mt-5 text-sm text-white/60">Taught by <span className="text-white">{entry.instructor}</span></p> : null}
            </Reveal>

            <Reveal delay={0.08}>
              <div className={`surface-card overflow-hidden border-t-4 p-6 text-text-primary lg:sticky lg:top-28 ${theme.topBorder}`}>
                {entry.image ? (
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="mb-5 h-40 w-full rounded-2xl object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                ) : null}
                <p className="text-3xl font-bold text-navy">{entry.price ?? 'Certification Program'}</p>
                <MagneticButton
                  href="#contact"
                  onClick={(event) => handleAnchorClick(event, '#contact')}
                  className="btn-premium button-glow mt-5 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm"
                >
                  Enroll Now
                  <ArrowRight size={15} />
                </MagneticButton>
                <ul className="mt-6 grid gap-3 text-sm text-text-secondary">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className={`flex-none ${theme.text}`} />
                    Mentor-reviewed feedback
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className={`flex-none ${theme.text}`} />
                    Certificate of completion
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className={`flex-none ${theme.text}`} />
                    Lifetime access to materials
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CategoryIcon size={16} className={`flex-none ${theme.text}`} />
                    Part of the {entry.category} track
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-14">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">What you'll learn</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.whatYouWillLearn.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className={`mt-0.5 flex-none ${theme.text}`} />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-2xl font-semibold text-navy">Curriculum</h2>
            <div className="mt-6">
              <CourseCurriculum modules={content.curriculum} />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-2xl font-semibold text-navy">Frequently asked questions</h2>
            <div className="mt-6">
              <Accordion items={content.faq} />
            </div>
          </Reveal>
        </div>

        <div className="hidden lg:block" />
      </section>

      {related.length > 0 ? (
        <section className="section-shell bg-bg-alt">
          <Reveal>
            <div className="flex items-center gap-3.5">
              <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-[14px] border ${theme.iconWrap}`}>
                <CategoryIcon size={20} />
              </span>
              <h2 className="text-2xl font-semibold text-navy">Related courses</h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((course, index) => {
              const relatedTheme = getCategoryTheme(course.category);
              const RelatedIcon = relatedTheme.icon;
              return (
                <Reveal key={course.slug} delay={index * 0.05}>
                  <a
                    href={`/courses/${course.slug}`}
                    onClick={(event) => handleAnchorClick(event, `/courses/${course.slug}`)}
                    className={`surface-card card-hover group flex h-full flex-col gap-3 border-t-4 p-5 ${relatedTheme.topBorder}`}
                  >
                    <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border ${relatedTheme.iconWrap}`}>
                      <RelatedIcon size={16} />
                    </span>
                    <div>
                      <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${relatedTheme.text}`}>
                        {course.subCategory ?? course.category}
                      </span>
                      <p className="mt-1 font-ui text-lg font-semibold text-navy">{course.title}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="text-sm font-semibold text-navy">{course.price ?? 'Certification Program'}</span>
                      <ArrowRight size={15} className="text-gray-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-blue" />
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
}
