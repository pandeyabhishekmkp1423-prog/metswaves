import type { CourseModule } from '../../data/courseContent';
import { CourseCurriculum } from '../courses/CourseCurriculum';
import { Reveal } from '../ui/Reveal';

type CurriculumTimelineProps = {
  modules: CourseModule[];
};

export function CurriculumTimeline({ modules }: CurriculumTimelineProps) {
  return (
    <div id="curriculum">
      <Reveal>
        <h2 className="text-2xl font-semibold text-navy sm:text-[28px]">Curriculum</h2>
        <p className="mt-2 text-text-secondary">A week-by-week path from first principles to a shipped project.</p>
      </Reveal>
      <div className="mt-6">
        <CourseCurriculum modules={modules} />
      </div>
    </div>
  );
}
