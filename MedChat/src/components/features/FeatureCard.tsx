import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from './Badge';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isNew?: boolean;
  isPopular?: boolean;
}

export function FeatureCard({ title, description, icon: Icon, isNew, isPopular }: FeatureCardProps) {
  return (
    <div className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative">
        {/* Icon and Badges */}
        <div className="flex items-center justify-between mb-6">
          {/* Icon Container */}
          <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-7 w-7 text-blue-600" />
          </div>
          {/* Badges */}
          <div className="flex gap-2">
            {isNew && <Badge variant="new">New</Badge>}
            {isPopular && <Badge variant="popular">Popular</Badge>}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          {description}
        </p>

        {/* Learn More Button */}
        <button className="text-blue-600 font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Learn more
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
