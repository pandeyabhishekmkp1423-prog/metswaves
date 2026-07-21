import { COURSES } from '../constants';
import { EXPLORE_COURSE_CATALOG, type ExploreCourseEntry } from './exploreMenu';

export type CourseCatalogEntry = ExploreCourseEntry & {
  description?: string;
  image?: string;
  instructor?: string;
  rating?: number;
  students?: string;
  duration?: string;
  level?: string;
};

const exploreSlugs = new Set(EXPLORE_COURSE_CATALOG.map((entry) => entry.slug));

const flagshipEntries: CourseCatalogEntry[] = COURSES.map((course) => ({
  slug: exploreSlugs.has(course.id) ? `${course.id}-flagship` : course.id,
  title: course.title,
  price: course.price,
  category: 'Flagship Programs',
  subCategory: course.tag,
  description: course.description,
  image: course.image,
  instructor: course.instructor,
  rating: course.rating,
  students: course.students,
  duration: course.duration,
  level: course.level,
}));

export const ALL_COURSES: CourseCatalogEntry[] = [...flagshipEntries, ...EXPLORE_COURSE_CATALOG];

const bySlug = new Map(ALL_COURSES.map((entry) => [entry.slug, entry]));

export function getCourseBySlug(slug: string): CourseCatalogEntry | undefined {
  return bySlug.get(slug);
}

export function getRelatedCourses(entry: CourseCatalogEntry, limit = 4): CourseCatalogEntry[] {
  const sameSubCategory = ALL_COURSES.filter(
    (candidate) => candidate.slug !== entry.slug && entry.subCategory && candidate.subCategory === entry.subCategory,
  );
  if (sameSubCategory.length >= limit) return sameSubCategory.slice(0, limit);

  const sameCategory = ALL_COURSES.filter(
    (candidate) =>
      candidate.slug !== entry.slug && candidate.category === entry.category && !sameSubCategory.includes(candidate),
  );

  return [...sameSubCategory, ...sameCategory].slice(0, limit);
}

export type CategorySummary = {
  category: string;
  count: number;
};

export function getCategorySummaries(): CategorySummary[] {
  const counts = new Map<string, number>();
  ALL_COURSES.forEach((entry) => {
    counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  });
  return Array.from(counts.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

export type CourseGroup = {
  category: string;
  subGroups: { subCategory: string | null; courses: CourseCatalogEntry[] }[];
};

export function groupCoursesByCategory(courses: CourseCatalogEntry[]): CourseGroup[] {
  const byCategory = new Map<string, CourseCatalogEntry[]>();
  courses.forEach((entry) => {
    const list = byCategory.get(entry.category) ?? [];
    list.push(entry);
    byCategory.set(entry.category, list);
  });

  return Array.from(byCategory.entries()).map(([category, entries]) => {
    const bySub = new Map<string | null, CourseCatalogEntry[]>();
    entries.forEach((entry) => {
      const key = entry.subCategory ?? null;
      const list = bySub.get(key) ?? [];
      list.push(entry);
      bySub.set(key, list);
    });

    const subGroups = Array.from(bySub.entries())
      .map(([subCategory, list]) => ({ subCategory, courses: list }))
      .sort((a, b) => {
        if (a.subCategory === null) return -1;
        if (b.subCategory === null) return 1;
        return a.subCategory.localeCompare(b.subCategory);
      });

    return { category, subGroups };
  });
}
