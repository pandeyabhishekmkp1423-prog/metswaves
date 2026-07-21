import type { LucideIcon } from 'lucide-react';

type MegaMenuCardProps = {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  badge?: string;
  meta?: string;
  onClick: () => void;
};

export function MegaMenuCard({ title, description, image, icon: Icon, badge, meta, onClick }: MegaMenuCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="surface-card card-hover flex w-full items-start gap-3 p-3 text-left"
    >
      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-14 w-14 flex-none rounded-[12px] object-cover"
        />
      ) : Icon ? (
        <div className="icon-chip h-14 w-14 flex-none">
          <Icon size={22} />
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="line-clamp-2 font-ui text-sm font-semibold text-navy">{title}</p>
          {badge ? <span className="badge-pill flex-none py-0.5 text-[10px]">{badge}</span> : null}
        </div>
        <p className="mt-1 line-clamp-2 text-xs text-text-secondary">{description}</p>
        {meta ? <p className="mt-1 text-xs font-semibold text-accent-blue">{meta}</p> : null}
      </div>
    </button>
  );
}
