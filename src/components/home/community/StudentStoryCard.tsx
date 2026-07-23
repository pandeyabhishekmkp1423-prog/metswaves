import type { StudentStory } from '../../../constants';
import { TiltCard } from '../../ui/TiltCard';

type StudentStoryCardProps = {
  story: StudentStory;
};

export function StudentStoryCard({ story }: StudentStoryCardProps) {
  const initials = story.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <TiltCard className="group h-full rounded-[20px]">
      <div className="surface-card card-hover flex h-full flex-col p-5 sm:p-6">
        <span
          className={`flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${story.gradient}`}
        >
          {initials}
        </span>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-navy">&ldquo;{story.quote}&rdquo;</p>
        <div className="mt-4 border-t border-border-soft pt-3">
          <p className="text-sm font-semibold text-navy">{story.name}</p>
          <p className="text-xs text-text-secondary">{story.outcome}</p>
        </div>
      </div>
    </TiltCard>
  );
}
