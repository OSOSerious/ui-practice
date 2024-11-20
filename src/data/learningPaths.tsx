import { LearningPath } from '../types';

export const learningPaths: LearningPath[] = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    description: 'Master the basics of AI and its applications',
    lessons: [1, 2], // Understanding AI Basics, Prompt Engineering
    estimatedDuration: '2 hours',
    skillsGained: [
      'AI Concepts',
      'Prompt Writing',
      'AI Tool Usage'
    ]
  },
  {
    id: 'ai-developer',
    title: 'AI Developer Path',
    description: 'Learn to develop and integrate AI solutions',
    lessons: [1, 2, 3, 4], // Includes AI-Assisted Coding
    prerequisites: ['ai-fundamentals'],
    estimatedDuration: '4 hours',
    skillsGained: [
      'AI Integration',
      'Code Generation',
      'Workflow Automation'
    ]
  },
  {
    id: 'ai-data-analyst',
    title: 'AI Data Analysis',
    description: 'Harness AI for powerful data insights',
    lessons: [1, 2, 5], // Includes Data Analysis with AI
    prerequisites: ['ai-fundamentals'],
    estimatedDuration: '3 hours',
    skillsGained: [
      'Data Analysis',
      'Pattern Recognition',
      'Insight Generation'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    description: 'Automate your work with AI',
    lessons: [1, 2, 3],
    prerequisites: ['ai-fundamentals'],
    estimatedDuration: '2.5 hours',
    skillsGained: [
      'Workflow Design',
      'Process Automation',
      'Integration Patterns'
    ]
  }
];
