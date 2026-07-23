import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CalendarDays,
  Camera,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Code2,
  Compass,
  Cpu,
  CreditCard,
  FileText,
  Film,
  Fingerprint,
  Gem,
  Globe2,
  GraduationCap,
  Hammer,
  Handshake,
  HelpCircle,
  Image as ImageIcon,
  Infinity as InfinityIcon,
  LayoutDashboard,
  LayoutTemplate,
  LifeBuoy,
  Lightbulb,
  Link2,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Mic,
  MousePointer2,
  Newspaper,
  PenTool,
  Phone,
  PlayCircle,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  User,
  Users,
  Video,
  Wand2,
  Waypoints,
  Workflow,
  Zap,
} from 'lucide-react';

export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  duration: string;
  students: string;
  tag: string;
  instructor: string;
  level: string;
  rating: number;
  price: string;
};

export type Mentor = {
  name: string;
  role: string;
  image: string;
  experience: string;
  socials: { twitter: string; linkedin: string; instagram: string };
};

export type Faq = {
  question: string;
  answer: string;
};

export type NavPanelType = 'resources';

export type NavItem =
  | { id: string; label: string; mode: 'link'; href: string; icon?: LucideIcon }
  | { id: string; label: string; mode: 'panel'; panel: NavPanelType; icon?: LucideIcon };

export const NAV_ITEMS: NavItem[] = [
  { id: 'courses', label: 'Courses', mode: 'link', href: '/courses', icon: BookOpen },
  { id: 'learning-paths', label: 'Learning Paths', mode: 'link', href: '#why-choose-us', icon: Waypoints },
  { id: 'projects', label: 'Projects', mode: 'link', href: '#gallery', icon: LayoutTemplate },
  { id: 'community', label: 'Community', mode: 'link', href: '/community', icon: Users },
  { id: 'resources', label: 'Resources', mode: 'panel', panel: 'resources', icon: Compass },
  { id: 'pricing', label: 'Pricing', mode: 'link', href: '#courses', icon: BarChart3 },
];

export const FEATURES = [
  {
    title: 'AI-Native Curriculum',
    description: 'Programs designed around real product workflows, agents, automation, and deployment pipelines.',
    icon: Bot,
  },
  {
    title: 'Mentor Signal Layer',
    description: 'Weekly critiques, office hours, and portfolio reviews from working operators and builders.',
    icon: Users,
  },
  {
    title: 'Immersive Project Labs',
    description: 'Students ship polished capstones with live datasets, UI systems, and production-grade tooling.',
    icon: LayoutDashboard,
  },
  {
    title: 'Career Launch Support',
    description: 'Interview prep, proof-of-work storytelling, and role matching that focuses on measurable outcomes.',
    icon: Briefcase,
  },
];

export const COURSES: Course[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Master deep learning, LLM workflows, and predictive systems with enterprise-ready projects.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    icon: Cpu,
    duration: '24 weeks',
    students: '1.2k+',
    tag: 'Flagship',
    instructor: 'Dr. Sarah Chen',
    level: 'Advanced',
    rating: 4.9,
    price: '1,499',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX for Intelligent Products',
    description: 'Design premium interfaces for AI products, dashboards, and immersive digital experiences.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200',
    icon: Sparkles,
    duration: '16 weeks',
    students: '800+',
    tag: 'Design',
    instructor: 'Marcus Thorne',
    level: 'Intermediate',
    rating: 4.8,
    price: '999',
  },
  {
    id: 'video-editing',
    title: 'AI Video & Motion',
    description: 'Create cinematic edits, branded reels, and generative motion systems for modern media teams.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
    icon: Camera,
    duration: '12 weeks',
    students: '1.5k+',
    tag: 'Creator',
    instructor: 'Elena Rodriguez',
    level: 'Beginner',
    rating: 4.7,
    price: '799',
  },
  {
    id: 'graphic-design',
    title: 'Visual Design Systems',
    description: 'Build scalable brand systems, 3D-forward campaigns, and conversion-led creative assets.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    icon: Lightbulb,
    duration: '14 weeks',
    students: '2.1k+',
    tag: 'Brand',
    instructor: 'Marcus Thorne',
    level: 'Intermediate',
    rating: 4.8,
    price: '899',
  },
  {
    id: 'web-dev',
    title: 'Modern Web Engineering',
    description: 'Ship fast React products with animation, APIs, and production-focused architecture decisions.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    icon: Code2,
    duration: '24 weeks',
    students: '3k+',
    tag: 'Build',
    instructor: 'James Wilson',
    level: 'Advanced',
    rating: 4.9,
    price: '1,299',
  },
  {
    id: 'digital-marketing',
    title: 'Growth & Analytics',
    description: 'Blend performance marketing, funnel intelligence, and AI-driven experimentation into one playbook.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    icon: ChartNoAxesCombined,
    duration: '12 weeks',
    students: '1.8k+',
    tag: 'Growth',
    instructor: 'Dr. Sarah Chen',
    level: 'Intermediate',
    rating: 4.6,
    price: '849',
  },
];

export const MENTORS: Mentor[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
    experience: '12+ yrs experience',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Marcus Thorne',
    role: 'Experience Design Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    experience: '9+ yrs experience',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Elena Rodriguez',
    role: 'Motion Systems Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
    experience: '7+ yrs experience',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'James Wilson',
    role: 'Full Stack AI Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    experience: '10+ yrs experience',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
  },
];

