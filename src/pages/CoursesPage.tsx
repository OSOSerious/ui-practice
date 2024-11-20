import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Introduction to AI',
    description: 'Learn the fundamentals of Artificial Intelligence',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.8,
    enrolled: 1234,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: 2,
    title: 'Machine Learning Basics',
    description: 'Understanding machine learning concepts',
    level: 'Intermediate',
    duration: '8 weeks',
    rating: 4.6,
    enrolled: 892,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: 3,
    title: 'Deep Learning Fundamentals',
    description: 'Explore neural networks and deep learning',
    level: 'Advanced',
    duration: '10 weeks',
    rating: 4.9,
    enrolled: 567,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  }
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/dashboard"
            className="flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Courses</h1>
          <p className="mt-2 text-gray-600">
            Explore our selection of AI and machine learning courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-indigo-600">
                    {course.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {course.rating}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    onClick={() => alert('Course enrollment coming soon!')}
                  >
                    Enroll Now
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            More courses coming soon! Stay tuned for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
