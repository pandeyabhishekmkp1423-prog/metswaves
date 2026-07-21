import { BottomBar } from '../footer/BottomBar';
import { FooterNav } from '../footer/FooterNav';
import { PartnerStrip } from '../footer/PartnerStrip';

export function Footer() {
  return (
    <footer id="footer" className="bg-navy pt-12 text-white">
      <div className="section-shell">
        <PartnerStrip />
        <FooterNav />
        <BottomBar />
      </div>
    </footer>
  );
}