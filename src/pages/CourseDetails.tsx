import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CodeEditor from '@/components/editor/CodeEditor';
import { Button } from '@/components/ui/button';
import { courses } from '@/utils/mockData';
import { Clock, BarChart, Award, ChevronLeft, CheckCircle, Gamepad2, Zap, Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { toast } = useToast();
  const [selectedLesson, setSelectedLesson] = useState(1);
  
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
  
  // All lessons are unlocked
  const lessons = [
    { id: 1, title: "Introduction", completed: true, locked: false },
    { id: 2, title: "Variables and Data Types", completed: true, locked: false },
    { id: 3, title: "Control Flow", completed: false, locked: false },
    { id: 4, title: "Functions", completed: false, locked: false },
    { id: 5, title: "Lists and Loops", completed: false, locked: false },
    { id: 6, title: "Dictionaries", completed: false, locked: false },
    { id: 7, title: "Classes and Objects", completed: false, locked: false }
  ];

  // Handle lesson click
  const handleLessonClick = (lessonId: number) => {
    setSelectedLesson(lessonId);
    toast({
      title: "Lesson Selected",
      description: `You've selected lesson ${lessonId}`,
    });
  };

  // Sample code for the editor based on selected lesson
  const lessonCode = () => {
    switch (selectedLesson) {
      case 1:
        return course.language.toLowerCase() === 'python' ?
          `# Introduction to Python
print("Hello, Coder!")
print("Welcome to CodeRush!")
print("Let's start our coding adventure!")` :
          `// Introduction to JavaScript
console.log("Hello, Coder!");
console.log("Welcome to CodeRush!");
console.log("Let's start our coding adventure!");`;
      case 2:
        return course.language.toLowerCase() === 'python' ?
          `# Variables and Data Types
name = "CodeRush Player"
level = 5
is_awesome = True

print(f"Hi {name}! You are level {level}.")
print("Are you awesome?", is_awesome)` :
          `// Variables and Data Types
let name = "CodeRush Player";
let level = 5;
let isAwesome = true;

console.log(\`Hi \${name}! You are level \${level}.\`);
console.log("Are you awesome?", isAwesome);`;
      case 3:
        return course.language.toLowerCase() === 'python' ?
          `# Control Flow
score = 85

if score >= 90:
    print("You earned an A!")
elif score >= 80:
    print("You earned a B!")
else:
    print("Keep practicing!")` :
          `// Control Flow
let score = 85;

if (score >= 90) {
    console.log("You earned an A!");
} else if (score >= 80) {
    console.log("You earned a B!");
} else {
    console.log("Keep practicing!");
}`;
      case 4:
        return course.language.toLowerCase() === 'python' ?
          `# Functions
def award_points(difficulty, time_taken):
    base_points = difficulty * 100
    time_bonus = max(0, 30 - time_taken) * 10
    return base_points + time_bonus

# Try different values
easy_challenge = award_points(1, 15)
hard_challenge = award_points(5, 25)

print(f"Easy challenge: {easy_challenge} points")
print(f"Hard challenge: {hard_challenge} points")` :
          `// Functions
function awardPoints(difficulty, timeTaken) {
    let basePoints = difficulty * 100;
    let timeBonus = Math.max(0, 30 - timeTaken) * 10;
    return basePoints + timeBonus;
}

// Try different values
let easyChallenge = awardPoints(1, 15);
let hardChallenge = awardPoints(5, 25);

console.log(\`Easy challenge: \${easyChallenge} points\`);
console.log(\`Hard challenge: \${hardChallenge} points\`);`;
      default:
        return course.language.toLowerCase() === 'python' ?
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
    }
  };

  const completedPercent = (2 / lessons.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-yellow-100 dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          {/* Header with navigation */}
          <div className="mb-8">
            <Link to="/courses" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-coderush-purple mb-4">
              <ChevronLeft size={20} className="mr-1" />
              <span className="font-retro text-lg">Back to Courses</span>
            </Link>
            
            <div className="pixel-border bg-white dark:bg-gray-800 p-6 rounded-none shadow-pixel mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center">
                  <div className="bg-coderush-purple w-12 h-12 border-4 border-black flex items-center justify-center mr-4 shadow-pixel">
                    <Gamepad2 size={24} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-pixel mb-2">{course.title}</h1>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm bg-black text-white font-retro px-2 py-1 border-2 border-black">
                        <Clock size={16} className="mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-sm bg-coderush-green text-black font-retro px-2 py-1 border-2 border-black">
                        <BarChart size={16} className="mr-1" />
                        <span>{course.difficulty}</span>
                      </div>
                      <div className="flex items-center text-sm bg-coderush-orange text-black font-retro px-2 py-1 border-2 border-black">
                        <Award size={16} className="mr-1" />
                        <span>{course.xpPoints} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="pixel-button bg-coderush-yellow text-black hover:bg-coderush-yellow border-4 border-black font-pixel px-4 py-2 h-12">
                  <Zap className="mr-2" /> Start Adventure!
                </Button>
              </div>
            </div>
          </div>
          
          {/* Course content with sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left sidebar with lessons */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 border-4 border-black shadow-pixel p-4 sticky top-24">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-coderush-pink border-2 border-black flex items-center justify-center mr-3">
                    <span className="font-pixel text-sm text-black">!</span>
                  </div>
                  <h2 className="text-xl font-pixel">Quests</h2>
                </div>
                
                <div className="space-y-3">
                  {lessons.map((lesson) => (
                    <div 
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson.id)}
                      className={`p-3 border-2 border-black flex items-center cursor-pointer transition-transform hover:translate-y-[-2px] ${
                        selectedLesson === lesson.id 
                          ? 'bg-coderush-purple text-white' 
                          : lesson.completed 
                            ? 'bg-coderush-green/20' 
                            : 'bg-white dark:bg-gray-700'
                      }`}
                    >
                      {lesson.completed ? (
                        <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-black bg-white mr-3 flex-shrink-0"></div>
                      )}
                      <span className="font-retro text-lg">
                        {lesson.title}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 border-t-2 border-black pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-retro text-sm">Course Progress:</div>
                    <div className="font-pixel text-sm">2/{lessons.length}</div>
                  </div>
                  <div className="progress-8bit">
                    <div className="progress-8bit-bar" style={{ width: `${completedPercent}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="lg:col-span-9">
              <div className="space-y-8">
                {/* Active lesson content */}
                <div className="bg-white dark:bg-gray-800 border-4 border-black shadow-pixel p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-coderush-blue border-2 border-black flex items-center justify-center mr-3">
                      <span className="font-pixel text-white">{selectedLesson}</span>
                    </div>
                    <h2 className="text-2xl font-pixel">{lessons.find(l => l.id === selectedLesson)?.title}</h2>
                  </div>
                  
                  <div className="font-retro text-lg mb-6">
                    {selectedLesson === 1 && (
                      <p>Welcome to CodeRush! This introductory lesson will get you familiar with {course.language} syntax and basic programming concepts. Let's start by printing some messages to the console.</p>
                    )}
                    {selectedLesson === 2 && (
                      <p>Variables are containers for storing data values. In this lesson, we'll learn how to create variables and understand different data types in {course.language}.</p>
                    )}
                    {selectedLesson === 3 && (
                      <p>Control flow statements allow your programs to make decisions. We'll learn about if/else statements and how to control the flow of your code based on conditions.</p>
                    )}
                    {selectedLesson === 4 && (
                      <p>Functions are reusable blocks of code designed to perform specific tasks. In this lesson, we'll create functions that calculate game points based on different parameters.</p>
                    )}
                    {selectedLesson > 4 && (
                      <p>In this lesson, you'll learn advanced concepts and techniques in {course.language} programming. Practice with the code editor below to master these skills.</p>
                    )}
                  </div>
                  
                  <div className="mb-8 flex flex-wrap gap-2">
                    <div className="badge-beginner px-3 py-1 border-2 border-black font-retro">XP: +{50 * selectedLesson}</div>
                    <div className="badge-intermediate px-3 py-1 border-2 border-black font-retro">Time: ~20 min</div>
                    <div className="badge-advanced px-3 py-1 border-2 border-black font-retro">Level: {selectedLesson}</div>
                  </div>
                  
                  {/* Code editor with custom code for each lesson */}
                  <CodeEditor initialCode={lessonCode()} language={course.language.toLowerCase()} />
                  
                  <div className="flex justify-between mt-6">
                    <Button 
                      variant="outline" 
                      className="pixel-button border-2 border-black font-retro"
                      onClick={() => {
                        if (selectedLesson > 1) {
                          setSelectedLesson(selectedLesson - 1);
                        }
                      }}
                      disabled={selectedLesson === 1}
                    >
                      Previous Quest
                    </Button>
                    
                    <Button 
                      className="pixel-button bg-coderush-green hover:bg-coderush-green/90 text-black border-2 border-black font-retro"
                      onClick={() => {
                        if (selectedLesson < lessons.length) {
                          setSelectedLesson(selectedLesson + 1);
                        } else {
                          toast({
                            title: "Course Completed!",
                            description: "You've reached the end of this course.",
                          });
                        }
                      }}
                      disabled={selectedLesson === lessons.length}
                    >
                      Next Quest
                    </Button>
                  </div>
                </div>
                
                {/* Hint box */}
                <div className="bg-coderush-yellow border-4 border-black shadow-pixel p-6 animate-pulse">
                  <h3 className="font-pixel text-xl mb-2">💡 Hint</h3>
                  <p className="font-retro text-lg">
                    {selectedLesson === 1 && "Try running the code to see what it outputs. The print statement is used to display messages in your console."}
                    {selectedLesson === 2 && "Variables can store different types of data: strings (text), numbers, and booleans (True/False)."}
                    {selectedLesson === 3 && "The if/elif/else structure helps your program make decisions based on conditions."}
                    {selectedLesson === 4 && "Functions help make your code reusable. Don't forget to return a value at the end of your function!"}
                    {selectedLesson > 4 && "Experiment with the code and see what happens. Learning is about trying new things!"}
                  </p>
                </div>
                
                {/* Call to action */}
                <div className="bg-coderush-purple border-4 border-black shadow-pixel p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between text-white">
                    <div className="mb-6 md:mb-0 flex items-center">
                      <div className="w-16 h-16 bg-black border-4 border-white rounded-none flex items-center justify-center mr-4">
                        <Trophy size={32} className="text-coderush-yellow" />
                      </div>
                      <div>
                        <h2 className="font-pixel text-xl mb-2">Complete All Quests!</h2>
                        <p className="font-retro">
                          Finish all {lessons.length} quests and earn the {course.language} Master badge.
                        </p>
                      </div>
                    </div>
                    <Button className="bg-white border-4 border-black text-coderush-purple hover:bg-white/90 font-pixel px-6 py-4 h-auto rounded-none">
                      View Your Badges
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
