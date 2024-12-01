import React from 'react';

interface GeometricBackgroundProps {
  variant?: 'light' | 'blue' | 'green';
  opacity?: number;
}

export function GeometricBackground({ variant = 'light', opacity = 0.1 }: GeometricBackgroundProps) {
  const colors = {
    light: {
      primary: '#f8fafc',
      secondary: '#e2e8f0',
      accent: '#cbd5e1',
    },
    blue: {
      primary: '#007BFF',
      secondary: '#1a8cff',
      accent: '#3399ff',
    },
    green: {
      primary: '#28A745',
      secondary: '#2dc653',
      accent: '#34ce57',
    },
  };

  const currentColors = colors[variant];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Base gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          opacity,
          backgroundColor: currentColors.primary,
          backgroundImage: `
            radial-gradient(circle at 0% 0%, ${currentColors.secondary} 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, ${currentColors.accent} 0%, transparent 50%)
          `
        }}
      />

      {/* Geometric shapes */}
      <div className="absolute inset-0" style={{ opacity: opacity * 0.5 }}>
        {/* Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-current transform -rotate-12" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border-2 border-current transform rotate-12" />
        
        {/* Dots pattern */}
        <div className="absolute inset-0 grid grid-cols-12 gap-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-current transform"
              style={{
                opacity: Math.random() * 0.5,
                transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`
              }}
            />
          ))}
        </div>

        {/* Wave lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M 0 50 Q 25 30 50 50 T 100 50"
            className="stroke-current fill-none"
            style={{ strokeWidth: '0.5' }}
          />
          <path
            d="M 0 60 Q 25 40 50 60 T 100 60"
            className="stroke-current fill-none"
            style={{ strokeWidth: '0.5' }}
          />
        </svg>
      </div>
    </div>
  );
}