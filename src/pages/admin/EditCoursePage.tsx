
import React from 'react';
import Navbar from '@/components/Navbar';
import AdminNav from '@/components/AdminNav';
import CourseForm from '@/components/CourseForm';

const EditCoursePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdminNav />
          <CourseForm />
        </div>
      </div>
    </div>
  );
};

export default EditCoursePage;
