import React from 'react';
import { Trophy, Star, Zap, Target, Book, Clock, Brain } from 'lucide-react';
import { Achievement } from '../types';

interface EnhancedAchievementsProps {
  achievements: Achievement[];
  onAchievementClick: (achievement: Achievement) => void;
}

const achievementIcons = {
  'first-lesson': Book,
  'perfect-quiz': Star,
  'course-complete': Trophy,
  'fast-learner': Zap,
  'streak-master': Clock,
  'ai-expert': Brain,
  'path-complete': Target
};

const EnhancedAchievements: React.FC<EnhancedAchievementsProps> = ({
  achievements,
  onAchievementClick
}) => {
  const getProgressColor = (type: Achievement['type']) => {
    switch (type) {
      case 'bronze': return 'from-amber-500 to-amber-700';
      case 'silver': return 'from-gray-300 to-gray-500';
      case 'gold': return 'from-yellow-400 to-yellow-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const formatDate = (date?: Date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          Achievements
        </h2>
        <div className="text-sm text-gray-600">
          {achievements.filter(a => a.isUnlocked).length} / {achievements.length} Unlocked
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement) => {
          const Icon = achievementIcons[achievement.id as keyof typeof achievementIcons] || Trophy;
          
          return (
            <button
              key={achievement.id}
              onClick={() => onAchievementClick(achievement)}
              className={`relative p-4 rounded-lg border transition-all ${
                achievement.isUnlocked
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${
                  achievement.isUnlocked ? 'bg-yellow-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    achievement.isUnlocked ? 'text-yellow-600' : 'text-gray-400'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {achievement.description}
                  </p>
                  
                  {achievement.progress !== undefined && (
                    <div className="mt-2">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(achievement.type)}`}
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {achievement.progress}% Complete
                      </div>
                    </div>
                  )}

                  {achievement.isUnlocked && achievement.unlockedAt && (
                    <div className="text-xs text-gray-500 mt-2">
                      Unlocked on {formatDate(achievement.unlockedAt)}
                    </div>
                  )}
                </div>
              </div>

              {achievement.isUnlocked && (
                <div className="absolute top-2 right-2">
                  <div className={`w-2 h-2 rounded-full bg-yellow-500`} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EnhancedAchievements;
