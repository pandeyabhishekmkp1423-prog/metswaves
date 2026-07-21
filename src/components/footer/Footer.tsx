import { BottomBar } from './BottomBar';
import { FooterNav } from './FooterNav';
import { PartnerStrip } from './PartnerStrip';

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