import React, { useState } from 'react';
import { Send, RefreshCw, ThumbsUp } from 'lucide-react';

interface PracticeSectionProps {
  prompt: string;
  lessonId: number;
}

const PracticeSection: React.FC<PracticeSectionProps> = ({ prompt, lessonId }) => {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Simulate AI feedback based on lesson type
    const feedbackMessages = {
      1: "Good start! Try to be more specific about the AI capabilities you want to leverage.",
      2: "Nice prompt structure! Consider adding more context for better results.",
      3: "Great workflow thinking! You could add error handling steps for robustness."
    };
    
    setFeedback(feedbackMessages[lessonId as keyof typeof feedbackMessages] || '');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setInput('');
    setFeedback('');
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Practice Area</h3>
      
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Task:</span> {prompt}
        </p>
      </div>

      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your solution here..."
          className="w-full h-32 p-3 rounded-lg border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          disabled={isSubmitted}
        />

        <div className="flex gap-2">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="btn btn-primary flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="btn btn-secondary flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          )}
        </div>

        {feedback && (
          <div className="p-4 bg-green-50 rounded-lg flex gap-3">
            <ThumbsUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-green-900 mb-1">Feedback</h4>
              <p className="text-green-800">{feedback}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeSection;