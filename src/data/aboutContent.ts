import {
  Award,
  BadgeCheck,
  Compass,
  Eye,
  Globe2,
  Hammer,
  LayoutTemplate,
  Lightbulb,
  MessageCircle,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type ExistenceReason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const EXISTENCE_REASONS: ExistenceReason[] = [
  {
    title: 'AI moved faster than education could keep up',
    description:
      'By the time a textbook on prompting was printed, the tool it described had already changed twice. We needed a curriculum that moves at the speed of the field, not the speed of publishing.',
    icon: Sparkles,
  },
  {
    title: 'Certificates stopped proving anything',
    description:
      'Anyone can finish a video course, and hiring managers know it. We built a program where the proof of skill is the project itself — not a PDF nobody double-checks.',
    icon: BadgeCheck,
  },
  {
    title: "Learning alone doesn't build a career",
    description:
      "The skill gap isn't the only gap — the network gap is just as real. We built mentorship and community into the curriculum itself, not bolted on around it.",
    icon: Users,
  },
];

export type StoryMilestone = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const STORY_TIMELINE: StoryMilestone[] = [
  {
    year: '2015',
    title: 'Founded as a digital careers studio',
    description:
      'MetaWaves began as a small studio helping career-switchers build real design and web portfolios — long before "AI" was part of our name.',
    icon: Hammer,
  },
  {
    year: '2018',
    title: 'Our first 1,000 graduates',
    description:
      'The cohort model proved out: mentor-reviewed projects beat passive video courses. Our first thousand graduates carried that portfolio-first philosophy into real jobs.',
    icon: Users,
  },
  {
    year: '2021',
    title: 'The shift to AI-native curriculum',
    description:
      'As generative AI reshaped every craft we taught, we rebuilt the curriculum from the ground up around prompting, agents, and applied ML — the new foundation, not an add-on.',
    icon: Sparkles,
  },
  {
    year: '2023',
    title: 'A global mentor network',
    description:
      'We opened mentorship beyond a single studio, bringing in working AI engineers, designers, and growth practitioners to review real student work every week.',
    icon: Globe2,
  },
  {
    year: '2025',
    title: '25,000+ learners strong',
    description:
      'MetaWaves crossed 25,000 active learners and 120+ courses, with certificates that hiring teams increasingly recognize by name.',
    icon: Award,
  },
  {
    year: '2026',
    title: 'Doubling down on agentic AI',
    description:
      "Today we're investing in agentic AI tracks, deeper career outcomes, and a community built to keep growing long after graduation day.",
    icon: Rocket,
  },
];

export type CoreValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Build, Don't Just Watch",
    description:
      "Every lesson ends in something shipped, not just something watched. If you can't point to a working artifact, we haven't taught you yet.",
    icon: Hammer,
  },
  {
    title: 'Mentorship Over Metrics',
    description: "A completion percentage doesn't tell you if someone can do the job. Real mentors reviewing real work does.",
    icon: Users,
  },
  {
    title: 'Portfolio Over Paper',
    description: 'A certificate says you finished. A portfolio proves you can build. We optimize for the second one.',
    icon: LayoutTemplate,
  },
  {
    title: 'Radical Transparency',
    description: 'Pricing, curriculum, and outcomes are published in the open — not gated behind a sales call.',
    icon: Eye,
  },
  {
    title: 'Community as Curriculum',
    description: 'Some of the best learning happens between students, not just from an instructor. We design for that on purpose.',
    icon: MessageCircle,
  },
  {
    title: 'Outcomes Over Hours',
    description: "We don't measure success in video-hours watched. We measure it in interviews landed and projects shipped.",
    icon: TrendingUp,
  },
];

export type TeachingPrinciple = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const TEACHING_PRINCIPLES: TeachingPrinciple[] = [
  {
    title: 'Learn by Building',
    description: 'Every module ships a real, working project — not a quiz. Theory only shows up in service of something you make.',
    icon: Hammer,
  },
  {
    title: 'Mentor-Reviewed Feedback',
    description: 'Every project gets reviewed by a working practitioner, not just an autograder checking for keywords.',
    icon: Users,
  },
  {
    title: 'Cohort Momentum',
    description: "You learn alongside real people, on a real schedule — not alone in an infinite video queue you can quietly abandon.",
    icon: MessageCircle,
  },
  {
    title: 'Career-Integrated From Day One',
    description: 'Portfolio building and interview prep are woven into the curriculum from week one, not bolted on at the very end.',
    icon: Compass,
  },
];

export type VisionPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const VISION_POINTS: VisionPoint[] = [
  {
    title: 'Deeper specialization tracks',
    description: 'As AI roles fragment into new disciplines, our curriculum will fragment with them instead of staying generic.',
    icon: Workflow,
  },
  {
    title: 'An always-on global mentor network',
    description: 'Mentorship that spans every timezone, so feedback never waits for a single studio to wake up.',
    icon: Globe2,
  },
  {
    title: 'Outcomes-based hiring partnerships',
    description: 'Deeper ties with the companies actually hiring our graduates, built around real placement data.',
    icon: Lightbulb,
  },
];
