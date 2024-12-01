import React from 'react';

interface BadgeProps {
  variant: 'new' | 'popular';
  children: React.ReactNode;
}

const variants = {
  new: 'bg-green-100 text-green-800',
  popular: 'bg-purple-100 text-purple-800',
};

export function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}