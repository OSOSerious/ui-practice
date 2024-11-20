import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Progress Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Python Basics</span>
                <span className="text-sm text-gray-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Data Structures</span>
                <span className="text-sm text-gray-600">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-900">Completed Python Lists Quiz</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-900">Started Data Structures Course</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Recommended for You</h2>
          <div className="space-y-4">
            <div className="group cursor-pointer">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                Advanced Python Concepts
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Take your Python skills to the next level
              </p>
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                Algorithms Deep Dive
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Master essential programming algorithms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
