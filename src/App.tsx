import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ChatInterface from './components/chat/ChatInterface';
import CourseCard from './components/dashboard/CourseCard';
import ProgressChart from './components/dashboard/ProgressChart';

const App: React.FC = () => {
  const courses = [
    {
      title: 'Introduction to AI',
      description: 'Learn the fundamentals of Artificial Intelligence and Machine Learning',
      progress: 75,
      duration: '8 weeks',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    },
    {
      title: 'Python Programming',
      description: 'Master Python programming with hands-on projects',
      progress: 45,
      duration: '12 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795',
    },
    {
      title: 'Data Science Fundamentals',
      description: 'Explore data analysis and visualization techniques',
      progress: 30,
      duration: '10 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome back!</h2>
            
            <div className="mb-8">
              <ProgressChart />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Tutor Chat</h3>
                <div className="h-[500px]">
                  <ChatInterface />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;