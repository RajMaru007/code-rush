
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/courses/CourseCard';
import { courses } from '@/utils/mockData';

const CourseList = () => {
  // Only display first 3 courses for home page
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Courses</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Start your coding journey with our most popular learning paths
            </p>
          </div>
          <Link to="/courses">
            <Button variant="ghost" className="mt-4 md:mt-0 text-coderush-purple hover:text-coderush-purple/90 hover:bg-purple-50">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
