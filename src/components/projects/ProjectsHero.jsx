import React from 'react';

export default function ProjectsHero() {
  return (
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* 1. Background Image - Positioned to bleed to edges and avoid gaps */}
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
        alt="G.G. Builders Project Showcase"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
      />

      {/* 2. Deep Navy Scrim - Protects the Navbar visibility at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A] z-10 pointer-events-none"></div>

      {/* 3. Architectural Gold Frame - Reinforces the premium feel */}
      <div className="absolute inset-4 md:inset-10 border border-[#D4AF37]/20 rounded-sm z-20 pointer-events-none">
        {/* Decorative corner brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]"></div>
      </div>

      {/* 4. Content Hub */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-4 mb-6">
          <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
          <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em] drop-shadow-md">
            Portfolio of Excellence
          </span>
          <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
        </div>

        <h1 className="font-heading text-6xl md:text-8xl font-black text-white leading-tight drop-shadow-2xl">
          Our <span className="text-[#D4AF37]">Projects</span>
        </h1>

        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed drop-shadow-lg">
            A showcase of our <span className="text-white">residential, commercial, and infrastructure</span> landmarks 
            engineered with architectural precision and built on a foundation of trust.
          </p>
        </div>

        {/* Decorative Vertical Element */}
        <div className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#D4AF37] to-transparent shadow-[0_0_8px_#D4AF37]"></div>
            <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">
              VIEW OUR WORK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}