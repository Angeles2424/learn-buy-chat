
import React from 'react';
import { useCourseStore } from '@/lib/courseStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const { courses } = useCourseStore();
  const publishedCourses = courses.filter(course => course.published);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Panel de Administración</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Cursos</CardTitle>
            <CardDescription>Todos los cursos en el sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{courses.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Cursos Publicados</CardTitle>
            <CardDescription>Cursos visibles al público</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{publishedCourses.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>Gestionar cursos</CardDescription>
          </CardHeader>
          <CardContent className="space-x-2">
            <Link to="/admin/courses">
              <Button className="bg-brand-600 hover:bg-brand-700">Ver Cursos</Button>
            </Link>
            <Link to="/admin/courses/new">
              <Button variant="outline">Nuevo Curso</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Cursos Recientes
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Los últimos cursos añadidos al sistema.</p>
          </div>
          <ul className="mt-3 divide-y divide-gray-200">
            {courses.length > 0 ? (
              courses
                .sort((a, b) => b.createdAt - a.createdAt)
                .slice(0, 5)
                .map((course) => (
                  <li key={course.id} className="py-3 flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{course.title}</p>
                      <p className="text-sm text-gray-500">
                        ${course.price} · {course.published ? 'Publicado' : 'Borrador'}
                      </p>
                    </div>
                    <Link to={`/admin/courses/${course.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </Link>
                  </li>
                ))
            ) : (
              <p className="py-3 text-sm text-gray-500">No hay cursos disponibles.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
