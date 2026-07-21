import { slugify } from './slug';

export type ExploreMenuNode = {
  label: string;
  href: string;
  price?: string;
  emphasized?: boolean;
  childHeading?: string;
  children?: ExploreMenuNode[];
};

export type ExploreCourseEntry = {
  slug: string;
  title: string;
  price?: string;
  category: string;
  subCategory?: string;
};

const CONTACT_HREF = '#contact';
const CATALOG_HREF = '/courses';

const catalogHref = (filterCategory?: string) =>
  filterCategory ? `${CATALOG_HREF}?category=${encodeURIComponent(filterCategory)}` : CATALOG_HREF;

const course = (label: string, price?: string): ExploreMenuNode => ({
  label,
  href: CONTACT_HREF,
  price,
});

// filterCategory should match a real category name in the course catalog (courseCatalog.ts) —
// only pass it for categories that actually have course data, otherwise leave it unset so the
// link lands on the unfiltered full catalog instead of a filter that would show zero results.
const category = (label: string, children?: ExploreMenuNode[], childHeading?: string, filterCategory?: string): ExploreMenuNode => ({
  label,
  href: catalogHref(filterCategory),
  children,
  childHeading,
});

const viewAll = (label: string, filterCategory?: string): ExploreMenuNode => ({
  label,
  href: catalogHref(filterCategory),
  emphasized: true,
});

const aiFundamentalsCourses: ExploreMenuNode[] = [
  course('Introduction to Artificial Intelligence', '₹499'),
  course('AI Essentials Bootcamp', '₹999'),
  course('AI for Everyday Productivity', '₹1,499'),
  course('AI Fundamentals Professional Certificate', '₹2,499'),
  course('Complete AI Beginner Roadmap', '₹3,499'),
  course('Master Artificial Intelligence', '₹4,999'),
  course('Premium AI Career Program', '₹7,999'),
  course('AI Fundamentals + Prompt Engineering (Bundle)', '₹8,999'),
];

const aiForWritingCourses: ExploreMenuNode[] = [
  course('Master AI Writing', '₹799'),
  course('ChatGPT for Content Writers', '₹999'),
  course('AI Copywriting Bootcamp', '₹1,999'),
  course('Business Communication with AI', '₹2,499'),
  course('Professional Email Writing with AI', '₹999'),
  course('LinkedIn Content using AI', '₹799'),
  course('Complete AI Writing Masterclass', '₹4,999'),
];

const aiForResearchCourses: ExploreMenuNode[] = [
  course('Research using ChatGPT', '₹999'),
  course('Market Research with AI', '₹1,499'),
  course('Strategic Planning using AI', '₹2,499'),
  course('Business Intelligence with AI', '₹3,499'),
  course('Competitive Analysis using AI', '₹1,999'),
];

const aiForVideoEditorsCourses: ExploreMenuNode[] = [
  course('AI Video Editing', '₹999'),
  course('Runway AI Masterclass', '₹2,499'),
  course('Pika Labs Bootcamp', '₹1,999'),
  course('Adobe Firefly', '₹1,499'),
  course('AI Video Automation', '₹3,999'),
];

const aiForGraphicDesignersCourses: ExploreMenuNode[] = [
  course('Midjourney Masterclass', '₹2,999'),
  course('Adobe Firefly', '₹1,999'),
  course('Canva AI', '₹999'),
  course('Flux AI', '₹1,499'),
  course('Leonardo AI', '₹1,999'),
  course('Complete AI Design Bootcamp', '₹5,999'),
];

const generativeAiChildren: ExploreMenuNode[] = [
  category('AI Fundamentals', aiFundamentalsCourses, 'AI Fundamentals'),
  category('AI for Brainstorming'),
  category('AI for Writing & Communication', aiForWritingCourses, 'AI for Writing & Communication'),
  category('AI for Research & Strategic Planning', aiForResearchCourses, 'AI for Research & Strategic Planning'),
  category('AI for Video Editors', aiForVideoEditorsCourses, 'AI for Video Editors'),
  category('AI for Graphic Designers', aiForGraphicDesignersCourses, 'AI for Graphic Designers'),
  category('AI for Content Creators'),
  category('AI for Marketing Professionals'),
  category('AI for Sales Teams'),
  category('AI for Customer Support'),
  category('AI for Entrepreneurs'),
  category('AI Productivity'),
  category('AI Office Automation'),
  category('AI Presentation Creation'),
  category('AI Resume Building'),
  category('AI Interview Preparation'),
  viewAll('View All Generative AI Courses', 'Generative AI'),
];