export const STATS = [
  { label: 'Learners placed', value: '500+', detail: 'into modern product and AI roles', icon: GraduationCap },
  { label: 'Live programs', value: '100+', detail: 'across creator, design, growth, and engineering tracks', icon: BookOpen },
  { label: 'Portfolio projects', value: '750+', detail: 'shipped with feedback loops and reviews', icon: Waypoints },
  { label: 'Industry mentors', value: '30+', detail: 'supporting every cohort and studio sprint', icon: Globe2 },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Agency-Level Output',
    description: 'Students learn to present work with the polish clients, recruiters, and founders expect.',
    icon: Sparkles,
  },
  {
    title: 'Systems, Not Tutorials',
    description: 'We teach decision-making frameworks so you can build confidently beyond step-by-step videos.',
    icon: Fingerprint,
  },
  {
    title: 'Career Momentum',
    description: 'Every sprint is mapped to proof-of-work assets that increase hiring confidence.',
    icon: ArrowUpRight,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Anika Sharma',
    role: 'AI Engineer at Google',
    comment: 'Metawaves AI transformed my career. The hands-on AI projects were exactly what I needed to land my dream job.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=anika',
  },
  {
    name: 'David Miller',
    role: 'Junior Designer',
    comment: 'The UI/UX course is incredibly detailed. The mentors are always there to help you refine your portfolio.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
  {
    name: 'Kevin Park',
    role: 'Content Creator',
    comment: 'I learned everything about video editing here. Now I manage a successful channel with high-retention branded content.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=kevin',
  },
];

export const BLOG_POSTS = [
  {
    title: 'The Future of AI in Education',
    excerpt: 'How intelligence layers are personalizing delivery, speed, and feedback for learners across the globe.',
    date: 'October 12, 2024',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Designing for the Metaverse',
    excerpt: 'Principles, tools, and visual systems that make immersive products feel premium instead of gimmicky.',
    date: 'October 15, 2024',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Why Soft Skills Matter in Tech',
    excerpt: 'Communication, taste, and leadership are still the edge in high-performance product teams.',
    date: 'October 20, 2024',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
  },
];

export const EVENTS = [
  {
    title: 'AI Future Summit 2024',
    date: 'November 15',
    time: '10:00 AM',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f2?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'UX Design Workshop',
    date: 'November 20',
    time: '02:00 PM',
    location: 'Virtual Studio',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Freelancing for Creatives',
    date: 'December 05',
    time: '05:00 PM',
    location: 'Zoom',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200',
  },
];

export const GALLERY_ITEMS = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
];

export const CONTACT_CHANNELS = [
  {
    title: 'Email our team',
    value: 'admissions@metawaves.ai',
    description: 'For admissions, partnerships, and premium cohort queries.',
    icon: Mail,
  },
  {
    title: 'Talk to admissions',
    value: '+1 (555) 000-1234',
    description: 'Weekday consult calls with a learning advisor.',
    icon: Phone,
  },
  {
    title: 'Visit the studio',
    value: '123 AI Boulevard, Silicon Valley, CA 94043',
    description: 'Hybrid workshops, labs, and founder meetups.',
    icon: MapPin,
  },
];

export const ABOUT_PILLARS = [
  {
    title: 'Personalized learning pathways',
    description: 'Adaptive skill tracks help beginners and career-switchers move with clarity.',
    icon: CheckCircle2,
  },
  {
    title: 'Live feedback architecture',
    description: 'Every sprint includes critique loops, mentor support, and portfolio iteration.',
    icon: PlayCircle,
  },
  {
    title: 'Outcome-first positioning',
    description: 'Students learn how to package, present, and pitch their work professionally.',
    icon: BarChart3,
  },
];

export const VIDEO_HIGHLIGHTS = [
  'Live AI build-alongs',
  'Recorded critiques and playbacks',
  'Studio-level motion breakdowns',
  'Founder and hiring manager panels',
];

export const EVENT_META_ICONS = {
  time: Clock3,
  date: CalendarDays,
  location: MapPin,
};

export const FAQS: Faq[] = [
  {
    question: 'Who are these programs designed for?',
    answer:
      'Students, working professionals, and career-switchers who want a structured, mentor-led path into AI-native roles. No prior AI experience is required for our foundational tracks.',
  },
  {
    question: 'How much time do I need each week?',
    answer:
      'Most cohorts expect 8-10 hours a week across live sessions, project labs, and async coursework. Every track is designed to work alongside a full-time job or studies.',
  },
  {
    question: 'Will I work with a real mentor?',
    answer:
      'Yes. Every learner is paired with an industry mentor for weekly critiques, office hours, and portfolio reviews throughout the cohort.',
  },
  {
    question: 'What do I get at the end of a program?',
    answer:
      'A shipped capstone project, a reviewed portfolio, and interview and role-matching support through our career launch track.',
  },
  {
    question: 'What is the refund and payment policy?',
    answer:
      'Flexible monthly plans are available on every track, with a full refund window in the first two weeks if a cohort is not the right fit.',
  },
  {
    question: 'Do I need coding experience to start?',
    answer:
      'It depends on the track. Design, growth, and video programs are beginner-friendly; engineering and AI/ML tracks assume basic programming familiarity.',
  },
];

export type Announcement = {
  text: string;
  ctaLabel: string;
  href: string;
};

