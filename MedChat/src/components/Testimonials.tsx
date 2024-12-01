import React from 'react';
import { Quote } from 'lucide-react';
import { GeometricBackground } from './shared/GeometricBackground';

const testimonials = [
  {
    quote: "I get timely vaccine reminders even in my village where internet is unreliable.",
    author: "Sarah M.",
    location: "Rural Healthcare Worker",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The voice responses in my language helped me understand what to eat during pregnancy.",
    author: "Priya K.",
    location: "First-time Mother",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
      <GeometricBackground variant="blue" opacity={0.05} />
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
          Transforming Lives Across Communities
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-blue-600 mb-6" />
              <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                />
                <div className="ml-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founders Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="text-center">
              <img
                src="https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/225.jpg"
                alt="Isaac Tony"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-600 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Isaac Tony</h3>
              <p className="text-blue-600 font-medium mb-4">Software Engineer</p>
              <p className="text-gray-700 max-w-md mx-auto">
                Passionate about leveraging technology to make healthcare accessible to everyone.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="text-center">
              <img
                src="https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/osoronew.png"
                alt="Danvas Osoro"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-600 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Danvas Osoro</h3>
              <p className="text-blue-600 font-medium mb-4">Data Scientist</p>
              <p className="text-gray-700 max-w-md mx-auto">
                Expert in AI and machine learning, focused on creating intelligent healthcare solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
