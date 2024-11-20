import React, { useState } from 'react';
import { BookOpen, Target, Brain, Trophy, MessageCircle } from 'lucide-react';
import LandingPage from './pages/LandingPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLesson, setActiveLesson] = useState(0);
  const [showChat, setShowChat] = useState(false);

  const lessons = [
    {
      id: 1,
      title: "Introduction to AI",
      content: "Learn the basics of Artificial Intelligence and its applications.",
      progress: 0,
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      content: "Understand how machines learn from data.",
      progress: 0,
    },
    {
      id: 3,
      title: "Neural Networks",
      content: "Explore the building blocks of deep learning.",
      progress: 0,
    }
  ];

  if (!isLoggedIn) {
    return <LandingPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">AI Tutor</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowChat(!showChat)}
                className="p-2 text-gray-500 hover:text-indigo-600"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
              <div className="space-y-4">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeLesson === index
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        {index === 0 ? (
                          <BookOpen className="w-4 h-4 text-indigo-600" />
                        ) : index === 1 ? (
                          <Target className="w-4 h-4 text-indigo-600" />
                        ) : (
                          <Brain className="w-4 h-4 text-indigo-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{lesson.title}</div>
                        <div className="text-sm text-gray-500">
                          {lesson.progress}% Complete
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-sm font-medium">First Lesson</div>
                </div>
                {/* Add more achievements as needed */}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h1 className="text-2xl font-bold mb-6">{lessons[activeLesson].title}</h1>
              <p className="text-gray-700 mb-8">{lessons[activeLesson].content}</p>
              
              <div className="space-y-8">
                <section className="space-y-4">
                  <h2 className="text-xl font-semibold">Interactive Example</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <pre className="text-sm font-mono bg-gray-900 text-gray-100 p-4 rounded-lg">
                      {`function createAIPrompt() {
  // Your code here
}`}
                    </pre>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Run Code
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                        Show Hint
                      </button>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold">Practice Quiz</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="font-medium mb-4">
                        What is the main purpose of AI in modern applications?
                      </p>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="quiz" className="text-indigo-600" />
                          <span>To replace human workers</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="quiz" className="text-indigo-600" />
                          <span>To enhance human capabilities</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="quiz" className="text-indigo-600" />
                          <span>To store data</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* AI Chat */}
          <div className="col-span-3">
            <div className={`bg-white rounded-xl shadow-sm p-6 ${showChat ? '' : 'hidden'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">AI Tutor Chat</h2>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ×
                </button>
              </div>
              <div className="h-96 border rounded-lg p-4 mb-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="p-2 bg-indigo-100 rounded-full">
                      <Brain className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">
                        Hello! I'm your AI tutor. How can I help you with your learning journey?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;