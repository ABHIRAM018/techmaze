interface Topic {
  name: string;
  description?: string;
}

interface RoadmapSection {
  title: string;
  topics: Topic[];
}

export function getRoadmapData(language: string): RoadmapSection[] {
  const roadmaps: Record<string, RoadmapSection[]> = {
    'Python': [
      {
        title: '1. Fundamentals',
        topics: [
          { name: 'Variables and Data Types', description: 'Learn about strings, numbers, lists, etc.' },
          { name: 'Control Flow', description: 'Master if statements, loops, and conditional logic' },
          { name: 'Functions', description: 'Create reusable code blocks' }
        ]
      },
      {
        title: '2. Intermediate Concepts',
        topics: [
          { name: 'Object-Oriented Programming', description: 'Classes, objects, inheritance' },
          { name: 'Error Handling', description: 'Try/except blocks and exception handling' },
          { name: 'Modules and Packages', description: 'Code organization and reuse' }
        ]
      },
      {
        title: '3. Advanced Topics',
        topics: [
          { name: 'Decorators and Generators', description: 'Advanced function concepts' },
          { name: 'Concurrency', description: 'Async/await, threading, multiprocessing' },
          { name: 'Testing', description: 'Unit testing, integration testing' }
        ]
      }
    ],
    'C': [
      {
        title: '1. Basics',
        topics: [
          { name: 'Data Types and Variables', description: 'int, char, float, etc.' },
          { name: 'Control Structures', description: 'if, while, for loops' },
          { name: 'Functions', description: 'Function declarations and calls' }
        ]
      },
      {
        title: '2. Core Concepts',
        topics: [
          { name: 'Pointers', description: 'Memory addresses and pointer arithmetic' },
          { name: 'Arrays', description: 'Static and dynamic arrays' },
          { name: 'Structures', description: 'Custom data types' }
        ]
      },
      {
        title: '3. Advanced Topics',
        topics: [
          { name: 'Memory Management', description: 'malloc, free, memory leaks' },
          { name: 'File I/O', description: 'Reading and writing files' },
          { name: 'Preprocessor Directives', description: '#include, #define, macros' }
        ]
      }
    ],
    'C++': [
      {
        title: '1. C++ Basics',
        topics: [
          { name: 'C++ Syntax', description: 'Basic syntax and structure' },
          { name: 'OOP Fundamentals', description: 'Classes, objects, inheritance' },
          { name: 'STL Basics', description: 'Vectors, strings, containers' }
        ]
      },
      {
        title: '2. Intermediate C++',
        topics: [
          { name: 'Templates', description: 'Generic programming' },
          { name: 'Exception Handling', description: 'try/catch blocks' },
          { name: 'Smart Pointers', description: 'Memory management' }
        ]
      },
      {
        title: '3. Modern C++',
        topics: [
          { name: 'C++11/14/17/20 Features', description: 'Modern C++ features' },
          { name: 'Concurrency', description: 'Threads, async programming' },
          { name: 'Design Patterns', description: 'Common programming patterns' }
        ]
      }
    ]
  };

  return roadmaps[language] || [];
}