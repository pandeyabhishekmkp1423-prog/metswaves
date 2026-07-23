import { MENTORS, PROJECTS, type Mentor, type Project } from '../constants';
import { slugify } from './slug';
import type { Article, ArticleCategory } from './insightsContent';

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; id: string; text: string }
  | { type: 'callout'; variant: 'tip' | 'warning' | 'best-practice'; title: string; text: string }
  | { type: 'code'; language: string; filename?: string; code: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[]; ordered?: boolean };

export type TocItem = { id: string; text: string };

function heading(text: string): ArticleBlock {
  return { type: 'heading', id: slugify(text), text };
}

const RELATED_PROJECT_IDS: Record<ArticleCategory, string[]> = {
  'Generative AI': ['ai-content-generator', 'ai-chatbot'],
  'Prompt Engineering': ['ai-chatbot', 'ai-research-assistant'],
  Automation: ['ai-workflow-automation', 'ai-meeting-summarizer'],
  'Machine Learning': ['ai-coding-assistant', 'ai-resume-analyzer'],
  'Data Science': ['ai-research-assistant', 'ai-resume-analyzer'],
  'Career Programs': ['ai-resume-analyzer', 'ai-coding-assistant'],
};

const ARTICLE_BLOCKS: Record<string, ArticleBlock[]> = {
  'rise-of-ai-agents-2026': [
    {
      type: 'paragraph',
      text: 'Two years ago, "AI agent" mostly meant a chatbot with a few extra tool calls bolted on. That is no longer true. The agents shipping in production today plan multi-step tasks, recover from their own mistakes, and run for hours without a human in the loop — and the gap between a genuinely useful agent and a scripted demo has never been wider.',
    },
    heading('What Changed in 2026'),
    {
      type: 'paragraph',
      text: 'Three things moved at once: models got meaningfully better at long-horizon reasoning, tool-calling APIs matured into something you can actually build reliability around, and teams stopped treating "agent" as a single LLM call and started treating it as a system — with memory, retries, and observability like any other production service.',
    },
    heading('The Three Traits of a Real Agent'),
    {
      type: 'paragraph',
      text: 'When we audit an "agent" for our cohorts, we look past the demo and check for three specific traits. Miss any one of these and what you have is a clever prompt, not an agent.',
    },
    {
      type: 'list',
      items: [
        'It can decompose a goal into steps without being told the steps in advance',
        'It knows when it does not know something and calls a tool instead of guessing',
        'It can recover from a failed step without a human restarting the whole run',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Start with the failure path, not the happy path',
      text: 'Design what happens when a tool call fails or returns garbage before you design the ideal flow. Most agent projects that stall in production stall there because nobody planned for it.',
    },
    heading('Where Agents Still Fail'),
    {
      type: 'paragraph',
      text: 'The honest failure mode in 2026 is not "the model is dumb" — it is silent drift. An agent quietly starts taking a slightly wrong path three steps into a ten-step task, and because each individual step looks reasonable, nobody notices until the final output is unusable.',
    },
    {
      type: 'quote',
      text: 'The agents that survive contact with real users are not the ones with the smartest model behind them. They are the ones somebody bothered to instrument.',
      attribution: 'Dr. Sarah Chen, AI Research Lead',
    },
    heading('How to Start Building One'),
    {
      type: 'paragraph',
      text: 'You do not need a multi-agent orchestration framework to get started. A single loop with a clear stop condition, a small toolset, and logging at every step will teach you more about where agents break than any tutorial will.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'agent_loop.py',
      code: `def run_agent(goal, tools, max_steps=8):
    history = []
    for step in range(max_steps):
        action = plan_next_action(goal, history, tools)
        if action.name == "final_answer":
            return action.output

        result = execute_tool(action, tools)
        history.append({"action": action, "result": result})

        if result.failed:
            history.append(recover_from_failure(action, result))

    return "stopped: max steps reached"`,
    },
    {
      type: 'paragraph',
      text: 'Ship that, watch where it actually breaks with real inputs, and you will know exactly which of the three traits above to invest in next.',
    },
  ],

  'prompt-patterns-that-still-work': [
    {
      type: 'paragraph',
      text: 'Fine-tuning gets the conference talks. But when we look at what actually ships in the production systems our graduates build, a small set of prompting patterns keep outperforming a custom fine-tune — for a fraction of the cost and none of the retraining overhead.',
    },
    heading('Why Prompting Still Wins'),
    {
      type: 'paragraph',
      text: 'Fine-tuning bakes behavior into weights you then have to retrain every time your product requirements shift. A good prompt pattern is versioned in a text file, reviewable in a pull request, and swappable in seconds. For most product teams, that flexibility matters more than the marginal accuracy gain.',
    },
    heading('The Seven Patterns'),
    {
      type: 'list',
      ordered: true,
      items: [
        'Role framing — tell the model who it is before what to do',
        'Explicit output format — show, do not just describe, the schema you want back',
        'Few-shot contrast — one good example and one clearly bad one, not five good ones',
        'Chain-of-thought scaffolding — ask for the reasoning steps as structured fields, not prose',
        'Constraint stacking — list hard constraints separately from soft preferences',
        'Self-critique pass — have the model check its own output against your rubric before returning it',
        'Escape hatches — always give the model an explicit "I don\'t know" option',
      ],
    },
    {
      type: 'callout',
      variant: 'best-practice',
      title: 'Version your prompts like code',
      text: 'Treat every production prompt as a file with a changelog. The single biggest source of "the AI got worse" bug reports we see is an un-tracked prompt edit nobody remembers making.',
    },
    {
      type: 'code',
      language: 'text',
      filename: 'prompt_template.txt',
      code: `You are a support triage assistant for a B2B SaaS product.

Constraints (hard):
- Never invent a ticket ID
- Always return valid JSON matching the schema below

Preferences (soft):
- Prefer shorter responses over longer ones
- Default to "needs_human_review": true when unsure

Schema:
{ "category": string, "priority": "low"|"medium"|"high", "needs_human_review": boolean }`,
    },
    heading('When to Reach for Fine-Tuning Instead'),
    {
      type: 'paragraph',
      text: 'Prompting loses when you need a specific voice at scale across thousands of calls where token cost dominates, or when the task requires a knowledge shape that simply is not representable in a reasonable context window. Outside of those two cases, we push our students to exhaust prompting first.',
    },
    {
      type: 'quote',
      text: 'Every fine-tuning project I have watched fail started the same way: skipping the two weeks of prompt iteration that would have told them fine-tuning was not even necessary.',
      attribution: 'Marcus Thorne, Experience Design Director',
    },
  ],

  'rag-vs-fine-tuning': [
    {
      type: 'paragraph',
      text: 'This is the single most common architecture question we get from teams building their first serious AI feature, and it is usually the wrong question. The real question is not "RAG or fine-tuning" — it is "what kind of knowledge am I actually trying to give the model."',
    },
    heading("The Real Question You're Asking"),
    {
      type: 'paragraph',
      text: 'RAG solves for facts: things that change, things that are proprietary, things you need to cite. Fine-tuning solves for behavior: tone, format, a specific way of reasoning through a narrow domain. Confusing the two is why so many RAG projects quietly turn into expensive fine-tuning projects and vice versa.',
    },
    heading('When RAG Wins'),
    {
      type: 'paragraph',
      text: 'If your data changes weekly, needs to be traceable back to a source, or is too large to bake into weights economically, RAG is almost always the right default.',
    },
    {
      type: 'list',
      items: [
        'Your underlying documents update frequently',
        'You need to cite or show the source of an answer',
        'Different customers need different, isolated knowledge bases',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Measure retrieval quality before you touch the model',
      text: 'Most "RAG is giving bad answers" complaints are actually retrieval problems, not generation problems. Evaluate your retriever in isolation before you spend a single hour tuning prompts.',
    },
    heading('When Fine-Tuning Wins'),
    {
      type: 'paragraph',
      text: 'Fine-tuning earns its complexity when you need consistent behavior at high volume — a specific tone across ten thousand support replies a day, or a narrow classification task where latency and token cost matter more than flexibility.',
    },
    heading('A Simple Decision Framework'),
    {
      type: 'code',
      language: 'python',
      filename: 'decision.py',
      code: `def choose_architecture(changes_often, needs_citations, high_volume_single_task):
    if changes_often or needs_citations:
        return "RAG"
    if high_volume_single_task:
        return "fine-tune"
    return "prompting alone is probably enough"`,
    },
    {
      type: 'quote',
      text: 'We teach this framework in week one of the applied ML track because it saves teams months of building the wrong thing well.',
      attribution: 'James Wilson, Full Stack AI Engineer',
    },
  ],

  'automation-workflows-that-ship': [
    {
      type: 'paragraph',
      text: 'Most automation initiatives die in a planning document. The ones that actually ship in small teams share a pattern: they start absurdly narrow, they route around uncertainty instead of trying to solve it, and somebody owns them the way you would own a production service — because that is what they are.',
    },
    heading('Why Most Automation Projects Die'),
    {
      type: 'paragraph',
      text: 'The typical failure is scope: a team sets out to "automate customer onboarding" instead of "automatically send a welcome email when a specific webhook fires." The first is a program. The second ships by Friday.',
    },
    heading('Five Patterns That Survive Contact With Reality'),
    {
      type: 'list',
      ordered: true,
      items: [
        'Trigger-narrow automations that fire on one specific event, not a whole process',
        'Human-in-the-loop checkpoints on any step that touches money or customer-facing content',
        'A dead-letter queue for failed runs instead of a silent retry-forever loop',
        'One owner per workflow, named in the tool itself, not just in a wiki page',
        'A monthly fifteen-minute review of what actually ran versus what was expected to run',
      ],
    },
    {
      type: 'callout',
      variant: 'best-practice',
      title: 'Build the dead-letter queue before the happy path',
      text: 'A failed automation that fails silently is worse than not automating at all — it erodes trust in the system the moment someone finds a gap it left behind.',
    },
    heading('The Maintenance Tax Nobody Budgets For'),
    {
      type: 'paragraph',
      text: 'Every automation you ship is a small piece of software with dependencies that can change without your permission — an API field gets renamed, a spreadsheet column shifts, a third-party tool changes its rate limits. Teams that treat automations as "set and forget" get burned within a quarter.',
    },
    {
      type: 'quote',
      text: 'An automation you cannot explain in one sentence is an automation you will not be able to debug at 2am when it breaks.',
      attribution: 'Elena Rodriguez, Motion Systems Specialist',
    },
  ],

  'ai-career-switch-playbook': [
    {
      type: 'paragraph',
      text: 'We have watched more than five hundred people switch into AI-native roles through Metawaves cohorts, and the ones who land offers fastest follow a strikingly similar shape — not because they are smarter, but because they stopped treating the switch as "learning AI" and started treating it as a sixteen-week project with weekly deliverables.',
    },
    heading('Why 16 Weeks'),
    {
      type: 'paragraph',
      text: "Shorter timelines skip the portfolio work that actually gets you hired. Longer timelines lose momentum. Sixteen weeks is enough to go from fundamentals to a shipped, defensible project — without enough slack to let the plan quietly dissolve.",
    },
    heading('Weeks 1-4: Foundations'),
    {
      type: 'paragraph',
      text: 'The first month is not about becoming an expert. It is about building enough fluency with prompting, APIs, and one core framework that you can follow along in weeks 5 onward without getting lost in vocabulary.',
    },
    heading('Weeks 5-10: Build in Public'),
    {
      type: 'paragraph',
      text: 'This is the block that separates people who get interviews from people who do not. You are not watching tutorials anymore — you are shipping a real, working project and writing publicly about the decisions behind it.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Document decisions, not just outcomes',
      text: 'A build log that explains why you chose RAG over fine-tuning is worth more in an interview than a polished README that only shows what the finished project does.',
    },
    heading('Weeks 11-16: Portfolio and Interviews'),
    {
      type: 'list',
      items: [
        'Rebuild your resume around outcomes from the project, not tools you touched',
        'Run at least three mock technical interviews before a real one',
        'Reach out to five people in roles you want and ask about their actual day-to-day',
        'Apply in batches, not one at a time — momentum matters more than perfect targeting',
      ],
    },
    {
      type: 'quote',
      text: 'Every graduate who landed a role in under four months had one thing in common: a finished project they could talk about for twenty straight minutes without notes.',
      attribution: 'Dr. Sarah Chen, AI Research Lead',
    },
  ],

  'multimodal-ai-product-design': [
    {
      type: 'paragraph',
      text: 'Text-in, text-out was never the ceiling — it was just the easiest place to start. The product teams pulling ahead right now are the ones designing natively around vision, voice, and mixed input, instead of bolting a camera icon onto a chat window and calling it multimodal.',
    },
    heading('Beyond the Chat Window'),
    {
      type: 'paragraph',
      text: 'A chat interface assumes the user always wants to type. The moment you add image or voice input, that assumption breaks — users expect the interface itself to change shape depending on what they are trying to hand the model.',
    },
    heading('Designing for Vision and Voice Input'),
    {
      type: 'paragraph',
      text: 'The best multimodal products we have studied share one habit: they show the model what it "saw" or "heard" back to the user immediately, before generating a response. That single design choice eliminates most of the trust problems multimodal products run into.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: "Do not let the model guess what it can't see clearly",
      text: 'Low-resolution images and noisy audio should trigger an explicit "I am not confident about this" response, not a fabricated best guess presented with full confidence.',
    },
    heading('The Failure Modes Unique to Multimodal'),
    {
      type: 'paragraph',
      text: 'Text-only systems fail in ways users have learned to expect — a wrong fact, an awkward sentence. Multimodal systems fail in ways that feel much stranger: describing an object that is not in the image, or transcribing a word the user never said. Those failures erode trust faster.',
    },
    {
      type: 'quote',
      text: 'Users forgive a wrong answer. They do not forgive a system that confidently describes something that was never there.',
      attribution: 'Marcus Thorne, Experience Design Director',
    },
    heading('A Checklist Before You Ship'),
    {
      type: 'list',
      items: [
        'Show the user exactly what the model received, not just its response',
        'Add an explicit low-confidence state for blurry images or unclear audio',
        'Test with real-world inputs, not clean studio photos and quiet recordings',
        'Give users a one-tap way to correct a misread input',
      ],
    },
  ],

  'vector-databases-explained': [
    {
      type: 'paragraph',
      text: 'Vector databases get explained with a lot of hand-waving about "meaning" and "semantic space." Underneath the marketing, it is a much simpler idea: turn things into lists of numbers such that similar things end up close together, then build an index fast enough to search that space at scale.',
    },
    heading('What an Embedding Actually Is'),
    {
      type: 'paragraph',
      text: 'An embedding model turns a piece of text (or image, or audio) into a fixed-length list of numbers — a vector. Two pieces of text that mean similar things produce vectors that sit close together in that numerical space. That is the entire trick. Everything else is engineering on top of it.',
    },
    heading('Why Similarity Search Works'),
    {
      type: 'paragraph',
      text: 'Once everything is a vector, "find similar documents" becomes "find the nearest points in space" — a well-studied geometry problem. The most common way to measure closeness is cosine similarity, which cares about direction, not magnitude.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'similarity.py',
      code: `import numpy as np

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# closer to 1.0 means more similar
score = cosine_similarity(query_vector, document_vector)`,
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Chunk size matters more than model choice',
      text: 'Teams spend weeks comparing embedding models and days on chunking strategy — usually backwards. A bad chunking strategy will sabotage even the best embedding model.',
    },
    heading('Picking a Vector Database Without Over-Engineering'),
    {
      type: 'paragraph',
      text: 'Most teams do not need a dedicated vector database on day one. A well-indexed column in Postgres with a vector extension handles surprisingly large workloads before you need anything more specialized.',
    },
    {
      type: 'list',
      items: [
        'Under a few million vectors: a Postgres extension is usually enough',
        'Need managed scaling and multi-tenant isolation: a dedicated vector database earns its cost',
        'Need hybrid keyword plus semantic search: check native support before you commit',
      ],
    },
    {
      type: 'quote',
      text: 'Pick the boring, already-in-your-stack option first. You can always migrate once you have a real scaling problem to justify it.',
      attribution: 'James Wilson, Full Stack AI Engineer',
    },
  ],

  'ai-ethics-in-production': [
    {
      type: 'paragraph',
      text: 'Bias audits and model cards get the attention in ethics discussions, and they matter. But the failures we actually see in production rarely come from the model itself — they come from a deployment decision nobody with the full picture ever reviewed.',
    },
    heading('The Gap Between the Slide Deck and the Deploy Button'),
    {
      type: 'paragraph',
      text: 'A responsible AI slide deck describes the system your legal and ethics teams reviewed. The system that actually ships is often quietly different — an extra data source added under deadline pressure, a fallback path nobody flagged as sensitive.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Review the deployed config, not the design doc',
      text: 'Ethics reviews that only examine the original design document routinely miss the exact changes that caused real-world harm. Review what is actually running.',
    },
    heading('Where the Real Failures Happen'),
    {
      type: 'paragraph',
      text: 'The pattern repeats across almost every public AI incident we have studied: an edge case identified during testing, deprioritized under a deadline, and shipped anyway with a mental note to "fix it later" that never gets revisited.',
    },
    {
      type: 'quote',
      text: 'Nobody ships a biased system on purpose. They ship a reasonable-sounding exception to the rule, once, under pressure, and forget to ever undo it.',
      attribution: 'Dr. Sarah Chen, AI Research Lead',
    },
    heading('A Practical Checklist'),
    {
      type: 'list',
      items: [
        'Every known edge case gets a ticket, not just a mention in a meeting',
        'Deployment configs are reviewed against the original design doc before every release',
        'There is a named owner for post-launch monitoring, not just pre-launch review',
        'Users have a visible way to report a harmful or wrong output',
      ],
    },
  ],

  'no-code-ai-tools-2026': [
    {
      type: 'paragraph',
      text: 'We tell non-technical founders the same thing every cohort: you do not need to learn Python to ship a working AI product. You need to know which three or four tools to stack together, and where the ceiling of that stack actually is.',
    },
    heading("You Don't Need to Learn Python First"),
    {
      type: 'paragraph',
      text: 'The no-code AI stack in 2026 can genuinely take a founder from idea to a working, paying product — automations, a real database, and a model API connected without a single line of custom backend code.',
    },
    heading('The Stack We Actually Recommend'),
    {
      type: 'list',
      items: [
        'n8n or Zapier for orchestration and triggers',
        'Airtable or a lightweight Postgres front-end for structured data',
        'An LLM API (OpenAI or Claude) called directly through your automation tool',
        'A no-code frontend builder for the customer-facing surface',
      ],
    },
    {
      type: 'callout',
      variant: 'best-practice',
      title: 'Ship the ugly version before you customize it',
      text: 'Founders lose months polishing a no-code build before a single customer has used it. Ship the plain version, get five real users, then decide what is actually worth customizing.',
    },
    heading('Where No-Code Hits Its Ceiling'),
    {
      type: 'paragraph',
      text: 'The ceiling shows up predictably: once you need custom logic that branches more than a few levels deep, or performance at a scale your no-code tool was not built for. That is the right moment to bring in an engineer — not before.',
    },
    {
      type: 'quote',
      text: 'The founders who succeed with no-code are not the ones who avoid engineers forever. They are the ones who know exactly when to bring one in.',
      attribution: 'Elena Rodriguez, Motion Systems Specialist',
    },
  ],

  'llm-evaluation-metrics': [
    {
      type: 'paragraph',
      text: '"It feels better" is not an evaluation strategy, but it is how most teams actually decide whether a prompt change or model swap helped. That works fine at a demo. It falls apart the moment more than one person needs to trust the result.',
    },
    heading('Vibes Are Not a Metric'),
    {
      type: 'paragraph',
      text: 'The problem with vibes-based evaluation is not that it is wrong — it is that it does not scale past the person who has the vibe. A teammate cannot review, reproduce, or challenge a feeling. They can review a number.',
    },
    heading('Building an Evaluation Harness'),
    {
      type: 'paragraph',
      text: 'You do not need a research-grade evaluation pipeline to start. A fixed set of test cases, a scoring function, and a way to run both against every change is enough to catch the regressions that actually matter.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'eval_harness.py',
      code: `def run_eval(test_cases, generate_fn, score_fn):
    results = []
    for case in test_cases:
        output = generate_fn(case["input"])
        score = score_fn(output, case["expected"])
        results.append({"case": case["id"], "score": score})
    return results`,
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Freeze your test cases before you start optimizing',
      text: 'Teams that keep editing their eval set while tuning a prompt end up optimizing for the test, not the task. Lock the cases first, then iterate on the system.',
    },
    heading('The Metrics Worth Tracking'),
    {
      type: 'list',
      items: [
        'Task success rate against a fixed, human-labeled test set',
        'Hallucination rate on questions with a known ground truth',
        'Latency and cost per successful completion, not per call',
        'Regression rate between model or prompt versions',
      ],
    },
    {
      type: 'quote',
      text: 'The first time a teammate asks "how do we know this change actually helped," you want a number ready, not a demo.',
      attribution: 'James Wilson, Full Stack AI Engineer',
    },
  ],

  'portfolio-projects-that-get-interviews': [
    {
      type: 'paragraph',
      text: 'Hiring managers screening AI engineer applications will tell you the same thing: they have seen the same customer-support chatbot, the same PDF summarizer, and the same recipe generator hundreds of times. None of them prove you can do the job.',
    },
    heading('Why the Same Three Chatbots Keep Failing'),
    {
      type: 'paragraph',
      text: 'Those projects fail to differentiate not because they are bad ideas, but because they demonstrate the same skill — calling an API and formatting the response. Hiring managers are trying to assess judgment, not API familiarity.',
    },
    heading('Five Project Types That Stand Out'),
    {
      type: 'list',
      ordered: true,
      items: [
        'A project with a real evaluation harness, not just a working demo',
        'A project that handles a genuinely messy, real-world dataset',
        'A multi-agent or multi-step system with visible failure recovery',
        'A project you can show real usage data for, even from five users',
        'A project where you can clearly explain a tradeoff you chose against',
      ],
    },
    {
      type: 'callout',
      variant: 'best-practice',
      title: 'Lead with the tradeoff, not the tech stack',
      text: 'The strongest answer to "walk me through this project" starts with a decision you almost made differently, and why you did not. That is what signals judgment.',
    },
    heading('How to Present Them'),
    {
      type: 'paragraph',
      text: 'A project with a build log, a short write-up of what you would do differently, and honest numbers on where it still fails will consistently beat a polished demo with none of those things attached.',
    },
    {
      type: 'quote',
      text: 'I have hired candidates whose projects were rougher than others, because they could tell me exactly where and why it broke. That is the signal.',
      attribution: 'Elena Rodriguez, Motion Systems Specialist',
    },
  ],

  'data-science-dashboards-stakeholders-use': [
    {
      type: 'paragraph',
      text: 'The technical bar for shipping a dashboard is lower than it has ever been. The bar for building one a stakeholder actually opens every week, without being told to, is much higher — and almost nobody teaches that second skill.',
    },
    heading('The Low Bar and the Real Bar'),
    {
      type: 'paragraph',
      text: 'Any modern BI tool can connect to a data source and render a chart in an afternoon. That clears the low bar. The real bar is whether the dashboard answers a question the stakeholder actually asks themselves during their week — not a question the analyst found interesting.',
    },
    heading('What Makes a Dashboard Sticky'),
    {
      type: 'paragraph',
      text: 'The dashboards people return to unprompted share a pattern: they are built around one specific weekly decision, not a general-purpose overview of "everything about the business."',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Interview the decision, not the data',
      text: 'Before building anything, ask the stakeholder what decision they make every week and what they currently use to make it. Design the dashboard around replacing that, specifically.',
    },
    heading('A Pre-Launch Checklist'),
    {
      type: 'list',
      items: [
        'It answers one specific, named weekly decision',
        'It loads in under a few seconds, every time, not just in a demo',
        'The first thing on the page is the number that matters most, not a filter panel',
        'A stakeholder who has never seen it can explain what it shows in ten seconds',
      ],
    },
    {
      type: 'quote',
      text: 'A dashboard nobody asked to see is a report. A dashboard built around one real decision is a habit.',
      attribution: 'Dr. Sarah Chen, AI Research Lead',
    },
  ],
};

export type ArticleAuthorProfile = {
  name: string;
  role: string;
  image: string;
  experience: string;
  bio: string;
  socials: Mentor['socials'];
};

function buildAuthorBio(mentor: Mentor): string {
  return `${mentor.role} at Metawaves AI with ${mentor.experience.replace(' experience', '')} of experience shipping real AI products. Writes about the practical, occasionally unglamorous decisions behind building and teaching AI systems that hold up in production.`;
}

export function getAuthorProfile(authorName: string): ArticleAuthorProfile {
  const mentor = MENTORS.find((entry) => entry.name === authorName) ?? MENTORS[0];
  return {
    name: mentor.name,
    role: mentor.role,
    image: mentor.image,
    experience: mentor.experience,
    bio: buildAuthorBio(mentor),
    socials: mentor.socials,
  };
}

export type GeneratedArticleContent = {
  blocks: ArticleBlock[];
  toc: TocItem[];
  relatedProjects: Project[];
  authorProfile: ArticleAuthorProfile;
};

export function generateArticleContent(article: Article): GeneratedArticleContent {
  const blocks = ARTICLE_BLOCKS[article.slug] ?? [];
  const toc: TocItem[] = blocks
    .filter((block): block is Extract<ArticleBlock, { type: 'heading' }> => block.type === 'heading')
    .map((block) => ({ id: block.id, text: block.text }));

  const relatedProjectIds = RELATED_PROJECT_IDS[article.category] ?? [];
  const relatedProjects = relatedProjectIds
    .map((id) => PROJECTS.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));

  return {
    blocks,
    toc,
    relatedProjects,
    authorProfile: getAuthorProfile(article.author.name),
  };
}
