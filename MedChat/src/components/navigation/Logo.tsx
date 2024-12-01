import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <MessageSquare className="h-8 w-8 text-indigo-600" />
      <span className="text-xl font-bold text-gray-900">Medxtio</span>
    </Link>
  );
}