
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Code, 
  Award, 
  User, 
  Menu, 
  X 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Title */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold text-coderush-purple"
        >
          <Code size={24} className="text-coderush-purple" />
          <span>CodeRush</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-coderush-purple dark:hover:text-coderush-purple transition-colors">
            Home
          </Link>
          <Link to="/courses" className="text-gray-700 dark:text-gray-200 hover:text-coderush-purple dark:hover:text-coderush-purple transition-colors">
            Courses
          </Link>
          <Link to="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-coderush-purple dark:hover:text-coderush-purple transition-colors">
            Dashboard
          </Link>
          <Link to="/auth">
            <Button variant="outline" className="ml-4 border-coderush-purple text-coderush-purple hover:bg-coderush-purple hover:text-white">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 absolute top-16 left-0 right-0 shadow-lg z-40">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-coderush-purple dark:hover:text-coderush-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen size={20} />
              <span>Home</span>
            </Link>
            <Link 
              to="/courses" 
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-coderush-purple dark:hover:text-coderush-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code size={20} />
              <span>Courses</span>
            </Link>
            <Link 
              to="/dashboard" 
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-coderush-purple dark:hover:text-coderush-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              <Award size={20} />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/auth" 
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-coderush-purple dark:hover:text-coderush-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={20} />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
