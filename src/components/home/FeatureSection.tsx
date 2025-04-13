
import React from 'react';
import { Code, Trophy, LineChart, Zap, Users, Heart } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-coderush-purple" />,
      title: 'Interactive Code Editor',
      description: 'Write, test, and run code directly in your browser with real-time feedback.'
    },
    {
      icon: <Trophy className="h-8 w-8 text-coderush-orange" />,
      title: 'Earn Badges',
      description: 'Unlock achievements and showcase your skills as you complete challenges.'
    },
    {
      icon: <LineChart className="h-8 w-8 text-coderush-blue" />,
      title: 'Track Progress',
      description: 'Monitor your learning journey with detailed statistics and progress tracking.'
    },
    {
      icon: <Zap className="h-8 w-8 text-coderush-pink" />,
      title: 'XP System',
      description: 'Earn experience points for completing challenges and lessons.'
    },
    {
      icon: <Users className="h-8 w-8 text-coderush-green" />,
      title: 'Community Learning',
      description: 'Join a community of learners and share your progress and solutions.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Fun Learning Experience',
      description: 'Enjoy a gamified approach to coding that makes learning enjoyable.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose CodeRush</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our platform combines interactive coding challenges with gamification elements to make learning to code fun and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
