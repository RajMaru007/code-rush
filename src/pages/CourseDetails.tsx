
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CodeEditor from '@/components/editor/CodeEditor';
import { Button } from '@/components/ui/button';
import { courses } from '@/utils/mockData';
import { Clock, BarChart, Award, ChevronLeft, CheckCircle, Circle, Lock } from 'lucide-react';

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  // Find the course based on the courseId parameter
  const course = courses.find(c => c.id === Number(courseId));
  
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
  
  // Mock lessons data
  const lessons = [
    { id: 1, title: "Introduction", completed: true, locked: false },
    { id: 2, title: "Variables and Data Types", completed: true, locked: false },
    { id: 3, title: "Control Flow", completed: false, locked: false },
    { id: 4, title: "Functions", completed: false, locked: true },
    { id: 5, title: "Lists and Loops", completed: false, locked: true },
    { id: 6, title: "Dictionaries", completed: false, locked: true },
    { id: 7, title: "Classes and Objects", completed: false, locked: true }
  ];

  // Sample code for the editor
  const sampleCode = course.language.toLowerCase() === 'python' ?
    `# Python Example
def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("Learner")
print(message)` :
    `// JavaScript Example
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Call the function
let message = greet("Learner");
console.log(message);`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          {/* Header with navigation */}
          <div className="mb-8">
            <Link to="/courses" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-coderush-purple mb-4">
              <ChevronLeft size={20} className="mr-1" />
              Back to Courses
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock size={16} className="mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <BarChart size={16} className="mr-1" />
                  <span>{course.difficulty}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Award size={16} className="mr-1" />
                  <span>{course.xpPoints} XP</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Course content with sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left sidebar with lessons */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Course Content</h2>
                <div className="space-y-2">
                  {lessons.map((lesson) => (
                    <div 
                      key={lesson.id}
                      className={`p-3 rounded-lg flex items-center ${
                        lesson.locked 
                          ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' 
                          : 'hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer'
                      }`}
                    >
                      {lesson.completed ? (
                        <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0" />
                      ) : lesson.locked ? (
                        <Lock size={18} className="text-gray-400 mr-3 flex-shrink-0" />
                      ) : (
                        <Circle size={18} className="text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={lesson.locked ? 'text-gray-400' : ''}>
                        {lesson.title}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Course Progress: {(course.completedLessons || 0)} / {course.lessons} lessons
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-coderush-purple h-2 rounded-full"
                      style={{ width: `${((course.completedLessons || 0) / course.lessons) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="lg:col-span-9">
              <div className="space-y-8">
                {/* Course description */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-xl font-bold mb-4">About This Course</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {course.description} This comprehensive course will take you from beginner to proficient 
                    in {course.language}, covering all the essential concepts with practical examples and challenges.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="font-bold text-sm mb-1">Prerequisites</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        No prior experience required
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="font-bold text-sm mb-1">Difficulty</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {course.difficulty}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="font-bold text-sm mb-1">Language</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {course.language}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Featured challenge with code editor */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-xl font-bold mb-4">Try a Sample Challenge</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Get a taste of what you'll be learning in this course with this sample challenge.
                  </p>
                  
                  <CodeEditor initialCode={sampleCode} language={course.language.toLowerCase()} />
                </div>
                
                {/* Call to action */}
                <div className="bg-gradient-to-r from-coderush-purple to-coderush-blue rounded-xl shadow-sm p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h2 className="text-2xl font-bold mb-2">Ready to start your coding journey?</h2>
                      <p className="text-white/90">
                        Enroll now and get access to all {course.lessons} lessons and challenges.
                      </p>
                    </div>
                    <Button className="bg-white text-coderush-purple hover:bg-white/90 px-8">
                      Start Learning Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
