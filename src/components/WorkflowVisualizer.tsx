import React from 'react';
import { MessageSquare, Sparkles, ArrowRight, Zap } from 'lucide-react';
import PracticeSection from './PracticeSection';

interface WorkflowVisualizerProps {
  activeLesson: number;
}

const WorkflowVisualizer: React.FC<WorkflowVisualizerProps> = ({ activeLesson }) => {
  const workflows = [
    {
      title: "AI Basics Workflow",
      steps: [
        { icon: <MessageSquare />, text: "Input Query", color: "bg-blue-100 text-blue-600" },
        { icon: <Sparkles />, text: "AI Processing", color: "bg-purple-100 text-purple-600" },
        { icon: <Zap />, text: "Response", color: "bg-green-100 text-green-600" }
      ],
      practice: "Create a prompt that asks an AI to explain a complex topic in simple terms."
    },
    {
      title: "Prompt Engineering Flow",
      steps: [
        { icon: <MessageSquare />, text: "Clear Prompt", color: "bg-blue-100 text-blue-600" },
        { icon: <Sparkles />, text: "Context", color: "bg-purple-100 text-purple-600" },
        { icon: <Zap />, text: "Specific Output", color: "bg-green-100 text-green-600" }
      ],
      practice: "Write a structured prompt for generating a product description with specific requirements."
    },
    {
      title: "Advanced Workflow",
      steps: [
        { icon: <MessageSquare />, text: "System Prompt", color: "bg-blue-100 text-blue-600" },
        { icon: <Sparkles />, text: "Chain Thinking", color: "bg-purple-100 text-purple-600" },
        { icon: <Zap />, text: "Refined Output", color: "bg-green-100 text-green-600" }
      ],
      practice: "Design a multi-step AI workflow for content creation and validation."
    }
  ];

  const currentWorkflow = workflows[activeLesson];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-6">{currentWorkflow.title}</h2>
        
        <div className="space-y-8">
          {currentWorkflow.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-700">{step.text}</p>
                  </div>
                </div>
              </div>
              
              {index < currentWorkflow.steps.length - 1 && (
                <div className="absolute left-6 top-12 h-8 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <PracticeSection 
        prompt={currentWorkflow.practice}
        lessonId={activeLesson + 1}
      />
    </div>
  );
};

export default WorkflowVisualizer;