import { lazy, Suspense, useEffect, useMemo, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Instagram,
  Linkedin,
  Play,
  Quote,
  Search,
  Star,
  Twitter,
  Volume2,
} from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Accordion } from './components/ui/Accordion';
import { MagneticButton } from './components/ui/MagneticButton';
import { Reveal } from './components/ui/Reveal';
import { SectionIntro } from './components/ui/SectionIntro';
import { TiltCard } from './components/ui/TiltCard';
import { useLenis } from './hooks/useLenis';
import { handleAnchorClick } from './utils';
import {
  ABOUT_PILLARS,
  BLOG_POSTS,
  CONTACT_CHANNELS,
  COURSES,
  EVENTS,
  EVENT_META_ICONS,
  FAQS,
  FEATURES,
  GALLERY_ITEMS,
  MENTORS,
  STATS,
  TESTIMONIALS,
  VIDEO_HIGHLIGHTS,
  WHY_CHOOSE_US,
} from './constants';

const HeroScene = lazy(() => import('./components/3d/HeroScene'));

gsap.registerPlugin(ScrollTrigger);

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-white"
      exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex flex-col items-center gap-6">
        <img src="/logo-navy.png" alt="Metawaves AI" className="loader-logo h-8 w-auto" />
        <div className="loader-track" />
      </div>
    </motion.div>
  );
}

function HeroCanvas({ mobile }: { mobile: boolean }) {
  return (
    <Suspense
      fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-white/60" />
        </div>
      }
    >
      <HeroScene mobile={mobile} />
    </Suspense>
  );
}

type HeroSectionProps = {
  mobile: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
};

