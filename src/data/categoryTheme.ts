import {
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Gift,
  Lock,
  Megaphone,
  MessageSquareText,
  PenTool,
  Sparkles,
  Star,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type CategoryTheme = {
  icon: LucideIcon;
  text: string;
  iconWrap: string;
  activeChip: string;
  topBorder: string;
  heroGradient: string;
};

const THEMES: Record<string, CategoryTheme> = {
  'Generative AI': {
    icon: Sparkles,
    text: 'text-violet-600',
    iconWrap: 'border-violet-100 bg-violet-50 text-violet-600',
    activeChip: 'border-violet-500 bg-violet-50 text-violet-700',
    topBorder: 'border-t-violet-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Prompt Engineering': {
    icon: MessageSquareText,
    text: 'text-indigo-600',
    iconWrap: 'border-indigo-100 bg-indigo-50 text-indigo-600',
    activeChip: 'border-indigo-500 bg-indigo-50 text-indigo-700',
    topBorder: 'border-t-indigo-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  Automation: {
    icon: Workflow,
    text: 'text-orange-600',
    iconWrap: 'border-orange-100 bg-orange-50 text-orange-600',
    activeChip: 'border-orange-500 bg-orange-50 text-orange-700',
    topBorder: 'border-t-orange-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Machine Learning': {
    icon: BrainCircuit,
    text: 'text-emerald-600',
    iconWrap: 'border-emerald-100 bg-emerald-50 text-emerald-600',
    activeChip: 'border-emerald-500 bg-emerald-50 text-emerald-700',
    topBorder: 'border-t-emerald-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Data Science': {
    icon: BarChart3,
    text: 'text-cyan-600',
    iconWrap: 'border-cyan-100 bg-cyan-50 text-cyan-600',
    activeChip: 'border-cyan-500 bg-cyan-50 text-cyan-700',
    topBorder: 'border-t-cyan-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Career Programs': {
    icon: Briefcase,
    text: 'text-rose-600',
    iconWrap: 'border-rose-100 bg-rose-50 text-rose-600',
    activeChip: 'border-rose-500 bg-rose-50 text-rose-700',
    topBorder: 'border-t-rose-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Professional Certifications': {
    icon: Award,
    text: 'text-amber-600',
    iconWrap: 'border-amber-100 bg-amber-50 text-amber-600',
    activeChip: 'border-amber-500 bg-amber-50 text-amber-700',
    topBorder: 'border-t-amber-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Flagship Programs': {
    icon: Star,
    text: 'text-accent-blue',
    iconWrap: 'border-accent-blue/15 bg-accent-blue/10 text-accent-blue',
    activeChip: 'border-accent-blue bg-accent-blue/10 text-accent-blue',
    topBorder: 'border-t-accent-blue',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'AI Development': {
    icon: Terminal,
    text: 'text-teal-600',
    iconWrap: 'border-teal-100 bg-teal-50 text-teal-600',
    activeChip: 'border-teal-500 bg-teal-50 text-teal-700',
    topBorder: 'border-t-teal-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Web Development': {
    icon: Code2,
    text: 'text-sky-600',
    iconWrap: 'border-sky-100 bg-sky-50 text-sky-600',
    activeChip: 'border-sky-500 bg-sky-50 text-sky-700',
    topBorder: 'border-t-sky-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(2,132,199,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'UI/UX Design': {
    icon: PenTool,
    text: 'text-pink-600',
    iconWrap: 'border-pink-100 bg-pink-50 text-pink-600',
    activeChip: 'border-pink-500 bg-pink-50 text-pink-700',
    topBorder: 'border-t-pink-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(219,39,119,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Digital Marketing': {
    icon: Megaphone,
    text: 'text-fuchsia-600',
    iconWrap: 'border-fuchsia-100 bg-fuchsia-50 text-fuchsia-600',
    activeChip: 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700',
    topBorder: 'border-t-fuchsia-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(192,38,211,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Cloud Computing': {
    icon: Cloud,
    text: 'text-blue-600',
    iconWrap: 'border-blue-100 bg-blue-50 text-blue-600',
    activeChip: 'border-blue-500 bg-blue-50 text-blue-700',
    topBorder: 'border-t-blue-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Cyber Security': {
    icon: Lock,
    text: 'text-red-600',
    iconWrap: 'border-red-100 bg-red-50 text-red-600',
    activeChip: 'border-red-500 bg-red-50 text-red-700',
    topBorder: 'border-t-red-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Business & Leadership': {
    icon: Building2,
    text: 'text-slate-600',
    iconWrap: 'border-slate-200 bg-slate-50 text-slate-600',
    activeChip: 'border-slate-500 bg-slate-50 text-slate-700',
    topBorder: 'border-t-slate-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(71,85,105,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
  'Free Learning': {
    icon: Gift,
    text: 'text-lime-600',
    iconWrap: 'border-lime-100 bg-lime-50 text-lime-600',
    activeChip: 'border-lime-500 bg-lime-50 text-lime-700',
    topBorder: 'border-t-lime-500',
    heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(101,163,13,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_28%)]',
  },
};

const DEFAULT_THEME: CategoryTheme = {
  icon: BookOpen,
  text: 'text-navy',
  iconWrap: 'border-gray-200 bg-gray-100 text-navy',
  activeChip: 'border-navy bg-gray-100 text-navy',
  topBorder: 'border-t-navy',
  heroGradient: 'bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.1),transparent_28%)]',
};

export function getCategoryTheme(category: string): CategoryTheme {
  return THEMES[category] ?? DEFAULT_THEME;
}
