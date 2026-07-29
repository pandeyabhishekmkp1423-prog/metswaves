import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { GALLERY_ITEMS } from '../../constants';

export function GallerySection() {
  return (
    <section id="gallery" className="section-shell bg-bg-secondary">
      <Reveal>
        <SectionIntro
          eyebrow="Gallery"
          title="A textured visual layer that keeps the site feeling alive between major content beats."
          description="This section uses cinematic crops and staggered depth to create a smoother narrative transition through the page."
          align="center"
        />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {GALLERY_ITEMS.map((image, index) => (
          <Reveal key={image} delay={index * 0.06}>
            <div className={`surface-card overflow-hidden p-3 ${index % 3 === 0 ? 'md:-translate-y-6' : ''}`} data-parallax data-depth={String(40 + index * 10)}>
              <img
                src={image}
                alt={`Metawaves gallery ${index + 1}`}
                className="h-[280px] w-full rounded-[16px] object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
