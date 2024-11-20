import React from 'react';

const CoursesPage: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Python Fundamentals',
      description: 'Learn the basics of Python programming language',
      progress: 75,
      image: 'https://via.placeholder.com/300x200',
      level: 'Beginner',
      duration: '6 hours',
    },
    {
      id: 2,
      title: 'Data Structures',
      description: 'Master essential data structures in programming',
      progress: 40,
      image: 'https://via.placeholder.com/300x200',
      level: 'Intermediate',
      duration: '8 hours',
    },
    {
      id: 3,
      title: 'Algorithms',
      description: 'Learn fundamental algorithms and problem-solving',
      progress: 0,
      image: 'https://via.placeholder.com/300x200',
      level: 'Advanced',
      duration: '10 hours',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Courses</h1>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>All Categories</option>
            <option>Python</option>
            <option>Data Structures</option>
            <option>Algorithms</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">{course.level}</span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              
              {course.progress > 0 ? (
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Start Course
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
