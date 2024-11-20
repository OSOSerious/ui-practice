import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
    } else {
      const score = newAnswers.reduce((acc, curr, idx) => 
        curr === questions[idx].correctAnswer ? acc + 1 : acc, 0);
      setShowResult(true);
      onComplete(score);
    }
  };

  const question = questions[currentQuestion];

  if (showResult) {
    const score = answers.reduce((acc, curr, idx) => 
      curr === questions[idx].correctAnswer ? acc + 1 : acc, 0);
    
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
        <h3 className="text-xl font-semibold mb-4">Quiz Complete!</h3>
        <p className="text-gray-700 mb-4">
          You scored {score} out of {questions.length}
        </p>
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={idx} className="flex items-start gap-2 text-left">
              {answers[idx] === q.correctAnswer ? (
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mt-1" />
              )}
              <div>
                <p className="font-medium">{q.question}</p>
                <p className="text-sm text-gray-600">
                  Correct answer: {q.options[q.correctAnswer]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Quiz</h3>
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full">
          <div 
            className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h4 className="text-lg font-medium mb-4">{question.question}</h4>
      
      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;