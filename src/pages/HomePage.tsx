import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../components/home/Hero';
import { TrustCredibility } from '../components/home/TrustCredibility';
import { LogosStrip } from '../components/home/LogosStrip';
import { AboutSection } from '../components/home/AboutSection';
import { LearningUniverse } from '../components/home/LearningUniverse';
import { LearningMethodology } from '../components/home/LearningMethodology';
import { FeaturedCourses } from '../components/home/FeaturedCourses';
import { CoursesGrid } from '../components/home/CoursesGrid';
import { BuildRealProjects } from '../components/home/BuildRealProjects';
import { CareerJourney } from '../components/home/CareerJourney';
import { StudentShowcase } from '../components/home/StudentShowcase';
import { WhyMetaWavesWins } from '../components/home/WhyMetaWavesWins';
import { CommunitySection } from '../components/home/CommunitySection';
import { TeachersSection } from '../components/home/TeachersSection';
import { GallerySection } from '../components/home/GallerySection';
import { ContactSection } from '../components/home/ContactSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

gsap.registerPlugin(ScrollTrigger);

type HomePageProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export function HomePage({ query, onQueryChange }: HomePageProps) {
  useEffect(() => {
    if (!window.location.hash) return;

    const hash = window.location.hash;
    const target = document.querySelector(hash);
    if (target) {
      window.setTimeout(() => target.scrollIntoView({ behavior: 'auto', block: 'start' }), 50);
    }
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const depth = Number(element.dataset.depth ?? 60);
        gsap.fromTo(
          element,
          { y: 0 },
          {
            y: depth,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-rotate]').forEach((element) => {
        gsap.fromTo(
          element,
          { rotate: -8, scale: 0.94 },
          {
            rotate: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 35%',
              scrub: true,
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <Hero />
      <TrustCredibility />
      <LogosStrip />
      <AboutSection />
      <LearningUniverse />
      <LearningMethodology />
      <FeaturedCourses />
      <CoursesGrid query={query} onQueryChange={onQueryChange} />
      <BuildRealProjects />
      <CareerJourney />
      <StudentShowcase />
      <WhyMetaWavesWins />
      <CommunitySection />
      <TeachersSection />
      <GallerySection />
      <ContactSection />
      <TestimonialsSection />
    </>
  );
}
