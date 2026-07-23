import { PRICING_TRUST_BADGES } from '../../../constants';

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {PRICING_TRUST_BADGES.map((badge) => {
        const Icon = badge.icon;
        return (
          <div key={badge.label} className="flex items-center gap-2.5">
            <span className="icon-chip h-9 w-9">
              <Icon size={16} />
            </span>
            <span className="text-sm font-medium text-navy">{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
}
