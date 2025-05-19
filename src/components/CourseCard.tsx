
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Course } from '@/lib/courseStore';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{course.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <span className="text-lg font-bold">${course.price}</span>
        <Link to={`/courses/${course.id}`}>
          <Button className="bg-brand-600 hover:bg-brand-700">Ver Detalles</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
