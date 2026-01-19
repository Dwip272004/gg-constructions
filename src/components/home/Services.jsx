import React from 'react';
import { Home, Building2, Hammer, ArrowRight } from 'lucide-react'; // Using Lucide icons

export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      description: "From custom luxury villas to modern apartment complexes, we build homes that stand the test of time.",
      features: ["Custom Home Design", "Green Building", "Smart Home Integration"],
      icon: <Home className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Commercial Buildings",
      description: "Functional, scalable, and striking commercial spaces designed for productivity and brand impact.",
      features: ["Office Complexes", "Retail Hubs", "Industrial Facilities"],
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Renovation & Remodeling",
      description: "Transforming existing structures into modern masterpieces with minimal disruption to your daily life.",
      features: ["Structural Retrofitting", "Interior Overhauls", "Facade Restoration"],
      icon: <Hammer className="w-8 h-8" />,
      image: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">What We Do</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              Comprehensive Construction Solutions
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm pb-2">
            Providing end-to-end management for projects of any scale, ensuring quality at every milestone.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl text-blue-600 shadow-sm">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-500 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center font-bold text-gray-900 group/btn">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-2 text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Services */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            Have a unique project in mind? <span className="text-blue-600 font-semibold cursor-pointer underline underline-offset-4">Consult our engineers</span>
          </p>
        </div>
      </div>
    </section>
  );
}