import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import { UserProgress } from '../types';

interface SmartRecommendationsProps {
  userProgress: UserProgress;
  onSelectLesson: (lessonId: number) => void;
}

const SmartRecommendations: React.FC<SmartRecommendationsProps> = ({
  userProgress,
  onSelectLesson,
}) => {
  const getRecommendedLessons = () => {
    // TODO: Replace with actual AI-powered recommendations
    const completedLessons = new Set(userProgress.completedLessons);
    const recommendations = [];
    
    // Simple recommendation logic (to be enhanced with AI)
    if (completedLessons.size === 0) {
      recommendations.push({
        id: 0,
        title: "Getting Started",
        reason: "Perfect for beginners",
        confidence: 0.95
      });
    } else {
      // Mock recommendations based on progress
      recommendations.push({
        id: Math.max(...Array.from(completedLessons)) + 1,
        title: "Next Sequential Lesson",
        reason: "Natural progression path",
        confidence: 0.85
      });
    }

    return recommendations;
  };

  const recommendations = getRecommendedLessons();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <Brain className="text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Smart Recommendations</h2>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-all"
            onClick={() => onSelectLesson(rec.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{rec.title}</h3>
                <p className="text-gray-600 mt-1">{rec.reason}</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-gray-500 mr-2">
                  {(rec.confidence * 100).toFixed(0)}% match
                </div>
                <ArrowRight className="text-blue-600" />
              </div>
            </div>
            
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${rec.confidence * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartRecommendations;
