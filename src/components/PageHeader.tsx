import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  extraContent?: React.ReactNode;
}

export default function PageHeader({ title, description, extraContent }: PageHeaderProps) {
  return (
    <div className="w-full bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px] flex items-center justify-center">
        <div className="text-center pt-16 pb-4">
          <h1 className="text-4xl font-bold mb-6 fade-in text-white drop-shadow-md">
            {title}
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-white/90 fade-in">
              {description}
            </p>
            {extraContent && <div className="mt-8">{extraContent}</div>}
          </div>
        </div>
      </div>
    </div>
  );
} 