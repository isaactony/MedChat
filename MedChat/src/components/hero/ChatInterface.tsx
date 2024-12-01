import React from 'react';
import { Bot, MessageSquare } from 'lucide-react';

export function ChatInterface() {
  return (
    <div className="relative animate-float">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative">
        {/* Chat Interface */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md transform hover:scale-105 transition-transform">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Bot className="w-8 h-8 text-indigo-600" />
            <span className="font-semibold text-gray-900 text-lg">Health Assistant</span>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4">
            {/* Bot Message */}
            <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
              <p className="text-gray-800">Hello! How can I assist you with your health today?</p>
            </div>

            {/* User Message */}
            <div className="bg-indigo-50 rounded-lg p-4 ml-auto max-w-[80%] shadow-sm">
              <p className="text-gray-800">I need to schedule a consultation with a doctor.</p>
            </div>

            {/* Bot Follow-Up */}
            <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
              <p className="text-gray-800">I can help you with that. What type of specialist would you like to consult?</p>
            </div>
          </div>

          {/* Input Area */}
          <div className="mt-6 flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors shadow-lg">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Floating Doctor Profile */}
        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
          <div className="bg-white rounded-2xl shadow-lg p-3 transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100"
              alt="Doctor"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="mt-2 text-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mx-auto animate-pulse"></div>
              <span className="text-xs text-gray-500">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
