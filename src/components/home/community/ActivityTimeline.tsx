import { WEEKLY_ACTIVITIES } from '../../../constants';
import { Reveal } from '../../ui/Reveal';

export function ActivityTimeline() {
  return (
    <div className="relative">
      <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-accent-blue/35 via-border-soft to-transparent sm:left-[23px]" />

      <div className="grid gap-5">
        {WEEKLY_ACTIVITIES.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <Reveal key={activity.id} delay={index * 0.07} className="relative flex gap-4">
              <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border-soft bg-white text-accent-blue shadow-[0_4px_14px_rgba(16,24,40,0.08)] sm:h-12 sm:w-12">
                <Icon size={17} />
              </span>
              <div className="min-w-0 pt-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-blue">{activity.day}</p>
                <p className="mt-0.5 text-sm font-bold text-navy sm:text-base">{activity.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-text-secondary sm:text-sm">{activity.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
