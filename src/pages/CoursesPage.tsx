
import React from 'react';
import { useCourseStore } from '@/lib/courseStore';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';

const CoursesPage = () => {
  const { courses } = useCourseStore();
  const publishedCourses = courses.filter(course => course.published);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Nuestros Cursos</h1>
          <p className="mt-2 text-lg text-gray-600">
            Explora nuestra colección de cursos de alta calidad
          </p>
        </div>
      </div>
      
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {publishedCourses.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {publishedCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900">No hay cursos disponibles</h3>
              <p className="mt-2 text-gray-500">Vuelve pronto para ver nuestros nuevos cursos.</p>
            </div>
          )}
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} LearnSite. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default CoursesPage;
