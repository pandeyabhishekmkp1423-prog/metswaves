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

// ============================================================
// GENERATIVE AI
// ============================================================

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

const aiForBrainstormingCourses: ExploreMenuNode[] = [
  course('AI Brainstorming Bootcamp', '₹799'),
  course('Creative Ideation with ChatGPT', '₹999'),
  course('Mind Mapping with AI Tools', '₹799'),
  course('AI for Innovation Workshops', '₹1,499'),
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
  course('Adobe Firefly for Video Creators', '₹1,499'),
  course('AI Video Automation', '₹3,999'),
];

const aiForGraphicDesignersCourses: ExploreMenuNode[] = [
  course('Midjourney Masterclass', '₹2,999'),
  course('Adobe Firefly for Designers', '₹1,999'),
  course('Canva AI', '₹999'),
  course('Flux AI', '₹1,499'),
  course('Leonardo AI', '₹1,999'),
  course('Complete AI Design Bootcamp', '₹5,999'),
];

const aiForContentCreatorsCourses: ExploreMenuNode[] = [
  course('AI Content Creation Bootcamp', '₹999'),
  course('YouTube Scripting with AI', '₹799'),
  course('AI Podcast Production', '₹1,499'),
  course('Short-Form Video Scripting with AI', '₹999'),
  course('Complete Content Creator AI Toolkit', '₹2,999'),
];

const aiForMarketingProsCourses: ExploreMenuNode[] = [
  course('AI for Marketing Campaigns', '₹1,499'),
  course('AI Ad Copywriting', '₹999'),
  course('Customer Persona Building with AI', '₹1,499'),
  course('AI Email Campaign Design', '₹1,999'),
  course('Complete AI Marketing Bootcamp', '₹3,999'),
];

const aiForSalesTeamsCourses: ExploreMenuNode[] = [
  course('AI for Sales Outreach', '₹999'),
  course('AI-Powered Lead Qualification', '₹1,499'),
  course('Sales Script Writing with AI', '₹799'),
  course('AI CRM Automation for Sales Teams', '₹2,499'),
];

const aiForCustomerSupportCourses: ExploreMenuNode[] = [
  course('AI Customer Support Chatbots', '₹1,999'),
  course('AI Ticket Triage & Response', '₹1,499'),
  course('Building a Support Knowledge Base with AI', '₹999'),
  course('AI Customer Support Career Certificate', '₹4,999'),
];

const aiForEntrepreneursCourses: ExploreMenuNode[] = [
  course('AI for Startup Founders', '₹1,999'),
  course('Building an MVP with AI Tools', '₹2,499'),
  course('AI Business Plan Generator Workshop', '₹999'),
  course('AI for Solo Founders Bootcamp', '₹3,999'),
];

const aiProductivityCourses: ExploreMenuNode[] = [
  course('AI Productivity Toolkit', '₹999'),
  course('Automating Your Daily Workflow with AI', '₹1,499'),
  course('AI for Time Management', '₹799'),
  course('Personal AI Assistant Setup', '₹999'),
];

const aiOfficeAutomationCourses: ExploreMenuNode[] = [
  course('Microsoft Copilot for Office', '₹1,999'),
  course('Google Workspace AI Automation', '₹1,499'),
  course('AI-Powered Excel & Spreadsheets', '₹1,999'),
  course('Automating Reports with AI', '₹1,499'),
];

const aiPresentationCourses: ExploreMenuNode[] = [
  course('AI Slide Deck Design', '₹999'),
  course('Gamma AI for Presentations', '₹799'),
  course('Pitch Deck Creation with AI', '₹1,499'),
  course('Data Storytelling with AI Slides', '₹1,499'),
];

const aiResumeCourses: ExploreMenuNode[] = [
  course('AI Resume Builder Masterclass', '₹799'),
  course('ATS-Optimized Resumes with AI', '₹999'),
  course('LinkedIn Profile Optimization with AI', '₹799'),
  course('AI Cover Letter Writing', '₹499'),
];

const aiInterviewPrepCourses: ExploreMenuNode[] = [
  course('AI Mock Interview Practice', '₹999'),
  course('Behavioral Interview Prep with AI', '₹1,499'),
  course('Technical Interview Prep with AI', '₹1,999'),
  course('AI Salary Negotiation Coaching', '₹1,499'),
];

