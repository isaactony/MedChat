import React from 'react';
import { MessageSquare, Globe2, Bell, Wifi, Languages } from 'lucide-react';

const features = [
  {
    title: 'Accessible Across Platforms',
    description: 'Available on WhatsApp, SMS, and IVR for maximum accessibility.',
    icon: MessageSquare,
  },
  {
    title: 'Multilingual Support',
    description: 'Engage in your preferred language or listen via IVR for easy access.',
    icon: Globe2,
  },
  {
    title: 'Scheduled Reminders',
    description: 'Never miss a checkup, vaccination, or meal plan update.',
    icon: Bell,
  },
  {
    title: 'Works Offline',
    description: 'Designed to work in low-connectivity areas through SMS and IVR.',
    icon: Wifi,
  },
  {
    title: 'Language Options',
    description: 'Support for multiple languages to serve diverse communities.',
    icon: Languages,
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Curved Top */}
      <div className="absolute inset-x-0 top-0 h-16 -mt-10 bg-gradient-to-br from-blue-50 to-white rounded-b-[50%]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
            What Makes Our AI Health Chatbot Unique?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-100">
            Advanced features designed to make healthcare accessible to everyone
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 hover:scale-105 duration-300"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 -mb-10 bg-gradient-to-br from-blue-50 to-white rounded-t-[50%]"></div>
    </section>
  );
}
