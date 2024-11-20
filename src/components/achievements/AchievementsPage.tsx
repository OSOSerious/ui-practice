import React from 'react';
import { Trophy, Star, Target, Brain, Code, Zap } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: 'Python Master',
      description: 'Complete all Python courses',
      icon: Code,
      progress: 75,
      total: 100,
      unlocked: true,
    },
    {
      id: 2,
      title: 'Quick Learner',
      description: 'Complete 5 courses in a week',
      icon: Zap,
      progress: 3,
      total: 5,
      unlocked: false,
    },
    {
      id: 3,
      title: 'Perfect Score',
      description: 'Get 100% on any quiz',
      icon: Star,
      progress: 1,
      total: 1,
      unlocked: true,
    },
    {
      id: 4,
      title: 'Consistent Learner',
      description: 'Study for 7 days in a row',
      icon: Target,
      progress: 4,
      total: 7,
      unlocked: false,
    },
    {
      id: 5,
      title: 'Problem Solver',
      description: 'Solve 50 coding challenges',
      icon: Brain,
      progress: 32,
      total: 50,
      unlocked: false,
    },
    {
      id: 6,
      title: 'All Star',
      description: 'Earn all achievements',
      icon: Trophy,
      progress: 2,
      total: 10,
      unlocked: false,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Achievements</h1>
        <div className="text-gray-600">
          <span className="font-semibold">2</span> of <span className="font-semibold">10</span>{' '}
          achievements unlocked
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <div
              key={achievement.id}
              className={`bg-white rounded-lg border p-6 ${
                !achievement.unlocked ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    achievement.unlocked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm text-gray-600">
                    {achievement.progress} / {achievement.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      achievement.unlocked ? 'bg-blue-600' : 'bg-gray-400'
                    }`}
                    style={{
                      width: `${(achievement.progress / achievement.total) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsPage;
