
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Course } from '@/utils/mockData';
import { ArrowRight, Clock, Award } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  // Function to get badge class based on difficulty
  const getBadgeClass = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'badge-beginner';
      case 'intermediate':
        return 'badge-intermediate';
      case 'advanced':
        return 'badge-advanced';
      default:
        return 'badge-beginner';
    }
  };

  return (
    <div className="course-card bg-white dark:bg-gray-900 h-full flex flex-col">
      <div 
        className="h-40 bg-cover bg-center rounded-t-xl mb-4" 
        style={{ backgroundImage: `url(${course.imageUrl})` }}
      >
        <div className="h-full w-full bg-gradient-to-r from-coderush-purple/70 to-coderush-blue/70 rounded-t-xl flex items-end p-4">
          <span className={`badge ${getBadgeClass(course.difficulty)}`}>
            {course.difficulty}
          </span>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col p-4">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
          {course.description}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Award size={16} className="mr-1" />
            <span>{course.xpPoints} XP</span>
          </div>
        </div>
        
        <Link to={`/courses/${course.id}`}>
          <Button className="w-full bg-coderush-purple hover:bg-coderush-purple/90">
            Start Course <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
