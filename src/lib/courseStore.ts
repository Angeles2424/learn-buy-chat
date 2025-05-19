
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Course {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  price: number;
  published: boolean;
  createdAt: number;
}

interface CourseStore {
  courses: Course[];
  addCourse: (course: Omit<Course, 'id' | 'createdAt'>) => void;
  updateCourse: (id: string, courseData: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  getCourse: (id: string) => Course | undefined;
}

export const useCourseStore = create<CourseStore>()(
  persist(
    (set, get) => ({
      courses: [],
      addCourse: (courseData) => {
        const newCourse = {
          ...courseData,
          id: Date.now().toString(),
          createdAt: Date.now(),
        };
        set((state) => ({
          courses: [...state.courses, newCourse],
        }));
      },
      updateCourse: (id, courseData) => {
        set((state) => ({
          courses: state.courses.map((course) =>
            course.id === id ? { ...course, ...courseData } : course
          ),
        }));
      },
      deleteCourse: (id) => {
        set((state) => ({
          courses: state.courses.filter((course) => course.id !== id),
        }));
      },
      getCourse: (id) => {
        return get().courses.find((course) => course.id === id);
      },
    }),
    {
      name: 'course-storage',
    }
  )
);
