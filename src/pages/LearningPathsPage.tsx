import { CoursesFinalCta } from '../components/courses/CoursesFinalCta';
import { LearningPathsHero } from '../components/learning-paths/LearningPathsHero';
import { PathDetailSection } from '../components/learning-paths/PathDetailSection';
import { PathPhilosophy } from '../components/learning-paths/PathPhilosophy';
import { LEARNING_PATHS_DETAILED } from '../data/learningPathsPageContent';

export function LearningPathsPage() {
  return (
    <>
      <LearningPathsHero />
      <PathPhilosophy />
      {LEARNING_PATHS_DETAILED.map((path, index) => (
        <PathDetailSection key={path.id} path={path} index={index} />
      ))}
      <CoursesFinalCta />
    </>
  );
}
