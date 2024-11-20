import { ReactNode } from 'react';

export interface UserProgress {
  completedLessons: number[];
  currentLesson: number;
  achievements: string[];
  quizScores: Record<number, number>;
  lastActivity: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  progress: number;
  unlockDate?: string;
  isUnlocked: boolean;
}

export interface LearningPath {
  id: number;
  title: string;
  description: string;
  duration: string;
  prerequisites: string[];
  skills: string[];
  lessons: number[];
}

export interface UserPreferences {
  learningStyle: 'visual' | 'practical' | 'theoretical';
  learningPace: 'slow' | 'medium' | 'fast';
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
  weeklyGoal: number;
}

export interface AITutorResponse {
  message: string;
  type: 'hint' | 'explanation' | 'feedback' | 'challenge';
  relatedResources?: Resource[];
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'exercise';
  duration: string;
}

export interface InteractiveExample {
  initialCode: string;
  expectedOutput: string;
  hint: string;
}

export interface LessonSection {
  title: string;
  content: string;
  examples: string[];
  interactive?: InteractiveExample;
}

export interface Quiz {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LessonContent {
  overview: string;
  sections: LessonSection[];
  quiz: Quiz[];
}

export interface Lesson {
  id: number;
  title: string;
  icon: ReactNode;
  description: string;
  duration: string;
  content: LessonContent;
}