function HeroSection({ mobile, query, onQueryChange, onSearchSubmit }: HeroSectionProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit();
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-[0.14]"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.85)_38%,rgba(248,250,252,0.97)_100%)]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.10),transparent_38%),radial-gradient(circle_at_85%_12%,rgba(96,165,250,0.09),transparent_32%)]" />

      <div className="section-shell relative z-10 flex min-h-screen items-center pt-28">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Immersive AI Education</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-4xl text-[32px] font-extrabold text-navy sm:text-[40px] md:text-[48px] xl:text-[64px]">
                Start Your
                <span className="block bg-[linear-gradient(135deg,#2563EB_0%,#60A5FA_100%)] bg-clip-text text-transparent">
                  AI-Powered
                </span>
                Career Journey
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base text-text-secondary sm:text-lg">
                A high-conviction learning platform for builders, designers, and operators who want premium skills,
                portfolio depth, and real market momentum.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex w-full max-w-xl items-center gap-1.5 rounded-premium border border-border-soft bg-white p-2 shadow-[0_1px_3px_rgba(16,24,40,0.06)] transition focus-within:border-accent-blue/40 sm:gap-2"
              >
                <Search size={18} className="ml-2.5 flex-none text-gray-400 sm:ml-3" />
                <label className="sr-only" htmlFor="hero-course-search">
                  Search courses
                </label>
                <input
                  id="hero-course-search"
                  type="text"
                  value={query}
                  onChange={(event) => onQueryChange(event.target.value)}
                  placeholder="Search courses..."
                  className="w-full min-w-0 bg-transparent py-3 text-navy placeholder:text-gray-400 outline-none"
                />
                <button
                  type="submit"
                  className="btn-premium button-glow inline-flex flex-none items-center gap-2 px-4 py-3 text-sm sm:px-5"
                >
                  Search
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <MagneticButton
                  href="#courses"
                  onClick={(event) => handleAnchorClick(event, '#courses')}
                  className="btn-premium button-glow inline-flex items-center justify-center gap-2 px-7 py-4"
                >
                  Explore Cohorts
                  <ArrowRight size={18} />
                </MagneticButton>
                <MagneticButton
                  href="#video"
                  onClick={(event) => handleAnchorClick(event, '#video')}
                  className="btn-secondary button-glow inline-flex items-center justify-center gap-3 px-7 py-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
                    <Play size={16} className="ml-0.5" />
                  </span>
                  Watch the Experience
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  ['4.9/5', 'student satisfaction score'],
                  ['12k+', 'community members and alumni'],
                  ['94%', 'project completion rate'],
                ].map(([value, label]) => (
                  <div key={label} className="surface-card p-3 sm:p-4">
                    <p className="font-ui text-2xl font-bold text-navy sm:text-3xl">{value}</p>
                    <p className="mt-2 text-xs text-text-secondary sm:text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="relative hidden lg:block">
            <div className="relative ml-auto max-w-xl" data-parallax data-depth="80">
              <div className="relative overflow-hidden rounded-premium border border-navy/10 bg-navy p-6 shadow-[0_24px_60px_rgba(7,19,39,0.32)]">
                <div className="absolute inset-0 opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]">
                  <HeroCanvas mobile={mobile} />
                </div>
                <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-accent-blue/25 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent-blue-light/15 blur-3xl" />
                <div className="relative z-10 grid gap-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue-light">
                      Neural Dashboard
                    </span>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Live</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[16px] border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
                      <p className="text-sm text-white/60">Current learner focus</p>
                      <p className="mt-3 font-ui text-2xl font-semibold text-white">Prompt Systems</p>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[82%] rounded-full bg-[linear-gradient(90deg,#3b82f6,#60a5fa)]" />
                      </div>
                    </div>
                    <div className="rounded-[16px] border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
                      <p className="text-sm text-white/60">Next launch window</p>
                      <p className="mt-3 font-ui text-2xl font-semibold text-white">May Cohort</p>
                      <p className="mt-2 text-sm text-accent-blue-light">Admissions open for creators and engineers</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-[16px] border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
                    <div>
                      <p className="text-sm text-white/60">Sound design hook</p>
                      <p className="mt-2 text-lg font-medium text-white">Spatial intro ready for Web Audio layering</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[16px] border border-white/10 bg-white/10 text-accent-blue-light">
                      <Volume2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function App() {
  useLenis();

  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [courseQuery, setCourseQuery] = useState('');

  useEffect(() => {
    const updateDeviceState = () => setIsMobile(window.innerWidth < 768);
    updateDeviceState();

    window.addEventListener('resize', updateDeviceState);
    return () => window.removeEventListener('resize', updateDeviceState);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const depth = Number(element.dataset.depth ?? 60);
        gsap.fromTo(
          element,
          { y: 0 },
          {
            y: depth,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-rotate]').forEach((element) => {
        gsap.fromTo(
          element,
          { rotate: -8, scale: 0.94 },
          {
            rotate: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 35%',
              scrub: true,
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);

  const heroLogos = useMemo(
    () => ['OpenAI Workflows', 'Cohort Labs', 'Design Ops', 'Career Launchpad'],
    [],
  );

  const filteredCourses = useMemo(() => {
    const query = courseQuery.trim().toLowerCase();
    if (!query) return COURSES;
    return COURSES.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.tag.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query),
    );
  }, [courseQuery]);

  const handleCourseSearchSubmit = () => {
    document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-text-primary">
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>

      <Navbar />

      <main className="relative z-10">
        <HeroSection
          mobile={isMobile}
          query={courseQuery}
          onQueryChange={setCourseQuery}
          onSearchSubmit={handleCourseSearchSubmit}
        />

        <section className="relative z-10 border-y border-border-soft bg-bg-secondary">
          <div className="section-shell !py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm uppercase tracking-[0.32em] text-gray-400">
              {heroLogos.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section-shell bg-white">
          <Reveal>
            <SectionIntro
              eyebrow="Features"
              title="A polished learning environment with depth, motion, and measurable outcomes."
              description="Every layer of the experience is designed to feel intentional: premium visuals, studio-style mentorship, and coursework built for the AI economy."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 0.08}>
                  <TiltCard className="surface-card card-hover h-full p-6">
                    <div className="flex h-full flex-col">
                      <div className="icon-chip">
                        <Icon size={24} />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-navy">{feature.title}</h3>
                      <p className="mt-4 text-text-secondary">{feature.description}</p>
                      <span className="mt-auto pt-8 text-sm uppercase tracking-[0.24em] text-accent-blue">Premium track</span>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="about" className="section-shell bg-bg-secondary">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative">
              <div className="grid grid-cols-2 gap-4" data-rotate>
                <div className="surface-card space-y-4 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
                    alt="Students collaborating"
                    className="h-60 w-full rounded-[16px] object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="glass-panel p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-text-secondary">Studio Signal</p>
                    <p className="mt-3 text-2xl font-semibold text-navy">10+ years</p>
                    <p className="mt-2 text-sm text-text-secondary">of refined curriculum evolution for digital-first careers.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=900"
                    alt="Immersive classroom"
                    className="surface-card h-52 w-full object-cover p-2"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=900"
                    alt="Mentor feedback"
                    className="surface-card h-72 w-full object-cover p-2"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionIntro
                eyebrow="About"
                title="Our learning system is built to feel like a product studio, not a classroom."
                description="Metawaves AI combines technical rigor, design taste, and career positioning into one immersive environment. Students do not just consume content, they rehearse real workflows."
              />
              <div className="mt-10 space-y-5">
                {ABOUT_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="glass-panel flex gap-4 p-5">
                      <div className="icon-chip h-12 w-12 flex-none">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-navy">{pillar.title}</h3>
                        <p className="mt-2 text-sm text-text-secondary">{pillar.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="stats" className="section-shell bg-white">
          <Reveal>
            <SectionIntro
              eyebrow="Stats"
              title="Confidence-building proof points for students, teams, and hiring partners."
              description="The platform is designed around visible progress and market relevance, so the numbers feel earned rather than decorative."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="surface-card card-hover h-full p-6 text-center">
                    <div className="icon-chip mx-auto h-16 w-16">
                      <Icon size={28} />
                    </div>
                    <p className="font-ui mt-6 text-5xl font-bold text-navy">{stat.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.28em] text-text-secondary">{stat.label}</p>
                    <p className="mt-4 text-sm text-text-secondary">{stat.detail}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="courses" className="section-shell bg-bg-alt">
          <Reveal>
            <SectionIntro
              eyebrow="Courses"
              title="Modular programs with premium interaction design and serious depth."
              description="Each card carries motion, hierarchy, and depth to reinforce that these are high-value learning products rather than commodity classes."
            />
          </Reveal>

          {filteredCourses.length === 0 ? (
            <div className="surface-card mt-14 flex flex-col items-center gap-3 p-12 text-center">
              <p className="text-lg text-navy">No courses match "{courseQuery}"</p>
              <button
                type="button"
                onClick={() => setCourseQuery('')}
                className="text-sm font-medium text-accent-blue hover:text-navy"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course, index) => {
                const Icon = course.icon;
                return (
                  <Reveal key={course.id} delay={index * 0.05}>
                    <TiltCard className="surface-card card-hover flex h-full flex-col p-3">
                      <div className="relative overflow-hidden rounded-[16px]">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                        <span className="badge-pill absolute left-4 top-4 border-white/15 bg-navy/75 text-white">{course.tag}</span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.24em] text-text-secondary">{course.level}</span>
                          <div className="icon-chip h-11 w-11">
                            <Icon size={20} />
                          </div>
                        </div>
                        <h3 className="mt-5 text-2xl font-semibold text-navy">{course.title}</h3>
                        <p className="mt-3 text-text-secondary">{course.description}</p>
                        <p className="mt-4 text-sm text-text-secondary">
                          by <span className="text-navy">{course.instructor}</span>
                        </p>
                        <div className="mt-5 flex items-center justify-between text-sm text-text-secondary">
                          <span>{course.duration}</span>
                          <span className="flex items-center gap-1 text-amber-500">
                            <Star size={14} className="fill-current" />
                            {course.rating}
                          </span>
                          <span>{course.students}</span>
                        </div>
                        <div className="mt-6 flex items-center justify-between border-t border-border-soft pt-5">
                          <span className="text-xl font-semibold text-navy">{course.price}</span>
                          <MagneticButton
                            href="#contact"
                            onClick={(event) => handleAnchorClick(event, '#contact')}
                            className="btn-premium button-glow inline-flex items-center gap-1.5 px-4 py-2.5 text-sm"
                          >
                            Enroll
                            <ArrowRight size={14} />
                          </MagneticButton>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          )}
        </section>

        <section id="video" className="section-shell bg-white">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="surface-card relative overflow-hidden p-4">
                <div className="relative overflow-hidden rounded-[16px] border border-border-soft">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1400"
                    alt="Metawaves AI video preview"
                    className="h-[420px] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,39,0.05),rgba(7,19,39,0.55))]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MagneticButton
                      href="#contact"
                      onClick={(event) => handleAnchorClick(event, '#contact')}
                      className="button-glow flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md"
                    >
                      <Play size={30} className="ml-1 text-white" />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <SectionIntro
                eyebrow="Video"
                title="Cinematic, mentor-led lessons with room for future sound design hooks."
                description="The video layer is framed like a premium product reveal. It is ready for ambient audio, expert walkthroughs, and richer launch storytelling."
              />
              <div className="mt-8 grid gap-4">
                {VIDEO_HIGHLIGHTS.map((item) => (
                  <div key={item} className="glass-panel flex items-center gap-4 px-5 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
                      <Check size={18} />
                    </div>
                    <span className="text-text-primary/90">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="teachers" className="section-shell bg-bg-secondary">
          <Reveal>
            <SectionIntro
              eyebrow="Teachers"
              title="Mentors who combine technical depth with creative standards."
              description="These profiles are treated like product talent cards, with elevated surfaces, restrained motion, and premium spacing."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {MENTORS.map((mentor, index) => (
              <Reveal key={mentor.name} delay={index * 0.05}>
                <TiltCard className="surface-card card-hover h-full p-3">
                  <div className="relative overflow-hidden rounded-[16px]">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="h-72 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <span className="badge-pill absolute left-4 top-4 border-white/15 bg-navy/75 text-white">{mentor.experience}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-2xl font-semibold text-navy">{mentor.name}</h3>
                    <p className="mt-2 text-text-secondary">{mentor.role}</p>
                    <div className="mt-5 flex gap-2">
                      <a
                        href={mentor.socials.twitter}
                        aria-label={`${mentor.name} on Twitter`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
                      >
                        <Twitter size={15} />
                      </a>
                      <a
                        href={mentor.socials.linkedin}
                        aria-label={`${mentor.name} on LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
                      >
                        <Linkedin size={15} />
                      </a>
                      <a
                        href={mentor.socials.instagram}
                        aria-label={`${mentor.name} on Instagram`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-gray-50 text-text-secondary transition hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue"
                      >
                        <Instagram size={15} />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="why-choose-us" className="section-shell bg-white">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionIntro
                eyebrow="Why Choose Us"
                title="A learning brand that feels premium because the system behind it is premium."
                description="We pair visual confidence with operational clarity so students can trust what they are stepping into."
              />
            </Reveal>
            <div className="grid gap-5">
              {WHY_CHOOSE_US.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Reveal key={reason.title} delay={index * 0.08}>
                    <div className="surface-card card-hover flex items-start gap-5 p-6">
                      <div className="icon-chip h-14 w-14 flex-none">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-navy">{reason.title}</h3>
                        <p className="mt-3 text-text-secondary">{reason.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="gallery" className="section-shell bg-bg-secondary">
          <Reveal>
            <SectionIntro
              eyebrow="Gallery"
              title="A textured visual layer that keeps the site feeling alive between major content beats."
              description="This section uses cinematic crops and staggered depth to create a smoother narrative transition through the page."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {GALLERY_ITEMS.map((image, index) => (
              <Reveal key={image} delay={index * 0.06}>
                <div className={`surface-card overflow-hidden p-3 ${index % 3 === 0 ? 'md:-translate-y-6' : ''}`} data-parallax data-depth={String(40 + index * 10)}>
                  <img
                    src={image}
                    alt={`Metawaves gallery ${index + 1}`}
                    className="h-[280px] w-full rounded-[16px] object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="events" className="section-shell bg-white">
          <Reveal>
            <SectionIntro
              eyebrow="Events"
              title="High-signal events framed like premium launches rather than plain calendar entries."
              description="Every event module keeps the same refined visual language while still surfacing key logistics quickly."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 xl:grid-cols-3">
            {EVENTS.map((event, index) => {
              const DateIcon = EVENT_META_ICONS.date;
              const TimeIcon = EVENT_META_ICONS.time;
              const LocationIcon = EVENT_META_ICONS.location;

              return (
                <Reveal key={event.title} delay={index * 0.05}>
                  <TiltCard className="surface-card card-hover h-full p-3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-56 w-full rounded-[16px] object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-5">
                      <h3 className="text-2xl font-semibold text-navy">{event.title}</h3>
                      <div className="mt-5 space-y-3 text-sm text-text-secondary">
                        <div className="flex items-center gap-3">
                          <DateIcon size={16} className="text-accent-blue" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <TimeIcon size={16} className="text-accent-blue" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <LocationIcon size={16} className="text-accent-blue" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="contact" className="section-shell bg-bg-alt">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <Reveal>
              <SectionIntro
                eyebrow="Contact"
                title="A high-trust admissions touchpoint with premium depth and zero friction."
                description="The form and contact channels feel elevated without slowing the user down. This is where the sales experience becomes tangible."
              />
              <div className="mt-8 grid gap-4">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div key={channel.title} className="glass-panel flex gap-4 p-5">
                      <div className="icon-chip h-12 w-12 flex-none">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-text-secondary">{channel.title}</p>
                        <p className="mt-2 text-lg font-medium text-navy">{channel.value}</p>
                        <p className="mt-2 text-sm text-text-secondary">{channel.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form className="surface-card grid gap-5 p-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm text-text-secondary">Name</span>
                    <input className="input-premium" type="text" placeholder="Your name" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm text-text-secondary">Email</span>
                    <input className="input-premium" type="email" placeholder="you@example.com" />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm text-text-secondary">Goal</span>
                    <input className="input-premium" type="text" placeholder="Switch into AI product work" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm text-text-secondary">Preferred track</span>
                    <input className="input-premium" type="text" placeholder="AI & Machine Learning" />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm text-text-secondary">Message</span>
                  <textarea className="input-premium min-h-36 resize-none" placeholder="Tell us where you are and where you want to go." />
                </label>
                <MagneticButton type="submit" className="btn-premium button-glow inline-flex items-center justify-center gap-2 px-6 py-4">
                  Book a Strategy Call
                  <ChevronRight size={18} />
                </MagneticButton>
              </form>
            </Reveal>
          </div>
        </section>

        <section id="testimonials" className="section-shell bg-white">
          <Reveal>
            <SectionIntro
              eyebrow="Testimonials"
              title="Social proof framed with the confidence of a high-end product page."
              description="These cards carry depth, clarity, and restrained glow so the message feels credible instead of overdesigned."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.05}>
                <div className="surface-card card-hover h-full p-6">
                  <Quote className="text-accent-blue" />
                  <p className="mt-6 text-lg text-text-primary/90">{testimonial.comment}</p>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full border border-border-soft object-cover"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-medium text-navy">{testimonial.name}</p>
                          <BadgeCheck size={15} className="text-accent-blue" aria-label="Verified student" />
                        </div>
                        <p className="text-sm text-text-secondary">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                        <Star key={starIndex} size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="blog" className="section-shell bg-bg-secondary">
          <Reveal>
            <SectionIntro
              eyebrow="Blog"
              title="Editorial-style article cards to finish the journey with signal and authority."
              description="The last content block keeps the same premium tone while giving the brand an intelligent publishing surface."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 xl:grid-cols-3">
            {BLOG_POSTS.map((post, index) => (
              <Reveal key={post.title} delay={index * 0.05}>
                <TiltCard className="surface-card card-hover h-full p-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-56 w-full rounded-[16px] object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-gray-400">{post.date}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-navy">{post.title}</h3>
                    <p className="mt-3 text-text-secondary">{post.excerpt}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="faq" className="section-shell bg-white pb-32">
          <Reveal>
            <SectionIntro
              eyebrow="FAQ"
              title="Straight answers before you commit your time and budget."
              description="The most common questions from students, parents, and working professionals evaluating a cohort."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 max-w-3xl">
            <Accordion items={FAQS} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
