import { BookOpen, CreditCard, LifeBuoy, Sparkles, type LucideIcon } from 'lucide-react';
import { FAQS, PRICING_FAQS, type Faq } from '../constants';

export type FaqCategory = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  faqs: Faq[];
};

const COURSE_FAQS: Faq[] = [
  {
    question: 'What is the difference between a course and a learning path?',
    answer:
      'A course teaches one specific skill or tool. A learning path bundles several sequenced courses, projects, and mentor checkpoints around a single career outcome, like AI Product Engineer or Applied Data Scientist.',
  },
  {
    question: 'Do I get a certificate when I finish?',
    answer:
      'Yes. Every course and learning path ends with a shareable, verified certificate you can add to LinkedIn or attach to job applications — plus the shipped project itself as proof of work.',
  },
  {
    question: 'Can I switch courses or paths after enrolling?',
    answer:
      'Yes. You can move between courses inside the same category at any time, and our advisors can help you re-map onto a different learning path if your goals change mid-cohort.',
  },
  {
    question: 'Are the projects real, or just practice exercises?',
    answer:
      'Every project is scoped to be portfolio-ready: real datasets, real product briefs, and real constraints — the same kind of build you would ship on the job, not a toy tutorial.',
  },
];

const COMMUNITY_FAQS: Faq[] = [
  {
    question: 'Is there a community I can join outside of class time?',
    answer:
      'Yes. Every student gets access to our community space to share progress, ask questions between sessions, and get feedback from peers and mentors outside scheduled hours.',
  },
  {
    question: 'Who are the mentors, and how much access do I get to them?',
    answer:
      'Mentors are working practitioners in the field, not full-time instructors. You get weekly critiques, office hours, and portfolio reviews throughout your cohort.',
  },
  {
    question: 'What if I get stuck between live sessions?',
    answer:
      'Ask in the community space, book async mentor feedback, or chat with Wave, our assistant, from any page — it can point you to the right course, FAQ, or contact channel in seconds.',
  },
  {
    question: 'Do you help with job placement after I finish?',
    answer:
      'Yes. Every learning path includes interview prep, portfolio storytelling, and role-matching support through our career launch track.',
  },
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'programs',
    title: 'Programs & Learning',
    description: 'What to expect from pacing, mentorship, and outcomes before you commit.',
    icon: Sparkles,
    faqs: FAQS,
  },
  {
    id: 'courses',
    title: 'Courses, Paths & Certificates',
    description: 'How courses, learning paths, projects, and certificates fit together.',
    icon: BookOpen,
    faqs: COURSE_FAQS,
  },
  {
    id: 'pricing',
    title: 'Pricing & Billing',
    description: 'Plans, payment methods, refunds, and switching plans later.',
    icon: CreditCard,
    faqs: PRICING_FAQS,
  },
  {
    id: 'community',
    title: 'Community & Support',
    description: 'Mentors, peer support, and getting help whenever you need it.',
    icon: LifeBuoy,
    faqs: COMMUNITY_FAQS,
  },
];
