import React from 'react';
import { Home, Building2, Hammer, Paintbrush, Briefcase, Ruler } from 'lucide-react';

const SERVICES = [
  {
    title: "Residential Construction",
    desc: "High-quality homes built with durable materials and modern architectural designs.",
    icon: <Home size={32} />,
  },
  {
    title: "Commercial Construction",
    desc: "Office spaces, retail complexes, and commercial landmarks built to scale and precision.",
    icon: <Building2 size={32} />,
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transforming and upgrading existing spaces with meticulous care and modern standards.",
    icon: <Hammer size={32} />,
  },
  {
    title: "Interior & Finishing",
    desc: "Premium interior design, custom flooring, and high-end finishing solutions for every room.",
    icon: <Paintbrush size={32} />,
  },
  {
    title: "Project Management",
    desc: "Comprehensive end-to-end planning, site execution, and rigorous quality control protocols.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Structural Consultancy",
    desc: "Expert civil engineering guidance ensuring structural integrity and efficient resource use.",
    icon: <Ruler size={32} />,
  },
];

export default function ServicesList() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#D4AF37 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1E293B]/30 border border-[#D4AF37]/20 p-10 rounded-sm overflow-hidden transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 shadow-2xl"
            >
              {/* Decorative Corner Hook */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#D4AF37]/10 -mr-6 -mt-6 rotate-45 transition-all group-hover:bg-[#D4AF37] group-hover:w-16 group-hover:h-16"></div>

              {/* Icon & Index Area */}
              <div className="flex justify-between items-start mb-8">
                <div className="text-[#D4AF37] p-3 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37] group-hover:text-[#0F172A] transition-colors duration-500">
                  {service.icon}
                </div>
                <span className="text-white/10 font-black text-5xl leading-none group-hover:text-[#D4AF37]/20 transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Text Content */}
              <h3 className="font-heading text-xl font-black text-white uppercase tracking-wider mb-4 group-hover:text-[#D4AF37] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Modern "Learn More" Link */}
              <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explore Expertise <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-20 flex flex-col items-center">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"></div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] text-center max-w-lg">
                Custom solutions tailored for specific architectural requirements and project scales.
            </p>
        </div>
      </div>
    </section>
  );
}