const promptEngineeringChildren: ExploreMenuNode[] = [
  course('Prompt Engineering Basics', '₹999'),
  course('Advanced Prompt Engineering', '₹2,499'),
  course('Prompt Engineering Professional', '₹4,999'),
  course('OpenAI Prompt Engineering', '₹2,999'),
  course('Claude Prompt Engineering', '₹2,499'),
  course('Enterprise Prompt Engineering', '₹7,999'),
];

const automationChildren: ExploreMenuNode[] = [
  course('n8n Automation', '₹2,499'),
  course('Zapier Automation', '₹1,999'),
  course('Make.com Automation', '₹1,999'),
  course('AI Workflow Automation', '₹4,999'),
  course('Business Automation Masterclass', '₹7,999'),
];

const machineLearningChildren: ExploreMenuNode[] = [
  course('Machine Learning Basics', '₹2,499'),
  course('Python for Machine Learning', '₹3,499'),
  course('Deep Learning', '₹4,999'),
  course('TensorFlow Bootcamp', '₹3,999'),
  course('PyTorch Professional', '₹4,999'),
];

const dataScienceChildren: ExploreMenuNode[] = [
  course('Python for Data Science', '₹2,499'),
  course('SQL for Data Analysis', '₹1,999'),
  course('Power BI', '₹2,499'),
  course('Data Visualization', '₹1,999'),
  course('Complete Data Science Career Program', '₹9,999'),
];

const careerProgramsChildren: ExploreMenuNode[] = [
  course('AI Engineer Career Track', '₹24,999'),
  course('Prompt Engineer Career Track', '₹19,999'),
  course('Automation Engineer Career Track', '₹24,999'),
  course('Data Analyst Career Track', '₹18,999'),
  course('Full Stack AI Developer', '₹29,999'),
];

const certificationChildren: ExploreMenuNode[] = [
  course('AI Engineer Certification'),
  course('Prompt Engineering Certification'),
  course('Automation Certification'),
  course('Machine Learning Certification'),
  course('Cloud Certification'),
  course('Cyber Security Certification'),
  course('Data Science Certification'),
];

export const EXPLORE_MENU: ExploreMenuNode[] = [
  category('Artificial Intelligence'),
  category('Generative AI', generativeAiChildren, 'Generative AI Courses', 'Generative AI'),
  category('Prompt Engineering', promptEngineeringChildren, 'Prompt Engineering', 'Prompt Engineering'),
  category('Automation', automationChildren, 'Automation', 'Automation'),
  category('Machine Learning', machineLearningChildren, 'Machine Learning', 'Machine Learning'),
  category('Data Science', dataScienceChildren, 'Data Science', 'Data Science'),
  category('Cloud Computing'),
  category('Cyber Security'),
  category('Web Development'),
  category('UI/UX Design'),
  category('Digital Marketing'),
  category('Business & Productivity'),
  category('Career Programs', careerProgramsChildren, 'Career Programs', 'Career Programs'),
  category('Professional Certifications', certificationChildren, 'Certifications', 'Professional Certifications'),
  category('Free Learning'),
  viewAll('View All Courses'),
];

// Walks the tree once at module load, assigns each real course/certification leaf
// a unique /courses/:slug href (in place), and collects a flat catalog entry for it.
// Category nodes (href starting with '/courses') stay pointed at the catalog page —
// they're navigational groupings, not individual purchasable offerings.
const usedSlugs = new Set<string>();

function assignSlug(label: string, parentLabel: string): string {
  const base = slugify(label);
  if (!usedSlugs.has(base)) {
    usedSlugs.add(base);
    return base;
  }
  const withParent = `${base}-${slugify(parentLabel)}`;
  if (!usedSlugs.has(withParent)) {
    usedSlugs.add(withParent);
    return withParent;
  }
  let attempt = 2;
  let candidate = `${withParent}-${attempt}`;
  while (usedSlugs.has(candidate)) {
    attempt += 1;
    candidate = `${withParent}-${attempt}`;
  }
  usedSlugs.add(candidate);
  return candidate;
}

const courseEntries: ExploreCourseEntry[] = [];

function linkCourses(nodes: ExploreMenuNode[], topCategory: string, parentLabel: string) {
  for (const node of nodes) {
    if (node.emphasized) continue;

    if (node.children?.length) {
      linkCourses(node.children, topCategory, node.label);
      continue;
    }

    if (node.href === CONTACT_HREF) {
      const slug = assignSlug(node.label, parentLabel);
      node.href = `/courses/${slug}`;
      courseEntries.push({
        slug,
        title: node.label,
        price: node.price,
        category: topCategory,
        subCategory: parentLabel !== topCategory ? parentLabel : undefined,
      });
    }
  }
}

EXPLORE_MENU.forEach((topNode) => {
  if (topNode.children?.length) {
    linkCourses(topNode.children, topNode.label, topNode.label);
  }
});

export const EXPLORE_COURSE_CATALOG: ExploreCourseEntry[] = courseEntries;
