import { Users2 } from 'lucide-react';
import { STUDENT_STORIES } from '../../constants';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { ActivityTimeline } from './community/ActivityTimeline';
import { CommunityBackground } from './community/CommunityBackground';
import { CommunityPreview } from './community/CommunityPreview';
import { CommunityStats } from './community/CommunityStats';
import { StudentStoryCard } from './community/StudentStoryCard';

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <CommunityBackground />

      <div className="section-shell relative z-10">
        <Reveal>
          <SectionIntro
            eyebrow="Global Community"
            title="Join a Global AI Community"
            description="MetaWaves is more than courses — it's a thriving ecosystem where students collaborate, build, and grow together, every week."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <CommunityStats />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <Reveal delay={0.15}>
            <CommunityPreview />
          </Reveal>
          <Reveal delay={0.2}>
            <ActivityTimeline />
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">
            Student Stories
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STUDENT_STORIES.map((story, index) => (
              <Reveal key={story.id} delay={index * 0.06}>
                <StudentStoryCard story={story} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-16 flex flex-col items-center gap-5 text-center">
          <p className="max-w-xl text-base text-text-secondary md:text-lg">
            Your peers, mentors, and next collaborators are already here.
          </p>
          <MagneticButton
            href="#contact"
            onClick={(event) => handleAnchorClick(event, '#contact')}
            className="btn-premium button-glow inline-flex items-center gap-2 px-9 py-4 text-base"
          >
            <Users2 size={18} />
            Join the Community
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