export const ANNOUNCEMENTS: Announcement[] = [
  { text: '🚀 AI Agent Mastery Bootcamp is now live', ctaLabel: 'Enroll Now', href: '#contact' },
  { text: '⚡ Save 40% this week', ctaLabel: 'Claim Offer', href: '#contact' },
  { text: '🎓 Join 25,000+ learners mastering AI', ctaLabel: 'Get Started', href: '#courses' },
  { text: '🔥 New ChatGPT & Claude courses released', ctaLabel: 'Explore', href: '#courses' },
];

export const TRENDING_SEARCHES: string[] = [
  'Prompt Engineering',
  'Generative AI',
  'AI Agents',
  'UI/UX Design',
  'Growth Marketing',
  'Web Engineering',
];

export type LearningPath = {
  title: string;
  description: string;
  courseIds: string[];
};

export const LEARNING_PATHS: LearningPath[] = [
  {
    title: 'AI Product Builder',
    description: 'Go from model fundamentals to a shipped product.',
    courseIds: ['ai-ml', 'ui-ux', 'web-dev'],
  },
  {
    title: 'Creative AI Track',
    description: 'Design and motion skills for AI-native brands.',
    courseIds: ['ui-ux', 'video-editing', 'graphic-design'],
  },
  {
    title: 'Growth & Automation',
    description: 'Marketing and engineering skills for AI-led growth.',
    courseIds: ['digital-marketing', 'web-dev'],
  },
];

export type NavResourceItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavResourceSection = {
  heading: string;
  description: string;
  icon: LucideIcon;
  items: NavResourceItem[];
};

export const NAV_RESOURCES_MEGA: NavResourceSection[] = [
  {
    heading: 'Learn',
    description: 'Guides and hands-on tutorials to sharpen your skills.',
    icon: BookOpen,
    items: [
      { label: 'Blog', href: '/insights', icon: Newspaper },
      { label: 'AI Guides', href: '#contact', icon: Lightbulb },
      { label: 'Tutorials', href: '#contact', icon: PlayCircle },
      { label: 'Roadmaps', href: '#why-choose-us', icon: Waypoints },
    ],
  },
  {
    heading: 'Discover',
    description: 'Tools, news and live sessions from the AI world.',
    icon: Compass,
    items: [
      { label: 'Free AI Tools', href: '#contact', icon: Sparkles },
      { label: 'AI News', href: '/insights', icon: Megaphone },
      { label: 'Events', href: '#events', icon: CalendarDays },
      { label: 'Webinars', href: '#events', icon: Video },
    ],
  },
  {
    heading: 'Career',
    description: 'Turn what you learn into an AI-native career.',
    icon: Briefcase,
    items: [
      { label: 'Certifications', href: '#contact', icon: Award },
      { label: 'Career Hub', href: '#contact', icon: Briefcase },
      { label: 'Interview Prep', href: '#contact', icon: ClipboardList },
      { label: 'Resume Resources', href: '#contact', icon: FileText },
    ],
  },
  {
    heading: 'Community',
    description: 'Connect with builders, share wins, climb the board.',
    icon: Users,
    items: [
      { label: 'Discord', href: '#contact', icon: MessageCircle },
      { label: 'Student Stories', href: '#testimonials', icon: Star },
      { label: 'Challenges', href: '#contact', icon: Trophy },
      { label: 'Leaderboard', href: '#contact', icon: BarChart3 },
    ],
  },
];

export const HERO_TRUST_INDICATORS: string[] = [
  'Industry Mentors',
  'Live Cohorts',
  'Project-Based Learning',
  'Career Support',
];

export type FooterLinkItem = {
  label: string;
  href: string;
};

export const FOOTER_EXPLORE_TOPICS: FooterLinkItem[] = [
  'Artificial Intelligence',
  'Machine Learning',
  'Generative AI',
  'Prompt Engineering',
  'AI Agents',
  'Automation',
  'Cloud Computing',
  'Cyber Security',
  'Data Science',
  'Python',
  'Full Stack Development', 
].map((label) => ({ label, href: '#courses' }));

export const FOOTER_EXPLORE_VIEW_ALL: FooterLinkItem = { label: 'View All Courses', href: '#courses' };

export const FOOTER_CAREER_TRACKS: FooterLinkItem[] = [
  'AI Engineer',
  'Prompt Engineer',
  'Automation Engineer',
  'Machine Learning Engineer',
  'Data Analyst',
  'UI UX Designer',
  'Digital Marketing',
  'Cloud Engineer',
  'Cyber Security',
  'Business Analytics',
].map((label) => ({ label, href: '#contact' }));

export const FOOTER_CAREER_EXTRA_LINKS: FooterLinkItem[] = [ 
  { label: 'Career Accelerator', href: '#contact' },
  { label: 'View All Career Paths', href: '#contact' },
];

