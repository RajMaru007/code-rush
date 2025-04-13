
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-coderush-purple mb-4">
              <Code size={24} className="text-coderush-purple" />
              <span>CodeRush</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Learn to code through interactive challenges and build your coding skills with our fun, gamified learning platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-coderush-purple">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-coderush-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-coderush-purple">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-coderush-purple">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-600 dark:text-gray-400 hover:text-coderush-purple">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-coderush-purple">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-coderush-purple">
                  Challenges
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-coderush-purple">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-coderush-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-coderush-purple">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-coderush-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-coderush-purple">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} CodeRush. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
