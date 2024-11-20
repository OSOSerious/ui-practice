import React, { useState } from 'react';

interface InteractiveExampleProps {
  example: {
    initialCode: string;
    expectedOutput: string;
    hint: string;
  };
  onComplete: () => void;
}

const InteractiveExample: React.FC<InteractiveExampleProps> = ({ example, onComplete }) => {
  const [code, setCode] = useState(example.initialCode);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Simple check - in a real app this would be more sophisticated
    if (code.trim() === example.expectedOutput.trim()) {
      setFeedback('Great job! Your solution is correct! 🎉');
      onComplete();
    } else {
      setFeedback('Not quite right. Try again or check the hint! 🤔');
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Code:
          </label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-32 p-2 border border-gray-300 rounded-md font-mono text-sm"
            spellCheck="false"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
        </div>

        {showHint && (
          <div className="bg-yellow-50 p-3 rounded-md">
            <p className="text-sm text-yellow-800">💡 Hint: {example.hint}</p>
          </div>
        )}

        {feedback && (
          <div className={`p-3 rounded-md ${
            feedback.includes('Great job') 
              ? 'bg-green-50 text-green-800' 
              : 'bg-red-50 text-red-800'
          }`}>
            <p className="text-sm">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveExample;