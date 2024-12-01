import React from 'react';
import { MessageCircle, Brain, Bell } from 'lucide-react';

const steps = [
  {
    title: 'Reach Out on Your Preferred Platform',
    description: 'Send a message on WhatsApp, SMS, or dial a number for IVR.',
    icon: MessageCircle,
  },
  {
    title: 'Get Tailored Responses',
    description: 'AI processes your query and provides instant advice or schedules a reminder.',
    icon: Brain,
  },
  {
    title: 'Track Your Health Goals',
    description: 'Receive reminders for checkups, vaccinations, and personalized tips.',
    icon: Bell,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Decorative Circles for Background */}
      <div className="absolute top-0 left-[-50px] w-40 h-40 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-[-50px] w-48 h-48 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          How It Works: Accessible Health Support in 3 Easy Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-50px] w-[80px] h-[2px] bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
