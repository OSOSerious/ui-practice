import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface LessonCardProps {
  lesson: {
    icon: React.ReactNode;
    title: string;
    description: string;
    duration: string;
  };
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ 
  lesson, 
  isActive, 
  isCompleted, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
        isActive
          ? 'border-indigo-600 bg-indigo-50'
          : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            {lesson.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`font-medium ${
                isActive ? 'text-indigo-600' : 'text-gray-900'
              }`}>
                {lesson.title}
              </h3>
              {isCompleted && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </div>
            <p className="text-sm text-gray-500">{lesson.description}</p>
            <span className="text-xs text-gray-400 mt-1">{lesson.duration}</span>
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 ${
          isActive ? 'text-indigo-600' : 'text-gray-400'
        }`} />
      </div>
    </button>
  );
};

export default LessonCard;