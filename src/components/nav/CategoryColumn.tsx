import type { LucideIcon } from 'lucide-react';

export type Category = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type CategoryColumnProps = {
  categories: Category[];
  activeId: string | null;
  onHover: (id: string) => void;
};

export function CategoryColumn({ categories, activeId, onHover }: CategoryColumnProps) {
  return (
    <div className="flex flex-col gap-1">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeId === category.id;
        return (
          <button
            key={category.id}
            type="button"
            onMouseEnter={() => onHover(category.id)}
            onFocus={() => onHover(category.id)}
            className={`flex items-center gap-3 rounded-[14px] px-4 py-3 text-left transition-colors duration-200 ${
              isActive ? 'bg-accent-blue/10 text-accent-blue' : 'text-text-secondary hover:bg-gray-50 hover:text-navy'
            }`}
          >
            <Icon size={18} className="flex-none" />
            <span className="font-ui text-sm font-medium">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
