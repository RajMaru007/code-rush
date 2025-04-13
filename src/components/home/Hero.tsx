
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Trophy, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
      {/* Decorative elements - Pixelated clouds and shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-[10%] w-24 h-16 bg-white border-4 border-black rounded-t-3xl"></div>
        <div className="absolute top-40 left-[25%] w-32 h-20 bg-white border-4 border-black rounded-t-3xl"></div>
        <div className="absolute top-80 left-[70%] w-20 h-12 bg-white border-4 border-black rounded-t-3xl"></div>
        <div className="absolute top-60 left-[85%] w-16 h-10 bg-white border-4 border-black rounded-t-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-8 h-8 bg-coderush-green border-4 border-black"></div>
        <div className="absolute bottom-40 left-[15%] w-12 h-12 bg-coderush-blue border-4 border-black rotate-45"></div>
        <div className="absolute bottom-10 right-[20%] w-10 h-10 bg-coderush-pink border-4 border-black"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <div className="mb-2 flex items-center">
              <div className="bg-black border-4 border-black shadow-pixel inline-flex items-center space-x-1 px-4 py-2 rounded-none">
                <span className="text-white font-retro text-xl">&lt;/&gt;</span>
                <span className="text-white font-pixel text-xl">CodeRush</span>
              </div>
              <div className="animate-pulse ml-3">
                <Gamepad2 size={24} className="text-coderush-purple" />
              </div>
            </div>
            
            <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-relaxed">
              Learn to <span className="text-coderush-purple">Code</span> with Interactive Challenges
            </h1>
            <p className="font-retro text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Join CodeRush and build your coding skills through fun, hands-on challenges. Earn XP, unlock badges, and track your progress as you learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/courses">
                <Button className="pixel-button bg-coderush-yellow hover:bg-coderush-yellow text-black px-6 py-6 rounded-none text-lg">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" className="pixel-button border-black text-black hover:bg-coderush-pink hover:text-white px-6 py-6 rounded-none text-lg">
                  Sign Up Free
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center mt-10 space-x-2 space-y-2">
              <div className="flex items-center bg-white border-4 border-black shadow-pixel px-3 py-1 font-retro text-lg">
                <Code size={20} className="text-coderush-purple mr-2" />
                <span>30+ Courses</span>
              </div>
              <div className="flex items-center bg-white border-4 border-black shadow-pixel px-3 py-1 font-retro text-lg">
                <Zap size={20} className="text-coderush-orange mr-2" />
                <span>500+ Challenges</span>
              </div>
              <div className="flex items-center bg-white border-4 border-black shadow-pixel px-3 py-1 font-retro text-lg">
                <Trophy size={20} className="text-coderush-green mr-2" />
                <span>50+ Badges</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-float">
            <div className="pixel-code-window shadow-pixel-lg">
              <div className="flex items-center p-4 bg-black">
                <div className="flex space-x-3">
                  <div className="w-5 h-5 rounded-none bg-red-500 border-2 border-white"></div>
                  <div className="w-5 h-5 rounded-none bg-yellow-500 border-2 border-white"></div>
                  <div className="w-5 h-5 rounded-none bg-green-500 border-2 border-white"></div>
                </div>
                <div className="ml-4 text-lg text-white font-retro">main.py</div>
              </div>
              <pre className="font-mono text-base bg-gray-50 dark:bg-gray-900 p-6 border-t-4 border-black overflow-x-auto">
                <code className="text-gray-800 dark:text-gray-200 leading-relaxed">
{`def greet_user():
    name = input("What's your name? ")
    print(f"Hello, {name}!")
    print("Welcome to CodeRush!")
    print("Let's start coding!")

# Call the function
greet_user()`}
                </code>
              </pre>
              <div className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 border-t-4 border-black">
                <span className="text-base text-black dark:text-white font-pixel">Python • Beginner</span>
                <Button className="pixel-button bg-coderush-green hover:bg-coderush-green text-black font-pixel text-sm px-4 py-2 h-10 rounded-none">
                  Run Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
