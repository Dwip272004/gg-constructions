import React from 'react';
import { Eye, Target, Sparkles, Shield } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* Vision Card - The Inspiration */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#D4AF37]/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full border border-[#D4AF37]/30 bg-[#1E293B]/40 backdrop-blur-xl p-10 md:p-14 rounded-sm transition-transform duration-500 group-hover:-translate-y-2">
              <div className="mb-8 inline-flex p-4 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                <Eye size={32} />
              </div>
              
              <h3 className="font-heading text-3xl font-black text-white uppercase tracking-tighter mb-6">
                Our <span className="text-[#D4AF37]">Vision</span>
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To redefine the architectural landscape by becoming the most 
                trusted name in luxury construction, recognized globally for 
                uncompromising quality and the creation of legacy landmarks.
              </p>

              <div className="flex items-center gap-3 text-[#D4AF37]/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                <Sparkles size={14} />
                Innovation & Future Value
              </div>
            </div>
          </div>

          {/* Mission Card - The Action */}
          <div className="group relative md:mt-12"> {/* Offset height for modern look */}
            <div className="absolute -inset-1 bg-gradient-to-b from-[#D4AF37]/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full border border-[#D4AF37]/30 bg-[#1E293B]/40 backdrop-blur-xl p-10 md:p-14 rounded-sm transition-transform duration-500 group-hover:-translate-y-2">
              <div className="mb-8 inline-flex p-4 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                <Target size={32} />
              </div>
              
              <h3 className="font-heading text-3xl font-black text-white uppercase tracking-tighter mb-6">
                Our <span className="text-[#D4AF37]">Mission</span>
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To deliver precision-engineered construction solutions that 
                prioritize safety, integrity, and absolute customer 
                satisfaction through every phase of development.
              </p>

              <div className="flex items-center gap-3 text-[#D4AF37]/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                <Shield size={14} />
                Safety, Integrity, Excellence
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}