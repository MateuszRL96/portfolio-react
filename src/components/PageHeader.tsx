import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  extraContent?: React.ReactNode;
}

export default function PageHeader({ title, description, extraContent }: PageHeaderProps) {
  return (
    <div className="w-full bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 mb-8 sm:mb-16 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[250px] sm:min-h-[300px] flex items-center justify-center">
        <div className="text-center py-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 fade-in text-white drop-shadow-md">
            {title}
          </h1>
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg sm:text-xl text-white/90 fade-in">
              {description}
            </p>
            {extraContent && <div className="mt-6 sm:mt-8">{extraContent}</div>}
          </div>
        </div>
      </div>
    </div>
  );
} 