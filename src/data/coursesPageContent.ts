import {
  Award,
  BadgeCheck,
  BarChart3,
  Bot,
  Download,
  Link2,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { ALL_COURSES } from './courseCatalog';
import type { FeaturedCourse } from '../constants';

export type LearningPath = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  gradient: string;
  categories: string[];
  duration: string;
  careerOutcome: string;
};

function countCourses(categories: string[]): number {
  return ALL_COURSES.filter((course) => categories.includes(course.category)).length;
}

const LEARNING_PATH_SEEDS: LearningPath[] = [
  {
    id: 'ai-product-builder',
    title: 'AI Product Builder',
    description: 'Go from model fundamentals to a shipped, full-stack AI product with a portfolio-ready capstone.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1400',
    icon: Bot,
    gradient: 'from-blue-500 to-cyan-400',
    categories: ['Machine Learning', 'Flagship Programs'],
    duration: '20-24 weeks',
    careerOutcome: 'AI Product Engineer',
  },
  {
    id: 'prompt-agent-engineering',
    title: 'Prompt & Agent Engineering',
    description: 'Master prompting, retrieval, and autonomous agents that plan, reason, and use tools in production.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400',
    icon: MessageSquareText,
    gradient: 'from-violet-500 to-purple-400',
    categories: ['Prompt Engineering', 'Generative AI'],
    duration: '10-14 weeks',
    careerOutcome: 'AI Agent Engineer',
  },
  {
    id: 'automation-workflow-systems',
    title: 'Automation & Workflow Systems',
    description: 'Design and ship multi-step automations that connect AI models to real business workflows.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400',
    icon: Workflow,
    gradient: 'from-orange-500 to-amber-400',
    categories: ['Automation'],
    duration: '8-12 weeks',
    careerOutcome: 'Automation Specialist',
  },
  {
    id: 'applied-data-science',
    title: 'Data Science & Analytics',
    description: 'Turn raw data into predictive models, dashboards, and decision-ready insights with modern tooling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-400',
    categories: ['Data Science'],
    duration: '14-18 weeks',
    careerOutcome: 'Applied Data Scientist',
  },
];

export const LEARNING_PATHS_WITH_COUNTS: (LearningPath & { courseCount: number })[] = LEARNING_PATH_SEEDS.map(
  (seed) => ({
    ...seed,
    courseCount: Math.max(countCourses(seed.categories), 6),
  }),
);

export const FEATURED_COURSE_PRICING: Record<string, { price: string; originalPrice?: string }> = {
  'prompt-engineering-mastery': { price: '₹4,999', originalPrice: '₹7,999' },
  'building-ai-agents': { price: '₹8,999', originalPrice: '₹12,999' },
  'ai-workflow-automation-n8n': { price: '₹6,999', originalPrice: '₹9,999' },
  'full-stack-ai-development': { price: '₹14,999', originalPrice: '₹19,999' },
  'ai-powered-product-design': { price: '₹7,499', originalPrice: '₹10,999' },
  'ai-for-business-leaders': { price: '₹3,999', originalPrice: '₹5,999' },
  'advanced-ai-agent-systems': { price: '₹11,999', originalPrice: '₹16,999' },
  'applied-data-science-ai': { price: '₹12,999', originalPrice: '₹17,999' },
};

export function getFeaturedCoursePricing(course: FeaturedCourse) {
  return FEATURED_COURSE_PRICING[course.id] ?? { price: '₹4,999' };
}

export type CredentialFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const CREDENTIAL_FEATURES: CredentialFeature[] = [
  {
    title: 'Shareable on LinkedIn',
    description: 'Add your certificate directly to your LinkedIn profile in one click, with a verified skill badge.',
    icon: Link2,
  },
  {
    title: 'Verified & tamper-proof',
    description: 'Every credential ships with a unique verification link recruiters can check instantly.',
    icon: ShieldCheck,
  },
  {
    title: 'Downloadable PDF',
    description: 'A print-ready certificate you can attach to applications, portfolios, and proposals.',
    icon: Download,
  },
  {
    title: 'Recognized by hiring teams',
    description: 'Built with input from hiring partners so credentials map to real, in-demand skills.',
    icon: BadgeCheck,
  },
];

export type PortfolioHighlight = {
  title: string;
  builtBy: string;
  gradient: string;
  icon: LucideIcon;
};

export const PORTFOLIO_HIGHLIGHTS: PortfolioHighlight[] = [
  { title: 'NeuralDesk — AI Support Copilot', builtBy: 'Aditi R.', gradient: 'from-blue-500 to-cyan-400', icon: Sparkles },
  { title: 'FlowPilot — Workflow Automation', builtBy: 'Zoe L.', gradient: 'from-amber-500 to-orange-400', icon: Workflow },
  { title: 'PaperMind — Research Assistant', builtBy: 'Daniel K.', gradient: 'from-indigo-500 to-blue-400', icon: Award },
];
