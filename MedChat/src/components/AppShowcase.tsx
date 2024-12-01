import React from 'react';
import { Smartphone, Scan, MessageSquare, Bot, Calendar, Shield } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Chat Interface',
    description: 'Multi-platform health support via WhatsApp, SMS, and IVR',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&h=500',
    icon: Bot,
  },
  {
    title: 'Offline Support',
    description: 'Access healthcare support even in low connectivity areas',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&h=500',
    icon: Scan,
  },
  {
    title: 'Multilingual Support',
    description: 'Healthcare assistance in your preferred language',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&h=500',
    icon: Calendar,
  },
];

export function AppShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Healthcare Support for Everyone, Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Breaking barriers with accessible healthcare communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-lg transform group-hover:-translate-y-1 transition-transform">
                <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-32">
          <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform -rotate-1"></div>
          <div className="relative bg-white rounded-[3rem] p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Inclusive Healthcare Access
                </h3>
                <p className="text-lg text-gray-600">
                  Bringing healthcare support to every community through familiar communication channels.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">WhatsApp & SMS Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Works Without Internet</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Smartphone className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Voice-based IVR System</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2rem] transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=1000"
                  alt="App Interface"
                  className="relative rounded-[2rem] shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}