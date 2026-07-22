import type { LucideIcon } from 'lucide-react';

type ProjectMockupProps = {
  icon: LucideIcon;
  large?: boolean;
};

export function ProjectMockup({ icon: Icon, large = false }: ProjectMockupProps) {
  return (
    <div
      aria-hidden="true"
      className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.015]"
    >
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/30 to-purple-500/30 text-accent-blue-light shadow-[0_0_44px_rgba(59,130,246,0.25)] ${
            large ? 'h-20 w-20' : 'h-14 w-14'
          }`}
        >
          <Icon size={large ? 34 : 24} />
        </span>
      </div>

      <div className="absolute inset-x-4 bottom-3 space-y-1.5 opacity-40">
        <div className="h-1.5 w-3/4 rounded-full bg-white/30" />
        <div className="h-1.5 w-1/2 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
