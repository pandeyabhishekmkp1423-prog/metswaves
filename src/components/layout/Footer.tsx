import {
  FOOTER_CAREER_EXTRA_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_EXPLORE_TOPICS,
  FOOTER_EXPLORE_VIEW_ALL,
  FOOTER_LEGAL_LINKS,
  NAV_CAREER_TRACKS,
  NAV_RESOURCES,
} from '../../constants';
import { BottomBar } from '../footer/BottomBar';
import { FooterColumn } from '../footer/FooterColumn';
import { Newsletter } from '../footer/Newsletter';
import { PartnerStrip } from '../footer/PartnerStrip';

const careerLinks = [...NAV_CAREER_TRACKS.map(({ label, href }) => ({ label, href })), ...FOOTER_CAREER_EXTRA_LINKS];
const resourceLinks = NAV_RESOURCES.flatMap((column) => column.items).map(({ label, href }) => ({ label, href }));
const legalLinks = FOOTER_LEGAL_LINKS.map((label) => ({ label, href: '#' }));

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.08),transparent_28%)]" />

      <div className="relative z-10">
        <PartnerStrip />

        <div className="section-shell py-12!">
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_0.85fr_1.4fr] lg:gap-y-0">
            <FooterColumn heading="Explore AI Learning" links={FOOTER_EXPLORE_TOPICS} emphasizedLink={FOOTER_EXPLORE_VIEW_ALL} />
            <FooterColumn heading="Career Programs" links={careerLinks} />
            <FooterColumn heading="Resources" links={resourceLinks} />
            <FooterColumn heading="Company" links={FOOTER_COMPANY_LINKS} />
            <FooterColumn heading="Legal" links={legalLinks} />
            <Newsletter />
          </div>

          <div className="mt-10">
            <BottomBar />
          </div>
        </div>
      </div>
    </footer>
  );
}
