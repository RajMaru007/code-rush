
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/courses/CourseCard';
import { Button } from '@/components/ui/button';
import { courses } from '@/utils/mockData';
import { ChevronLeft } from 'lucide-react';

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-coderush-purple mb-4">
              <ChevronLeft size={20} className="mr-1" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl font-bold mb-2">All Courses</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Browse our collection of coding courses to start your learning journey
            </p>
          </div>
          
          {/* Filter options */}
          <div className="mb-8 flex flex-wrap gap-3">
            <Button variant="outline" className="bg-white dark:bg-gray-800">All</Button>
            <Button variant="outline" className="bg-white dark:bg-gray-800">Python</Button>
            <Button variant="outline" className="bg-white dark:bg-gray-800">JavaScript</Button>
            <Button variant="outline" className="bg-white dark:bg-gray-800">HTML/CSS</Button>
            <Button variant="outline" className="bg-white dark:bg-gray-800">Beginner</Button>
            <Button variant="outline" className="bg-white dark:bg-gray-800">Intermediate</Button>
            <Button variant="outline" className="bg-white dark:bg-gray-800">Advanced</Button>
          </div>
          
          {/* Courses grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
