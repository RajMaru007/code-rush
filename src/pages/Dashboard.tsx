import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProgressBar from '@/components/dashboard/ProgressBar';
import BadgesList from '@/components/dashboard/BadgesList';
import { Button } from '@/components/ui/button';
import { userProgress, badges, courses } from '@/utils/mockData';
import { Award, BookOpen, Calendar, Code, Flame, Zap } from 'lucide-react';

const Dashboard = () => {
  const earnedBadges = badges.filter(badge => badge.earned);
  const inProgressCourses = courses.filter(course => course.completedLessons && course.completedLessons > 0);
  
  // Calculate XP needed for next level (simple formula for demo)
  const xpForNextLevel = (userProgress.level + 1) * 300;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your progress and continue your coding journey
            </p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-3 mr-4">
                  <Zap size={24} className="text-coderush-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total XP</p>
                  <h3 className="text-2xl font-bold">{userProgress.totalXp}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-3 mr-4">
                  <Code size={24} className="text-coderush-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Challenges</p>
                  <h3 className="text-2xl font-bold">{userProgress.completedChallenges}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <div className="rounded-full bg-orange-100 dark:bg-orange-900/20 p-3 mr-4">
                  <Flame size={24} className="text-coderush-orange" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Current Streak</p>
                  <h3 className="text-2xl font-bold">{userProgress.streak} days</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <div className="rounded-full bg-pink-100 dark:bg-pink-900/20 p-3 mr-4">
                  <Award size={24} className="text-coderush-pink" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Badges Earned</p>
                  <h3 className="text-2xl font-bold">{userProgress.earnedBadges}</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Level Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Level {userProgress.level}</h2>
              <div className="xp-text text-coderush-purple">
                {userProgress.totalXp} / {xpForNextLevel} XP
              </div>
            </div>
            <ProgressBar 
              value={userProgress.totalXp} 
              max={xpForNextLevel} 
              color="bg-gradient-to-r from-coderush-purple to-coderush-blue"
            />
          </div>
          
          {/* Two-column layout for main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* In Progress Courses */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-4">In Progress</h2>
                
                {inProgressCourses.length > 0 ? (
                  <div className="space-y-6">
                    {inProgressCourses.map(course => (
                      <div key={course.id} className="border border-gray-100 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <img 
                            src={course.imageUrl} 
                            alt={course.title} 
                            className="w-12 h-12 rounded mr-4"
                          />
                          <div>
                            <h3 className="font-bold">{course.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {course.completedLessons} of {course.lessons} lessons completed
                            </p>
                          </div>
                        </div>
                        <ProgressBar 
                          value={course.completedLessons || 0} 
                          max={course.lessons} 
                        />
                        <div className="mt-4 flex justify-end">
                          <Link to={`/courses/${course.id}`}>
                            <Button className="bg-coderush-purple hover:bg-coderush-purple/90">
                              Continue
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No courses in progress</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Start a course to begin your coding journey
                    </p>
                    <Link to="/courses">
                      <Button className="bg-coderush-purple hover:bg-coderush-purple/90">
                        Browse Courses
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Badges Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Your Badges</h2>
                  <Button variant="ghost" className="text-sm text-coderush-purple">
                    View All
                  </Button>
                </div>
                
                {earnedBadges.length > 0 ? (
                  <BadgesList badges={earnedBadges} />
                ) : (
                  <div className="text-center py-8">
                    <Award size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No badges earned yet</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Complete challenges to earn badges and showcase your skills
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Streak Calendar */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-4">Coding Streak</h2>
                <div className="flex items-center justify-center py-4">
                  <div className="text-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -z-10 w-32 h-32 rounded-full bg-orange-100 dark:bg-orange-900/20"></div>
                      <Flame size={64} className="text-coderush-orange" />
                    </div>
                    <div className="mt-3">
                      <p className="text-3xl font-bold">{userProgress.streak}</p>
                      <p className="text-gray-500 dark:text-gray-400">days</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Keep it up! Your next milestone is at 7 days
                  </p>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {/* Activity Items */}
                  <div className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full p-2 mr-3">
                      <Code size={16} className="text-coderush-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Completed "Variables in Python"</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2 days ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900/20 rounded-full p-2 mr-3">
                      <Award size={16} className="text-coderush-orange" />
                    </div>
                    <div>
                      <p className="font-medium">Earned "Python Beginner" badge</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3 days ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-2 mr-3">
                      <BookOpen size={16} className="text-coderush-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Started "Python Basics" course</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">5 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Daily Challenge */}
              <div className="bg-gradient-to-br from-coderush-purple to-coderush-blue rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">Daily Challenge</h2>
                  <Calendar className="text-white" size={20} />
                </div>
                <p className="text-white/90 mb-4">
                  Complete your daily challenge to maintain your streak!
                </p>
                <Button className="w-full bg-white text-coderush-purple hover:bg-white/90">
                  Take Challenge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