const generativeAiChildren: ExploreMenuNode[] = [
  category('AI Fundamentals', aiFundamentalsCourses, 'AI Fundamentals'),
  category('AI for Brainstorming', aiForBrainstormingCourses, 'AI for Brainstorming'),
  category('AI for Writing & Communication', aiForWritingCourses, 'AI for Writing & Communication'),
  category('AI for Research & Strategic Planning', aiForResearchCourses, 'AI for Research & Strategic Planning'),
  category('AI for Video Editors', aiForVideoEditorsCourses, 'AI for Video Editors'),
  category('AI for Graphic Designers', aiForGraphicDesignersCourses, 'AI for Graphic Designers'),
  category('AI for Content Creators', aiForContentCreatorsCourses, 'AI for Content Creators'),
  category('AI for Marketing Professionals', aiForMarketingProsCourses, 'AI for Marketing Professionals'),
  category('AI for Sales Teams', aiForSalesTeamsCourses, 'AI for Sales Teams'),
  category('AI for Customer Support', aiForCustomerSupportCourses, 'AI for Customer Support'),
  category('AI for Entrepreneurs', aiForEntrepreneursCourses, 'AI for Entrepreneurs'),
  category('AI Productivity', aiProductivityCourses, 'AI Productivity'),
  category('AI Office Automation', aiOfficeAutomationCourses, 'AI Office Automation'),
  category('AI Presentation Creation', aiPresentationCourses, 'AI Presentation Creation'),
  category('AI Resume Building', aiResumeCourses, 'AI Resume Building'),
  category('AI Interview Preparation', aiInterviewPrepCourses, 'AI Interview Preparation'),
  course('ChatGPT Masterclass', '₹1,999'),
  course('Claude AI Masterclass', '₹1,999'),
  course('Gemini AI Essentials', '₹1,499'),
  course('Perplexity AI Masterclass', '₹1,499'),
  viewAll('View All Generative AI Courses', 'Generative AI'),
];

// ============================================================
// PROMPT ENGINEERING
// ============================================================

const promptEngineeringChildren: ExploreMenuNode[] = [
  course('Prompt Engineering Basics', '₹999'),
  course('Advanced Prompt Engineering', '₹2,499'),
  course('Prompt Engineering for Business', '₹2,999'),
  course('Prompt Engineering for Developers', '₹2,999'),
  course('Claude Prompt Engineering', '₹2,499'),
  course('OpenAI Prompt Engineering', '₹2,999'),
  course('Enterprise Prompt Engineering', '₹7,999'),
  course('Prompt Design Workshop', '₹1,499'),
];

// ============================================================
// AUTOMATION
// ============================================================

const automationChildren: ExploreMenuNode[] = [
  course('n8n Masterclass', '₹2,499'),
  course('Zapier Automation', '₹1,999'),
  course('Make.com Automation', '₹1,999'),
  course('Business Workflow Automation', '₹3,999'),
  course('AI Workflow Automation', '₹4,999'),
  course('No-Code Automation Bootcamp', '₹2,999'),
];

// ============================================================
// AI DEVELOPMENT
// ============================================================

const aiDevelopmentChildren: ExploreMenuNode[] = [
  course('OpenAI API for Developers', '₹2,999'),
  course('Claude API Masterclass', '₹2,999'),
  course('LangChain for Production Apps', '₹4,999'),
  course('LangGraph: Stateful AI Workflows', '₹4,999'),
  course('RAG Systems from Scratch', '₹5,999'),
  course('Model Context Protocol (MCP) Bootcamp', '₹4,999'),
  course('Building AI Agents', '₹5,999'),
  course('CrewAI: Multi-Agent Systems', '₹4,999'),
  course('AutoGen for Autonomous Agents', '₹4,999'),
  course('Vector Databases Explained', '₹2,999'),
];

// ============================================================
// MACHINE LEARNING
// ============================================================

const machineLearningChildren: ExploreMenuNode[] = [
  course('Machine Learning Fundamentals', '₹2,499'),
  course('Python for Machine Learning', '₹2,999'),
  course('Deep Learning', '₹4,999'),
  course('TensorFlow Masterclass', '₹3,999'),
  course('PyTorch Professional', '₹4,999'),
  course('Computer Vision', '₹4,999'),
  course('Natural Language Processing', '₹4,999'),
];

// ============================================================
// DATA SCIENCE
// ============================================================

const dataScienceChildren: ExploreMenuNode[] = [
  course('Python for Data Science', '₹2,499'),
  course('SQL for Data Analysis', '₹1,999'),
  course('Power BI Masterclass', '₹2,499'),
  course('Data Visualization', '₹1,999'),
  course('Pandas for Data Analysis', '₹1,999'),
  course('NumPy Essentials', '₹1,499'),
  course('Statistics for Data Science', '₹2,499'),
];

// ============================================================
// WEB DEVELOPMENT
// ============================================================

const webDevelopmentChildren: ExploreMenuNode[] = [
  course('HTML & CSS Fundamentals', '₹999'),
  course('JavaScript Masterclass', '₹1,999'),
  course('React Professional', '₹2,999'),
  course('Next.js for Production Apps', '₹2,999'),
  course('Node.js Backend Development', '₹2,499'),
  course('Laravel Essentials', '₹2,499'),
  course('Full Stack Development Bootcamp', '₹5,999'),
];

// ============================================================
// UI/UX DESIGN
// ============================================================

const uiUxDesignChildren: ExploreMenuNode[] = [
  course('UI Design Fundamentals', '₹1,499'),
  course('UX Research Masterclass', '₹1,999'),
  course('Figma Masterclass', '₹1,999'),
  course('Design Systems', '₹2,499'),
  course('Accessibility in Design', '₹1,499'),
  course('Product Design Bootcamp', '₹4,999'),
];

