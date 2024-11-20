import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Award, Clock, Book, Target, TrendingUp } from 'lucide-react';

const ProgressPage = () => {
  const navigate = useNavigate();

  // Mock data - replace with real data when backend is ready
  const progressData = {
    coursesCompleted: 3,
    hoursSpent: 24,
    currentStreak: 7,
    totalExercises: 45,
    completedExercises: 32,
    learningGoals: [
      { id: 1, name: 'Complete Python Basics', progress: 75 },
      { id: 2, name: 'Master Data Structures', progress: 45 },
      { id: 3, name: 'Learn Web Development', progress: 20 },
    ],
    recentActivities: [
      { id: 1, type: 'course', name: 'Python Basics', date: '2024-01-15', progress: 100 },
      { id: 2, type: 'exercise', name: 'Data Structures Quiz', date: '2024-01-14', progress: 85 },
      { id: 3, type: 'course', name: 'Web Development', date: '2024-01-13', progress: 20 },
    ],
  };

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBackClick}
          className="mb-8 inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Dashboard
        </motion.button>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Learning Progress</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-50 p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Book className="w-5 h-5 text-indigo-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Courses</h3>
                </div>
                <p className="text-2xl font-bold text-indigo-600">
                  {progressData.coursesCompleted}
                </p>
                <p className="text-sm text-gray-500">completed courses</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-50 p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-indigo-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Time Spent</h3>
                </div>
                <p className="text-2xl font-bold text-indigo-600">
                  {progressData.hoursSpent}h
                </p>
                <p className="text-sm text-gray-500">learning time</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-50 p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-indigo-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Current Streak</h3>
                </div>
                <p className="text-2xl font-bold text-indigo-600">
                  {progressData.currentStreak}
                </p>
                <p className="text-sm text-gray-500">days in a row</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-50 p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-indigo-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Exercises</h3>
                </div>
                <p className="text-2xl font-bold text-indigo-600">
                  {progressData.completedExercises}/{progressData.totalExercises}
                </p>
                <p className="text-sm text-gray-500">completed</p>
              </motion.div>
            </div>

            {/* Learning Goals */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Learning Goals</h2>
              <div className="space-y-4">
                {progressData.learningGoals.map((goal) => (
                  <div key={goal.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-gray-900">{goal.name}</h3>
                      <span className="text-sm text-gray-500">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1 }}
                        className="bg-indigo-600 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {progressData.recentActivities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white border border-gray-200 p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">{activity.name}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-indigo-600 mr-2" />
                        <span className="text-sm font-medium text-indigo-600">
                          {activity.progress}% Complete
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
