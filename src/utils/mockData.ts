
export interface Course {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  language: string;
  imageUrl: string;
  duration: string;
  lessons: number;
  xpPoints: number;
  completedLessons?: number;
}

export interface Badge {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  earned: boolean;
}

export interface UserProgress {
  totalXp: number;
  level: number;
  completedCourses: number;
  completedChallenges: number;
  earnedBadges: number;
  streak: number;
}

// Mock Courses
export const courses: Course[] = [
  {
    id: 1,
    title: "Python Basics",
    description: "Learn the fundamentals of Python programming language.",
    difficulty: "Beginner",
    language: "Python",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    duration: "4 weeks",
    lessons: 24,
    xpPoints: 1200,
    completedLessons: 8
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description: "Master the core concepts of JavaScript for web development.",
    difficulty: "Beginner",
    language: "JavaScript",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    duration: "5 weeks",
    lessons: 30,
    xpPoints: 1500,
    completedLessons: 0
  },
  {
    id: 3,
    title: "React Fundamentals",
    description: "Build modern user interfaces with React.js.",
    difficulty: "Intermediate",
    language: "JavaScript",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    duration: "6 weeks",
    lessons: 36,
    xpPoints: 1800,
    completedLessons: 0
  },
  {
    id: 4,
    title: "Data Structures & Algorithms",
    description: "Learn essential data structures and algorithms for coding interviews.",
    difficulty: "Advanced",
    language: "Python",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    duration: "8 weeks",
    lessons: 48,
    xpPoints: 2400,
    completedLessons: 0
  },
  {
    id: 5,
    title: "HTML & CSS Fundamentals",
    description: "Build the foundation of web development with HTML and CSS.",
    difficulty: "Beginner",
    language: "HTML/CSS",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2786/2786969.png",
    duration: "3 weeks",
    lessons: 18,
    xpPoints: 900,
    completedLessons: 0
  },
  {
    id: 6,
    title: "Advanced Python",
    description: "Take your Python skills to the next level with advanced concepts.",
    difficulty: "Advanced",
    language: "Python",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    duration: "7 weeks",
    lessons: 42,
    xpPoints: 2100,
    completedLessons: 0
  }
];

// Mock Badges
export const badges: Badge[] = [
  {
    id: 1,
    name: "Python Beginner",
    description: "Completed your first Python challenge.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    earned: true
  },
  {
    id: 2,
    name: "Code Streak",
    description: "Coded for 7 consecutive days.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    earned: true
  },
  {
    id: 3,
    name: "Bug Squasher",
    description: "Fixed 10 errors in your code.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    earned: false
  },
  {
    id: 4,
    name: "Speed Coder",
    description: "Completed a challenge in under 5 minutes.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    earned: false
  },
  {
    id: 5,
    name: "HTML Master",
    description: "Completed all HTML challenges.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    earned: false
  }
];

// Mock User Progress
export const userProgress: UserProgress = {
  totalXp: 850,
  level: 4,
  completedCourses: 1,
  completedChallenges: 12,
  earnedBadges: 2,
  streak: 5
};
