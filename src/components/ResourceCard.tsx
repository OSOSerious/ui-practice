import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  link, 
  imageUrl 
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-indigo-200">
        <div className="h-32 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;