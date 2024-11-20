import { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ChatInterface from './components/chat/ChatInterface';
import CourseCard from './components/dashboard/CourseCard';
import ProgressChart from './components/dashboard/ProgressChart';
import WelcomeGuide from './components/onboarding/WelcomeGuide';
import LearningPath from './components/learning/LearningPath';
import AchievementSystem from './components/achievements/AchievementSystem';
import CourseContent from './components/course/CourseContent';
import QuizInterface from './components/quiz/QuizInterface';
import CodePlayground from './components/playground/CodePlayground';
import Flashcard from './components/learning/Flashcard';
import { Bell, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New AI course available!', time: '5m ago' },
    { id: 2, message: 'Complete your daily practice', time: '1h ago' },
  ]);

  const sampleQuizQuestions = [
    {
      id: 1,
      question: 'What is artificial intelligence?',
      options: [
        'A type of computer hardware',
        'The simulation of human intelligence by machines',
        'A programming language',
        'A database management system',
      ],
      correctAnswer: 1,
      explanation: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think and learn like humans.',
    },
    {
      id: 2,
      question: 'Which of these is a type of machine learning?',
      options: [
        'HTML',
        'CSS',
        'Supervised Learning',
        'JavaScript',
      ],
      correctAnswer: 2,
      explanation: 'Supervised learning is a type of machine learning where the model learns from labeled training data.',
    },
  ];

  const sampleFlashcards = [
    {
      id: 1,
      question: "What is Machine Learning?",
      answer: "Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.",
      category: "AI Fundamentals"
    },
    {
      id: 2,
      question: "What is the difference between supervised and unsupervised learning?",
      answer: "Supervised learning uses labeled data for training, while unsupervised learning finds patterns in unlabeled data.",
      category: "Machine Learning"
    },
    {
      id: 3,
      question: "What is a Neural Network?",
      answer: "A Neural Network is a computing system inspired by biological neural networks, consisting of interconnected nodes (neurons) that process and transmit information.",
      category: "Deep Learning"
    }
  ];

  const sampleCode = `# Example: Simple Neural Network
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Input layer
X = np.array([[0, 0, 1],
              [0, 1, 1],
              [1, 0, 1],
              [1, 1, 1]])

# Output layer
y = np.array([[0],
              [1],
              [1],
              [0]])

# Initialize weights
np.random.seed(1)
weights = 2 * np.random.random((3, 1)) - 1

# Training
for i in range(10000):
    # Forward propagation
    output = sigmoid(np.dot(X, weights))
    
    # Backpropagation
    error = y - output
    adjustments = np.dot(X.T, error * output * (1 - output))
    
    # Update weights
    weights += adjustments

print("Final output after training:")
print(output)`;

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WelcomeGuide />
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
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
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{notification.message}</span>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Learning Path */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <LearningPath />
            </motion.div>

            {/* Course Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CourseContent />
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AchievementSystem />
            </motion.div>

            {/* Progress Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h2 className="text-lg font-semibold mb-4">Learning Progress</h2>
              <ProgressChart />
            </motion.div>

            {/* Interactive Learning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Flashcards */}
              <div className="col-span-1">
                <Flashcard cards={sampleFlashcards} />
              </div>

              {/* Code Playground */}
              <div className="col-span-1">
                <CodePlayground
                  initialCode={sampleCode}
                  language="python"
                  onRun={(code) => console.log('Running code:', code)}
                  onSave={(code) => console.log('Saving code:', code)}
                />
              </div>
            </div>

            {/* Quiz Modal */}
            <AnimatePresence>
              {showQuiz && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4"
                  >
                    <div className="p-4 border-b flex justify-between items-center">
                      <h2 className="text-xl font-bold">AI Fundamentals Quiz</h2>
                      <button
                        onClick={() => setShowQuiz(false)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-6">
                      <QuizInterface
                        title="AI Fundamentals Quiz"
                        questions={sampleQuizQuestions}
                        onComplete={(score) => {
                          // Handle quiz completion
                          setTimeout(() => setShowQuiz(false), 3000);
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

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