import {
  Bot,
  BarChart3,
  Briefcase,
  Eye,
  Handshake,
  Heart,
  MessageCircle,
  MessageSquareText,
  Palette,
  Rocket,
  Search,
  Sparkles,
  Timer,
  Trophy,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { MENTORS } from '../constants';

export type WhyJoinReason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const WHY_JOIN_REASONS: WhyJoinReason[] = [
  {
    title: 'Ship Faster With Accountability',
    description: 'A cohort watching your progress is the difference between a course you finish and one you quietly abandon.',
    icon: Users,
  },
  {
    title: 'Get Unstuck in Minutes',
    description: "Post a blocker in the community and get a real answer from someone who has hit the same wall — not a support ticket queue.",
    icon: MessageCircle,
  },
  {
    title: 'Weekly Mentor Office Hours',
    description: 'Working AI practitioners show up every week to review your code, your prompts, and your portfolio — live.',
    icon: Handshake,
  },
  {
    title: 'A Network That Outlasts the Course',
    description: 'Alumni access never expires. The people you build alongside today are the referrals and collaborators of tomorrow.',
    icon: Rocket,
  },
  {
    title: 'Real Feedback on Real Work',
    description: 'Share what you shipped and get specific, practitioner-level critique instead of generic encouragement.',
    icon: Eye,
  },
  {
    title: 'First Look at Opportunities',
    description: 'Hiring partners and freelance leads get shared with the community before they go anywhere else.',
    icon: Briefcase,
  },
];

export type LearningCircle = {
  id: string;
  name: string;
  description: string;
  members: string;
  cadence: string;
  icon: LucideIcon;
  gradient: string;
};

export const LEARNING_CIRCLES: LearningCircle[] = [
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering Circle',
    description: 'Trade prompt patterns, debug inconsistent outputs, and pressure-test each other’s production prompts.',
    members: '420+ members',
    cadence: 'Wednesdays · 6:00 PM',
    icon: MessageSquareText,
    gradient: 'from-indigo-500 to-blue-400',
  },
  {
    id: 'ai-agents',
    name: 'AI Agent Builders',
    description: 'A working group for anyone shipping autonomous agents — tool-calling, memory, and failure recovery included.',
    members: '650+ members',
    cadence: 'Thursdays · 7:00 PM',
    icon: Bot,
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    id: 'data-ml',
    name: 'Data & ML Study Group',
    description: 'Work through model evaluation, dataset cleanup, and applied ML problems together, week over week.',
    members: '310+ members',
    cadence: 'Mondays · 6:00 PM',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'career-switchers',
    name: 'Career Switchers Circle',
    description: 'For anyone moving into an AI-native role — resume swaps, mock interviews, and job-search accountability.',
    members: '900+ members',
    cadence: 'Tuesdays · 5:00 PM',
    icon: Briefcase,
    gradient: 'from-rose-500 to-orange-400',
  },
  {
    id: 'design-product',
    name: 'AI Design & Product Circle',
    description: 'Designers and PMs building AI-native product experiences share critiques and interface patterns.',
    members: '280+ members',
    cadence: 'Fridays · 4:00 PM',
    icon: Palette,
    gradient: 'from-pink-500 to-rose-400',
  },
  {
    id: 'automation',
    name: 'Automation Builders',
    description: 'Workflow tinkerers comparing notes on n8n, Zapier, and API glue code that actually survives production.',
    members: '340+ members',
    cadence: 'Saturdays · 11:00 AM',
    icon: Workflow,
    gradient: 'from-amber-500 to-orange-400',
  },
];

export type CommunityChallenge = {
  id: string;
  title: string;
  description: string;
  format: string;
  reward: string;
  icon: LucideIcon;
};

export const COMMUNITY_CHALLENGES: CommunityChallenge[] = [
  {
    id: '48-hour-agent-build',
    title: 'The 48-Hour Agent Build',
    description: 'Design, build, and ship a working AI agent over a single weekend, then demo it live to the community.',
    format: 'Monthly · Solo or pairs',
    reward: 'Featured in the newsletter + a mentor code review',
    icon: Timer,
  },
  {
    id: 'prompt-golf',
    title: 'Prompt Golf',
    description: 'Solve the week’s task using the fewest tokens and the shortest possible prompt without losing accuracy.',
    format: 'Weekly · Leaderboard',
    reward: 'Top 3 pinned in #general for the week',
    icon: MessageSquareText,
  },
  {
    id: 'dataset-detective',
    title: 'Dataset Detective',
    description: 'Find and fix the planted bug in a deliberately messy dataset before the clock runs out.',
    format: 'Bi-weekly · Timed',
    reward: 'Bragging rights + a spot in the winners circle',
    icon: Search,
  },
  {
    id: 'portfolio-sprint',
    title: 'Portfolio Sprint',
    description: 'Ship one new, polished portfolio project in seven days flat — no exceptions, no perfectionism.',
    format: 'Quarterly · Community-wide',
    reward: 'Portfolio review from a hiring-partner mentor',
    icon: Rocket,
  },
];

export type OfficeHourSlot = {
  mentorName: string;
  day: string;
  time: string;
  focus: string;
};

export const OFFICE_HOURS: OfficeHourSlot[] = [
  { mentorName: 'Dr. Sarah Chen', day: 'Tuesdays', time: '6:00 PM ET', focus: 'AI/ML systems & model evaluation' },
  { mentorName: 'Marcus Thorne', day: 'Wednesdays', time: '5:00 PM ET', focus: 'Product design & portfolio reviews' },
  { mentorName: 'Elena Rodriguez', day: 'Thursdays', time: '4:00 PM ET', focus: 'Motion, video & creative workflows' },
  { mentorName: 'James Wilson', day: 'Fridays', time: '3:00 PM ET', focus: 'Full-stack builds & code review' },
];

export function getOfficeHourForMentor(mentorName: string): OfficeHourSlot | undefined {
  return OFFICE_HOURS.find((slot) => slot.mentorName === mentorName);
}

export function getMentorsWithOfficeHours() {
  return MENTORS.map((mentor) => ({ mentor, slot: getOfficeHourForMentor(mentor.name) }));
}

export type CommunityGuideline = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const COMMUNITY_GUIDELINES: CommunityGuideline[] = [
  {
    title: 'Be generous with feedback',
    description: "Give the kind of critique you'd want to receive — specific, kind, and actually useful.",
    icon: Heart,
  },
  {
    title: 'Ship messy, iterate in public',
    description: "Momentum is the bar, not perfection. Half-finished and posted beats polished and never shared.",
    icon: Rocket,
  },
  {
    title: 'No gatekeeping, ever',
    description: 'Every skill level is welcome here, and there is no such thing as a stupid question.',
    icon: Users,
  },
  {
    title: 'Credit your collaborators',
    description: 'If someone helped you debug it, design it, or think it through, say so when you share it.',
    icon: Handshake,
  },
  {
    title: 'Keep it kind',
    description: "Disagree with ideas as hard as you want. Never attack the person behind them.",
    icon: Sparkles,
  },
  {
    title: 'Share your wins loudly',
    description: 'Shipped something, however small? Post it in #showcase. Someone needs to see it went right.',
    icon: Trophy,
  },
];
