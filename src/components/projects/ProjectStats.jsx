import React from 'react';
import { LayoutGrid, HardHat, History, Users } from 'lucide-react';

export default function ProjectStats() {
  const stats = [
    { label: "Completed Projects", value: "150+", icon: <LayoutGrid size={20} /> },
    { label: "Ongoing Projects", value: "12", icon: <HardHat size={20} /> },
    { label: "Years of Experience", value: "25+", icon: <History size={20} /> },
    { label: "Happy Clients", value: "200+", icon: <Users size={20} /> },
  ];

  return (
    <section className="py-16 bg-[#0F172A] relative overflow-hidden border-y border-[#D4AF37]/20">
      {/* Subtle Background Text for Texture */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[15vw] font-black text-white tracking-tighter">PERFORMANCE</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center text-center px-4 
                ${index !== stats.length - 1 ? "lg:border-r border-[#D4AF37]/20" : ""}
              `}
            >
              {/* Icon with Glowing Effect */}
              <div className="mb-4 text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {stat.icon}
              </div>

              {/* Number Value */}
              <h3 className="font-heading text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-[#D4AF37] transition-colors duration-300">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-[#D4AF37]/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>

              {/* Animated Underline */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#D4AF37] group-hover:w-12 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}