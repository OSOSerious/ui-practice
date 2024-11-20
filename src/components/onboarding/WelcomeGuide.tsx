import React, { useState } from 'react';
import { Book, Brain, Star, Award, ArrowRight } from 'lucide-react';

interface WelcomeGuideProps {
  onComplete: () => void;
}

interface Step {
  title: string;
  description: string;
  icon: React.FC;
  color: string;
}

const WelcomeGuide: React.FC<WelcomeGuideProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      title: 'Welcome to AI Learning',
      description: 'Start your journey into artificial intelligence with personalized guidance and interactive lessons.',
      icon: Brain,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Personalized Learning Path',
      description: 'Our AI tutor adapts to your learning style and pace, ensuring the best possible learning experience.',
      icon: Book,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Interactive Exercises',
      description: 'Practice what you learn with hands-on exercises and get instant feedback from our AI tutor.',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Track Your Progress',
      description: 'Earn certificates and badges as you progress through your learning journey.',
      icon: Award,
      color: 'bg-green-100 text-green-600',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4">
        <div className="p-8">
          <div className="mb-8 text-center">
            <div className={`inline-flex p-4 rounded-full ${steps[currentStep].color} mb-4`}>
              {React.createElement(steps[currentStep].icon, { size: 32 })}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600">{steps[currentStep].description}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    index === currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex space-x-4">
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-900"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGuide;
