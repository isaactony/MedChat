import React from 'react';

export function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Join Thousands of Families Accessing Smarter Health Support
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Start Chatting Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}