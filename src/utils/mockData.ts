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
  lessonDetails?: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  codeExample?: string;
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
    completedLessons: 8,
    lessonDetails: [
      { 
        id: 1, 
        title: "Introduction to Python", 
        description: "Learn what Python is and why it's awesome!", 
        completed: true, 
        locked: false,
        codeExample: `# Welcome to Python!
print("Hello, Coder!")
print("Welcome to CodeRush!")
print("Let's start our Python adventure!")` 
      },
      { 
        id: 2, 
        title: "Variables and Data Types", 
        description: "Learn how to store and manipulate data in Python.", 
        completed: true, 
        locked: false,
        codeExample: `# Variables and Data Types
name = "CodeRush Player"
level = 5
is_awesome = True

print(f"Hi {name}! You are level {level}.")
print("Are you awesome?", is_awesome)` 
      },
      { 
        id: 3, 
        title: "Control Flow", 
        description: "Control the flow of your program with if/else statements.", 
        completed: false, 
        locked: false,
        codeExample: `# Control Flow
score = 85

if score >= 90:
    print("You earned an A!")
elif score >= 80:
    print("You earned a B!")
else:
    print("Keep practicing!")` 
      },
      { 
        id: 4, 
        title: "Functions", 
        description: "Create reusable blocks of code.", 
        completed: false, 
        locked: false,
        codeExample: `# Functions
def award_points(difficulty, time_taken):
    base_points = difficulty * 100
    time_bonus = max(0, 30 - time_taken) * 10
    return base_points + time_bonus

# Try different values
easy_challenge = award_points(1, 15)
hard_challenge = award_points(5, 25)

print(f"Easy challenge: {easy_challenge} points")
print(f"Hard challenge: {hard_challenge} points")` 
      },
      { 
        id: 5, 
        title: "Lists and Loops", 
        description: "Store multiple values and iterate through them.", 
        completed: false, 
        locked: false,
        codeExample: `# Lists and Loops
items = ["sword", "shield", "potion", "map"]
inventory = []

# Add items to your inventory
for item in items:
    inventory.append(item)
    print(f"Added {item} to your inventory!")

# Display your inventory
print("\\nYour inventory contains:")
for index, item in enumerate(inventory, 1):
    print(f"{index}. {item}")` 
      },
      { 
        id: 6, 
        title: "Dictionaries", 
        description: "Create key-value pairs to organize data.", 
        completed: false, 
        locked: false,
        codeExample: `# Dictionaries
player = {
    "name": "CodeHero",
    "health": 100,
    "skills": ["coding", "debugging", "learning"],
    "inventory": {
        "weapon": "keyboard",
        "armor": "headphones"
    }
}

# Access player data
print(f"Player name: {player['name']}")
print(f"Health: {player['health']}")
print(f"Skills: {', '.join(player['skills'])}")
print(f"Weapon: {player['inventory']['weapon']}")` 
      },
      { 
        id: 7, 
        title: "Classes and Objects", 
        description: "Create your own data types with object-oriented programming.", 
        completed: false, 
        locked: false,
        codeExample: `# Classes and Objects
class Character:
    def __init__(self, name, role, power):
        self.name = name
        self.role = role
        self.power = power
        self.level = 1
    
    def level_up(self):
        self.level += 1
        self.power += 10
        print(f"{self.name} leveled up! Now level {self.level}")
    
    def info(self):
        return f"{self.name} is a level {self.level} {self.role} with {self.power} power"

# Create characters
hero = Character("CodeWarrior", "Developer", 75)
hero.level_up()
print(hero.info())` 
      }
    ]
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
    completedLessons: 6,
    lessonDetails: [
      { 
        id: 1, 
        title: "Introduction to JavaScript", 
        description: "Learn what JavaScript is and why it powers the web.", 
        completed: true, 
        locked: false,
        codeExample: `// Introduction to JavaScript
console.log("Hello, Coder!");
console.log("Welcome to CodeRush!");
console.log("Let's start our JavaScript adventure!");` 
      },
      { 
        id: 2, 
        title: "Variables and Data Types", 
        description: "Learn about let, const, and different data types.", 
        completed: true, 
        locked: false,
        codeExample: `// Variables and Data Types
let name = "CodeRush Player";
const level = 5;
let isAwesome = true;

console.log(\`Hi \${name}! You are level \${level}.\`);
console.log("Are you awesome?", isAwesome);` 
      },
      { 
        id: 3, 
        title: "Control Flow", 
        description: "Use if/else statements and switch cases.", 
        completed: false, 
        locked: false,
        codeExample: `// Control Flow
let score = 85;

if (score >= 90) {
    console.log("You earned an A!");
} else if (score >= 80) {
    console.log("You earned a B!");
} else {
    console.log("Keep practicing!");
}` 
      },
      { 
        id: 4, 
        title: "Functions", 
        description: "Create reusable blocks of code with functions.", 
        completed: false, 
        locked: false,
        codeExample: `// Functions
function awardPoints(difficulty, timeTaken) {
    let basePoints = difficulty * 100;
    let timeBonus = Math.max(0, 30 - timeTaken) * 10;
    return basePoints + timeBonus;
}

// Try different values
let easyChallenge = awardPoints(1, 15);
let hardChallenge = awardPoints(5, 25);

console.log(\`Easy challenge: \${easyChallenge} points\`);
console.log(\`Hard challenge: \${hardChallenge} points\`);` 
      },
      { 
        id: 5, 
        title: "Arrays and Loops", 
        description: "Store multiple values and iterate through them.", 
        completed: false, 
        locked: false,
        codeExample: `// Arrays and Loops
const items = ["sword", "shield", "potion", "map"];
const inventory = [];

// Add items to your inventory
for (let i = 0; i < items.length; i++) {
    inventory.push(items[i]);
    console.log(\`Added \${items[i]} to your inventory!\`);
}

// Display your inventory with forEach
console.log("\\nYour inventory contains:");
inventory.forEach((item, index) => {
    console.log(\`\${index + 1}. \${item}\`);
});` 
      },
      { 
        id: 6, 
        title: "Objects", 
        description: "Create key-value pairs to organize data.", 
        completed: false, 
        locked: false,
        codeExample: `// Objects
const player = {
    name: "CodeHero",
    health: 100,
    skills: ["coding", "debugging", "learning"],
    inventory: {
        weapon: "keyboard",
        armor: "headphones"
    },
    levelUp: function() {
        this.health += 20;
        console.log(\`\${this.name} leveled up! Health is now \${this.health}\`);
    }
};

// Access and modify object data
console.log(\`Player name: \${player.name}\`);
player.levelUp();
console.log(\`Skills: \${player.skills.join(", ")}\`);` 
      },
      { 
        id: 7, 
        title: "DOM Manipulation", 
        description: "Learn to interact with web page elements.", 
        completed: false, 
        locked: false,
        codeExample: `// DOM Manipulation
// This would be used in a browser environment

// Select an element
const gameTitle = document.getElementById("gameTitle");
gameTitle.textContent = "Code Adventure";

// Create a new element
const scoreDisplay = document.createElement("div");
scoreDisplay.className = "score-display";
scoreDisplay.textContent = "Score: 100";

// Add it to the page
document.body.appendChild(scoreDisplay);

// Event listener
const levelUpButton = document.getElementById("levelUpBtn");
levelUpButton.addEventListener("click", () => {
    let currentScore = 100;
    currentScore += 50;
    scoreDisplay.textContent = \`Score: \${currentScore}\`;
    console.log("Level up button clicked!");
});` 
      }
    ]
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
    completedLessons: 12,
    lessonDetails: [
      { 
        id: 1, 
        title: "Introduction to React", 
        description: "Learn what React is and why it's popular.", 
        completed: true, 
        locked: false,
        codeExample: `// Introduction to React
import React from 'react';

function Welcome() {
  return (
    <div>
      <h1>Hello, Coder!</h1>
      <p>Welcome to CodeRush React adventure!</p>
    </div>
  );
}

export default Welcome;` 
      },
      { 
        id: 2, 
        title: "JSX and Components", 
        description: "Learn about JSX syntax and creating components.", 
        completed: true, 
        locked: false,
        codeExample: `// JSX and Components
import React from 'react';

// A simple component using JSX
function GameCard({ title, points, isCompleted }) {
  return (
    <div className={isCompleted ? "card completed" : "card"}>
      <h2>{title}</h2>
      <p>Points: {points}</p>
      <span>{isCompleted ? "✅ Completed" : "⏳ In Progress"}</span>
    </div>
  );
}

function GameList() {
  return (
    <div className="game-list">
      <h1>Your Code Adventures</h1>
      <GameCard title="Python Quest" points={300} isCompleted={true} />
      <GameCard title="JavaScript Journey" points={450} isCompleted={false} />
    </div>
  );
}

export default GameList;` 
      },
      { 
        id: 3, 
        title: "State and Props", 
        description: "Learn how to manage component data.", 
        completed: false, 
        locked: false,
        codeExample: `// State and Props
import React, { useState } from 'react';

function Counter() {
  // State declaration
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState(1);

  // Update state with functions
  const increment = () => {
    setCount(count + 1);
    
    // Level up every 10 points
    if ((count + 1) % 10 === 0) {
      setLevel(level + 1);
    }
  };

  return (
    <div className="counter-game">
      <h1>Code Counter Game</h1>
      <p>Level: {level}</p>
      <p>Points: {count}</p>
      <button onClick={increment}>Earn Points!</button>
    </div>
  );
}

export default Counter;` 
      },
      { 
        id: 4, 
        title: "Event Handling", 
        description: "Respond to user interactions in React.", 
        completed: false, 
        locked: false,
        codeExample: `// Event Handling
import React, { useState } from 'react';

function CodeQuest() {
  const [inventory, setInventory] = useState([]);
  const [message, setMessage] = useState('Start your quest!');
  
  const items = [
    { id: 1, name: 'Debugger', power: 10 },
    { id: 2, name: 'Code Formatter', power: 5 },
    { id: 3, name: 'Magic Refactorer', power: 15 }
  ];
  
  const addToInventory = (item) => {
    setInventory([...inventory, item]);
    setMessage(\`Added \${item.name} to your inventory!\`);
  };
  
  const useItem = (itemId) => {
    const item = inventory.find(i => i.id === itemId);
    if (item) {
      setMessage(\`Used \${item.name} for \${item.power} power!\`);
      setInventory(inventory.filter(i => i.id !== itemId));
    }
  };
  
  return (
    <div className="code-quest">
      <h1>Code Quest Adventure</h1>
      <p className="message">{message}</p>
      
      <div className="shop">
        <h2>Item Shop</h2>
        {items.map(item => (
          <button key={item.id} onClick={() => addToInventory(item)}>
            Buy {item.name} (Power: {item.power})
          </button>
        ))}
      </div>
      
      <div className="player-inventory">
        <h2>Your Inventory ({inventory.length})</h2>
        {inventory.map((item, index) => (
          <div key={index} className="inventory-item">
            {item.name} 
            <button onClick={() => useItem(item.id)}>Use</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodeQuest;` 
      },
      { 
        id: 5, 
        title: "Conditional Rendering", 
        description: "Show different UI based on conditions.", 
        completed: false, 
        locked: false,
        codeExample: `// Conditional Rendering
import React, { useState } from 'react';

function GameLevel() {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [showReward, setShowReward] = useState(false);
  
  const earnXP = () => {
    const newXP = xp + 25;
    setXp(newXP);
    
    // Level up every 100 XP
    if (newXP >= level * 100) {
      setLevel(level + 1);
      setShowReward(true);
    }
  };
  
  const claimReward = () => {
    setShowReward(false);
  };
  
  return (
    <div className="game-level">
      <h1>Code Adventure</h1>
      
      {/* Player stats - always shown */}
      <div className="player-stats">
        <p>Level: {level}</p>
        <p>XP: {xp} / {level * 100}</p>
        <button onClick={earnXP}>Write Code (Earn 25 XP)</button>
      </div>
      
      {/* Conditional message based on level */}
      {level < 3 ? (
        <p>Keep coding to unlock special powers!</p>
      ) : (
        <p>Special powers unlocked! You can now refactor code!</p>
      )}
      
      {/* Conditional reward popup */}
      {showReward && (
        <div className="level-up-reward">
          <h2>Level Up!</h2>
          <p>You reached level {level}!</p>
          <p>Reward: New coding power unlocked</p>
          <button onClick={claimReward}>Claim Reward</button>
        </div>
      )}
    </div>
  );
}

export default GameLevel;` 
      },
      { 
        id: 6, 
        title: "Lists and Keys", 
        description: "Render lists of data efficiently.", 
        completed: false, 
        locked: false,
        codeExample: `// Lists and Keys
import React, { useState } from 'react';

function CodeChallenges() {
  const [challenges, setChallenges] = useState([
    { id: 1, title: 'Loop Master', difficulty: 'Easy', completed: false },
    { id: 2, title: 'Array Wizard', difficulty: 'Medium', completed: false },
    { id: 3, title: 'Function Ninja', difficulty: 'Hard', completed: false },
    { id: 4, title: 'Object Explorer', difficulty: 'Medium', completed: false }
  ]);
  
  const completeChallenge = (id) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id 
        ? { ...challenge, completed: true } 
        : challenge
    ));
  };
  
  // Filter challenges by difficulty
  const filterByDifficulty = (difficulty) => {
    return challenges.filter(challenge => challenge.difficulty === difficulty);
  };
  
  return (
    <div className="code-challenges">
      <h1>Daily Code Challenges</h1>
      
      <h2>All Challenges</h2>
      <ul className="challenge-list">
        {challenges.map(challenge => (
          <li key={challenge.id} className={challenge.completed ? 'completed' : ''}>
            {challenge.title} - {challenge.difficulty}
            {!challenge.completed && (
              <button onClick={() => completeChallenge(challenge.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
      
      <h2>Easy Challenges</h2>
      <ul className="challenge-list">
        {filterByDifficulty('Easy').map(challenge => (
          <li key={challenge.id}>{challenge.title}</li>
        ))}
      </ul>
      
      <h2>Medium Challenges</h2>
      <ul className="challenge-list">
        {filterByDifficulty('Medium').map(challenge => (
          <li key={challenge.id}>{challenge.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CodeChallenges;` 
      },
      { 
        id: 7, 
        title: "Forms in React", 
        description: "Create interactive forms with React.", 
        completed: false, 
        locked: false,
        codeExample: `// Forms in React
import React, { useState } from 'react';

function CharacterCreator() {
  const [character, setCharacter] = useState({
    name: '',
    class: 'Coder',
    level: 1,
    skills: [],
    bio: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter({
      ...character,
      [name]: value
    });
  };
  
  const handleSkillChange = (e) => {
    const skill = e.target.value;
    const isChecked = e.target.checked;
    
    if (isChecked) {
      setCharacter({
        ...character,
        skills: [...character.skills, skill]
      });
    } else {
      setCharacter({
        ...character,
        skills: character.skills.filter(s => s !== skill)
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  return (
    <div className="character-creator">
      <h1>Create Your Coding Hero</h1>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Hero Name:</label>
            <input 
              type="text" 
              name="name" 
              value={character.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Class:</label>
            <select 
              name="class" 
              value={character.class} 
              onChange={handleChange}
            >
              <option value="Coder">Coder</option>
              <option value="Debugger">Debugger</option>
              <option value="Designer">Designer</option>
              <option value="Architect">Architect</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Starting Level:</label>
            <input 
              type="number" 
              name="level" 
              min="1" 
              max="10" 
              value={character.level} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group">
            <label>Skills:</label>
            <div className="checkbox-group">
              <label>
                <input 
                  type="checkbox" 
                  value="HTML" 
                  onChange={handleSkillChange} 
                /> HTML
              </label>
              <label>
                <input 
                  type="checkbox" 
                  value="CSS" 
                  onChange={handleSkillChange} 
                /> CSS
              </label>
              <label>
                <input 
                  type="checkbox" 
                  value="JavaScript" 
                  onChange={handleSkillChange} 
                /> JavaScript
              </label>
              <label>
                <input 
                  type="checkbox" 
                  value="React" 
                  onChange={handleSkillChange} 
                /> React
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label>Character Bio:</label>
            <textarea 
              name="bio" 
              value={character.bio} 
              onChange={handleChange} 
              rows="4"
            ></textarea>
          </div>
          
          <button type="submit" className="create-button">
            Create Character
          </button>
        </form>
      ) : (
        <div className="character-profile">
          <h2>{character.name}</h2>
          <p>Level {character.level} {character.class}</p>
          <p>Skills: {character.skills.join(', ') || 'None selected'}</p>
          <p>Bio: {character.bio || 'No bio provided'}</p>
          <button onClick={() => setSubmitted(false)}>
            Edit Character
          </button>
        </div>
      )}
    </div>
  );
}

export default CharacterCreator;` 
      }
    ]
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
    completedLessons: 14,
    lessonDetails: [
      { 
        id: 1, 
        title: "Introduction to Data Structures", 
        description: "Learn about arrays, lists, and dictionaries.", 
        completed: true, 
        locked: false,
        codeExample: `# Introduction to Data Structures
# Arrays and Lists
array = [1, 2, 3, 4, 5]
list = ["apple", "banana", "cherry"]

# Dictionaries
person = {
    "name": "CodeRush",
    "age": 25,
    "skills": ["coding", "debugging", "learning"]
}` 
      },
      { 
        id: 2, 
        title: "Sorting Algorithms", 
        description: "Implement sorting algorithms like bubble sort and quicksort.", 
        completed: false, 
        locked: false,
        codeExample: `# Sorting Algorithms
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quicksort(left) + middle + quicksort(right)

# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(numbers)
print("Sorted array by bubble sort:", numbers)

numbers = [64, 34, 25, 12, 22, 11, 90]
quicksort(numbers)
print("Sorted array by quicksort:", numbers)` 
      },
      { 
        id: 3, 
        title: "Graphs and Trees", 
        description: "Understand graph and tree data structures.", 
        completed: false, 
        locked: false,
        codeExample: `# Graphs and Trees
# Graph
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Tree
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

    def add_child(self, child):
        self.children.append(child)

# Example usage
root = TreeNode('A')
root.add_child(TreeNode('B'))
root.add_child(TreeNode('C'))
root.children[0].add_child(TreeNode('D'))
root.children[0].add_child(TreeNode('E'))
root.children[1].add_child(TreeNode('F'))` 
      },
      { 
        id: 4, 
        title: "Dynamic Programming", 
        description: "Solve problems using dynamic programming techniques.", 
        completed: false, 
        locked: false,
        codeExample: `# Dynamic Programming
def fibonacci(n):
    if n <= 1:
        return n
    else:
        a, b = 0, 1
        for _ in range(2, n+1):
            a, b = b, a + b
        return b

# Example usage
print(fibonacci(10))` 
      },
      { 
        id: 5, 
        title: "Recursion", 
        description: "Master the art of recursion with examples.", 
        completed: false, 
        locked: false,
        codeExample: `# Recursion
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

# Example usage
print(factorial(5))` 
      },
      { 
        id: 6, 
        title: "Heap and Priority Queue", 
        description: "Understand heap and priority queue data structures.", 
        completed: false, 
        locked: false,
        codeExample: `# Heap and Priority Queue
import heapq

# Min-heap
min_heap = []
heapq.heappush(min_heap, 5)
heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 8)
print("Min-heap:", min_heap)

# Max-heap
max_heap = []
heapq.heappush(max_heap, -5)
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -8)
print("Max-heap:", max_heap)` 
      },
      { 
        id: 7, 
        title: "Hash Tables", 
        description: "Learn about hash tables and their applications.", 
        completed: false, 
        locked: false,
        codeExample: `# Hash Tables
# Example hash table
hash_table = {}

# Inserting data
hash_table['name'] = 'CodeRush'
hash_table['age'] = 25
hash_table['skills'] = ['coding', 'debugging', 'learning']

# Accessing data
print(hash_table['name'])
print(hash_table['age'])
print(hash_table['skills'])` 
      }
    ]
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
    completedLessons: 18,
    lessonDetails: [
      { 
        id: 1, 
        title: "Introduction to HTML", 
        description: "Learn the basics of HTML structure.", 
        completed: true, 
        locked: false,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeRush HTML</title>
</head>
<body>
    <h1>Welcome to CodeRush!</h1>
    <p>Learn HTML and CSS to build web pages.</p>
</body>
</html>` 
      },
      { 
        id: 2, 
        title: "Basic CSS", 
        description: "Apply styles to HTML elements with CSS.", 
        completed: true, 
        locked: false,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeRush CSS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
    </style>
</head>
<body>
    <h1>Welcome to CodeRush!</h1>
    <p>Learn HTML and CSS to build web pages.</p>
</body>
</html>` 
      },
      { 
        id: 3, 
        title: "Advanced CSS", 
        description: "Create complex layouts and styles with CSS.", 
        completed: false, 
        locked: false,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeRush Advanced CSS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        p {
            color: #666;
            margin: 20px 0;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4CAF50;
            color: #fff;
            padding: 10px 0;
        }
        .content {
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to CodeRush!</h1>
        </div>
        <div class="content">
            <p>Learn HTML and CSS to build web pages.</p>
        </div>
    </div>
</body>
</html>` 
      },
      { 
        id: 4, 
        title: "Responsive Design", 
        description: "Design web pages that look good on all devices.", 
        completed: false, 
        locked: false,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeRush Responsive Design</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        p {
            color: #666;
            margin: 20px 0;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4CAF50;
            color: #fff;
            padding: 10px 0;
        }
        .content {
            padding: 20px;
        }
        @media (max-width: 600px) {
            .container {
                width: 90%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to CodeRush!</h1>
        </div>
        <div class="content">
            <p>Learn HTML and CSS to build web pages.</p>
        </div>
    </div>
</body>
</html>` 
      },
      { 
        id: 5, 
        title: "CSS Grid", 
        description: "Use CSS Grid to create complex layouts.", 
        completed: false, 
        locked: false,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeRush CSS Grid</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }
        .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .item {
            background-color: #4CAF50;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
</body>
</html>` 
      },
      { 
        id: 6, 
        title: "CSS Flexbox", 
        description: "Use CSS Flexbox to create flexible layouts.", 
        completed: false, 
        locked: false,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeRush CSS Flexbox</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .item {
            background-color: #4CAF50;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
</body>
</html>` 
      },
      { 
        id: 7, 
        title: "CSS Animations", 
        description: "Add animations to your web pages.", 
        completed: false, 
        locked: false,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeRush CSS Animations</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }
        .box {
            width: 100px;
            height: 100px;
            background-color: #4CAF50;
            color: #fff;
            text-align: center;
            line-height: 100px;
            animation: move 2s infinite;
        }
        @keyframes move {
            0% { transform: translateX(0); }
            50% { transform: translateX(200px); }
            100% { transform: translateX(0); }
        }
    </style>
</head>
<body>
    <div class="box">Move Me</div>
</body>
</html>` 
      }
    ]
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
    completedLessons: 5,
    lessonDetails: [
      { 
        id: 1, 
        title: "Introduction to Python", 
        description: "Learn the basics of Python programming language.", 
        completed: true, 
        locked: false,
        codeExample: `# Introduction to Python
# Variables and Data Types
name = "CodeRush Player"
level = 5
is_awesome = True

print(f"Hi {name}! You are level {level}.")
print("Are you awesome?", is_awesome)

# Control Flow
score = 85

if score >= 90:
    print("You earned an A!")
elif score >= 80:
    print("You earned a B!")
else:
    print("Keep practicing!")

# Functions
def award_points(difficulty, time_taken):
    base_points = difficulty * 100
    time_bonus = max(0, 30 - time_taken) * 10
    return base_points + time_bonus

# Try different values
easy_challenge = award_points(1, 15)
hard_challenge = award_points(5, 25)

print(f"Easy challenge: {easy_challenge} points")
print(f"Hard challenge: {hard_challenge} points")` 
      },
      { 
        id: 2, 
        title: "Advanced Data Structures", 
        description: "Learn about advanced data structures like linked lists and trees.", 
        completed: false, 
        locked: false,
        codeExample: `# Advanced Data Structures
# Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Tree
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Example usage
# Linked List
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)

# Tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

# Print linked list
current = head
while current:
    print(current.data, end=" -> ")
    current = current.next
print("None")

# Print tree
def print_tree(node):
    if node is not None:
        print_tree(node.left)
        print(node.value)
        print_tree(node.right)

print_tree(root)` 
      },
      { 
        id: 3, 
        title: "Concurrency and Parallelism", 
        description: "Understand how to handle multiple tasks concurrently.", 
        completed: false, 
        locked: false,
        codeExample: `# Concurrency and Parallelism
import threading

def print_numbers():
    for i in range(1, 6):
        print(i)

def print_letters():
    for letter in 'abcde':
        print(letter)

# Create threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# Start threads
thread1.start()
thread2.start()

# Wait for threads to complete
thread1.join()
thread2.join()` 
      },
      { 
        id: 4, 
        title: "Object-Oriented Programming", 
        description: "Create complex objects with classes and inheritance.", 
        completed: false, 
        locked: false,
        codeExample: `# Object-Oriented Programming
# Class definition
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

# Subclass definition
class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# Example usage
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.name)  # Output: Buddy
print(dog.speak())  # Output: Woof!

