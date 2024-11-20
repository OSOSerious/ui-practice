import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Minimize2, Maximize2, X } from 'lucide-react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import DashboardPage from './components/dashboard/DashboardPage';
import ProfilePage from './components/profile/ProfilePage';
import SettingsPage from './components/settings/SettingsPage';
import CoursesPage from './components/courses/CoursesPage';
import AchievementsPage from './components/achievements/AchievementsPage';
import PlaygroundPage from './components/playground/PlaygroundPage';
import ChatInterface from './components/chat/ChatInterface';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  const location = useLocation();
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main className="p-6">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/playground" element={<PlaygroundPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </main>
          </div>
        </div>

        {/* AI Tutor Chat Interface */}
        <div className="fixed bottom-0 right-0 z-50">
          <AnimatePresence>
            {!isTutorOpen && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onClick={() => setIsTutorOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle size={24} />
              </motion.button>
            )}

            {isTutorOpen && (
              <motion.div
                initial={isMinimized ? { height: "60px" } : { height: "100vh" }}
                animate={isMinimized ? { height: "60px" } : { height: "100vh" }}
                exit={{ opacity: 0 }}
                className="bg-white border-l shadow-xl overflow-hidden"
                style={{ width: "500px" }}
              >
                {/* Chat Header */}
                <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <MessageCircle size={20} />
                    AI Tutor
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="hover:bg-blue-700 p-1 rounded"
                    >
                      {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                    </button>
                    <button
                      onClick={() => setIsTutorOpen(false)}
                      className="hover:bg-blue-700 p-1 rounded"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Chat Content */}
                {!isMinimized && <ChatInterface />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;