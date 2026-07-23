import { CommunityHero } from '../components/community/CommunityHero';
import { WhyJoinSection } from '../components/community/WhyJoinSection';
import { PlatformPreviewSection } from '../components/community/PlatformPreviewSection';
import { WeeklyActivitiesSection } from '../components/community/WeeklyActivitiesSection';
import { LearningCirclesSection } from '../components/community/LearningCirclesSection';
import { CommunityChallengesSection } from '../components/community/CommunityChallengesSection';
import { MentorshipSection } from '../components/community/MentorshipSection';
import { CommunityShowcaseSection } from '../components/community/CommunityShowcaseSection';
import { GuidelinesSummarySection } from '../components/community/GuidelinesSummarySection';
import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';

export function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <WhyJoinSection />
      <PlatformPreviewSection />
      <WeeklyActivitiesSection />
      <LearningCirclesSection />
      <CommunityChallengesSection />
      <MentorshipSection />
      <CommunityShowcaseSection />
      <GuidelinesSummarySection />
      <CoursesFinalCta />
    </>
  );
}
