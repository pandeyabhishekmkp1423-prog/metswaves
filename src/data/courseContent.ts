import type { CourseCatalogEntry } from './courseCatalog';

export type CourseModule = {
  title: string;
  lessons: string[];
};

export type GeneratedCourseContent = {
  tagline: string;
  description: string;
  whatYouWillLearn: string[];
  curriculum: CourseModule[];
  faq: { question: string; answer: string }[];
  level: string;
  duration: string;
  format: string;
};

const LEARNING_POOLS: Record<string, string[]> = {
  'Generative AI': [
    'Core concepts and terminology behind modern generative AI tools',
    'How to structure inputs for consistent, high-quality outputs',
    'Practical workflows for applying AI to real deliverables',
    'Where AI speeds you up versus where human judgment still matters',
    'Common failure modes and how to catch them before they ship',
    'Building a repeatable process you can reuse on future work',
    'Evaluating AI output for accuracy, tone, and usefulness',
    'Combining multiple AI tools into a single working pipeline',
  ],
  'Prompt Engineering': [
    'The building blocks of a well-structured prompt',
    'Techniques for controlling tone, format, and length of output',
    'Iterative refinement: turning a rough draft prompt into a reliable one',
    'Few-shot examples and when they help versus when they distract',
    'Debugging prompts that produce inconsistent results',
    'Adapting the same prompt across different model providers',
    'Guardrails for keeping outputs safe, on-brand, and on-topic',
  ],
  Automation: [
    'Mapping a manual process before you attempt to automate it',
    'Choosing the right trigger, action, and condition logic for a workflow',
    'Connecting tools together without writing custom backend code',
    'Handling errors and edge cases so automations fail safely',
    'Testing a workflow end-to-end before turning it on',
    'Monitoring automations in production and catching silent failures',
  ],
  'Machine Learning': [
    'The difference between supervised, unsupervised, and reinforcement learning',
    'Preparing and cleaning a dataset for training',
    'Choosing an appropriate model for the problem you are solving',
    'Evaluating model performance beyond a single accuracy number',
    'Avoiding overfitting and validating on unseen data',
    'Taking a trained model from notebook to something usable',
  ],
  'Data Science': [
    'Framing a business question as an answerable data question',
    'Cleaning, joining, and shaping raw data for analysis',
    'Choosing the right chart or summary statistic for the story',
    'Writing queries and scripts that are reproducible, not one-off',
    'Communicating findings to a non-technical audience',
    'Building a dashboard or report stakeholders will actually use',
  ],
  'Career Programs': [
    'Mapping the exact skill set employers screen for in this role',
    'Building a portfolio project that demonstrates real capability',
    'Structuring your resume and profile around outcomes, not tasks',
    'Practicing the technical and behavioral interview formats you will face',
    'Getting feedback from mentors who have hired for this role',
    'A week-by-week plan so progress stays measurable, not vague',
  ],
  'Professional Certifications': [
    'The full scope of topics covered by the certification exam',
    'Hands-on practice with the exact tools the exam expects you to know',
    'Timed practice assessments that mirror the real exam format',
    'Common mistakes candidates make and how to avoid them',
    'A study plan that fits around a full-time schedule',
    'What to expect on exam day and how results are scored',
  ],
  default: [
    'Foundational concepts explained from first principles',
    'Hands-on practice with realistic, job-relevant exercises',
    'Common mistakes beginners make and how to avoid them',
    'A repeatable workflow you can apply immediately after the course',
    'How this skill fits into a broader AI-era career path',
    'Where to go next once you have the fundamentals down',
  ],
};

const MODULE_TEMPLATES: Record<string, string[]> = {
  'Generative AI': ['Orientation & Core Concepts', 'Guided Practice', 'Applying It To Real Work', 'Review & Next Steps'],
  'Prompt Engineering': ['Prompt Fundamentals', 'Structured Prompt Patterns', 'Debugging & Iteration', 'Putting It Into Practice'],
  Automation: ['Mapping The Workflow', 'Building The Automation', 'Testing & Error Handling', 'Monitoring In Production'],
  'Machine Learning': ['Foundations', 'Data Preparation', 'Model Training & Evaluation', 'Shipping A Working Model'],
  'Data Science': ['Framing The Problem', 'Working With Data', 'Analysis & Visualization', 'Communicating Results'],
  'Career Programs': ['Skill Assessment & Roadmap', 'Core Technical Training', 'Portfolio Project', 'Interview & Job Search Prep'],
  'Professional Certifications': ['Exam Blueprint Overview', 'Domain-by-Domain Review', 'Timed Practice Exams', 'Final Readiness Check'],
  default: ['Getting Started', 'Core Skills', 'Applied Practice', 'Wrap-Up & Next Steps'],
};

