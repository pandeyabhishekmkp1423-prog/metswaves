import { AboutHero } from '../components/about/AboutHero';
import { AboutUsIntro } from '../components/about/AboutUsIntro';
import { MissionStatement } from '../components/about/MissionStatement';
import { WhyWeExist } from '../components/about/WhyWeExist';
import { StoryTimeline } from '../components/about/StoryTimeline';
import { CoreValues } from '../components/about/CoreValues';
import { HowWeTeach } from '../components/about/HowWeTeach';
import { TeamSection } from '../components/about/TeamSection';
import { ImpactStats } from '../components/about/ImpactStats';
import { VisionSection } from '../components/about/VisionSection';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutUsIntro />
      <MissionStatement />
      <WhyWeExist />
      <StoryTimeline />
      <CoreValues />
      <HowWeTeach />
      <TeamSection />
      <ImpactStats />
      <VisionSection />
      <CoursesFinalCta />
    </>
  );
}
