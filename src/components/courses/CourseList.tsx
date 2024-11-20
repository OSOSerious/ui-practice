import React from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, Star, Users, ChevronRight } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  students: number;
  rating: number;
  image: string;
  progress: number;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Artificial Intelligence',
    description: 'Learn the fundamentals of AI, including machine learning, neural networks, and deep learning.',
    duration: '8 weeks',
    level: 'Beginner',
    students: 1234,
    rating: 4.8,
    image: '/course-images/ai-intro.jpg',
    progress: 0,
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    description: 'Master the core concepts of machine learning, from supervised learning to reinforcement learning.',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 987,
    rating: 4.9,
    image: '/course-images/ml-fundamentals.jpg',
    progress: 25,
  },
  {
    id: '3',
    title: 'Deep Learning & Neural Networks',
    description: 'Dive deep into neural networks, CNN, RNN, and advanced deep learning architectures.',
    duration: '12 weeks',
    level: 'Advanced',
    students: 756,
    rating: 4.7,
    image: '/course-images/deep-learning.jpg',
    progress: 0,
  },
];

const CourseList: React.FC = () => {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
        <p className="text-gray-600">Continue your learning journey with our expert-led courses.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
          >
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[course.level]}`}>
                  {course.level}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>

              {course.progress > 0 && (
                <div className="mb-4">
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{course.progress}% complete</p>
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  {course.rating}
                </div>
              </div>

              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
