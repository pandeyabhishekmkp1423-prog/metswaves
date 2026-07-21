import {
  FOOTER_CAREER_TRACKS,
  FOOTER_CAREER_EXTRA_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_EXPLORE_TOPICS,
  FOOTER_EXPLORE_VIEW_ALL,
  FOOTER_RESOURCES_LINKS,
} from '../../constants';
import { FooterColumn } from './FooterColumn';

export function FooterNav() {
  return (
    <div className="grid grid-cols-1 gap-x-8 py-12 md:grid-cols-2 lg:grid-cols-4">
      <FooterColumn
        heading="Explore AI Learning"
        links={FOOTER_EXPLORE_TOPICS}
        emphasizedLink={FOOTER_EXPLORE_VIEW_ALL}
      />
      <FooterColumn
        heading="Career Tracks"
        links={FOOTER_CAREER_TRACKS}
        emphasizedLink={FOOTER_CAREER_EXTRA_LINKS[1]}
        extraLink={FOOTER_CAREER_EXTRA_LINKS[0]}
      />
      <FooterColumn heading="Resources" links={FOOTER_RESOURCES_LINKS} />
      <FooterColumn heading="Company" links={FOOTER_COMPANY_LINKS} />
    </div>
  );
}