export const FOOTER_RESOURCES_LINKS: FooterLinkItem[] = [
  { label: 'Blog', href: '/insights' },
  { label: 'Learning Guides', href: '#contact' },
  { label: 'Documentation', href: '#contact' },
  { label: 'Case Studies', href: '#contact' },
  { label: 'Templates', href: '#contact' },
  { label: 'Cheat Sheets', href: '#contact' },
  { label: 'Community', href: '/community' },
  { label: 'Events', href: '#events' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Help Center', href: '#contact' },
  { label: 'Contact Support', href: '#contact' },
];

export const FOOTER_COMPANY_LINKS: FooterLinkItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Our Mission', href: '/about' },
  { label: 'Mentors', href: '#teachers' },
  { label: 'Become Instructor', href: '#contact' },
  { label: 'Enterprise', href: '#contact' },
  { label: 'Corporate Training', href: '#contact' },
  { label: 'Careers', href: '#contact' },
  { label: 'Press', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Accessibility', href: '#' },
];

export const FOOTER_BOTTOM_LINKS: string[] = ['Cookie Settings', 'Privacy', 'Terms', 'Accessibility'];

export type TrustStat = {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
};

export const TRUST_STATS: TrustStat[] = [
  { label: 'Active Learners', value: 25000, suffix: '+', icon: Users },
  { label: 'AI Courses', value: 120, suffix: '+', icon: BookOpen },
  { label: 'Projects Built', value: 8400, suffix: '+', icon: Rocket },
  { label: 'Mentors', value: 60, suffix: '+', icon: GraduationCap },
  { label: 'Student Satisfaction', value: 98, suffix: '%', icon: Star },
];

export type AiTechnology = {
  name: string;
  icon: LucideIcon;
};

export type LearningDomain = {
  id: string;
  label: string;
  icon: LucideIcon;
  courses: number;
  projects: number;
  level: string;
  technologies: string[];
};

export const LEARNING_DOMAINS: LearningDomain[] = [
  {
    id: 'prompt-engineering',
    label: 'Prompt Engineering',
    icon: Wand2,
    courses: 14,
    projects: 32,
    level: 'Beginner Friendly',
    technologies: ['ChatGPT', 'Claude', 'Gemini'],
  },
  {
    id: 'ai-agents',
    label: 'AI Agents',
    icon: Bot,
    courses: 18,
    projects: 40,
    level: 'Intermediate',
    technologies: ['LangChain', 'AutoGPT', 'OpenAI API'],
  },
  {
    id: 'ai-development',
    label: 'AI Development',
    icon: Code2,
    courses: 22,
    projects: 48,
    level: 'Advanced',
    technologies: ['Python', 'TensorFlow', 'OpenAI API'],
  },
  {
    id: 'ai-automation',
    label: 'AI Automation',
    icon: Workflow,
    courses: 12,
    projects: 27,
    level: 'Intermediate',
    technologies: ['n8n', 'Zapier', 'Make'],
  },
  {
    id: 'ai-design',
    label: 'AI Design',
    icon: PenTool,
    courses: 10,
    projects: 25,
    level: 'Beginner Friendly',
    technologies: ['Midjourney', 'Figma', 'Runway'],
  },
  {
    id: 'data-science',
    label: 'Data Science',
    icon: BarChart3,
    courses: 16,
    projects: 34,
    level: 'Advanced',
    technologies: ['Python', 'SQL', 'TensorFlow'],
  },
  {
    id: 'ai-marketing',
    label: 'AI Marketing',
    icon: Megaphone,
    courses: 9,
    projects: 20,
    level: 'Beginner Friendly',
    technologies: ['ChatGPT', 'HubSpot', 'Meta Ads'],
  },
  {
    id: 'ai-business',
    label: 'AI Business',
    icon: Briefcase,
    courses: 11,
    projects: 18,
    level: 'Intermediate',
    technologies: ['Notion AI', 'ChatGPT', 'Perplexity'],
  },
];

export const AI_TECHNOLOGIES: AiTechnology[] = [
  { name: 'ChatGPT', icon: Bot },
  { name: 'Claude', icon: Sparkles },
  { name: 'Gemini', icon: Gem },
  { name: 'Cursor', icon: MousePointer2 },
  { name: 'n8n', icon: Workflow },
  { name: 'LangChain', icon: Link2 },
  { name: 'Midjourney', icon: ImageIcon },
  { name: 'Runway', icon: Film },
  { name: 'ElevenLabs', icon: Mic },
  { name: 'OpenAI API', icon: Cpu },
  { name: 'Perplexity', icon: Compass },
];

export const FOOTER_TECH_STACK: string[] = ['Google', 'Microsoft', 'OpenAI', 'AWS', 'NVIDIA', 'Meta', 'Adobe'];

export type ProjectDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type ProjectSize = 'large' | 'wide' | 'tall' | 'small';

export type Project = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  difficulty: ProjectDifficulty;
  duration: string;
  hasLiveDemo: boolean;
  hasCertificate: boolean;
  size: ProjectSize;
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description:
      'A context-aware support chatbot with long-term memory, tool calling, and live handoff to a human agent.',
    icon: MessageCircle,
    technologies: ['OpenAI API', 'LangChain', 'Vector DB'],
    difficulty: 'Beginner',
    duration: '4-6 hrs',
    hasLiveDemo: true,
    hasCertificate: true,
    size: 'large',
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    description: 'Parse resumes, extract skills, and score candidates against a job description in seconds.',
    icon: FileText,
    technologies: ['Python', 'OpenAI API'],
    difficulty: 'Beginner',
    duration: '3-5 hrs',
    hasLiveDemo: true,
    hasCertificate: true,
    size: 'small',
  },
  {
    id: 'ai-voice-agent',
    title: 'AI Voice Agent',
    description: 'A real-time voice assistant that listens, thinks, and speaks back with natural, low-latency conversation.',
    icon: Mic,
    technologies: ['ElevenLabs', 'Whisper', 'WebRTC'],
    difficulty: 'Advanced',
    duration: '8-10 hrs',
    hasLiveDemo: true,
    hasCertificate: true,
    size: 'wide',
  },
  {
    id: 'ai-research-assistant',
    title: 'AI Research Assistant',
    description: 'Summarize papers, cross-reference sources, and answer questions with citations you can trust.',
    icon: Search,
    technologies: ['Claude', 'LangChain', 'RAG'],
    difficulty: 'Intermediate',
    duration: '6-8 hrs',
    hasLiveDemo: false,
    hasCertificate: true,
    size: 'small',
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    description: 'Chain agents and tools together to automate multi-step business workflows end to end.',
    icon: Workflow,
    technologies: ['n8n', 'Zapier', 'OpenAI API'],
    difficulty: 'Intermediate',
    duration: '5-7 hrs',
    hasLiveDemo: true,
    hasCertificate: true,
    size: 'tall',
  },
  {
    id: 'ai-coding-assistant',
    title: 'AI Coding Assistant',
    description: 'A code-completion and review copilot that understands your whole repo, not just one file.',
    icon: Code2,
    technologies: ['OpenAI API', 'TypeScript'],
    difficulty: 'Advanced',
    duration: '10-12 hrs',
    hasLiveDemo: false,
    hasCertificate: true,
    size: 'small',
  },
  {
    id: 'ai-meeting-summarizer',
    title: 'AI Meeting Summarizer',
    description: 'Transcribe calls in real time and turn them into clean summaries with clear action items.',
    icon: ClipboardList,
    technologies: ['Whisper', 'GPT-4'],
    difficulty: 'Beginner',
    duration: '3-4 hrs',
    hasLiveDemo: true,
    hasCertificate: true,
    size: 'small',
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Generate on-brand marketing copy and visuals at scale, from brief to publish-ready draft.',
    icon: Sparkles,
    technologies: ['GPT-4', 'Midjourney'],
    difficulty: 'Intermediate',
    duration: '4-6 hrs',
    hasLiveDemo: true,
    hasCertificate: true,
    size: 'small',
  },
];

