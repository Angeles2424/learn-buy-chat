
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourseStore, Course } from '@/lib/courseStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const CourseForm = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addCourse, updateCourse, getCourse } = useCourseStore();
  
  const [course, setCourse] = useState<Partial<Course>>({
    title: '',
    description: '',
    videoUrl: '',
    price: 0,
    published: false,
  });

  useEffect(() => {
    if (courseId) {
      const existingCourse = getCourse(courseId);
      if (existingCourse) {
        setCourse(existingCourse);
      }
    }
  }, [courseId, getCourse]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: name === 'price' ? parseFloat(value) || 0 : value });
  };

  const handleSwitchChange = (checked: boolean) => {
    setCourse({ ...course, published: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!course.title || !course.description || !course.videoUrl) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    try {
      if (courseId) {
        updateCourse(courseId, course);
        toast({
          title: "Éxito",
          description: "El curso ha sido actualizado correctamente.",
        });
      } else {
        addCourse(course as Omit<Course, 'id' | 'createdAt'>);
        toast({
          title: "Éxito",
          description: "El curso ha sido creado correctamente.",
        });
      }
      navigate('/admin/courses');
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al guardar el curso.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{courseId ? 'Editar Curso' : 'Nuevo Curso'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título del Curso</Label>
            <Input
              id="title"
              name="title"
              value={course.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              name="description"
              value={course.description}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="videoUrl">URL del Video (YouTube o Vimeo)</Label>
            <Input
              id="videoUrl"
              name="videoUrl"
              value={course.videoUrl}
              onChange={handleChange}
              placeholder="https://www.youtube.com/embed/..."
              required
            />
            <p className="text-sm text-gray-500">
              URL de embed para YouTube o Vimeo
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Precio ($)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={course.price}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              checked={course.published || false}
              onCheckedChange={handleSwitchChange}
              id="published"
            />
            <Label htmlFor="published">Publicar curso</Label>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => navigate('/admin/courses')}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-brand-600 hover:bg-brand-700">
              {courseId ? 'Actualizar Curso' : 'Crear Curso'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CourseForm;
