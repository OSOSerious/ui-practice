import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Award,
  Star,
  Clock,
  BookOpen,
  TrendingUp,
  Edit2,
  Camera,
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
}

interface Course {
  id: string;
  title: string;
  progress: number;
  lastAccessed: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    level: 12,
    xp: 2750,
    nextLevelXp: 3000,
    joinDate: '2023-01-15',
    studyStreak: 7,
    totalHours: 45,
  });

  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Quick Learner',
      description: 'Complete 5 lessons in one day',
      progress: 80,
      icon: <Star className="h-5 w-5 text-yellow-500" />,
    },
    {
      id: '2',
      title: 'Code Master',
      description: 'Write 1000 lines of code',
      progress: 65,
      icon: <Code className="h-5 w-5 text-blue-500" />,
    },
    {
      id: '3',
      title: 'Dedicated Student',
      description: 'Study for 50 hours',
      progress: 90,
      icon: <Clock className="h-5 w-5 text-green-500" />,
    },
  ]);

  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'Python Fundamentals',
      progress: 75,
      lastAccessed: '2024-01-20',
    },
    {
      id: '2',
      title: 'Machine Learning Basics',
      progress: 45,
      lastAccessed: '2024-01-18',
    },
    {
      id: '3',
      title: 'Data Structures',
      progress: 90,
      lastAccessed: '2024-01-15',
    },
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle image upload
      console.log('Uploading image:', file.name);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img
                src="https://via.placeholder.com/128"
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
              <label className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                <Camera className="h-5 w-5 text-white" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
              <p className="text-gray-500">{profile.email}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Level</span>
                <span className="font-semibold">{profile.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{
                    width: `${(profile.xp / profile.nextLevelXp) * 100}%`,
                  }}
                />
              </div>
              <div className="text-sm text-gray-500 text-center">
                {profile.xp} / {profile.nextLevelXp} XP
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                <div className="text-sm text-gray-600">Study Time</div>
                <div className="font-semibold">{profile.totalHours}h</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <TrendingUp className="h-5 w-5 mx-auto mb-1 text-green-600" />
                <div className="text-sm text-gray-600">Streak</div>
                <div className="font-semibold">{profile.studyStreak} days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements and Courses */}
        <div className="md:col-span-2 space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Recent Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="p-2 bg-white rounded-lg shadow">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {achievement.description}
                    </p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 rounded-full h-2"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {achievement.progress}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current Courses */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Current Courses
            </h3>
            <div className="space-y-4">
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="p-2 bg-white rounded-lg shadow">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-500">
                      Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                    </p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 rounded-full h-2"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {course.progress}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