export type LearningFeatureSize = 'large' | 'wide' | 'tall' | 'small';

export type LearningFeature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  size: LearningFeatureSize;
};

export const LEARNING_FEATURES: LearningFeature[] = [
  {
    id: 'learn-by-building',
    title: 'Learn by Building',
    description: 'Every lesson ends in a working product, not just notes — theory only sticks once you ship it.',
    icon: Hammer,
    gradient: 'from-blue-500 to-cyan-400',
    size: 'large',
  },
  {
    id: 'live-ai-cohorts',
    title: 'Live AI Cohorts',
    description: 'Scheduled live sessions with real-time feedback from mentors and peers.',
    icon: CalendarDays,
    gradient: 'from-purple-500 to-pink-400',
    size: 'small',
  },
  {
    id: 'expert-mentorship',
    title: 'Expert Mentorship',
    description: '1:1 guidance from operators who have shipped real AI products in production.',
    icon: GraduationCap,
    gradient: 'from-emerald-500 to-teal-400',
    size: 'wide',
  },
  {
    id: 'hands-on-projects',
    title: 'Hands-on Projects',
    description: 'Ship portfolio-ready builds across every domain you learn.',
    icon: LayoutTemplate,
    gradient: 'from-amber-500 to-orange-400',
    size: 'small',
  },
  {
    id: 'industry-certificates',
    title: 'Industry Certificates',
    description: 'Earn credentials recognized by hiring teams and recruiters.',
    icon: Award,
    gradient: 'from-indigo-500 to-blue-400',
    size: 'tall',
  },
  {
    id: 'community-support',
    title: 'Community Support',
    description: 'A global network of builders to learn, ship, and grow alongside.',
    icon: MessageCircle,
    gradient: 'from-rose-500 to-pink-400',
    size: 'small',
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    description: 'Resume reviews, interview prep, and placement support built in.',
    icon: Briefcase,
    gradient: 'from-sky-500 to-blue-400',
    size: 'small',
  },
  {
    id: 'lifetime-access',
    title: 'Lifetime Access',
    description: 'Come back anytime — course updates and replays, forever.',
    icon: InfinityIcon,
    gradient: 'from-violet-500 to-purple-400',
    size: 'small',
  },
];

export type FeaturedCourseDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type FeaturedCourseCategory = 'Automation' | 'AI Agents' | 'Development' | 'Business' | 'Design';
export type FeaturedCourseBadge = 'New' | 'Best Seller';

export type FeaturedCourse = {
  id: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  difficulty: FeaturedCourseDifficulty;
  category: FeaturedCourseCategory;
  duration: string;
  projects: number;
  hasCertificate: boolean;
  students: string;
  rating: number;
  badge?: FeaturedCourseBadge;
};

export const FEATURED_COURSE_FILTERS = [
  'All',
  'Beginner',
  'Advanced',
  'Automation',
  'AI Agents',
  'Development',
  'Business',
  'Design',
] as const;

