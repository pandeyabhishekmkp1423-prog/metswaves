import { FEATURES } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { TiltCard } from '../ui/TiltCard';

export function FeaturesSection() {
  return (
    <section id="features" className="section-shell bg-slate-50/50 pt-0 pb-16">
      {/* Header Section */}
      <Reveal>
        <SectionIntro
          eyebrow="Features"
          title="A polished learning environment with depth, motion, and measurable outcomes."
          description="Every layer of the experience is designed to feel intentional: premium visuals, studio-style mentorship, and coursework built for the AI economy."
        />
      </Reveal>

      {/* Grid: 2 columns on Mobile, 4 columns on Desktop */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={index * 0.08} className="h-full">
              <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10">
                
                {/* Glow / Light-up Gradient Background Effect on Hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    {/* Light-up Icon Container */}
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-slate-900 sm:text-lg sm:font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 sm:text-sm line-clamp-3 leading-relaxed sm:line-clamp-none">
                      {feature.description}
                    </p>
                  </div>

                  {/* Footer Badge */}
                  <div className="mt-5 sm:mt-8 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors duration-300 group-hover:bg-indigo-500" />
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase sm:text-xs group-hover:text-indigo-600 transition-colors">
                      Premium track
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}