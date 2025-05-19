
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const AdminNav = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Cursos', path: '/admin/courses' },
    { name: 'Nuevo Curso', path: '/admin/courses/new' },
  ];

  return (
    <div className="border-b pb-2 mb-6">
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium",
              location.pathname === item.path
                ? "bg-brand-600 text-white"
                : "text-brand-600 hover:bg-brand-100"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminNav;
