import { ALL_COURSES, type CourseCatalogEntry } from './courseCatalog';
import { LEARNING_PATHS_WITH_COUNTS, type LearningPath } from './coursesPageContent';

export type EnrichedLearningPath = LearningPath & {
  courseCount: number;
  audience: string;
  skills: string[];
  milestones: string[];
  courses: CourseCatalogEntry[];
};

const AUDIENCE: Record<string, string> = {
  'ai-product-builder':
    'Developers and career-switchers who want to ship one complete, production-grade AI product — not just finish tutorials.',
  'prompt-agent-engineering':
    'Builders who want to design reliable prompts and autonomous agents that hold up in production, not just in demos.',
  'ai-application-development':
    'Engineers who want to build and ship real applications powered by the OpenAI and Claude APIs.',
  'automation-workflow-systems':
    'Operators and builders who want to connect AI models to real business workflows using tools like n8n and Zapier.',
  'applied-data-science':
    'Analysts and engineers ready to turn raw data into predictive models and decisions leadership can act on.',
};

const SKILLS: Record<string, string[]> = {
  'ai-product-builder': [
    'Model fine-tuning & evaluation',
    'Full-stack product architecture',
    'RAG pipelines & vector search',
    'Deployment, monitoring & cost control',
  ],
  'prompt-agent-engineering': [
    'Advanced prompt design & evaluation',
    'Retrieval-augmented generation (RAG)',
    'Multi-step agent orchestration',
    'Tool use & function calling',
  ],
  'ai-application-development': [
    'API-first application architecture',
    'RAG pipelines & embeddings',
    'Agent frameworks (LangChain & custom)',
    'Auth, billing & production hardening',
  ],
  'automation-workflow-systems': [
    'Workflow design & trigger logic',
    'API integrations & webhooks',
    'AI-powered decision nodes',
    'Error handling & monitoring at scale',
  ],
  'applied-data-science': [
    'Statistical analysis & feature engineering',
    'Predictive modeling & evaluation',
    'Dashboarding & storytelling with data',
    'ML pipeline deployment',
  ],
};

const MILESTONES: Record<string, string[]> = {
  'ai-product-builder': [
    'Ship a working ML prototype by week 6',
    'Integrate a production LLM pipeline by week 14',
    'Launch a portfolio-ready capstone product by week 22',
  ],
  'prompt-agent-engineering': [
    'Build a reliable prompt library by week 3',
    'Ship a RAG-powered assistant by week 8',
    'Deploy a multi-tool autonomous agent by week 13',
  ],
  'ai-application-development': [
    'Ship an API-powered MVP by week 5',
    'Add retrieval & memory by week 11',
    'Launch a production-hardened AI app by week 18',
  ],
  'automation-workflow-systems': [
    'Automate a manual workflow by week 3',
    'Chain multi-step automations by week 7',
    'Deploy a monitored, self-healing pipeline by week 10',
  ],
  'applied-data-science': [
    'Ship a cleaned analytics dashboard by week 4',
    'Deploy a predictive model by week 10',
    'Present a decision-ready insights project by week 16',
  ],
};

export const LEARNING_PATHS_DETAILED: EnrichedLearningPath[] = LEARNING_PATHS_WITH_COUNTS.map((path) => ({
  ...path,
  audience: AUDIENCE[path.id] ?? 'Learners who want a structured, mentor-backed route to a specific career outcome.',
  skills: SKILLS[path.id] ?? [],
  milestones: MILESTONES[path.id] ?? [],
  courses: ALL_COURSES.filter((course) => path.categories.includes(course.category)).slice(0, 3),
}));
