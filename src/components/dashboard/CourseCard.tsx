import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  duration: string;
  level: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  progress,
  duration,
  level,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600">
          {level}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        
        <div className="mt-4">
          <div className="relative w-full h-2 bg-gray-100 rounded-full">
            <div
              className="absolute left-0 top-0 h-full bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">{progress}% Complete</p>
        </div>
        
        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {level}
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-1" />
            Certificate
          </div>
        </div>
        
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
