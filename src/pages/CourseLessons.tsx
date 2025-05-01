
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Trophy } from 'lucide-react';
import LessonList from '@/components/lessons/LessonList';
import LessonContent from '@/components/lessons/LessonContent';
import { courses, courseLessons } from '@/utils/mockData';

const CourseLessons = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  
  // Find the course based on the courseId parameter
  const course = courses.find(c => c.id === Number(courseId));
  
  // Get lessons for this course
  const lessons = courseLessons.filter(lesson => lesson.courseId === Number(courseId));
  
  // Find the selected lesson
  const selectedLesson = selectedLessonId 
    ? courseLessons.find(lesson => lesson.id === selectedLessonId)
    : null;
    
  // Select first unlocked lesson by default
  useEffect(() => {
    if (lessons.length > 0 && !selectedLessonId) {
      const firstUnlockedLesson = lessons.find(lesson => !lesson.locked);
      if (firstUnlockedLesson) {
        setSelectedLessonId(firstUnlockedLesson.id);
      }
    }
  }, [courseId, lessons, selectedLessonId]);
  
  // Generate lesson content if a lesson is selected
  const lessonContent = selectedLesson ? {
    title: selectedLesson.title,
    description: selectedLesson.description,
    code: selectedLesson.code,
    language: course?.language.toLowerCase() || 'javascript'
  } : null;

  // If course not found, show error
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/courses">
              <Button className="bg-coderush-purple hover:bg-coderush-purple/90">
                Back to Courses
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          {/* Header with navigation */}
          <div className="mb-8">
            <Link to={`/courses/${courseId}`} className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-coderush-purple mb-4">
              <ChevronLeft size={20} className="mr-1" />
              Back to Course
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h1 className="text-3xl font-bold">{course.title} - Lessons</h1>
              <div className="flex items-center space-x-2 bg-coderush-purple/10 px-3 py-2 rounded-lg">
                <Trophy size={18} className="text-yellow-500" />
                <span className="font-medium">{course.xpPoints} XP</span>
              </div>
            </div>
          </div>
          
          {/* Course content with sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left sidebar with lessons */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Lesson Progress</h2>
                
                <LessonList 
                  lessons={lessons}
                  onSelectLesson={setSelectedLessonId}
                  currentLessonId={selectedLessonId || undefined}
                />
                
                <div className="mt-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Course Progress: {lessons.filter(l => l.completed).length} / {lessons.length} lessons
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-coderush-purple h-2 rounded-full"
                      style={{ width: `${(lessons.filter(l => l.completed).length / lessons.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="lg:col-span-9">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <LessonContent content={lessonContent} />
                
                {selectedLesson && !selectedLesson.locked && (
                  <div className="mt-8 flex justify-between">
                    <Button 
                      variant="outline"
                      disabled={!lessons.some(l => l.id < selectedLesson.id && !l.locked)}
                      onClick={() => {
                        const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id);
                        if (currentIndex > 0) {
                          setSelectedLessonId(lessons[currentIndex - 1].id);
                        }
                      }}
                    >
                      Previous Lesson
                    </Button>
                    <Button 
                      className="bg-coderush-purple hover:bg-coderush-purple/90"
                      disabled={!lessons.some(l => l.id > selectedLesson.id && !l.locked)}
                      onClick={() => {
                        const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id);
                        if (currentIndex < lessons.length - 1 && !lessons[currentIndex + 1].locked) {
                          setSelectedLessonId(lessons[currentIndex + 1].id);
                        }
                      }}
                    >
                      Next Lesson
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseLessons;
