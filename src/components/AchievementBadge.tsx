import React from 'react';
import { Award, Star } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  type: 'bronze' | 'silver' | 'gold';
  isUnlocked: boolean;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  type,
  isUnlocked
}) => {
  const colors = {
    bronze: 'bg-amber-100 text-amber-700 border-amber-200',
    silver: 'bg-gray-100 text-gray-700 border-gray-200',
    gold: 'bg-yellow-100 text-yellow-700 border-yellow-200'
  };

  return (
    <div className={`relative p-4 rounded-lg border ${colors[type]} ${
      !isUnlocked ? 'opacity-50' : ''
    }`}>
      <div className="flex items-start gap-3">
        {isUnlocked ? (
          <Award className="w-6 h-6 flex-shrink-0" />
        ) : (
          <Star className="w-6 h-6 flex-shrink-0" />
        )}
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      {!isUnlocked && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] rounded-lg flex items-center justify-center">
          <span className="text-sm font-medium">Keep learning to unlock!</span>
        </div>
      )}
    </div>
  );
};

export default AchievementBadge;