import { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ChatInterface from './components/chat/ChatInterface';
import CourseCard from './components/dashboard/CourseCard';
import ProgressChart from './components/dashboard/ProgressChart';
import WelcomeGuide from './components/onboarding/WelcomeGuide';
import LearningPath from './components/learning/LearningPath';
import { Bell } from 'lucide-react';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New AI course available!', time: '5m ago' },
    { id: 2, message: 'Complete your daily practice', time: '1h ago' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {showWelcome && <WelcomeGuide />}
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Notifications */}
            <div className="mb-6">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-blue-600" />
                    Notifications
                  </h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Mark all as read
                  </button>
                </div>
                <div className="space-y-3">
                  {notifications.map(notification => (
                    <div key={notification.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{notification.message}</span>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Path */}
            <div className="mb-6">
              <LearningPath />
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <CourseCard
                title="Introduction to AI"
                description="Learn the fundamentals of artificial intelligence"
                progress={75}
                duration="2 hours"
                level="Beginner"
                image="/course1.jpg"
              />
              <CourseCard
                title="Machine Learning Basics"
                description="Understanding core ML concepts"
                progress={30}
                duration="3 hours"
                level="Intermediate"
                image="/course2.jpg"
              />
              <CourseCard
                title="Neural Networks"
                description="Deep dive into neural networks"
                progress={0}
                duration="4 hours"
                level="Advanced"
                image="/course3.jpg"
              />
            </div>

            {/* Progress Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Learning Progress</h2>
              <ProgressChart />
            </div>

            {/* Chat Interface */}
            <div className="fixed bottom-6 right-6 w-96">
              <ChatInterface />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;