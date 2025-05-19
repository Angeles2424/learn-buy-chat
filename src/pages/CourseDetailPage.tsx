
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCourseStore } from '@/lib/courseStore';
import Navbar from '@/components/Navbar';
import VideoEmbed from '@/components/VideoEmbed';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { getCourse } = useCourseStore();
  
  const course = courseId ? getCourse(courseId) : undefined;
  
  // Redirect if course doesn't exist or is not published
  useEffect(() => {
    if (!course || !course.published) {
      navigate('/courses');
    }
  }, [course, navigate]);
  
  if (!course) {
    return null; // Will redirect via the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/courses">
              <Button variant="ghost" className="mb-4">
                ← Volver a cursos
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">{course.title}</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <VideoEmbed url={course.videoUrl} className="mb-4" />
                
                <div className="px-6 py-4">
                  <h2 className="text-2xl font-semibold mb-4">Acerca de este curso</h2>
                  <p className="text-gray-700 whitespace-pre-line">{course.description}</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                <div className="text-3xl font-bold mb-4">${course.price}</div>
                <WhatsAppButton 
                  phoneNumber="5491122334455" 
                  courseTitle={course.title}
                  price={course.price}
                />
                
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-2">Este curso incluye:</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Acceso completo de por vida</li>
                    <li>• Videos de alta calidad</li>
                    <li>• Soporte por WhatsApp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} LearnSite. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetailPage;
