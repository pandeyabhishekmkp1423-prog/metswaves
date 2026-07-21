import { Award, BarChart3, BookOpen, BrainCircuit, Briefcase, MessageSquareText, Sparkles, Star, Workflow, type LucideIcon } from 'lucide-react';

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
