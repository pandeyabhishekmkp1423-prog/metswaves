import { ArrowRight } from 'lucide-react';
import { handleAnchorClick } from '../../utils';
import { MagneticButton } from '../ui/MagneticButton';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14 px-6 pb-20 pt-10 md:px-12 lg:min-h-[720px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-20 lg:pb-24 lg:pt-12">
        <div className="w-full lg:w-[55%]">
          <h1 className="font-heading text-center text-[38px] font-extrabold leading-[1.05] tracking-[-2px] text-navy md:text-[56px] lg:text-left lg:text-[72px]">
            Learn AI Skills
            <br />
            That{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#4F8CFF] bg-clip-text text-transparent">
              Build Careers.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[650px] text-center text-[17px] font-medium leading-[1.75] text-[#475569] md:text-[20px] lg:mx-0 lg:text-left lg:text-[22px]">
            Master Generative AI, Prompt Engineering, AI Automation, Machine Learning and industry-ready workflows
            through expert-led courses, practical projects and career-focused learning paths.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <MagneticButton
              href="/courses"
              onClick={(event) => handleAnchorClick(event, '/courses')}
              className="button-glow inline-flex h-14 items-center justify-center gap-2 rounded-[14px] bg-[#2563EB] px-8 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#1D4ED8]"
            >
              Explore Courses
              <ArrowRight size={17} />
            </MagneticButton>

            <MagneticButton
              href="/learning-paths"
              onClick={(event) => handleAnchorClick(event, '/learning-paths')}
              className="button-glow inline-flex h-14 items-center justify-center rounded-[14px] border border-[#CBD5E1] bg-white px-8 text-[15px] font-semibold text-navy transition-colors duration-200 hover:bg-gray-50"
            >
              View Career Tracks
            </MagneticButton>
          </div>
        </div>

        <div className="w-full max-w-[320px] sm:max-w-[380px] lg:w-[45%] lg:max-w-[440px]">
          <img
            src="/avatar.png"
            alt="Metawaves AI mascot"
            className="mx-auto h-auto w-full object-contain"
            loading="eager"
            decoding="sync"
          />
        </div>
      </div>
    </section>
  );
}
