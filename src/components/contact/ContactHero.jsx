import React from 'react';
import { MessageSquareText } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* 1. Background Image - Positioned to ensure full bleed with the navbar */}
      <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000"
        alt="Consultation with G.G. Builders"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
      />

      {/* 2. Navy Scrim - Eliminates any white background bleed at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A] z-10 pointer-events-none"></div>

      {/* 3. Architectural Gold Frame */}
      <div className="absolute inset-4 md:inset-10 border border-[#D4AF37]/20 rounded-sm z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]"></div>
      </div>

      {/* 4. Content Hub */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/20">
          <MessageSquareText size={16} className="text-[#D4AF37]" />
          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">Get in Touch</span>
        </div>

        <h1 className="font-heading text-5xl md:text-8xl font-black text-white leading-tight drop-shadow-2xl">
          Start Your <span className="text-[#D4AF37]">Project</span>
        </h1>

        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            Partner with <span className="text-white">G.G. Builders</span> to discuss your construction 
            requirements and transform your vision into an architectural landmark.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40"></div>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/10"></div>
        </div>
      </div>
    </section>
  );
}