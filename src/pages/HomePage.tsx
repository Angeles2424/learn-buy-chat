
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCourseStore } from '@/lib/courseStore';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';

const HomePage = () => {
  const { courses } = useCourseStore();
  const publishedCourses = courses.filter(course => course.published);
  const featuredCourses = publishedCourses.slice(0, 3); // Show only first 3 courses

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-12 bg-gradient-to-r from-brand-700 to-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Aprende con nuestros cursos virtuales
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl">
              Domina nuevas habilidades con nuestros cursos en línea de alta calidad
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/courses">
                  <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-brand-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Ver Cursos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {featuredCourses.length > 0 && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Cursos Destacados
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Descubre nuestros cursos más populares
              </p>
            </div>

            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            {featuredCourses.length > 0 && (
              <div className="mt-12 text-center">
                <Link to="/courses">
                  <Button variant="outline" className="text-brand-600 border-brand-600">
                    Ver todos los cursos
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Ofrecemos la mejor experiencia de aprendizaje
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-brand-600 text-xl font-bold mb-2">Instructores Expertos</div>
              <p className="text-gray-600">Nuestros cursos son impartidos por profesionales con amplia experiencia.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-brand-600 text-xl font-bold mb-2">Flexible</div>
              <p className="text-gray-600">Estudia a tu propio ritmo y desde cualquier lugar.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-brand-600 text-xl font-bold mb-2">Soporte Personalizado</div>
              <p className="text-gray-600">Resolvemos tus dudas a través de WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">¿Cómo accedo a los cursos?</h3>
                <p className="mt-2 text-base text-gray-500">
                  Una vez realices el pago, recibirás un enlace de acceso al contenido del curso.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">¿Los cursos tienen fecha de vencimiento?</h3>
                <p className="mt-2 text-base text-gray-500">
                  No, tendrás acceso de por vida al contenido del curso.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">¿Cómo realizo el pago?</h3>
                <p className="mt-2 text-base text-gray-500">
                  El pago se coordina directamente por WhatsApp después de hacer clic en el botón de compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">LearnSite</h3>
              <p className="mt-2 text-gray-300">Plataforma de cursos en línea</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Contacto</h4>
              <p className="text-gray-300">WhatsApp: 5491122334455</p>
              <p className="text-gray-300">Email: info@example.com</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">© {new Date().getFullYear()} LearnSite. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