print(cat.name)  # Output: Whiskers
print(cat.speak())  # Output: Meow!"` 
      },
      { 
        id: 5, 
        title: "Database Design", 
        description: "Design databases using SQL and understand database normalization.", 
        completed: false, 
        locked: false,
        codeExample: `# Database Design
# SQL
# Create a table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);

# Insert data
INSERT INTO users (id, name, email, age) VALUES
(1, 'John Doe', 'john@example.com', 30),
(2, 'Jane Smith', 'jane@example.com', 25);

# Select data
SELECT * FROM users;

# Update data
UPDATE users SET age = 31 WHERE id = 1;

# Delete data
DELETE FROM users WHERE id = 2;

# Normalization
# 1NF: Each column contains atomic values
# 2NF: Each non-key column is fully functionally dependent on the primary key
# 3NF: No transitive dependencies
# 4NF: No repeating groups
# 5NF: No multi-valued dependencies` 
      },
      { 
        id: 6, 
        title: "Machine Learning Basics", 
        description: "Learn the basics of machine learning with Python libraries.", 
        completed: false, 
        locked: false,
        codeExample: `# Machine Learning Basics
# Import libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Load data
data = pd.read_csv('data.csv')

# Split data
X = data[['feature1', 'feature2']]
y = data['target']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate model
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error: {mse}")

# Make predictions
new_data = np.array([[1, 2]])
prediction = model.predict(new_data)
print(f"Prediction: {prediction}")` 
      },
      { 
        id: 7, 
        title: "Web Scraping", 
        description: "Extract data from websites using Python libraries.", 
        completed: false, 
        locked: false,
        codeExample: `# Web Scraping
import requests
from bs4 import BeautifulSoup

# Send a request to the website
url = 'https://www.example.com'
response = requests.get(url)

# Parse the HTML content
soup = BeautifulSoup(response.content, 'html.parser')

# Find elements
title = soup.find('h1').text
paragraphs = soup.find_all('p')

# Print results
print(f"Title: {title}")
print("Paragraphs:")
for p in paragraphs:
    print(p.text)` 
      }
    ]
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
    completedLessons: 9,
    lessonDetails: [
      { 
        id: 1, 
        title: "Introduction to Node.js", 
        description: "Learn the basics of Node.js and its ecosystem.", 
        completed: true, 
        locked: false,
        codeExample: `// Introduction to Node.js
// Create a simple server
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});` 
      },
      { 
        id: 2, 
        title: "Express.js Basics", 
        description: "Learn how to build web applications with Express.js.", 
        completed: true, 
        locked: false,
        codeExample: `// Express.js Basics
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/users', (req, res) => {
  const user = req.body;
  res.send(`User created: ${user.name}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});` 
      },
      { 
        id: 3, 
        title: "Database Integration", 
        description: "Connect Node.js to databases like MySQL and MongoDB.", 
        completed: false, 
        locked: false,
        codeExample: `// Database Integration
// MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});` 
      },
      { 
        id: 4, 
        title: "Asynchronous Programming", 
        description: "Understand asynchronous programming with Node.js.", 
        completed: false, 
        locked: false,
        codeExample: `// Asynchronous Programming
// Callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'CodeRush', age: 25 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

// Promises
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'CodeRush', age: 25 };
      resolve(data);
    }, 1000);
  });
}

fetchDataPromise()
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function fetchDataAsync() {
  const data = await fetchDataPromise();
  console.log(data);
}

fetchDataAsync();` 
      },
      { 
        id: 5, 
        title: "Error Handling", 
        description: "Implement error handling in Node.js applications.", 
        completed: false, 
        locked: false,
        codeExample: `// Error Handling
// Try-catch blocks
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (err) {
    console.error(err.message);
  }
}

console.log(divide(10, 2));  // Output: 5
console.log(divide(10, 0));  // Output: Division by zero

// Error classes
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

function throwCustomError() {
  throw new CustomError('Custom error message');
}

try {
  throwCustomError();
} catch (err) {
  console.error(err.name);  // Output: CustomError
  console.error(err.message);  // Output: Custom error message
}` 
      },
      { 
        id: 6, 
        title: "Testing with Mocha and Chai", 
        description: "Write tests for Node.js applications using Mocha and Chai.", 
        completed: false, 
        locked: false,
        codeExample: `// Testing with Mocha and Chai
const assert = require('assert');
const { describe, it } = require('mocha');

describe('Math operations', () => {
  it('should add two numbers', () => {
    assert.strictEqual(1 + 1, 2);
  });

  it('should subtract two numbers', () => {
    assert.strictEqual(5 - 3, 2);
  });

  it('should multiply two numbers', () => {
    assert.strictEqual(2 * 3, 6);
  });

  it('should divide two numbers', () => {
    assert.strictEqual(10 / 2, 5);
  });
});` 
      },
      { 
        id: 7, 
        title: "Deployment with Heroku", 
        description: "Deploy Node.js applications to Heroku.", 
        completed: false, 
        locked: false,
        codeExample: `// Deployment with Heroku
// Create a Procfile
// web: node app.js

// Create a .gitignore file
// node_modules/

// Create a package.json file
// {
//   "name": "myapp",
//   "version": "1.0.0",
//   "main": "app.js",
//   "scripts": {
//     "start": "node app.js"
//   },
//   "dependencies": {
//     "express": "^4.17.1"
//   }
// }

// Push your code to Heroku
// git push heroku master

// Open your app
// heroku open` 
      }
    ]
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
    completedLessons: 3,
    lessonDetails: [
      { 
        id: 1, 
        title: "Introduction to SQL", 
        description: "Learn the basics of SQL and its syntax.", 
        completed: true, 
        locked: false,
        codeExample: `-- Introduction to SQL
-- Create a table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);

-- Insert data
INSERT INTO users (id, name, email, age) VALUES
(1, 'John Doe', 'john@example.com', 30),
(2, 'Jane Smith', 'jane@example.com', 25);

-- Select data
SELECT * FROM users;

-- Update data
UPDATE users SET age = 31 WHERE id = 1;

-- Delete data
DELETE FROM users WHERE id = 2;

-- Data types
-- INT, VARCHAR, DATE, BOOLEAN, etc.

-- Operators
-- =, !=, >, <, >=, <=, LIKE, IN, BETWEEN, IS NULL, IS NOT NULL

-- Joins
-- INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN

-- Subqueries
-- SELECT (SELECT ... FROM ...)

-- Functions
-- COUNT, SUM, AVG, MAX, MIN, DATE_FORMAT, etc.

-- Aggregation
-- GROUP BY, HAVING

-- Transactions
-- START TRANSACTION, COMMIT, ROLLBACK` 
      },
      { 
        id: 2, 
        title: "Advanced SQL", 
        description: "Learn advanced SQL techniques like window functions and common table expressions.", 
        completed: false, 
        locked: false,
        codeExample: `-- Advanced SQL
-- Window functions
SELECT 
    name, 
    age, 
    ROW_NUMBER() OVER (ORDER BY age DESC) AS rank
FROM 
    users;

-- Common table expressions
WITH ranked_users AS (
    SELECT 
        name, 
        age, 
        ROW_NUMBER() OVER (ORDER BY age DESC) AS rank
    FROM 
        users
)
SELECT 
    name, 
    age, 
    rank
FROM 
    ranked_users
WHERE 
    rank <= 3;

-- Subqueries
SELECT 
    name, 
    email, 
    (SELECT COUNT(*) FROM users WHERE age > u.age) AS older_users
FROM 
    users u;

-- Functions
SELECT 
    name, 
    age, 
    DATE_FORMAT(birthdate, '%Y-%m-%d') AS formatted_birthdate
FROM 
    users;

-- Aggregation
SELECT 
    department, 
    COUNT(*) AS num_employees
FROM 
    employees
GROUP BY 
    department;

-- Transactions
START TRANSACTION;
UPDATE users SET age = 32 WHERE id = 1;
COMMIT;

-- Error handling
SELECT * FROM users WHERE age = 0;` 
      },
      { 
        id: 3, 
        title: "Database Normalization", 
        description: "Understand database normalization and its benefits.", 
        completed: false, 
        locked: false,
        codeExample: `-- Database Normalization
-- 1NF: Each column contains atomic values
-- 2NF: Each non-key column is fully functionally dependent on the primary key
-- 3NF: No transitive dependencies
-- 4NF: No repeating groups
-- 5NF: No multi-valued dependencies

-- Example of 1NF
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    department VARCHAR(100)
);

-- Example of 2NF
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT
);

-- Example of 3NF
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);

-- Example of 4NF
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT
);

-- Example of 5NF
CREATE TABLE order_details (
    order_detail_id INT PRIMARY KEY,
    order_item_id INT,
    price DECIMAL(10, 2)
);` 
      },
      { 
        id: 4, 
        title: "Database Indexing", 
        description: "Optimize database performance with indexing.", 
        completed: false, 
        locked: false,
        codeExample: `-- Database Indexing
-- Create an index
CREATE INDEX idx_users_name ON users(name);

-- Drop an index
DROP INDEX idx_users_name;

-- Use indexes in queries
SELECT * FROM users WHERE name = 'John Doe';

-- Indexes on multiple columns
CREATE INDEX idx_users_email_age ON users(email, age);

-- Composite indexes
CREATE INDEX idx_orders_customer_product ON orders(customer_id, product_id);

-- Indexes on functions
CREATE INDEX idx_products_price ON products(price);

-- Indexes on NULL values
CREATE INDEX idx_users_email ON users(email);` 
      },
      { 
        id: 5, 
        title: "Database Backup and Recovery", 
        description: "Learn how to back up and recover databases.", 
        completed: false, 
        locked: false,
        codeExample: `-- Database Backup and Recovery
-- Backup a database
mysqldump -u username -p database_name > backup.sql

-- Restore a database
mysql -u username -p database_name < backup.sql

-- Backup a database with encryption
mysqldump -u username -p --master-data=2 --single-transaction --lock-tables=false database_name > backup.sql

-- Restore a database with encryption
mysql -u username -p database_name < backup.sql` 
      },
      { 
        id: 6, 
        title: "Database Security", 
        description: "Implement security measures for database applications.", 
        completed: false, 
        locked: false,
        codeExample: `-- Database Security
-- Use strong passwords
-- Limit database access
-- Use SSL/TLS
-- Regularly update software
-- Implement access controls
-- Use encryption
-- Regularly back up data` 
      },
      { 
        id: 7, 
        title: "Database Performance Tuning", 
        description: "Optimize database performance for better query execution.", 
        completed: false, 
        locked: false,
        codeExample: `-- Database Performance Tuning
-- Analyze query execution plans
EXPLAIN SELECT * FROM users WHERE name = 'John Doe';

-- Optimize queries
-- Use indexes
-- Avoid full table scans
-- Use JOINs instead of subqueries
-- Use appropriate data types
-- Use appropriate indexes
-- Use appropriate query execution plans` 
      }
    ]
  }
];

// Mock Badges - Updated with more colorful descriptions and better images
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
    earned: true
  },
  {
    id: 4,
    name: "Speed Coder",
    description: "Completed a challenge in under 5 minutes.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    earned: true
  },
  {
    id: 5,
    name: "HTML Master",
    description: "Completed all HTML challenges.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    earned: true
  }
];

// Mock User Progress - Updated with higher values
export const userProgress: UserProgress = {
  totalXp: 2850,
  level: 14,
  completedCourses: 3,
  completedChallenges: 42,
  earnedBadges: 5,
  streak: 12
};
