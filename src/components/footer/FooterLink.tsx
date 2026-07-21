import { handleAnchorClick } from '../../utils';

type FooterLinkProps = {
  label: string;
  href: string;
};

export function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => handleAnchorClick(event, href)}
      className="group inline-flex w-fit items-center text-sm text-white/60 transition-colors duration-200 hover:text-white focus:outline-none focus:text-white"
    >
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">{label}</span>
    </a>
  );
}
