import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]"
    >
      {/* 1. Background Image - Identical logic to ServicesHero */}
      <img
        src="https://housing.com/news/wp-content/uploads/2023/10/construction-site-f-compressed.jpg"
        alt="G.G. Builders Construction"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
      />

      {/* 2. MATCHED GRADIENT: Using Navy instead of Black to kill the white bar */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A] z-10 pointer-events-none"></div>

      {/* 3. Added Architectural Frame to match About/Services consistency */}
      <div className="absolute inset-4 md:inset-10 border border-[#D4AF37]/10 rounded-sm z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]"></div>
      </div>

      {/* 4. Content Hub */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full pt-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <ShieldCheck size={14} />
              ISO 9001:2015 CERTIFIED BUILDERS
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-black leading-[1.1] text-white mb-8 drop-shadow-2xl">
              Building <span className="text-[#D4AF37]">Trust</span>,<br />
              Creating <span className="text-[#D4AF37]">Landmarks</span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              G.G. Builders delivers premium residential and commercial 
              construction with a signature touch of quality and unmatched timely execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#contact" className="bg-[#D4AF37] text-[#0F172A] px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-xl">
                START YOUR PROJECT
              </a>
              <a href="#projects" className="border-2 border-white/20 text-white px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-[#0F172A] transition-all">
                OUR PORTFOLIO
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Using the same slate/navy glass effect */}
            <div className="bg-[#1E293B]/60 backdrop-blur-xl border border-[#D4AF37]/30 p-10 rounded-sm shadow-2xl">
              <h3 className="text-xl text-[#D4AF37] font-black uppercase tracking-widest mb-8 border-b border-[#D4AF37]/20 pb-4">
                CORE EXPERTISE
              </h3>
              <ul className="space-y-6">
                {["Residential Luxury Units", "Commercial Hubs", "Modern Infrastructure", "High-End Renovations"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white font-bold">
                    <CheckCircle2 className="text-[#D4AF37]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-[#D4AF37]/20 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-black text-[#D4AF37]">25+</p>
                  <p className="text-[10px] uppercase text-white/60 font-bold tracking-widest">Years Exp.</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#D4AF37]">500+</p>
                  <p className="text-[10px] uppercase text-white/60 font-bold tracking-widest">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}