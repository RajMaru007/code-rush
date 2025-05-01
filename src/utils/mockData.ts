
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

export interface Lesson {
  id: number;
  courseId: number;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  code: string;
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
  },
  {
    id: 7,
    title: "Node.js Backend Development",
    description: "Learn to build scalable server-side applications with Node.js and Express.",
    difficulty: "Intermediate",
    language: "JavaScript",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    duration: "6 weeks",
    lessons: 36,
    xpPoints: 1800,
    completedLessons: 0
  },
  {
    id: 8,
    title: "SQL Database Design",
    description: "Master database design and SQL queries for efficient data management.",
    difficulty: "Intermediate",
    language: "SQL",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    duration: "5 weeks",
    lessons: 30,
    xpPoints: 1500,
    completedLessons: 0
  }
];

// Course Lessons
export const courseLessons: Lesson[] = [
  // Python Basics Course Lessons
  {
    id: 101,
    courseId: 1,
    title: "Introduction",
    description: "Learn about Python's history, features, and why it's a popular programming language for beginners and professionals alike.",
    completed: true,
    locked: false,
    code: "# Welcome to Python!\nprint('Hello, World!')\n\n# This is a comment\n\n# Try printing your name\nprint('Your name here')"
  },
  {
    id: 102,
    courseId: 1,
    title: "Variables and Data Types",
    description: "Understand how to create variables and work with different data types like strings, integers, floats, and booleans in Python.",
    completed: true,
    locked: false,
    code: "# Variables and Data Types\n\n# Integer\nage = 25\nprint(f'Age: {age}')\n\n# Float\nheight = 5.9\nprint(f'Height: {height}')\n\n# String\nname = 'John Doe'\nprint(f'Name: {name}')\n\n# Boolean\nis_student = True\nprint(f'Is Student: {is_student}')\n\n# Try creating your own variables"
  },
  {
    id: 103,
    courseId: 1,
    title: "Control Flow",
    description: "Learn to control the flow of your Python programs using conditional statements like if, else, and elif.",
    completed: false,
    locked: false,
    code: "# Control Flow\n\n# If-else statement\nscore = 85\n\nif score >= 90:\n    print('Grade: A')\nelif score >= 80:\n    print('Grade: B')\nelif score >= 70:\n    print('Grade: C')\nelif score >= 60:\n    print('Grade: D')\nelse:\n    print('Grade: F')\n\n# Try changing the score value"
  },
  {
    id: 104,
    courseId: 1,
    title: "Functions",
    description: "Learn how to create and use functions to organize your code and make it reusable.",
    completed: false,
    locked: true,
    code: "# Functions\n\n# Defining a function\ndef greet(name):\n    return f'Hello, {name}!'\n\n# Calling a function\nmessage = greet('Alice')\nprint(message)\n\n# Function with multiple parameters\ndef calculate_area(length, width):\n    return length * width\n\narea = calculate_area(5, 3)\nprint(f'Area: {area}')\n\n# Try creating your own function"
  },
  {
    id: 105,
    courseId: 1,
    title: "Lists and Loops",
    description: "Discover how to work with lists and iterate through them using loops in Python.",
    completed: false,
    locked: true,
    code: "# Lists and Loops\n\n# Creating a list\nfruits = ['apple', 'banana', 'orange', 'grape']\nprint(fruits)\n\n# Accessing elements\nprint(f'First fruit: {fruits[0]}')\n\n# For loop\nprint('All fruits:')\nfor fruit in fruits:\n    print(fruit)\n\n# While loop\ncount = 0\nwhile count < len(fruits):\n    print(f'Fruit {count+1}: {fruits[count]}')\n    count += 1\n\n# Try creating your own list and loop"
  },
  {
    id: 106,
    courseId: 1,
    title: "Dictionaries",
    description: "Learn how to use dictionaries to store and retrieve key-value pairs in Python.",
    completed: false,
    locked: true,
    code: "# Dictionaries\n\n# Creating a dictionary\nstudent = {\n    'name': 'John Doe',\n    'age': 20,\n    'major': 'Computer Science',\n    'gpa': 3.8\n}\n\n# Accessing values\nprint(f\"Student name: {student['name']}\")\nprint(f\"Student age: {student['age']}\")\n\n# Adding a new key-value pair\nstudent['year'] = 'Sophomore'\n\n# Iterating through a dictionary\nfor key, value in student.items():\n    print(f'{key}: {value}')\n\n# Try creating your own dictionary"
  },
  {
    id: 107,
    courseId: 1,
    title: "Classes and Objects",
    description: "Introduction to object-oriented programming with Python classes and objects.",
    completed: false,
    locked: true,
    code: "# Classes and Objects\n\n# Defining a class\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f'Hello, my name is {self.name} and I am {self.age} years old.'\n\n# Creating an object\nperson1 = Person('Alice', 25)\nprint(person1.greet())\n\n# Creating another object\nperson2 = Person('Bob', 30)\nprint(person2.greet())\n\n# Try creating your own class"
  },

  // JavaScript Essentials Course Lessons
  {
    id: 201,
    courseId: 2,
    title: "Introduction",
    description: "Learn about JavaScript and its importance in web development.",
    completed: false,
    locked: false,
    code: "// Welcome to JavaScript!\nconsole.log('Hello, World!');\n\n// This is a comment\n\n// Try printing your name\nconsole.log('Your name here');"
  },
  {
    id: 202,
    courseId: 2,
    title: "Variables and Data Types",
    description: "Understand how to declare variables and work with different data types in JavaScript.",
    completed: false,
    locked: false,
    code: "// Variables and Data Types\n\n// Number\nlet age = 25;\nconsole.log(`Age: ${age}`);\n\n// String\nlet name = 'John Doe';\nconsole.log(`Name: ${name}`);\n\n// Boolean\nlet isStudent = true;\nconsole.log(`Is Student: ${isStudent}`);\n\n// Array\nlet colors = ['red', 'green', 'blue'];\nconsole.log(`Colors: ${colors}`);\n\n// Object\nlet person = {\n  name: 'John',\n  age: 30\n};\nconsole.log(`Person: ${person.name}, ${person.age}`);\n\n// Try creating your own variables"
  },
  {
    id: 203,
    courseId: 2,
    title: "Control Flow",
    description: "Learn to control the flow of your JavaScript programs using conditional statements.",
    completed: false,
    locked: false,
    code: "// Control Flow\n\n// If-else statement\nlet score = 85;\n\nif (score >= 90) {\n  console.log('Grade: A');\n} else if (score >= 80) {\n  console.log('Grade: B');\n} else if (score >= 70) {\n  console.log('Grade: C');\n} else if (score >= 60) {\n  console.log('Grade: D');\n} else {\n  console.log('Grade: F');\n}\n\n// Try changing the score value"
  },
  {
    id: 204,
    courseId: 2,
    title: "Functions",
    description: "Learn how to create and use functions in JavaScript.",
    completed: false,
    locked: true,
    code: "// Functions\n\n// Function declaration\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\n// Function expression\nconst add = function(a, b) {\n  return a + b;\n};\n\n// Arrow function\nconst multiply = (a, b) => a * b;\n\n// Calling functions\nconsole.log(greet('Alice'));\nconsole.log(`Sum: ${add(5, 3)}`);\nconsole.log(`Product: ${multiply(4, 2)}`);\n\n// Try creating your own function"
  },
  {
    id: 205,
    courseId: 2,
    title: "Arrays and Loops",
    description: "Learn how to work with arrays and iterate through them using loops in JavaScript.",
    completed: false,
    locked: true,
    code: "// Arrays and Loops\n\n// Creating an array\nconst fruits = ['apple', 'banana', 'orange', 'grape'];\nconsole.log(fruits);\n\n// Accessing elements\nconsole.log(`First fruit: ${fruits[0]}`);\n\n// For loop\nconsole.log('All fruits:');\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}\n\n// For...of loop\nconsole.log('Using for...of:');\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// ForEach method\nconsole.log('Using forEach:');\nfruits.forEach((fruit, index) => {\n  console.log(`Fruit ${index + 1}: ${fruit}`);\n});\n\n// Try creating your own array and loop"
  },

  // React Fundamentals Course Lessons
  {
    id: 301,
    courseId: 3,
    title: "Introduction to React",
    description: "Learn about React and its core concepts.",
    completed: false,
    locked: false,
    code: "// Welcome to React\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n      <p>Welcome to the world of React.js</p>\n    </div>\n  );\n}\n\nReactDOM.render(<App />, document.getElementById('root'));"
  }
  
  // Add more lessons for other courses as needed
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
