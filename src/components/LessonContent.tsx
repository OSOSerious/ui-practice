import React from 'react';
import { LessonContent as LessonContentType } from '../types';
import { BookOpen, Code, CheckCircle2 } from 'lucide-react';
import InteractiveExample from './InteractiveExample';

interface LessonContentProps {
  content: LessonContentType;
  onComplete: () => void;
}

const LessonContent: React.FC<LessonContentProps> = ({ content, onComplete }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold">Overview</h2>
        </div>
        <p className="text-gray-700">{content.overview}</p>
      </div>

      {content.sections.map((section, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
          <p className="text-gray-700 mb-4">{section.content}</p>
          
          {section.interactive && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-indigo-600" />
                <h4 className="font-medium">Try it yourself</h4>
              </div>
              <InteractiveExample 
                example={section.interactive}
                onComplete={() => {
                  // You could add specific completion logic here
                  console.log('Interactive example completed');
                }}
              />
            </div>
          )}
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
            <ul className="space-y-2">
              {section.examples.map((example, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <button
        onClick={onComplete}
        className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
      >
        Complete Lesson
      </button>
    </div>
  );
};

export default LessonContent;