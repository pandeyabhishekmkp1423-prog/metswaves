import { MENTORS } from '../constants';

export type ArticleAuthor = {
  name: string;
  role: string;
  avatar: string;
};

const AUTHORS: ArticleAuthor[] = MENTORS.map((mentor) => ({
  name: mentor.name,
  role: mentor.role,
  avatar: mentor.image,
}));

export type ArticleCategory =
  | 'Generative AI'
  | 'Prompt Engineering'
  | 'Automation'
  | 'Machine Learning'
  | 'Data Science'
  | 'Career Programs';

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  'Generative AI',
  'Prompt Engineering',
  'Automation',
  'Machine Learning',
  'Data Science',
  'Career Programs',
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: ArticleCategory;
  author: ArticleAuthor;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: 'rise-of-ai-agents-2026',
    title: 'Inside the Rise of AI Agents: What Is Actually Changing in 2026',
    excerpt:
      'Autonomous agents moved from demos to daily workflows this year. Here is what separates a genuinely useful agent from a scripted chatbot with extra steps.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600',
    category: 'Generative AI',
    author: AUTHORS[0],
    date: 'July 2, 2026',
    readTime: '9 min read',
    tags: ['AI Agents', 'LangChain', 'Automation'],
    featured: true,
  },
  {
    slug: 'prompt-patterns-that-still-work',
    title: '7 Prompt Patterns That Still Outperform Fine-Tuning',
    excerpt:
      'Fine-tuning gets the headlines, but a handful of structured prompting techniques quietly out-perform it for most production use cases.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    category: 'Prompt Engineering',
    author: AUTHORS[1],
    date: 'June 28, 2026',
    readTime: '6 min read',
    tags: ['Prompt Engineering', 'ChatGPT', 'Claude'],
    trending: true,
  },
  {
    slug: 'rag-vs-fine-tuning',
    title: 'RAG vs. Fine-Tuning: A Decision Framework for Product Teams',
    excerpt:
      'Choosing between retrieval-augmented generation and fine-tuning is rarely obvious. Here is the framework we teach in our AI engineering cohorts.',
    image: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&q=80&w=1200',
    category: 'Machine Learning',
    author: AUTHORS[3],
    date: 'June 21, 2026',
    readTime: '8 min read',
    tags: ['RAG', 'Vector Databases', 'Fine-tuning'],
    trending: true,
  },
  {
    slug: 'automation-workflows-that-ship',
    title: 'The Automation Workflows That Actually Ship in Small Teams',
    excerpt:
      'Most automation projects die in planning. These five workflow patterns get built, deployed, and maintained by teams of two or three.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    category: 'Automation',
    author: AUTHORS[2],
    date: 'June 15, 2026',
    readTime: '7 min read',
    tags: ['n8n', 'AI Automation', 'Zapier'],
    trending: true,
  },
  {
    slug: 'ai-career-switch-playbook',
    title: 'The 16-Week Playbook for Switching Into an AI Career',
    excerpt:
      'A realistic, week-by-week roadmap for professionals switching into AI-native roles, based on outcomes from 500+ Metawaves graduates.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
    category: 'Career Programs',
    author: AUTHORS[0],
    date: 'June 10, 2026',
    readTime: '10 min read',
    tags: ['Career Growth', 'Portfolio', 'Interview Prep'],
    trending: true,
  },
  {
    slug: 'multimodal-ai-product-design',
    title: 'Designing Products Around Multimodal AI, Not Just Chat',
    excerpt:
      'Text-in, text-out is no longer the default. Here is how leading product teams are designing around vision, voice, and mixed-input models.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200',
    category: 'Generative AI',
    author: AUTHORS[1],
    date: 'June 4, 2026',
    readTime: '7 min read',
    tags: ['Multimodal AI', 'Product Design'],
  },
  {
    slug: 'vector-databases-explained',
    title: 'Vector Databases, Explained Without the Hand-Waving',
    excerpt:
      'What embeddings actually store, why similarity search works the way it does, and how to pick a vector database without over-engineering.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    category: 'Data Science',
    author: AUTHORS[3],
    date: 'May 29, 2026',
    readTime: '9 min read',
    tags: ['Vector Databases', 'RAG', 'Data Science'],
  },
  {
    slug: 'ai-ethics-in-production',
    title: 'AI Ethics Is a Production Problem, Not a Slide Deck',
    excerpt:
      'Bias audits and model cards matter, but the real ethical failures happen in deployment decisions nobody reviews. A practical checklist.',
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=1200',
    category: 'Machine Learning',
    author: AUTHORS[0],
    date: 'May 22, 2026',
    readTime: '6 min read',
    tags: ['AI Ethics', 'Machine Learning'],
  },
  {
    slug: 'no-code-ai-tools-2026',
    title: 'The No-Code AI Stack We Recommend to Non-Technical Founders',
    excerpt:
      'You do not need to write Python to ship a working AI product. Here is the exact no-code stack we teach in our business track.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    category: 'Automation',
    author: AUTHORS[2],
    date: 'May 16, 2026',
    readTime: '5 min read',
    tags: ['No-Code AI', 'AI Automation'],
  },
  {
    slug: 'llm-evaluation-metrics',
    title: 'How to Evaluate an LLM Output Without Fooling Yourself',
    excerpt:
      'Vibes-based evaluation does not scale. A practical guide to building an evaluation harness your whole team can actually trust.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    category: 'Machine Learning',
    author: AUTHORS[3],
    date: 'May 9, 2026',
    readTime: '8 min read',
    tags: ['Machine Learning', 'RAG'],
  },
  {
    slug: 'portfolio-projects-that-get-interviews',
    title: '5 Portfolio Projects That Actually Get AI Engineers Interviews',
    excerpt:
      'Hiring managers see the same three toy chatbots on repeat. These five project types consistently stand out in real screening calls.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    category: 'Career Programs',
    author: AUTHORS[2],
    date: 'May 2, 2026',
    readTime: '7 min read',
    tags: ['Portfolio', 'Career Growth', 'AI Agents'],
  },
  {
    slug: 'data-science-dashboards-stakeholders-use',
    title: 'Why Most Data Dashboards Get Ignored (And How to Fix Yours)',
    excerpt:
      'The technical bar for a good dashboard is low. The bar for one stakeholders actually open every week is much, much higher.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    category: 'Data Science',
    author: AUTHORS[0],
    date: 'April 25, 2026',
    readTime: '6 min read',
    tags: ['Data Science', 'Product Design'],
  },
];

export const POPULAR_TOPICS: string[] = [
  'AI Agents',
  'Prompt Engineering',
  'RAG',
  'LangChain',
  'Fine-tuning',
  'Vector Databases',
  'Multimodal AI',
  'AI Automation',
  'No-Code AI',
  'AI Ethics',
  'Career Growth',
  'Portfolio',
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const sameCategory = ARTICLES.filter(
    (candidate) => candidate.slug !== article.slug && candidate.category === article.category,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const sharedTag = ARTICLES.filter(
    (candidate) =>
      candidate.slug !== article.slug &&
      !sameCategory.includes(candidate) &&
      candidate.tags.some((tag) => article.tags.includes(tag)),
  );

  return [...sameCategory, ...sharedTag].slice(0, limit);
}

export function getArticleCounts(): Record<ArticleCategory, number> {
  const counts = Object.fromEntries(ARTICLE_CATEGORIES.map((category) => [category, 0])) as Record<
    ArticleCategory,
    number
  >;
  ARTICLES.forEach((article) => {
    counts[article.category] += 1;
  });
  return counts;
}
