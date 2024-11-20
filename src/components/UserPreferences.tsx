import React, { useState } from 'react';
import { Settings, BookOpen, Clock, Target } from 'lucide-react';
import { UserPreferences } from '../types';

interface UserPreferencesProps {
  preferences: UserPreferences;
  onUpdate: (preferences: UserPreferences) => void;
}

const UserPreferencesDialog: React.FC<UserPreferencesProps> = ({
  preferences,
  onUpdate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localPreferences, setLocalPreferences] = useState(preferences);

  const handleSave = () => {
    onUpdate(localPreferences);
    setIsOpen(false);
  };

  const learningStyles = [
    { value: 'visual', label: 'Visual', description: 'Learn through diagrams, videos, and visual examples' },
    { value: 'practical', label: 'Practical', description: 'Learn by doing exercises and hands-on practice' },
    { value: 'theoretical', label: 'Theoretical', description: 'Learn through concepts and detailed explanations' }
  ];

  const pacePreferences = [
    { value: 'slow', label: 'Thorough', description: 'Take time to deeply understand each concept' },
    { value: 'medium', label: 'Balanced', description: 'Mix of depth and progression' },
    { value: 'fast', label: 'Accelerated', description: 'Focus on rapid skill acquisition' }
  ];

  const difficultyLevels = [
    { value: 'beginner', label: 'Beginner', description: 'New to AI concepts' },
    { value: 'intermediate', label: 'Intermediate', description: 'Some AI experience' },
    { value: 'advanced', label: 'Advanced', description: 'Experienced with AI' }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <Settings className="w-5 h-5" />
        <span>Learning Preferences</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Learning Preferences</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Learning Style */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-medium mb-3">
                  <BookOpen className="w-5 h-5" />
                  Learning Style
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {learningStyles.map(style => (
                    <button
                      key={style.value}
                      onClick={() => setLocalPreferences(prev => ({ ...prev, learningStyle: style.value as any }))}
                      className={`p-4 border rounded-lg text-left ${
                        localPreferences.learningStyle === style.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <div className="font-medium mb-1">{style.label}</div>
                      <div className="text-sm text-gray-600">{style.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Learning Pace */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-medium mb-3">
                  <Clock className="w-5 h-5" />
                  Learning Pace
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {pacePreferences.map(pace => (
                    <button
                      key={pace.value}
                      onClick={() => setLocalPreferences(prev => ({ ...prev, pacePreference: pace.value as any }))}
                      className={`p-4 border rounded-lg text-left ${
                        localPreferences.pacePreference === pace.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <div className="font-medium mb-1">{pace.label}</div>
                      <div className="text-sm text-gray-600">{pace.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Level */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-medium mb-3">
                  <Target className="w-5 h-5" />
                  Difficulty Level
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {difficultyLevels.map(level => (
                    <button
                      key={level.value}
                      onClick={() => setLocalPreferences(prev => ({ ...prev, difficulty: level.value as any }))}
                      className={`p-4 border rounded-lg text-left ${
                        localPreferences.difficulty === level.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <div className="font-medium mb-1">{level.label}</div>
                      <div className="text-sm text-gray-600">{level.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weekly Goal */}
              <div>
                <h3 className="text-lg font-medium mb-3">Weekly Learning Goal</h3>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={localPreferences.goalWeeklyHours || 5}
                  onChange={(e) => setLocalPreferences(prev => ({ ...prev, goalWeeklyHours: parseInt(e.target.value) }))}
                  className="w-full p-2 border rounded-lg"
                />
                <p className="text-sm text-gray-600 mt-1">Hours per week</p>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPreferencesDialog;
