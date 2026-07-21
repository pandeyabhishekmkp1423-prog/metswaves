import { useState } from 'react';
import { Star, Waypoints } from 'lucide-react';
import { COURSES, LEARNING_PATHS, MENTORS } from '../../constants';
import { CategoryColumn } from './CategoryColumn';
import { MegaMenuCard } from './MegaMenuCard';

type MegaMenuProps = {
  onSelectCourse: (title: string) => void;
};

export function MegaMenu({ onSelectCourse }: MegaMenuProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const categories = COURSES.map((course) => ({ id: course.id, label: course.tag, icon: course.icon }));
  const activeCourse = COURSES.find((course) => course.id === activeId) ?? null;
  const trending = [...COURSES].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const pathCourse = (courseId: string) => COURSES.find((course) => course.id === courseId);

  return (
    <div className="grid w-[860px] max-w-[88vw] grid-cols-[240px_1fr]" onMouseLeave={() => setActiveId(null)}>
      <div className="border-r border-border-soft p-4">
        <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Categories</p>
        <CategoryColumn categories={categories} activeId={activeId} onHover={setActiveId} />
      </div>

      <div className="max-h-[520px] overflow-y-auto p-6">
        {activeCourse ? (
          <div className="grid gap-6 sm:grid-cols-[1.05fr_0.95fr]">
            <img
              src={activeCourse.image}
              alt={activeCourse.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-56 w-full rounded-[16px] object-cover"
            />
            <div>
              <span className="badge-pill">{activeCourse.level}</span>
              <h3 className="mt-3 text-xl font-semibold text-navy">{activeCourse.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{activeCourse.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-text-secondary">
                <span>{activeCourse.duration}</span>
                <span className="flex items-center gap-1 text-amber-500">
                  <Star size={14} className="fill-current" />
                  {activeCourse.rating}
                </span>
                <span className="font-semibold text-navy">{activeCourse.price}</span>
              </div>
              <button
                type="button"
                onClick={() => onSelectCourse(activeCourse.title)}
                className="btn-premium button-glow mt-5 inline-flex items-center px-5 py-2.5 text-sm"
              >
                View Course
              </button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Trending Courses</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {trending.map((course, index) => (
                  <MegaMenuCard
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    badge={index === 0 ? 'Bestseller' : undefined}
                    meta={course.price}
                    onClick={() => onSelectCourse(course.title)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Popular Learning Paths</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {LEARNING_PATHS.map((path) => {
                  const firstCourse = pathCourse(path.courseIds[0]);
                  return (
                    <MegaMenuCard
                      key={path.title}
                      title={path.title}
                      description={path.description}
                      icon={Waypoints}
                      onClick={() => onSelectCourse(firstCourse?.title ?? path.title)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-border-soft pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Popular Instructors</p>
              <div className="mt-3 flex flex-wrap gap-5">
                {MENTORS.map((mentor) => (
                  <div key={mentor.name} className="flex items-center gap-3">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-ui text-sm font-medium text-navy">{mentor.name}</p>
                      <p className="text-xs text-text-secondary">{mentor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
