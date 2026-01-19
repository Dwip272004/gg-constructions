import React from 'react';
import { Award, Users, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function CompanyIntro() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Narrative */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xs">Our Heritage</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight">
                Architects of <span className="text-[#D4AF37]">Integrity</span> <br />
                & Lasting Quality
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                G.G. Builders stands at the forefront of the construction industry, 
                blending <span className="text-white font-bold">traditional craftsmanship</span> with 
                <span className="text-white font-bold"> modern engineering</span>. We don't just build 
                structures; we create the foundations for future success.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team of seasoned professionals is dedicated to safety, durability, and 
                aesthetic perfection. From the first brick to the final finish, we maintain 
                a transparent process that keeps our clients at the heart of every decision.
              </p>
            </div>

            {/* Quick Stats Mini-Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]">
                   <ShieldCheck size={24} />
                </div>
                <div>
                   <h4 className="text-white font-black text-xl leading-none">100%</h4>
                   <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1">Safety Record</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]">
                   <Award size={24} />
                </div>
                <div>
                   <h4 className="text-white font-black text-xl leading-none">Global</h4>
                   <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1">Standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="relative">
            {/* The Floating Frame Design */}
            <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-sm translate-x-2 translate-y-2 pointer-events-none"></div>
            
            <div className="relative bg-[#1E293B]/30 backdrop-blur-xl border border-[#D4AF37]/30 p-8 md:p-12 rounded-sm shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:bg-[#D4AF37]/10 transition-colors"></div>
              
              <h3 className="text-[#D4AF37] font-black text-xl uppercase tracking-widest mb-10">Why Choose G.G. Builders</h3>
              
              <div className="space-y-8">
                {[
                  { title: "Unmatched Experience", desc: "Decades of industry leadership across diverse project scales.", icon: <Clock /> },
                  { title: "Elite Engineering", desc: "Our workforce consists of the region's most skilled civil engineers.", icon: <Users /> },
                  { title: "Timely Execution", desc: "Proprietary project management ensuring deadlines are always met.", icon: <CheckCircle2 /> },
                  { title: "Crystal Clarity", desc: "Full transparency in budgeting and material sourcing with no hidden costs.", icon: <ShieldCheck /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group/item">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#D4AF37] text-[#0F172A] rounded-sm group-hover/item:rotate-12 transition-transform duration-300">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-lg mb-1 group-hover/item:text-[#D4AF37] transition-colors">{item.title}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}