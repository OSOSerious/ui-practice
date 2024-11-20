import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Book,
  Video,
  FileText,
  Code,
  CheckCircle,
  ChevronDown,
  Play,
  Download,
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'code' | 'pdf';
  duration?: string;
  completed: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
}

const modules: Module[] = [
  {
    id: 'intro',
    title: 'Introduction to AI',
    description: 'Learn the fundamentals of artificial intelligence',
    resources: [
      {
        id: 'video1',
        title: 'What is Artificial Intelligence?',
        type: 'video',
        duration: '10:30',
        completed: true,
      },
      {
        id: 'article1',
        title: 'History of AI Development',
        type: 'article',
        duration: '15 min read',
        completed: true,
      },
      {
        id: 'code1',
        title: 'Your First AI Program',
        type: 'code',
        duration: '30 min',
        completed: false,
      },
    ],
  },
  {
    id: 'ml_basics',
    title: 'Machine Learning Fundamentals',
    description: 'Understanding core machine learning concepts',
    resources: [
      {
        id: 'video2',
        title: 'Types of Machine Learning',
        type: 'video',
        duration: '15:45',
        completed: false,
      },
      {
        id: 'article2',
        title: 'Supervised vs Unsupervised Learning',
        type: 'article',
        duration: '20 min read',
        completed: false,
      },
      {
        id: 'pdf1',
        title: 'ML Mathematics Guide',
        type: 'pdf',
        completed: false,
      },
    ],
  },
];

const CourseContent: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>('intro');

  const getIcon = (type: Resource['type']) => {
    switch (type) {
      case 'video':
        return Video;
      case 'article':
        return FileText;
      case 'code':
        return Code;
      case 'pdf':
        return Book;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Course Content</h2>
      <div className="space-y-4">
        {modules.map((module) => (
          <motion.div
            key={module.id}
            className="border rounded-lg overflow-hidden"
            initial={false}
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
            >
              <div className="flex items-center space-x-3">
                <Book className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <h3 className="font-semibold">{module.title}</h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedModule === module.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedModule === module.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 py-4 space-y-3">
                    {module.resources.map((resource) => {
                      const Icon = getIcon(resource.type);
                      return (
                        <motion.div
                          key={resource.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-blue-50">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">{resource.title}</h4>
                              {resource.duration && (
                                <p className="text-sm text-gray-500">
                                  {resource.duration}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            {resource.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <button className="p-2 rounded-full hover:bg-blue-100 transition-colors">
                                {resource.type === 'video' ? (
                                  <Play className="w-5 h-5 text-blue-600" />
                                ) : (
                                  <Download className="w-5 h-5 text-blue-600" />
                                )}
                              </button>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
