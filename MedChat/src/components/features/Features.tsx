import React from 'react';
import { MessageSquare, Globe2, Bell, Wifi, Languages } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Accessible Across Platforms',
    description: 'Available on WhatsApp, SMS, and IVR for maximum accessibility.',
    icon: MessageSquare,
    isPopular: true,
    path: '/features/accessibility',
  },
  {
    title: 'Multilingual Support',
    description: 'Engage in your preferred language or listen via IVR for easy access.',
    icon: Globe2,
    path: '/features/multilingual',
  },
  {
    title: 'Scheduled Reminders',
    description: 'Never miss a checkup, vaccination, or meal plan update.',
    icon: Bell,
    path: '/features/reminders',
  },
  {
    title: 'Works Offline',
    description: 'Designed to work in low-connectivity areas through SMS and IVR.',
    icon: Wifi,
    isNew: true,
    path: '/features/offline',
  },
  {
    title: 'Language Options',
    description: 'Support for multiple languages to serve diverse communities.',
    icon: Languages,
    path: '/features/languages',
  },
];

export function Features() {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Makes Our AI Health Chatbot{' '}
            <span className="text-blue-600">Unique?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Advanced features designed to make healthcare accessible to everyone, everywhere.
            Experience the future of healthcare communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 hover:scale-105 duration-300 cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="text-blue-600 font-medium flex items-center gap-2 group">
                Learn more
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
            Try Our Chatbot Now
          </button>
        </div>
      </div>
    </section>
  );
}