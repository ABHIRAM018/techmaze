import React from 'react';
import { LanguageCard } from '../components/LanguageCard';

const languages = [
  {
    name: 'Python',
    description: 'Python is a high-level, interpreted programming language known for its simplicity and readability. Perfect for beginners and professionals alike.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    name: 'C',
    description: 'C is a powerful low-level programming language that gives you complete control over hardware. It\'s the foundation of modern computing.',
    image: 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    name: 'C++',
    description: 'C++ extends C with object-oriented features. It\'s widely used in game development, system programming, and high-performance applications.',
    image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Navigate Your Tech Journey
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore, learn, and master programming languages with interactive tutorials,
            comprehensive roadmaps, and hands-on coding exercises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((lang) => (
            <LanguageCard
              key={lang.name}
              language={lang.name}
              description={lang.description}
              imagePath={lang.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}