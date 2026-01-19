import React from 'react';
import { ShieldCheck, Zap, Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative background numbers for an architectural feel */}
      <div className="absolute top-10 right-10 text-[200px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
        RK
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Company Legacy */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="w-full lg:w-1/2 relative">
            {/* Architectural Frame */}
            <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-sm translate-x-2 translate-y-2"></div>
            
            <div className="relative overflow-hidden rounded-sm group">
              <img
                src="https://www.vassallogroupmalta.com/wp-content/uploads/2018/02/skilled-labor-and-construction-jobs-hiring-800x500.jpg"
                alt="Construction excellence"
                className="relative z-10 object-cover h-[450px] w-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#0F172A]/20 z-10"></div>
            </div>

            {/* Experience Badge - Metallic Gold Style */}
            <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] text-[#0F172A] p-8 rounded-sm shadow-2xl z-20 hidden lg:block">
              <p className="text-5xl font-black leading-none">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Years of Legacy</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">Our Heritage</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Building the Future of <br />
              <span className="text-[#D4AF37]">RK Construction</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              At RK Construction, we don’t just build structures; we craft environments where lives flourish. Since our inception, we have been committed to redefining the skyline through <span className="text-white">sustainable practices</span> and <span className="text-white">precision engineering</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="flex gap-4">
                <div className="shrink-0 text-[#D4AF37]"><Zap size={24} /></div>
                <div>
                  <h4 className="font-black text-white uppercase text-sm tracking-widest mb-2">Innovation First</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Utilizing the latest BIM, 3D modeling, and modular tech.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 text-[#D4AF37]"><ShieldCheck size={24} /></div>
                <div>
                  <h4 className="font-black text-white uppercase text-sm tracking-widest mb-2">Quality Assured</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Rigorous 50-point structural integrity and safety checks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Founder Spotlight */}
        <div className="bg-[#1E293B]/40 backdrop-blur-xl border border-[#D4AF37]/30 p-8 md:p-20 rounded-sm flex flex-col lg:flex-row-reverse items-center gap-16 relative shadow-2xl">
          
          <div className="w-full lg:w-1/3 relative">
            {/* Double Frame Effect */}
            <div className="absolute -inset-4 border border-[#D4AF37] opacity-30 rounded-sm"></div>
            <div className="aspect-[4/5] rounded-sm overflow-hidden border-4 border-[#0F172A] shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Rajesh Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 relative">
            <Quote className="absolute -top-10 -left-10 w-20 h-20 text-[#D4AF37]/10" />
            
            <h3 className="text-[#D4AF37] font-black text-3xl uppercase tracking-tighter mb-2">Meet Our Founder</h3>
            <p className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-8">Rajesh Kumar — Lead Visionary</p>
            
            <blockquote className="italic text-gray-200 text-xl md:text-2xl leading-relaxed mb-8 font-medium">
              "Construction is more than concrete and steel; it's about the <span className="text-[#D4AF37]">trust</span> a family places in us. We honor that trust with every brick we lay."
            </blockquote>
            
            <p className="text-gray-400 mb-10 leading-relaxed text-sm md:text-base">
              With over two decades of experience in civil engineering, Rajesh founded RK Construction on the principles of transparency and uncompromising quality. His vision has led the company from a small local firm to a regional powerhouse in commercial and residential development.
            </p>
            
            <button className="group relative bg-[#D4AF37] text-[#0F172A] px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-white transition-all overflow-hidden">
              <span className="relative z-10">Read Full Story</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}