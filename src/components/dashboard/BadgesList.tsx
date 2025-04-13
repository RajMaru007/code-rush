
import React from 'react';
import { Badge } from '@/utils/mockData';

interface BadgesListProps {
  badges: Badge[];
}

const BadgesList = ({ badges }: BadgesListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {badges.map((badge) => (
        <div 
          key={badge.id} 
          className="badge-card bg-white dark:bg-gray-800 group"
        >
          <div className="relative flex flex-col items-center justify-center w-full h-full p-4">
            <div className="mb-2">
              <img 
                src={badge.imageUrl} 
                alt={badge.name} 
                className="w-12 h-12"
              />
            </div>
            <span className="text-xs font-medium text-center">{badge.name}</span>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <p className="font-bold mb-1">{badge.name}</p>
              <p className="text-gray-300 text-xs">{badge.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BadgesList;