export const FEATURED_COURSES: FeaturedCourse[] = [
  {
    id: 'prompt-engineering-mastery',
    title: 'Prompt Engineering Mastery',
    description: 'Master the art of prompting ChatGPT, Claude, and Gemini to build production-ready AI workflows.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    instructor: 'Dr. Sarah Chen',
    difficulty: 'Beginner',
    category: 'AI Agents',
    duration: '6 weeks',
    projects: 8,
    hasCertificate: true,
    students: '3.4k+',
    rating: 4.9,
    badge: 'Best Seller',
  },
  {
    id: 'building-ai-agents',
    title: 'Building AI Agents with LangChain',
    description: 'Design and deploy autonomous agents that plan, reason, and use tools with LangChain.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    instructor: 'James Wilson',
    difficulty: 'Intermediate',
    category: 'AI Agents',
    duration: '10 weeks',
    projects: 12,
    hasCertificate: true,
    students: '2.1k+',
    rating: 4.8,
    badge: 'Best Seller',
  },
  {
    id: 'ai-workflow-automation-n8n',
    title: 'AI Workflow Automation with n8n',
    description: 'Automate multi-step business processes end to end with n8n, Zapier, and AI APIs.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200',
    instructor: 'Marcus Thorne',
    difficulty: 'Intermediate',
    category: 'Automation',
    duration: '8 weeks',
    projects: 10,
    hasCertificate: true,
    students: '1.6k+',
    rating: 4.7,
  },
  {
    id: 'full-stack-ai-development',
    title: 'Full-Stack AI Development',
    description: 'Ship full-stack AI products from API to interface with modern engineering practices.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    instructor: 'James Wilson',
    difficulty: 'Advanced',
    category: 'Development',
    duration: '18 weeks',
    projects: 16,
    hasCertificate: true,
    students: '2.8k+',
    rating: 4.9,
    badge: 'New',
  },
  {
    id: 'ai-powered-product-design',
    title: 'AI-Powered Product Design',
    description: 'Design intelligent interfaces and AI-native product experiences that feel effortless.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200',
    instructor: 'Marcus Thorne',
    difficulty: 'Intermediate',
    category: 'Design',
    duration: '10 weeks',
    projects: 9,
    hasCertificate: true,
    students: '1.1k+',
    rating: 4.8,
  },
  {
    id: 'ai-for-business-leaders',
    title: 'AI for Business Leaders',
    description: 'Apply AI strategically to operations, growth, and decision-making without writing code.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    instructor: 'Elena Rodriguez',
    difficulty: 'Beginner',
    category: 'Business',
    duration: '5 weeks',
    projects: 6,
    hasCertificate: true,
    students: '2.4k+',
    rating: 4.6,
  },
  {
    id: 'advanced-ai-agent-systems',
    title: 'Advanced AI Agent Systems',
    description: 'Go deep on retrieval-augmented generation and multi-agent systems for real production use.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    instructor: 'Dr. Sarah Chen',
    difficulty: 'Advanced',
    category: 'AI Agents',
    duration: '12 weeks',
    projects: 14,
    hasCertificate: true,
    students: '900+',
    rating: 4.9,
    badge: 'New',
  },
  {
    id: 'applied-data-science-ai',
    title: 'Applied Data Science & AI',
    description: 'Turn raw data into predictive models and dashboards using modern AI tooling.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
    instructor: 'Dr. Sarah Chen',
    difficulty: 'Advanced',
    category: 'Development',
    duration: '16 weeks',
    projects: 15,
    hasCertificate: true,
    students: '1.9k+',
    rating: 4.8,
  },
];

export type CareerMilestone = {
  id: string;
  label: string;
  description: string;
  highlight: string;
  icon: LucideIcon;
};

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: 'explore',
    label: 'Explore',
    description: 'Discover AI domains and career paths, and find the skills in highest demand right now.',
    highlight: '8 AI domains to explore',
    icon: Compass,
  },
  {
    id: 'learn',
    label: 'Learn',
    description: 'Master core concepts through structured, mentor-led curriculum built for real retention.',
    highlight: '120+ structured courses',
    icon: BookOpen,
  },
  {
    id: 'build',
    label: 'Build',
    description: 'Ship real, working AI projects that prove what you can actually do, not just what you know.',
    highlight: '40+ real-world projects',
    icon: Hammer,
  },
  {
    id: 'validate',
    label: 'Validate',
    description: 'Earn certifications recognized by hiring teams, backed by mentor-reviewed portfolio work.',
    highlight: 'Industry-recognized certificates',
    icon: Award,
  },
  {
    id: 'launch',
    label: 'Launch',
    description: 'Build a standout portfolio and apply with confidence, backed by 1:1 career support.',
    highlight: '1:1 career & portfolio support',
    icon: Rocket,
  },
  {
    id: 'grow',
    label: 'Grow',
    description: 'Keep growing with lifetime access, a global alumni network, and continuous mentorship.',
    highlight: 'Lifetime community access',
    icon: TrendingUp,
  },
];

export type CareerStat = {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
};

export const CAREER_STATS: CareerStat[] = [
  { label: 'Career Placements', value: 2400, suffix: '+', icon: Rocket },
  { label: 'Avg. Salary Increase', value: 65, suffix: '%', icon: TrendingUp },
  { label: 'Hiring Partners', value: 150, suffix: '+', icon: Handshake },
  { label: 'Avg. Weeks to Job-Ready', value: 16, suffix: '', icon: Award },
];

export type StudentProjectDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type StudentProjectSize = 'large' | 'wide' | 'tall' | 'small';

