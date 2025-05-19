
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-brand-700">
                LearnSite
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/courses">
              <Button variant="ghost" className="mr-2">
                Cursos
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" className="mr-2">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
