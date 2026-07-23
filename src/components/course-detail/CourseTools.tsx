import type { AiTechnology } from '../../constants';
import { Reveal } from '../ui/Reveal';

type CourseToolsProps = {
  tools: AiTechnology[];
};

export function CourseTools({ tools }: CourseToolsProps) {
  return (
    <div id="tools">
      <Reveal>
        <h2 className="text-2xl font-semibold text-navy sm:text-[28px]">AI tools you'll master</h2>
        <p className="mt-2 text-text-secondary">Hands-on practice with the tools teams actually use in production.</p>
      </Reveal>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <Reveal key={tool.name} delay={index * 0.05}>
              <div className="surface-card card-hover flex h-full flex-col items-center gap-3 p-5 text-center">
                <span className="icon-chip h-12 w-12">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-medium text-navy">{tool.name}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
