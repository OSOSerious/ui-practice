import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, BookOpen, Code, Brain, Zap, Trophy, Target } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.FC;
  progress: number;
  maxProgress: number;
  xp: number;
  unlocked: boolean;
  category: 'Learning' | 'Practice' | 'Mastery';
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first AI lesson',
    icon: BookOpen,
    progress: 1,
    maxProgress: 1,
    xp: 50,
    unlocked: true,
    category: 'Learning',
  },
  {
    id: '2',
    title: 'Code Master',
    description: 'Complete 10 coding exercises',
    icon: Code,
    progress: 4,
    maxProgress: 10,
    xp: 100,
    unlocked: false,
    category: 'Practice',
  },
  {
    id: '3',
    title: 'AI Explorer',
    description: 'Study 5 different AI concepts',
    icon: Brain,
    progress: 3,
    maxProgress: 5,
    xp: 150,
    unlocked: false,
    category: 'Learning',
  },
  {
    id: '4',
    title: 'Quick Learner',
    description: 'Complete a lesson in record time',
    icon: Zap,
    progress: 1,
    maxProgress: 1,
    xp: 75,
    unlocked: true,
    category: 'Mastery',
  },
  {
    id: '5',
    title: 'Perfect Score',
    description: 'Get 100% on a quiz',
    icon: Target,
    progress: 0,
    maxProgress: 1,
    xp: 200,
    unlocked: false,
    category: 'Mastery',
  },
];

const AchievementList: React.FC = () => {
  const totalXP = achievements.reduce((sum, achievement) => 
    sum + (achievement.unlocked ? achievement.xp : 0), 0
  );

  const categoryColors = {
    Learning: 'from-blue-500 to-blue-600',
    Practice: 'from-green-500 to-green-600',
    Mastery: 'from-purple-500 to-purple-600',
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Achievements</h1>
            <p className="text-gray-600">Track your progress and earn rewards.</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">{totalXP} XP</div>
            <p className="text-sm text-gray-500">Total Experience</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            whileHover={{ scale: 1.02 }}
            className={`bg-white rounded-xl shadow-sm overflow-hidden border ${
              achievement.unlocked ? 'border-green-200' : 'border-gray-100'
            }`}
          >
            <div className={`h-2 bg-gradient-to-r ${categoryColors[achievement.category]}`} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  achievement.unlocked ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {React.createElement(achievement.icon, {
                    size: 24,
                    className: achievement.unlocked ? 'text-green-600' : 'text-gray-400',
                  })}
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-600">
                    {achievement.xp} XP
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>
                    {achievement.progress} / {achievement.maxProgress}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className={`h-full rounded-full ${
                      achievement.unlocked ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{
                      width: `${(achievement.progress / achievement.maxProgress) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementList;
