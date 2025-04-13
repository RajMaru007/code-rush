
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-coderush-purple/10 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-coderush-blue/10 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-coderush-pink/10 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Learn to <span className="gradient-heading">Code</span> with Interactive Challenges
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join CodeRush and build your coding skills through fun, hands-on challenges. Earn XP, unlock badges, and track your progress as you learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button className="bg-coderush-purple hover:bg-coderush-purple/90 text-white px-6 py-6 rounded-lg">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" className="border-coderush-purple text-coderush-purple hover:bg-coderush-purple hover:text-white px-6 py-6 rounded-lg">
                  Sign Up Free
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center mt-10 space-x-8">
              <div className="flex items-center">
                <Code size={20} className="text-coderush-purple mr-2" />
                <span className="text-sm">30+ Courses</span>
              </div>
              <div className="flex items-center">
                <Zap size={20} className="text-coderush-purple mr-2" />
                <span className="text-sm">500+ Challenges</span>
              </div>
              <div className="flex items-center">
                <Trophy size={20} className="text-coderush-purple mr-2" />
                <span className="text-sm">50+ Badges</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">main.py</div>
            </div>
            <pre className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="text-gray-800 dark:text-gray-200">
{`def greet_user():
    name = input("What's your name? ")
    print(f"Hello, {name}!")
    print("Welcome to CodeRush!")
    print("Let's start coding!")

# Call the function
greet_user()`}
              </code>
            </pre>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">Python • Beginner</span>
              <Button className="bg-coderush-green hover:bg-coderush-green/90 text-white px-3 py-1 h-8 text-xs rounded">
                Run Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
