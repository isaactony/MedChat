import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroContent() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center py-20 px-6 lg:px-12 lg:py-28 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Large Circular Patterns */}
        <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-[-100px] left-[-150px] w-[300px] h-[300px] bg-purple-100 rounded-full opacity-40 blur-2xl"></div>

        {/* Floating Dots */}
        <div className="absolute top-16 left-16 w-[100px] h-[100px] bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-xl opacity-60"></div>
        <div className="absolute top-[60%] left-[70%] w-[120px] h-[120px] bg-gradient-to-r from-blue-300 to-green-300 rounded-full blur-xl opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 max-w-2xl">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Your Health
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Companion—
          </span>
          <br />
          <span className="text-gray-900">Accessible Always</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-powered health support through WhatsApp, SMS, and IVR—designed for everyone, everywhere.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={scrollToFeatures}
            className="group bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center gap-2"
          >
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 shadow-lg hover:shadow-indigo-300 transition-all">
            Start a Conversation
          </button>
        </div>
      </div>

      {/* SVG Curve Transition */}
      <div className="absolute bottom-0 w-full">
        <svg
          className="w-full h-24 md:h-48"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,117.3C672,107,768,117,864,133.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
