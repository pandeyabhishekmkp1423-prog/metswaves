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
  Cpu,
  FileText,
  Fingerprint,
  Globe2,
  GraduationCap,
  Handshake,
  HelpCircle,
  LayoutDashboard,
  LayoutTemplate,
  LifeBuoy,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Newspaper,
  PenTool,
  Phone,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
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

export type NavPanelType = 'explore' | 'programs' | 'career-tracks' | 'resources' | 'for-business' | 'become-instructor';

export type NavItem =
  | { id: string; label: string; mode: 'link'; href: string; icon?: LucideIcon }
  | { id: string; label: string; mode: 'panel'; panel: NavPanelType };

export const NAV_ITEMS: NavItem[] = [
  { id: 'courses', label: 'Courses', mode: 'link', href: '/courses', icon: BookOpen },
  { id: 'explore', label: 'Explore', mode: 'panel', panel: 'explore' },
  { id: 'programs', label: 'Programs', mode: 'panel', panel: 'programs' },
  { id: 'career-tracks', label: 'Career Tracks', mode: 'panel', panel: 'career-tracks' },
  { id: 'resources', label: 'Resources', mode: 'panel', panel: 'resources' },
  { id: 'for-business', label: 'For Business', mode: 'panel', panel: 'for-business' },
  { id: 'become-instructor', label: 'Become Instructor', mode: 'panel', panel: 'become-instructor' },
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

export const ANNOUNCEMENTS: string[] = [
  '🚀 AI Summer Cohort Admissions Open',
  '🎓 Learn AI From Industry Experts',
  '💼 Career Launchpad With Placement Assistance',
  '🔥 New AI Courses Released',
  '⚡ Join Thousands Of Learners',
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

export type NavListItem = {
  label: string;
  description?: string;
  icon: LucideIcon;
  href: string;
};

export const NAV_PROGRAMS: NavListItem[] = [
  { label: 'AI Foundations', description: 'Core concepts for learners starting from zero.', icon: Cpu, href: '#contact' },
  { label: 'Career Accelerator', description: 'A fast-track program for a role switch.', icon: Rocket, href: '#contact' },
  { label: 'Professional Certificates', description: 'Portfolio-ready credentials employers recognize.', icon: Award, href: '#contact' },
  { label: 'Live Cohorts', description: 'Real-time classes with weekly mentor critique.', icon: Users, href: '#contact' },
  { label: 'Bootcamps', description: 'Intensive, project-first sprints.', icon: Zap, href: '#contact' },
  { label: 'Self-Paced Courses', description: 'Learn on your own schedule, lifetime access.', icon: BookOpen, href: '#courses' },
  { label: 'Corporate Learning', description: 'Upskilling tracks built for teams.', icon: Building2, href: '#contact' },
  { label: 'Mentorship', description: '1:1 guidance from working industry mentors.', icon: Handshake, href: '#teachers' },
];

export const NAV_CAREER_TRACKS: NavListItem[] = [
  { label: 'AI Engineer', icon: Bot, href: '#contact' },
  { label: 'Prompt Engineer', icon: Sparkles, href: '#contact' },
  { label: 'Automation Engineer', icon: Workflow, href: '#contact' },
  { label: 'ML Engineer', icon: Cpu, href: '#contact' },
  { label: 'Full Stack AI Developer', icon: Code2, href: '#contact' },
  { label: 'Data Analyst', icon: ChartNoAxesCombined, href: '#contact' },
  { label: 'Product Designer', icon: PenTool, href: '#contact' },
  { label: 'Cyber Security', icon: ShieldCheck, href: '#contact' },
  { label: 'Digital Marketer', icon: Megaphone, href: '#contact' },
  { label: 'Business Analyst', icon: Briefcase, href: '#contact' },
];

export const NAV_FOR_BUSINESS: NavListItem[] = [
  { label: 'Corporate Upskilling', description: 'Structured tracks to grow team AI fluency.', icon: Building2, href: '#contact' },
  { label: 'Enterprise LMS', description: 'White-labeled learning for your organization.', icon: LayoutDashboard, href: '#contact' },
  { label: 'Custom Learning Paths', description: "Curricula mapped to your team's roadmap.", icon: Waypoints, href: '#contact' },
  { label: 'Request a Demo', description: 'See the platform with your own use case.', icon: PlayCircle, href: '#contact' },
  { label: 'Compare Plans', description: 'Find the right tier for your team size.', icon: BarChart3, href: '#contact' },
  { label: 'Talk to Sales', description: 'Get a tailored proposal from our team.', icon: Phone, href: '#contact' },
];

export type NavResourceColumn = {
  heading: string;
  items: { label: string; href: string; icon: LucideIcon }[];
};

export const NAV_RESOURCES: NavResourceColumn[] = [
  {
    heading: 'Learning',
    items: [
      { label: 'Blog', href: '#blog', icon: Newspaper },
      { label: 'Guides', href: '#contact', icon: BookOpen },
      { label: 'Documentation', href: '#contact', icon: FileText },
      { label: 'Templates', href: '#contact', icon: LayoutTemplate },
      { label: 'Cheat Sheets', href: '#contact', icon: ClipboardList },
    ],
  },
  {
    heading: 'Community',
    items: [
      { label: 'Discord', href: '#contact', icon: MessageCircle },
      { label: 'Events', href: '#events', icon: CalendarDays },
      { label: 'Hackathons', href: '#contact', icon: Trophy },
      { label: 'Success Stories', href: '#testimonials', icon: Star },
    ],
  },
  {
    heading: 'Support',
    items: [
      { label: 'FAQs', href: '#faq', icon: HelpCircle },
      { label: 'Help Center', href: '#contact', icon: LifeBuoy },
      { label: 'Contact', href: '#contact', icon: Mail },
    ],
  },
];

export const BECOME_INSTRUCTOR = {
  eyebrow: 'Become an AI Mentor',
  headline: "Teach the skills shaping tomorrow's workforce.",
  description:
    'Create premium AI courses, mentor ambitious learners, and build your personal brand with Metawaves.',
  primaryCta: 'Become an Instructor',
  secondaryCta: 'Learn More',
};

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
  { label: 'Blog', href: '#blog' },
  { label: 'Learning Guides', href: '#contact' },
  { label: 'Documentation', href: '#contact' },
  { label: 'Case Studies', href: '#contact' },
  { label: 'Templates', href: '#contact' },
  { label: 'Cheat Sheets', href: '#contact' },
  { label: 'Community', href: '#contact' },
  { label: 'Events', href: '#events' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Help Center', href: '#contact' },
  { label: 'Contact Support', href: '#contact' },
];

export const FOOTER_COMPANY_LINKS: FooterLinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Our Mission', href: '#about' },
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

export const FOOTER_TECH_STACK: string[] = ['Google', 'Microsoft', 'OpenAI', 'AWS', 'NVIDIA', 'Meta', 'Adobe'];