export type StudentProject = {
  id: string;
  title: string;
  description: string;
  builtBy: string;
  icon: LucideIcon;
  gradient: string;
  technologies: string[];
  skills: string[];
  difficulty: StudentProjectDifficulty;
  duration: string;
  hasLivePreview: boolean;
  hasGithub: boolean;
  hasCertificate: boolean;
  size: StudentProjectSize;
};

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'neuraldesk',
    title: 'NeuralDesk — AI Support Copilot',
    description: 'A context-aware helpdesk copilot that resolves 70% of tickets without a human touch.',
    builtBy: 'Aditi R.',
    icon: MessageCircle,
    gradient: 'from-blue-500 to-cyan-400',
    technologies: ['OpenAI API', 'LangChain', 'Vector DB'],
    skills: ['Prompt Engineering', 'RAG Pipelines', 'API Integration'],
    difficulty: 'Intermediate',
    duration: '6 weeks',
    hasLivePreview: true,
    hasGithub: true,
    hasCertificate: true,
    size: 'large',
  },
  {
    id: 'resumeiq',
    title: 'ResumeIQ',
    description: 'Scores resumes against job descriptions and rewrites weak bullet points instantly.',
    builtBy: 'Marco T.',
    icon: FileText,
    gradient: 'from-emerald-500 to-teal-400',
    technologies: ['Python', 'OpenAI API'],
    skills: ['NLP Basics', 'Data Parsing'],
    difficulty: 'Beginner',
    duration: '3 weeks',
    hasLivePreview: true,
    hasGithub: true,
    hasCertificate: true,
    size: 'small',
  },
  {
    id: 'echovoice',
    title: 'EchoVoice',
    description: 'Real-time speech translation with natural-sounding voice cloning.',
    builtBy: 'Priya S.',
    icon: Mic,
    gradient: 'from-purple-500 to-pink-400',
    technologies: ['Whisper', 'ElevenLabs'],
    skills: ['Audio Pipelines', 'Real-Time Systems'],
    difficulty: 'Advanced',
    duration: '8 weeks',
    hasLivePreview: true,
    hasGithub: false,
    hasCertificate: true,
    size: 'wide',
  },
  {
    id: 'papermind',
    title: 'PaperMind',
    description: 'Summarizes and cross-references research papers with cited, trustworthy answers.',
    builtBy: 'Daniel K.',
    icon: Search,
    gradient: 'from-indigo-500 to-blue-400',
    technologies: ['Claude', 'RAG'],
    skills: ['Retrieval Systems', 'Citation Handling'],
    difficulty: 'Intermediate',
    duration: '5 weeks',
    hasLivePreview: false,
    hasGithub: true,
    hasCertificate: true,
    size: 'small',
  },
  {
    id: 'flowpilot',
    title: 'FlowPilot',
    description: 'A drag-and-drop dashboard that automates multi-step business workflows.',
    builtBy: 'Zoe L.',
    icon: Workflow,
    gradient: 'from-amber-500 to-orange-400',
    technologies: ['n8n', 'OpenAI API'],
    skills: ['Workflow Design', 'API Orchestration'],
    difficulty: 'Intermediate',
    duration: '6 weeks',
    hasLivePreview: true,
    hasGithub: true,
    hasCertificate: true,
    size: 'tall',
  },
  {
    id: 'codesensei',
    title: 'CodeSensei',
    description: 'An AI pair-programmer that reviews pull requests and explains its reasoning.',
    builtBy: 'Ibrahim H.',
    icon: Code2,
    gradient: 'from-slate-600 to-slate-400',
    technologies: ['OpenAI API', 'TypeScript'],
    skills: ['Code Analysis', 'Developer Tooling'],
    difficulty: 'Advanced',
    duration: '10 weeks',
    hasLivePreview: false,
    hasGithub: true,
    hasCertificate: true,
    size: 'small',
  },
  {
    id: 'meetrecap',
    title: 'MeetRecap',
    description: 'Turns messy meeting audio into clean summaries with clear action items.',
    builtBy: 'Hana W.',
    icon: ClipboardList,
    gradient: 'from-rose-500 to-red-400',
    technologies: ['Whisper', 'GPT-4'],
    skills: ['Transcription Pipelines', 'Summarization'],
    difficulty: 'Beginner',
    duration: '3 weeks',
    hasLivePreview: true,
    hasGithub: true,
    hasCertificate: true,
    size: 'small',
  },
  {
    id: 'brandforge',
    title: 'BrandForge',
    description: 'Generates on-brand marketing copy and visuals from a single product brief.',
    builtBy: 'Owen P.',
    icon: Sparkles,
    gradient: 'from-violet-500 to-purple-400',
    technologies: ['GPT-4', 'Midjourney'],
    skills: ['Creative Prompting', 'Brand Systems'],
    difficulty: 'Intermediate',
    duration: '5 weeks',
    hasLivePreview: true,
    hasGithub: false,
    hasCertificate: true,
    size: 'small',
  },
];

export type ComparisonRow = {
  id: string;
  traditionalLabel: string;
  traditionalIcon: LucideIcon;
  metawavesLabel: string;
  metawavesIcon: LucideIcon;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: 'projects',
    traditionalLabel: 'Passive Videos',
    traditionalIcon: PlayCircle,
    metawavesLabel: 'Real Projects',
    metawavesIcon: Hammer,
  },
  {
    id: 'certificates',
    traditionalLabel: 'Generic Certificates',
    traditionalIcon: FileText,
    metawavesLabel: 'Portfolio-Ready Work',
    metawavesIcon: LayoutTemplate,
  },
  {
    id: 'content',
    traditionalLabel: 'Static Content',
    traditionalIcon: Lock,
    metawavesLabel: 'Weekly AI Updates',
    metawavesIcon: RefreshCw,
  },
  {
    id: 'community',
    traditionalLabel: 'Learning Alone',
    traditionalIcon: User,
    metawavesLabel: 'Community & Mentorship',
    metawavesIcon: Users,
  },
  {
    id: 'practice',
    traditionalLabel: 'Theory',
    traditionalIcon: BookOpen,
    metawavesLabel: 'Practical Implementation',
    metawavesIcon: Code2,
  },
  {
    id: 'future',
    traditionalLabel: 'Following Trends',
    traditionalIcon: TrendingUp,
    metawavesLabel: 'Building The Future',
    metawavesIcon: Rocket,
  },
];

