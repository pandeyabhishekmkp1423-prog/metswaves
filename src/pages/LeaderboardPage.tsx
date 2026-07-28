import { ArrowRight, Medal } from 'lucide-react';
import { ResourceHero } from '../components/resources/ResourceHero';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { Reveal } from '../components/ui/Reveal';
import { SectionIntro } from '../components/ui/SectionIntro';
import { MagneticButton } from '../components/ui/MagneticButton';
import { handleAnchorClick } from '../utils';

const LEADERBOARD = [
  { rank: 1, name: 'Aditi R.', points: 4820, projects: 14 },
  { rank: 2, name: 'Zoe L.', points: 4390, projects: 12 },
  { rank: 3, name: 'Marco T.', points: 4110, projects: 11 },
  { rank: 4, name: 'Priya S.', points: 3860, projects: 10 },
  { rank: 5, name: 'Daniel K.', points: 3540, projects: 9 },
  { rank: 6, name: 'Hana W.', points: 3210, projects: 9 },
  { rank: 7, name: 'Owen P.', points: 2980, projects: 8 },
  { rank: 8, name: 'Ibrahim H.', points: 2760, projects: 7 },
];

const MEDAL_STYLES: Record<number, string> = {
  1: 'text-amber-500',
  2: 'text-slate-400',
  3: 'text-orange-700',
};

export function LeaderboardPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Community"
        title="Leaderboard"
        description="Points for shipping projects, winning challenges, and helping other members build."
      />

      <section className="section-shell bg-white">
        <Reveal>
          <SectionIntro eyebrow="This Month" title="Top builders in the community." description="Rankings reset monthly — every shipped project and challenge win adds points." />
        </Reveal>

        <div className="surface-card mt-10 divide-y divide-border-soft overflow-hidden">
          {LEADERBOARD.map((entry, index) => (
            <Reveal key={entry.name} delay={index * 0.04}>
              <div className="flex items-center gap-4 px-5 py-4 sm:px-7">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gray-50 text-sm font-semibold text-navy">
                  {entry.rank}
                </span>
                {MEDAL_STYLES[entry.rank] ? <Medal size={18} className={`flex-none ${MEDAL_STYLES[entry.rank]}`} /> : <span className="w-[18px] flex-none" />}
                <span className="flex-1 truncate font-medium text-navy">{entry.name}</span>
                <span className="flex-none text-sm text-text-secondary">{entry.projects} projects</span>
                <span className="flex-none text-sm font-semibold text-accent-blue">{entry.points.toLocaleString()} pts</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <MagneticButton
            href="/community"
            onClick={(event) => handleAnchorClick(event, '/community')}
            className="btn-premium button-glow inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Join the Community
            <ArrowRight size={18} />
          </MagneticButton>
        </Reveal>
      </section>

      <CoursesFinalCta />
    </>
  );
}
