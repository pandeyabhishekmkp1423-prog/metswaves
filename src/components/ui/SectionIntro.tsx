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
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}
