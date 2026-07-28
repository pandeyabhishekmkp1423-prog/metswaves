import { ArrowRight, Clock3 } from 'lucide-react';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { getCategoryTheme } from '../data/categoryTheme';
import { handleAnchorClick } from '../utils';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';

const TUTORIALS = [
  { title: 'Build a Simple AI Chatbot in 30 Minutes', duration: '30 min', category: 'AI Development' },
  { title: 'Write Your First Effective Prompt', duration: '15 min', category: 'Prompt Engineering' },
  { title: 'Automate an Email Workflow with n8n', duration: '25 min', category: 'Automation' },
  { title: 'Generate Marketing Images with Midjourney', duration: '20 min', category: 'Generative AI' },
  { title: 'Train Your First ML Model in Python', duration: '40 min', category: 'Machine Learning' },
  { title: 'Build a Dashboard with Power BI', duration: '35 min', category: 'Data Science' },
];

export function TutorialsPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Learn"
        title="Tutorials"
        description="Short, hands-on walkthroughs you can follow along with in a single sitting."
      />

      <section className="section-shell bg-white">
        <Reveal>
          <SectionIntro eyebrow="Hands-On" title="Follow along, step by step." description="Every tutorial links to the full course if you want to keep building." />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TUTORIALS.map((tutorial, index) => {
            const theme = getCategoryTheme(tutorial.category);
            const Icon = theme.icon;
            const href = `/courses?category=${encodeURIComponent(tutorial.category)}`;
            return (
              <Reveal key={tutorial.title} delay={index * 0.06}>
                <a
                  href={href}
                  onClick={(event) => handleAnchorClick(event, href)}
                  className="surface-card card-hover group flex h-full flex-col gap-4 p-6"
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${theme.iconWrap}`}>
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-navy">{tutorial.title}</h3>
                  <span className="flex items-center gap-1.5 text-sm text-text-secondary">
                    <Clock3 size={14} className="text-gray-400" />
                    {tutorial.duration}
                  </span>
                  <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium ${theme.text}`}>
                    Start Tutorial
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CoursesFinalCta />
    </>
  );
}