// ============================================================
// DIGITAL MARKETING
// ============================================================

const digitalMarketingChildren: ExploreMenuNode[] = [
  course('SEO Masterclass', '₹1,999'),
  course('Social Media Marketing', '₹1,499'),
  course('Performance Marketing', '₹2,999'),
  course('Content Marketing', '₹1,499'),
  course('Email Marketing', '₹999'),
  course('AI Marketing Bootcamp', '₹2,999'),
];

// ============================================================
// CLOUD COMPUTING
// ============================================================

const cloudComputingChildren: ExploreMenuNode[] = [
  course('AWS Fundamentals', '₹2,499'),
  course('Microsoft Azure Essentials', '₹2,499'),
  course('Google Cloud Platform Basics', '₹2,499'),
  course('Cloud Architecture Masterclass', '₹3,999'),
  course('DevOps & CI/CD Pipelines', '₹3,999'),
  course('Kubernetes for Beginners', '₹2,999'),
];

// ============================================================
// CYBER SECURITY
// ============================================================

const cyberSecurityChildren: ExploreMenuNode[] = [
  course('Cyber Security Fundamentals', '₹1,999'),
  course('Ethical Hacking Basics', '₹2,999'),
  course('Network Security Essentials', '₹2,499'),
  course('Cloud Security Bootcamp', '₹3,999'),
  course('AI-Powered Threat Detection', '₹4,999'),
  course('Security Compliance Essentials', '₹2,499'),
];

// ============================================================
// BUSINESS & LEADERSHIP
// ============================================================

const businessLeadershipChildren: ExploreMenuNode[] = [
  course('Leadership Fundamentals', '₹1,999'),
  course('Business Strategy with AI', '₹2,999'),
  course('Product Management Essentials', '₹3,999'),
  course('Financial Analysis for Managers', '₹2,499'),
  course('Negotiation Skills Masterclass', '₹1,499'),
  course('Business Analytics with AI', '₹2,999'),
];

// ============================================================
// CAREER PROGRAMS
// ============================================================

const careerProgramsChildren: ExploreMenuNode[] = [
  course('AI Engineer Career Track', '₹24,999'),
  course('Prompt Engineer Career Track', '₹19,999'),
  course('Automation Engineer Career Track', '₹24,999'),
  course('Data Analyst Career Track', '₹19,999'),
  course('Full Stack AI Developer', '₹29,999'),
  course('AI Product Manager', '₹34,999'),
];

// ============================================================
// PROFESSIONAL CERTIFICATIONS
// ============================================================

const certificationChildren: ExploreMenuNode[] = [
  course('AI Engineer Certification', '₹9,999'),
  course('Prompt Engineering Certification', '₹7,999'),
  course('Automation Certification', '₹7,999'),
  course('Machine Learning Certification', '₹9,999'),
  course('Cloud Certification', '₹9,999'),
  course('Cyber Security Certification', '₹9,999'),
  course('Data Science Certification', '₹9,999'),
];

// ============================================================
// FREE LEARNING
// ============================================================

const freeLearningChildren: ExploreMenuNode[] = [
  course('AI Basics for Absolute Beginners', 'Free'),
  course('Introduction to ChatGPT', 'Free'),
  course('Getting Started with Automation', 'Free'),
  course('Data Science Starter Kit', 'Free'),
];

export const EXPLORE_MENU: ExploreMenuNode[] = [
  category('Artificial Intelligence'),
  category('Generative AI', generativeAiChildren, 'Generative AI Courses', 'Generative AI'),
  category('Prompt Engineering', promptEngineeringChildren, 'Prompt Engineering', 'Prompt Engineering'),
  category('Automation', automationChildren, 'Automation', 'Automation'),
  category('AI Development', aiDevelopmentChildren, 'AI Development', 'AI Development'),
  category('Machine Learning', machineLearningChildren, 'Machine Learning', 'Machine Learning'),
  category('Data Science', dataScienceChildren, 'Data Science', 'Data Science'),
  category('Cloud Computing', cloudComputingChildren, 'Cloud Computing', 'Cloud Computing'),
  category('Cyber Security', cyberSecurityChildren, 'Cyber Security', 'Cyber Security'),
  category('Web Development', webDevelopmentChildren, 'Web Development', 'Web Development'),
  category('UI/UX Design', uiUxDesignChildren, 'UI/UX Design', 'UI/UX Design'),
  category('Digital Marketing', digitalMarketingChildren, 'Digital Marketing', 'Digital Marketing'),
  category('Business & Leadership', businessLeadershipChildren, 'Business & Leadership', 'Business & Leadership'),
  category('Career Programs', careerProgramsChildren, 'Career Programs', 'Career Programs'),
  category('Professional Certifications', certificationChildren, 'Certifications', 'Professional Certifications'),
  category('Free Learning', freeLearningChildren, 'Free Learning', 'Free Learning'),
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
