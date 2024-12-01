import React from 'react';
import { useParams } from 'react-router-dom';
import { MessageSquare, Globe2, Bell, Wifi, Languages } from 'lucide-react';
import { GeometricBackground } from '../components/shared/GeometricBackground';

const featureDetails = {
  accessibility: {
    title: 'Accessible Across Platforms',
    description: 'Breaking down barriers to healthcare access through multiple communication channels.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=600',
    benefits: [
      'WhatsApp integration for instant health support',
      'SMS support for areas with limited internet',
      'IVR system for voice-based interactions',
      '24/7 availability across all platforms'
    ],
    testimonials: [
      {
        quote: "The WhatsApp integration has made it so easy to get quick health advice.",
        author: "Maria G.",
        role: "Working Mother"
      },
      {
        quote: "Being able to use SMS when internet is down is a lifesaver.",
        author: "John D.",
        role: "Rural Resident"
      }
    ]
  },
  multilingual: {
    title: 'Multilingual Support',
    description: 'Healthcare support in your preferred language.',
    icon: Globe2,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=600',
    benefits: [
      'Support for 10+ local languages',
      'Real-time language translation',
      'Voice support in multiple languages',
      'Cultural context awareness'
    ],
    testimonials: [
      {
        quote: "Being able to communicate in my native language makes all the difference.",
        author: "Priya K.",
        role: "First-time Mother"
      },
      {
        quote: "The cultural understanding in responses is impressive.",
        author: "Ahmed M.",
        role: "Community Leader"
      }
    ]
  },
  reminders: {
    title: 'Smart Health Reminders',
    description: 'Never miss important health appointments and medications.',
    icon: Bell,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&h=600',
    benefits: [
      'Personalized medication reminders',
      'Vaccination schedule tracking',
      'Appointment management',
      'Health check-up notifications'
    ],
    testimonials: [
      {
        quote: "The reminder system has helped me stay consistent with my medications.",
        author: "Robert S.",
        role: "Chronic Care Patient"
      },
      {
        quote: "I never miss my children's vaccination dates now.",
        author: "Sarah M.",
        role: "Parent"
      }
    ]
  },
  offline: {
    title: 'Works Offline',
    description: 'Reliable healthcare support even without internet.',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&h=600',
    benefits: [
      'SMS-based health support',
      'Voice call support',
      'Offline data synchronization',
      'Low-bandwidth optimization'
    ],
    testimonials: [
      {
        quote: "Even with poor connectivity, I can always reach out for help.",
        author: "James L.",
        role: "Remote Worker"
      },
      {
        quote: "The offline support has been crucial in our rural clinic.",
        author: "Dr. Emily R.",
        role: "Rural Healthcare Provider"
      }
    ]
  },
  languages: {
    title: 'Language Options',
    description: 'Breaking language barriers in healthcare.',
    icon: Languages,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=600',
    benefits: [
      'Regional dialect support',
      'Voice-to-text in multiple languages',
      'Cultural context adaptation',
      'Language preference memory'
    ],
    testimonials: [
      {
        quote: "The dialect support makes communication so natural.",
        author: "Li Wei",
        role: "Elderly Care Provider"
      },
      {
        quote: "Being able to switch between languages is incredibly helpful.",
        author: "Sofia R.",
        role: "Multilingual User"
      }
    ]
  }
};

export function FeatureDetails() {
  const { id } = useParams();
  const feature = featureDetails[id as keyof typeof featureDetails];

  if (!feature) {
    return <div>Feature not found</div>;
  }

  const Icon = feature.icon;

  return (
    <div className="pt-20">
      <GeometricBackground variant="light" opacity={0.1} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <Icon className="w-16 h-16 text-blue-600 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{feature.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl">{feature.description}</p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={feature.image} alt={feature.title} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {feature.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="h-5 w-5 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-lg text-gray-800">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {feature.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}