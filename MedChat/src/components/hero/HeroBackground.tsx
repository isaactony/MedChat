import React from 'react';
import { Stethoscope, Heart, MessageCircle } from 'lucide-react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-400 to-green-500 opacity-30 animate-gradient" />

      {/* Background patterns */}
      <div className="absolute inset-0">
        {/* Small circles as patterns */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Curved wave pattern at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,202.7C672,192,768,192,864,181.3C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Floating medical icons */}
      <div className="absolute inset-0">
        <Stethoscope className="absolute top-1/4 left-1/4 w-12 h-12 text-blue-500 opacity-30 animate-float" />
        <Heart className="absolute top-1/3 right-1/4 w-10 h-10 text-green-500 opacity-30 animate-float delay-1000" />
        <MessageCircle className="absolute bottom-1/3 left-1/3 w-8 h-8 text-blue-500 opacity-30 animate-float delay-2000" />
      </div>

      {/* Heartbeat line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-white w-[90%] mx-auto rounded-full animate-pulse opacity-50"></div>
      </div>
    </div>
  );
}
