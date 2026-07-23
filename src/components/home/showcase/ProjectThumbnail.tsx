import type { LucideIcon } from 'lucide-react';

type ProjectThumbnailProps = {
  icon: LucideIcon;
  gradient: string;
  large?: boolean;
};

export function ProjectThumbnail({ icon: Icon, gradient, large = false }: ProjectThumbnailProps) {
  return (
    <div aria-hidden="true" className="relative h-full w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className={`absolute inset-0 bg-gradient-to-br opacity-[0.10] ${gradient}`} />

      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-gray-300/80" />
        <span className="h-2 w-2 rounded-full bg-gray-300/80" />
        <span className="h-2 w-2 rounded-full bg-gray-300/80" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] ${gradient} ${
            large ? 'h-20 w-20' : 'h-14 w-14'
          }`}
        >
          <Icon size={large ? 34 : 24} />
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-4 space-y-1.5 opacity-40">
        <div className="h-1.5 w-3/4 rounded-full bg-gray-300" />
        <div className="h-1.5 w-1/2 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
