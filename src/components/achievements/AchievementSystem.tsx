import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Star,
  Zap,
  Brain,
  Target,
  Award,
  Crown,
  Medal,
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.FC;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  xp: number;
}

const achievements: Achievement[] = [
  {
    id: 'first_quiz',
    title: 'First Steps',
    description: 'Complete your first quiz',
    icon: Star,
    progress: 1,
    maxProgress: 1,
    unlocked: true,
    xp: 50,
  },
  {
    id: 'quiz_master',
    title: 'Quiz Master',
    description: 'Score 100% on 5 quizzes',
    icon: Trophy,
    progress: 2,
    maxProgress: 5,
    unlocked: false,
    xp: 200,
  },
  {
    id: 'fast_learner',
    title: 'Fast Learner',
    description: 'Complete 3 lessons in one day',
    icon: Zap,
    progress: 1,
    maxProgress: 3,
    unlocked: false,
    xp: 100,
  },
  {
    id: 'ai_expert',
    title: 'AI Expert',
    description: 'Complete the AI Fundamentals course',
    icon: Brain,
    progress: 75,
    maxProgress: 100,
    unlocked: false,
    xp: 500,
  },
];

const AchievementSystem: React.FC = () => {
  const totalXP = achievements.reduce(
    (sum, achievement) =>
      sum + (achievement.unlocked ? achievement.xp : 0),
    0
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Achievements</h2>
        <div className="flex items-center space-x-2">
          <Crown className="w-6 h-6 text-yellow-500" />
          <span className="text-lg font-semibold">{totalXP} XP</span>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            variants={itemVariants}
            className={`p-4 rounded-lg border-2 ${
              achievement.unlocked
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-3 rounded-full ${
                  achievement.unlocked
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {React.createElement(achievement.icon, {
                  className: 'w-6 h-6',
                })}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <span className="text-sm font-medium text-gray-500">
                    {achievement.xp} XP
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {achievement.description}
                </p>
                {!achievement.unlocked && (
                  <div className="mt-2">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 transition-all duration-500"
                        style={{
                          width: `${(achievement.progress / achievement.maxProgress) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                      <span className="text-xs text-gray-500">
                        {((achievement.progress / achievement.maxProgress) * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AchievementSystem;