const FAQ_TEMPLATE = [
  {
    question: 'Is this course self-paced or scheduled?',
    answer: 'Self-paced by default, with optional live mentor office hours if you want scheduled guidance and feedback.',
  },
  {
    question: 'Do I get a certificate on completion?',
    answer: 'Yes — you receive a Metawaves AI certificate of completion once you finish all modules, which you can add to your resume or LinkedIn profile.',
  },
  {
    question: 'Do I need prior experience to start?',
    answer: 'No prior experience is required for most modules. Where a module assumes prior knowledge, it is called out at the start of that module.',
  },
  {
    question: 'What kind of support is included?',
    answer: 'You get access to mentor-reviewed feedback and the Metawaves community. For anything else, our team is a message away via the contact form.',
  },
];

function hashString(input: string): number {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash * 31 + input.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function rotate<T>(items: T[], offset: number): T[] {
  const at = offset % items.length;
  return [...items.slice(at), ...items.slice(0, at)];
}

function tierFromPrice(price?: string): { level: string; duration: string; format: string } {
  const numeric = price ? Number(price.replace(/[^0-9]/g, '')) : 0;
  if (numeric >= 15000) return { level: 'Career Track', duration: '16-24 weeks', format: 'Cohort + self-paced' };
  if (numeric >= 4000) return { level: 'Advanced', duration: '6-8 weeks', format: 'Self-paced' };
  if (numeric >= 1500) return { level: 'Intermediate', duration: '3-4 weeks', format: 'Self-paced' };
  return { level: 'Beginner', duration: '1-2 weeks', format: 'Self-paced' };
}

export function generateCourseContent(entry: CourseCatalogEntry): GeneratedCourseContent {
  if (entry.description) {
    return {
      tagline: `Part of the ${entry.category} track at Metawaves AI.`,
      description: entry.description,
      whatYouWillLearn: rotate(LEARNING_POOLS.default, hashString(entry.slug)).slice(0, 6),
      curriculum: buildCurriculum(entry, 'default'),
      faq: FAQ_TEMPLATE,
      level: entry.level ?? 'All Levels',
      duration: entry.duration ?? '6-8 weeks',
      format: 'Self-paced',
    };
  }

  const pool = LEARNING_POOLS[entry.category] ?? LEARNING_POOLS.default;
  const offset = hashString(entry.slug);
  const whatYouWillLearn = rotate(pool, offset).slice(0, 6);
  const tier = tierFromPrice(entry.price);

  return {
    tagline: entry.subCategory ? `${entry.subCategory} · ${entry.category}` : entry.category,
    description: `${entry.title} is a hands-on program in Metawaves AI's ${entry.category} curriculum. You'll build practical, job-ready skills through guided exercises and mentor-reviewed projects — focused entirely on what you can actually apply, not theory for its own sake.`,
    whatYouWillLearn,
    curriculum: buildCurriculum(entry, entry.category),
    faq: FAQ_TEMPLATE,
    ...tier,
  };
}

function buildCurriculum(entry: CourseCatalogEntry, categoryKey: string): CourseModule[] {
  const pool = LEARNING_POOLS[categoryKey] ?? LEARNING_POOLS.default;
  const moduleNames = MODULE_TEMPLATES[categoryKey] ?? MODULE_TEMPLATES.default;
  const offset = hashString(entry.slug + categoryKey);
  const rotatedPool = rotate(pool, offset);

  return moduleNames.map((title, index) => ({
    title: `Module ${index + 1}: ${title}`,
    lessons: rotatedPool.slice(index * 2, index * 2 + 2).length
      ? rotatedPool.slice(index * 2, index * 2 + 2)
      : rotatedPool.slice(0, 2),
  }));
}
