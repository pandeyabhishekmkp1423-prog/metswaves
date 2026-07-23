import { ArrowRight, BookOpen, Clock3, Target } from 'lucide-react';
import { LEARNING_PATHS_WITH_COUNTS } from '../../data/coursesPageContent';
import { handleAnchorClick } from '../../utils';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

export function LearningPathsSection() {
  return (
    <section className="section-shell bg-white">
      <Reveal>
        <SectionIntro
          eyebrow="Learning Paths"
          title="Pick a path, not just a course."
          description="Structured, multi-course tracks that take you from first principles to a job-ready outcome — with a clear finish line."
        />
      </Reveal>

      <div className="mt-12 grid gap-6">
        {LEARNING_PATHS_WITH_COUNTS.map((path, index) => {
          const Icon = path.icon;
          const href = `/courses?category=${encodeURIComponent(path.categories[0])}`;
          return (
            <Reveal key={path.id} delay={index * 0.06}>
              <a
                href={href}
                onClick={(event) => handleAnchorClick(event, href)}
                className="surface-card card-hover group grid overflow-hidden md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
              >
                <div className="relative h-56 overflow-hidden md:h-full">
                  <img
                    src={path.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,39,0)_40%,rgba(7,19,39,0.55)_100%)]" />
                  <div className={`absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${path.gradient} text-white shadow-lg`}>
                    <Icon size={22} />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <h3 className="text-2xl font-semibold text-navy sm:text-[26px]">{path.title}</h3>
                  <p className="mt-3 text-text-secondary">{path.description}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-text-secondary">
                    <span className="flex items-center gap-2">
                      <Clock3 size={16} className="text-accent-blue" />
                      {path.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <BookOpen size={16} className="text-accent-blue" />
                      {path.courseCount}+ courses
                    </span>
                    <span className="flex items-center gap-2">
                      <Target size={16} className="text-accent-blue" />
                      {path.careerOutcome}
                    </span>
                  </div>

                  <span className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-navy">
                    Explore path
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
