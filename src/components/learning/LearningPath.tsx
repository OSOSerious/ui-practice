import React from 'react';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const modules: Module[] = [
  {
    id: 1,
    title: 'Introduction to AI',
    description: 'Learn the fundamentals of artificial intelligence and its applications.',
    completed: true,
    duration: '2 hours',
    difficulty: 'Beginner',
  },
  {
    id: 2,
    title: 'Machine Learning Basics',
    description: 'Understand the core concepts of machine learning algorithms.',
    completed: false,
    duration: '3 hours',
    difficulty: 'Beginner',
  },
  {
    id: 3,
    title: 'Neural Networks',
    description: 'Explore the architecture and applications of neural networks.',
    completed: false,
    duration: '4 hours',
    difficulty: 'Intermediate',
  },
];

const LearningPath: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Your Learning Journey</h2>
      <div className="space-y-8">
        {modules.map((module, index) => (
          <div key={module.id} className="relative">
            {index !== modules.length - 1 && (
              <div className="absolute left-5 top-12 h-full w-0.5 bg-gray-200" />
            )}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {module.completed ? (
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                ) : (
                  <Circle className="w-10 h-10 text-gray-300" />
                )}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    module.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {module.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{module.description}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <span className="text-sm text-gray-500">
                    {module.duration}
                  </span>
                  {!module.completed && (
                    <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Start Learning
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
