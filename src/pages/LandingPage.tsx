import React, { useState } from 'react';
import { BookOpen, Brain, Sparkles, ArrowRight } from 'lucide-react';

const LandingPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd validate and authenticate here
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">AI Tutor</span>
          </div>
          {!isLoginMode && (
            <button
              onClick={() => setIsLoginMode(true)}
              className="px-4 py-2 text-indigo-600 font-medium hover:text-indigo-700"
            >
              Log In
            </button>
          )}
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          {!isLoginMode && (
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Master AI with Your
                <span className="text-indigo-600"> Personal AI Tutor</span>
              </h1>
              <p className="text-xl text-gray-600">
                Learn AI concepts, practice with interactive examples, and get real-time
                feedback from your personalized AI tutor.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interactive Learning</h3>
                    <p className="text-gray-600">Practice with real-world examples and get instant feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Guidance</h3>
                    <p className="text-gray-600">Get personalized help when you need it</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsLoginMode(true)}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Right side - Login form or Image */}
          <div className={isLoginMode ? "md:col-span-2 max-w-md mx-auto w-full" : "hidden md:block"}>
            {isLoginMode ? (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                  <p className="text-gray-600 mt-2">Sign in to continue your learning journey</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
                  >
                    Sign In
                  </button>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setIsLoginMode(false)}
                      className="text-sm text-indigo-600 hover:text-indigo-700"
                    >
                      Back to home
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="AI Learning"
                className="rounded-xl shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
