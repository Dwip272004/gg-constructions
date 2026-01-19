import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Residential Villa",
    location: "Bhopal",
    category: "Luxury Home",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Commercial Complex",
    location: "Indore",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Apartment Project",
    location: "Bhopal",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Office Building",
    location: "Delhi",
    category: "Office",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Retail Space",
    location: "Indore",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Renovation Project",
    location: "Bhopal",
    category: "Restoration",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-24 bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Staggered Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1E293B] overflow-hidden rounded-sm border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#0F172A]/80 backdrop-blur-md text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 border border-[#D4AF37]/30">
                    {project.category}
                  </span>
                </div>

                {/* Dark Overlay that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
              </div>

              {/* Project Info - Glassmorphism style */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <MapPin size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{project.location}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Circular CTA Button */}
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F172A] transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="mt-6 h-[2px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em]">
            Delivering Excellence Across Madhya Pradesh & Beyond
          </p>
        </div>
      </div>
    </section>
  );
}