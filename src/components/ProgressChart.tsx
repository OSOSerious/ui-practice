import React from 'react';
import { UserProgress } from '../types';
import { Trophy } from 'lucide-react';

interface ProgressChartProps {
  progress: UserProgress;
  totalLessons: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ progress, totalLessons }) => {
  const completionPercentage = (progress.completedLessons.length / totalLessons) * 100;
  const averageScore = Object.values(progress.quizScores).reduce((acc, score) => acc + score, 0) / 
    Object.values(progress.quizScores).length || 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Your Progress</h2>
        <Trophy className={`w-6 h-6 ${
          completionPercentage === 100 ? 'text-yellow-500' : 'text-gray-300'
        }`} />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Course Completion</span>
            <span className="text-sm font-medium">{Math.round(completionPercentage)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div 
              className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Average Quiz Score</span>
            <span className="text-sm font-medium">{Math.round(averageScore * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div 
              className="h-2 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${averageScore * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-indigo-600 mb-1">
              {progress.completedLessons.length}
            </div>
            <div className="text-sm text-gray-600">Lessons Completed</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-500 mb-1">
              {Object.keys(progress.quizScores).length}
            </div>
            <div className="text-sm text-gray-600">Quizzes Taken</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;