import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* Background Image - Absolute inset-0 ensures no top gaps */}
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
        alt="About G.G. Builders"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
      />

      {/* Dynamic Overlay - Ensures deep navy at the top for Navbar visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A] z-10 pointer-events-none"></div>

      {/* Floating Gold Border Frame */}
      <div className="absolute inset-4 md:inset-10 border border-[#D4AF37]/30 rounded-sm z-20 pointer-events-none">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
          <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em]">Established 1998</span>
          <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
          About <br className="md:hidden" />
          <span className="text-[#D4AF37]">G.G. Builders</span>
        </h1>

        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            Building trust, quality, and long-lasting relationships through 
            <span className="text-white"> engineering excellence</span> and uncompromising commitment.
          </p>
        </div>

        {/* Decorative Scroll Hint */}
        <div className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-2">
                <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase rotate-90 mb-8">Discover</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
            </div>
        </div>
      </div>
    </section>
  );
}