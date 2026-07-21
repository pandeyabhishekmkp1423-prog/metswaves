import { EXPLORE_MENU } from '../../data/exploreMenu';
import { ExploreColumn } from './ExploreColumn';

type ExploreMenuProps = {
  onNavigate: () => void;
};

export function ExploreMenu({ onNavigate }: ExploreMenuProps) {
  return (
    <div className="flex">
      <ExploreColumn nodes={EXPLORE_MENU} depth={0} onNavigate={onNavigate} />
    </div>
  );
}