export type CommunityStat = {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
};

export const COMMUNITY_STATS: CommunityStat[] = [
  { label: 'Community Members', value: 28000, suffix: '+', icon: Users },
  { label: 'Countries Represented', value: 120, suffix: '+', icon: Globe2 },
  { label: 'Weekly Events', value: 40, suffix: '+', icon: CalendarDays },
  { label: 'Study Groups', value: 850, suffix: '+', icon: BookOpen },
];

export type CommunityChannel = {
  name: string;
  icon: LucideIcon;
};

export const COMMUNITY_CHANNELS: CommunityChannel[] = [
  { name: 'general', icon: MessageCircle },
  { name: 'showcase', icon: LayoutTemplate },
  { name: 'study-groups', icon: BookOpen },
  { name: 'career', icon: Briefcase },
];

export type WeeklyActivity = {
  id: string;
  day: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const WEEKLY_ACTIVITIES: WeeklyActivity[] = [
  {
    id: 'monday',
    day: 'Monday',
    title: 'Live Q&A with Mentors',
    description: 'Bring your blockers straight to working AI practitioners.',
    icon: MessageCircle,
  },
  {
    id: 'tuesday',
    day: 'Tuesday',
    title: 'Peer Code Review',
    description: 'Get real feedback on your project code from fellow builders.',
    icon: Code2,
  },
  {
    id: 'wednesday',
    day: 'Wednesday',
    title: 'Project Showcase',
    description: 'Demo what you shipped this week to the community.',
    icon: LayoutTemplate,
  },
  {
    id: 'thursday',
    day: 'Thursday',
    title: 'AI Tool Deep Dive',
    description: 'A guided walkthrough of a new AI tool or workflow.',
    icon: Sparkles,
  },
  {
    id: 'friday',
    day: 'Friday',
    title: 'Study Group Sessions',
    description: 'Small-group sprints to close out the week together.',
    icon: BookOpen,
  },
  {
    id: 'weekend',
    day: 'Weekend',
    title: 'Community Challenge',
    description: 'A weekend build challenge with community voting.',
    icon: Trophy,
  },
];

export type StudentStory = {
  id: string;
  name: string;
  outcome: string;
  quote: string;
  gradient: string;
};

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 'aditi',
    name: 'Aditi R.',
    outcome: 'Landed an AI product role in 4 months',
    quote: 'The community pushed me to ship, not just watch.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'marco',
    name: 'Marco T.',
    outcome: 'Now freelancing as an AI developer',
    quote: 'I found my first client through a study group connection.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'priya',
    name: 'Priya S.',
    outcome: 'ML Engineer at a Series B startup',
    quote: 'Weekly challenges kept me sharp between courses.',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    id: 'daniel',
    name: 'Daniel K.',
    outcome: 'Independent AI researcher',
    quote: 'Mentors here actually respond. That changed everything.',
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    id: 'zoe',
    name: 'Zoe L.',
    outcome: 'Runs her own automation consultancy',
    quote: "Built my agency's first client project with peer feedback.",
    gradient: 'from-indigo-500 to-blue-400',
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  icon: LucideIcon;
  isFeatured?: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Explore the platform and start learning the fundamentals, risk-free.',
    benefits: ['Access to intro courses', 'Community access', 'Weekly AI newsletter', 'Limited project templates'],
    ctaLabel: 'Start Free',
    icon: Sparkles,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'Everything you need to go from beginner to job-ready, with mentorship built in.',
    benefits: [
      'All courses & learning paths',
      'Real-world projects with certificates',
      '1:1 mentor sessions monthly',
      'Career support & portfolio reviews',
      'Priority community access',
    ],
    ctaLabel: 'Start Pro Plan',
    icon: Rocket,
    isFeatured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'billing',
    description: 'Upskill your team with tailored AI training and dedicated support.',
    benefits: [
      'Everything in Pro',
      'Custom learning paths for teams',
      'Dedicated success manager',
      'Team analytics & reporting',
      'SSO & procurement support',
    ],
    ctaLabel: 'Contact Sales',
    icon: Building2,
  },
];

export type TrustBadgeItem = {
  label: string;
  icon: LucideIcon;
};

export const PRICING_TRUST_BADGES: TrustBadgeItem[] = [
  { label: '30-Day Money-Back Guarantee', icon: ShieldCheck },
  { label: 'Cancel Anytime', icon: CheckCircle2 },
  { label: 'Secure Checkout', icon: Lock },
  { label: '10,000+ Students Trust Us', icon: Users },
];

export const PAYMENT_METHODS: string[] = ['Visa', 'Mastercard', 'American Express', 'PayPal', 'UPI', 'Apple Pay'];

export const PRICING_FAQS: Faq[] = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes — upgrade or downgrade anytime from your account settings. Changes apply immediately and billing is prorated.',
  },
  {
    question: 'Is there a free trial for the Pro plan?',
    answer: 'The Starter plan is free forever, so you can explore the platform risk-free before deciding to upgrade to Pro.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, PayPal, UPI, and Apple Pay, processed through a secure checkout.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, there are no lock-in contracts. Cancel anytime from your billing dashboard with no hidden fees.',
  },
  {
    question: 'Do you offer refunds?',
    answer: "If you're not satisfied within your first 30 days on a paid plan, we'll refund you in full, no questions asked.",
  },
];
