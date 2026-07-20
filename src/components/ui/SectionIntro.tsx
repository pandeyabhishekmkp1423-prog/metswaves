type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl';

  return (
    <div className={alignment}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-[28px] font-bold text-navy sm:text-[34px] md:text-[42px]">
        {title}
      </h2>
      <p className="mt-5 text-base text-text-secondary md:text-lg">{description}</p>
    </div>
  );
}
