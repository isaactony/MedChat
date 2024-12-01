import React from 'react';

const partners = [
  {
    name: 'World Health Organization',
    logo: 'https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-12-01+at+20.41.25.png',
    description: 'Global health authority partner',
  },
  {
    name: 'Government of Kenya',
    logo: 'https://images.unsplash.com/photo-1580741569354-08feedd159f9?auto=format&fit=crop&w=100&h=100',
    description: 'National healthcare initiative partner',
  },
  {
    name: 'USAID',
    logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=100&h=100',
    description: 'International development partner',
  },
];

export function Partners() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Working together with global leaders to transform healthcare accessibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 mb-6 rounded-full overflow-hidden border-4 border-blue-300 shadow-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto">
            Together with our partners, we're committed to making healthcare accessible to everyone through innovative technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
