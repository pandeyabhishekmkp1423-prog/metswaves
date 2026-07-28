import {
  Award,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  ClipboardList,
  Cloud,
  Cpu,
  FileText,
  Globe,
  Image as ImageIcon,
  LayoutDashboard,
  Lock,
  Megaphone,
  MessageCircle,
  MessageSquareText,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { AI_TECHNOLOGIES, MENTORS, type AiTechnology, type Mentor, type ProjectDifficulty } from '../constants';
import type { CourseCatalogEntry } from './courseCatalog';

export type CourseModule = {
  title: string;
  lessons: string[];
};

export type CourseProject = {
  title: string;
  description: string;
  icon: LucideIcon;
  difficulty: ProjectDifficulty;
};

export type CourseReview = {
  name: string;
  role: string;
  comment: string;
  rating: number;
};

export type CourseInstructor = {
  name: string;
  role: string;
  image: string;
  experience: string;
  bio: string;
  socials: Mentor['socials'];
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
  projects: CourseProject[];
  tools: AiTechnology[];
  reviews: CourseReview[];
  instructor: CourseInstructor;
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
  'AI Development': [
    'Calling LLM APIs correctly, including streaming, retries, and error handling',
    'Structuring a RAG pipeline: chunking, embeddings, retrieval, and generation',
    'Designing agent loops that plan, call tools, and recover from failure',
    'Managing state and memory across multi-step agent workflows',
    'Choosing between LangChain, LangGraph, CrewAI, and AutoGen for a given use case',
    'Deploying an AI application behind a production-grade API',
  ],
  'Web Development': [
    'Structuring a modern frontend with components, routing, and state management',
    'Building accessible, responsive layouts that work across devices',
    'Connecting a frontend to real APIs and handling loading and error states',
    'Writing backend routes, models, and authentication that scale',
    'Testing and debugging a full-stack application before shipping',
    'Deploying a production app with a real CI/CD pipeline',
  ],
  'UI/UX Design': [
    'Running lightweight user research that actually changes a design decision',
    'Structuring a design system that stays consistent as a product grows',
    'Prototyping flows that communicate intent before a single line of code is written',
    'Applying accessibility standards without slowing down a design sprint',
    'Handing off designs so engineering ships exactly what was designed',
    'Presenting and defending design decisions to stakeholders',
  ],
  'Digital Marketing': [
    'Building a channel strategy instead of chasing every platform at once',
    'Writing and testing copy that is optimized for both readers and search engines',
    'Reading a campaign dashboard and knowing which metric actually matters',
    'Using AI tools to scale content production without losing brand voice',
    'Structuring an email or retention flow that does not feel like spam',
    'Turning a marketing budget into a defensible return-on-spend report',
  ],
  'Cloud Computing': [
    'Choosing the right compute, storage, and networking primitives for a workload',
    'Designing for scalability, redundancy, and cost control from day one',
    'Setting up a CI/CD pipeline that deploys safely and rolls back cleanly',
    'Securing cloud infrastructure with least-privilege access by default',
    'Monitoring, logging, and alerting so incidents are caught before customers notice',
    'Estimating and controlling cloud spend as usage grows',
  ],
  'Cyber Security': [
    'Thinking like an attacker to find the weakest link in a system',
    'Hardening networks, endpoints, and cloud infrastructure against common threats',
    'Using AI-assisted tools to detect anomalies without drowning in false positives',
    'Responding to and containing a security incident under time pressure',
    'Meeting compliance requirements without treating security as a checkbox',
    'Communicating risk to stakeholders who are not security specialists',
  ],
  'Business & Leadership': [
    'Framing a business problem before jumping to a solution',
    'Reading a P&L and connecting it to the decisions a manager actually makes',
    'Structuring a negotiation so both sides leave with a fair outcome',
    'Applying AI tools to strategy work without losing critical judgment',
    'Leading a team through ambiguity without over-promising certainty',
    'Presenting a business case that survives tough questions from leadership',
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
  'AI Development': ['API & SDK Fundamentals', 'RAG & Retrieval Pipelines', 'Agent Architecture', 'Shipping To Production'],
  'Web Development': ['Frontend Foundations', 'Connecting To Real APIs', 'Backend & Data', 'Testing & Deployment'],
  'UI/UX Design': ['Research & Discovery', 'Structuring The Design System', 'Prototyping The Flow', 'Handoff & Presentation'],
  'Digital Marketing': ['Channel Strategy', 'Content & Copy', 'Campaign Execution', 'Reporting & Optimization'],
  'Cloud Computing': ['Core Infrastructure', 'Architecture & Scaling', 'Security & Access Control', 'Monitoring & Cost Control'],
  'Cyber Security': ['Threat Landscape Overview', 'Hardening Systems', 'Detection & Response', 'Compliance & Reporting'],
  'Business & Leadership': ['Framing The Problem', 'Core Frameworks', 'Applied Practice', 'Presenting The Case'],
  default: ['Getting Started', 'Core Skills', 'Applied Practice', 'Wrap-Up & Next Steps'],
};

const PROJECT_POOLS: Record<string, CourseProject[]> = {
  'Generative AI': [
    {
      title: 'AI Content Generator',
      description: 'Produce on-brand marketing copy and visuals from a single creative brief.',
      icon: Sparkles,
      difficulty: 'Beginner',
    },
    {
      title: 'AI Image Campaign Kit',
      description: 'Build a full campaign of on-brand images and captions using generative tools.',
      icon: ImageIcon,
      difficulty: 'Intermediate',
    },
    {
      title: 'Brand Voice Assistant',
      description: 'A writing assistant tuned to match a specific brand voice across every channel.',
      icon: PenTool,
      difficulty: 'Intermediate',
    },
  ],
  'Prompt Engineering': [
    {
      title: 'Prompt Library & Playbook',
      description: 'A reusable, versioned library of prompts built for a real team workflow.',
      icon: MessageSquareText,
      difficulty: 'Beginner',
    },
    {
      title: 'Multi-Model Prompt Router',
      description: 'Route the same task to different models and compare output quality.',
      icon: Workflow,
      difficulty: 'Intermediate',
    },
    {
      title: 'AI Output QA Evaluator',
      description: 'Score and flag inconsistent AI outputs before they reach production.',
      icon: ClipboardList,
      difficulty: 'Advanced',
    },
  ],
  Automation: [
    {
      title: 'AI Workflow Automation',
      description: 'Automate a multi-step business process end to end with AI in the loop.',
      icon: Workflow,
      difficulty: 'Intermediate',
    },
    {
      title: 'Smart Inbox Router',
      description: 'Classify and route incoming requests automatically using AI-driven triggers.',
      icon: MessageCircle,
      difficulty: 'Beginner',
    },
    {
      title: 'Ops Alerting Pipeline',
      description: 'A monitored automation that flags failures before they become incidents.',
      icon: ShieldCheck,
      difficulty: 'Advanced',
    },
  ],
  'Machine Learning': [
    {
      title: 'Predictive Scoring Model',
      description: 'Train and evaluate a model that scores leads, risk, or churn.',
      icon: BarChart3,
      difficulty: 'Intermediate',
    },
    {
      title: 'Computer Vision Classifier',
      description: 'Build and deploy an image classifier behind a simple inference API.',
      icon: Cpu,
      difficulty: 'Advanced',
    },
    {
      title: 'Model Monitoring Dashboard',
      description: 'Track drift and performance for a model running in production.',
      icon: LayoutDashboard,
      difficulty: 'Advanced',
    },
  ],
  'Data Science': [
    {
      title: 'Executive Insights Dashboard',
      description: 'Turn a raw dataset into a decision-ready dashboard stakeholders trust.',
      icon: BarChart3,
      difficulty: 'Intermediate',
    },
    {
      title: 'Customer Segmentation Study',
      description: 'Cluster customers into actionable segments from behavioral data.',
      icon: Users,
      difficulty: 'Intermediate',
    },
    {
      title: 'A/B Test Analysis Report',
      description: 'Design and analyze an experiment with a clear, defensible conclusion.',
      icon: ClipboardList,
      difficulty: 'Beginner',
    },
  ],
  'Career Programs': [
    {
      title: 'Capstone Portfolio Project',
      description: 'A full, mentor-reviewed project built specifically for your job search.',
      icon: Briefcase,
      difficulty: 'Advanced',
    },
    {
      title: 'Resume & Case Study Rebuild',
      description: 'Turn your project work into a resume and case study recruiters actually read.',
      icon: FileText,
      difficulty: 'Beginner',
    },
  ],
  'Professional Certifications': [
    {
      title: 'Exam Simulation Project',
      description: 'A hands-on project modeled directly on the certification exam blueprint.',
      icon: Award,
      difficulty: 'Intermediate',
    },
    {
      title: 'Applied Practice Lab',
      description: 'Timed, scenario-based labs that mirror real exam conditions.',
      icon: ClipboardList,
      difficulty: 'Intermediate',
    },
  ],
  'AI Development': [
    {
      title: 'AI Chat Assistant with RAG',
      description: 'A retrieval-augmented assistant that answers questions from a real document set.',
      icon: Bot,
      difficulty: 'Intermediate',
    },
    {
      title: 'Autonomous Research Agent',
      description: 'An agent that plans a multi-step research task and reports back with sources.',
      icon: Rocket,
      difficulty: 'Advanced',
    },
    {
      title: 'Multi-Agent Task Orchestrator',
      description: 'Coordinate several specialized agents to complete one larger workflow.',
      icon: Workflow,
      difficulty: 'Advanced',
    },
  ],
  'Web Development': [
    {
      title: 'Full-Stack SaaS Dashboard',
      description: 'A production-style dashboard with authentication, real data, and a deployed backend.',
      icon: LayoutDashboard,
      difficulty: 'Advanced',
    },
    {
      title: 'E-Commerce Storefront',
      description: 'A fast, responsive storefront with cart, checkout, and a real product catalog.',
      icon: Globe,
      difficulty: 'Intermediate',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A chat app with live updates, presence, and message history.',
      icon: MessageCircle,
      difficulty: 'Intermediate',
    },
  ],
  'UI/UX Design': [
    {
      title: 'Mobile App Design System',
      description: 'A reusable component library and style guide for a real mobile app concept.',
      icon: PenTool,
      difficulty: 'Intermediate',
    },
    {
      title: 'SaaS Onboarding Flow Redesign',
      description: 'Research, prototype, and test a redesigned first-run experience for a SaaS product.',
      icon: Sparkles,
      difficulty: 'Intermediate',
    },
  ],
  'Digital Marketing': [
    {
      title: 'SEO Content Strategy Rollout',
      description: 'A keyword-mapped content calendar and on-page SEO plan for a real niche.',
      icon: Megaphone,
      difficulty: 'Beginner',
    },
    {
      title: 'AI-Powered Ad Campaign',
      description: 'Plan, generate, and analyze a multi-channel ad campaign using AI copy and creative.',
      icon: Sparkles,
      difficulty: 'Intermediate',
    },
  ],
  'Cloud Computing': [
    {
      title: 'Scalable Cloud Deployment Pipeline',
      description: 'A CI/CD pipeline that deploys an app to the cloud with zero-downtime releases.',
      icon: Cloud,
      difficulty: 'Intermediate',
    },
    {
      title: 'Kubernetes Microservices Cluster',
      description: 'Containerize and orchestrate a multi-service application on Kubernetes.',
      icon: Workflow,
      difficulty: 'Advanced',
    },
  ],
  'Cyber Security': [
    {
      title: 'Vulnerability Assessment Report',
      description: 'A full security audit of a sample application, with findings ranked by risk.',
      icon: ShieldCheck,
      difficulty: 'Intermediate',
    },
    {
      title: 'Security Incident Response Simulation',
      description: 'Detect, contain, and document a simulated breach under a realistic timeline.',
      icon: Lock,
      difficulty: 'Advanced',
    },
  ],
  'Business & Leadership': [
    {
      title: 'Go-to-Market Strategy Deck',
      description: 'A full launch strategy for a product, backed by market and competitor research.',
      icon: Briefcase,
      difficulty: 'Intermediate',
    },
    {
      title: 'Team Leadership Case Study',
      description: 'Work through a real management scenario and present a defensible decision.',
      icon: Building2,
      difficulty: 'Beginner',
    },
  ],
  default: [
    {
      title: 'Guided Capstone Project',
      description: 'Apply everything from the course to one polished, portfolio-ready build.',
      icon: Rocket,
      difficulty: 'Intermediate',
    },
    {
      title: 'Real-World Practice Brief',
      description: 'A realistic brief that mirrors the kind of work you would ship on the job.',
      icon: ClipboardList,
      difficulty: 'Beginner',
    },
  ],
};

const REVIEW_POOL: CourseReview[] = [
  {
    name: 'Ananya Iyer',
    role: 'Product Designer',
    comment:
      'The pacing was perfect — I went from confused to confident by module 3, and mentor feedback caught things I would have missed.',
    rating: 5,
  },
  {
    name: 'Rohit Malhotra',
    role: 'Software Engineer',
    comment: 'Best project-based course I have taken. The capstone alone was worth the price — I use it in interviews now.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Lead',
    comment: 'Clear structure, real examples, and a mentor who actually responded. It felt like a proper program, not a video dump.',
    rating: 5,
  },
  {
    name: 'Karan Verma',
    role: 'Data Analyst',
    comment: 'I was skeptical about AI courses in general, but this one is genuinely hands-on. Shipped two real projects by the end.',
    rating: 4,
  },
  {
    name: 'Sneha Reddy',
    role: 'Freelance Consultant',
    comment: 'Directly applied what I learned to client work in week two. The templates and workflows alone paid for the course.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Operations Manager',
    comment: 'The automation module changed how my team works. We cut a two-day process down to twenty minutes.',
    rating: 5,
  },
  {
    name: 'Neha Kapoor',
    role: 'UX Researcher',
    comment: 'Loved that every lesson ended with something to build, not just watch. The certificate looks great on LinkedIn too.',
    rating: 4,
  },
  {
    name: 'Vikram Shah',
    role: 'Startup Founder',
    comment: 'Practical, no fluff, and the mentor office hours were genuinely useful for our specific use case.',
    rating: 5,
  },
];

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

function getCourseProjects(entry: CourseCatalogEntry): CourseProject[] {
  const pool = PROJECT_POOLS[entry.category] ?? PROJECT_POOLS.default;
  const offset = hashString(`${entry.slug}-projects`);
  return rotate(pool, offset).slice(0, Math.min(3, pool.length));
}

function getCourseTools(entry: CourseCatalogEntry): AiTechnology[] {
  const offset = hashString(`${entry.slug}-tools`);
  return rotate(AI_TECHNOLOGIES, offset).slice(0, 5);
}

function getCourseReviews(entry: CourseCatalogEntry): CourseReview[] {
  const offset = hashString(`${entry.slug}-reviews`);
  return rotate(REVIEW_POOL, offset).slice(0, 3);
}

function getCourseInstructor(entry: CourseCatalogEntry): CourseInstructor {
  const matched = entry.instructor ? MENTORS.find((mentor) => mentor.name === entry.instructor) : undefined;
  const mentor = matched ?? MENTORS[hashString(`${entry.slug}-instructor`) % MENTORS.length];

  return {
    name: mentor.name,
    role: mentor.role,
    image: mentor.image,
    experience: mentor.experience,
    bio: `${mentor.role} with ${mentor.experience.replace(' experience', '')} of experience, teaching real-world ${entry.category.toLowerCase()} workflows through hands-on, mentor-reviewed projects.`,
    socials: mentor.socials,
  };
}

export function generateCourseContent(entry: CourseCatalogEntry): GeneratedCourseContent {
  const shared = {
    faq: FAQ_TEMPLATE,
    projects: getCourseProjects(entry),
    tools: getCourseTools(entry),
    reviews: getCourseReviews(entry),
    instructor: getCourseInstructor(entry),
  };

  if (entry.description) {
    return {
      tagline: `Part of the ${entry.category} track at Metawaves AI.`,
      description: entry.description,
      whatYouWillLearn: rotate(LEARNING_POOLS.default, hashString(entry.slug)).slice(0, 6),
      curriculum: buildCurriculum(entry, 'default'),
      level: entry.level ?? 'All Levels',
      duration: entry.duration ?? '6-8 weeks',
      format: 'Self-paced',
      ...shared,
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
    ...tier,
    ...shared,
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
