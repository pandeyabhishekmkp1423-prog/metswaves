import { ArrowRight } from 'lucide-react';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { getCategoryTheme } from '../data/categoryTheme';
import { handleAnchorClick } from '../utils';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';

const GUIDES = [
  { title: 'Getting Started with ChatGPT & Claude', description: 'A beginner-friendly walkthrough of the AI chat tools everyone is talking about.', category: 'Generative AI' },
  { title: 'Prompt Engineering Basics', description: 'The core techniques for getting consistent, high-quality outputs from any model.', category: 'Prompt Engineering' },
  { title: 'Building Your First AI Agent', description: 'A guide to planning, tools, and memory for autonomous AI agents.', category: 'AI Development' },
  { title: 'Automating Your Workflow with AI', description: 'Connect no-code tools like n8n and Zapier with AI APIs.', category: 'Automation' },
  { title: 'The Machine Learning Roadmap', description: 'A clear path from Python basics to deploying your first model.', category: 'Machine Learning' },
  { title: 'Switching Careers into AI', description: 'What to learn, build, and show to land your first AI-native role.', category: 'Career Programs' },
];

export function AiGuidesPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Learn"
        title="AI Guides"
        description="Free, practical guides to help you get started across every corner of the AI landscape."
      />

      <section className="section-shell bg-white">
        <Reveal>
          <SectionIntro eyebrow="Guide Library" title="Pick a topic to dive into." description="Every guide links to a full course track if you want to go deeper." />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide, index) => {
            const theme = getCategoryTheme(guide.category);
            const Icon = theme.icon;
            const href = `/courses?category=${encodeURIComponent(guide.category)}`;
            return (
              <Reveal key={guide.title} delay={index * 0.06}>
                <a
                  href={href}
                  onClick={(event) => handleAnchorClick(event, href)}
                  className="surface-card card-hover group flex h-full flex-col gap-4 p-6"
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${theme.iconWrap}`}>
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{guide.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{guide.description}</p>
                  </div>
                  <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium ${theme.text}`}>
                    Read Guide
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
