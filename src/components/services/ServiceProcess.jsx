import React from 'react';
import { Search, PenTool, HardHat, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function ServiceProcess() {
  const steps = [
    {
      title: "Analysis",
      desc: "Deep-dive consultation to align on vision, budget, and feasibility.",
      icon: <Search size={24} />,
    },
    {
      title: "Planning",
      desc: "Architectural blueprints and structural engineering mapped to perfection.",
      icon: <PenTool size={24} />,
    },
    {
      title: "Execution",
      desc: "Precision construction under constant expert site supervision.",
      icon: <HardHat size={24} />,
    },
    {
      title: "Delivery",
      desc: "Rigorous 50-point quality checks before the final keys handover.",
      icon: <ClipboardCheck size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[20vw] font-black text-white whitespace-nowrap">STRATEGY</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">
            Step-by-Step Excellence
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            Our Building <span className="text-[#D4AF37]">Process</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto w-20 h-20 mb-8">
                  {/* Rotating Outer Frame */}
                  <div className="absolute inset-0 border border-[#D4AF37]/40 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  
                  {/* Inner Icon Container */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1E293B] border border-[#D4AF37] text-[#D4AF37] rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    {step.icon}
                  </div>

                  {/* Step Index Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4AF37] text-[#0F172A] text-xs font-black flex items-center justify-center rounded-full border-4 border-[#0F172A]">
                    0{index + 1}
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-white font-black text-xl uppercase tracking-widest mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile/Tablet Arrow Indicator */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 text-[#D4AF37]/30">
                    <ArrowRight className="rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Assurance Tag */}
        <div className="mt-24 text-center">
            <div className="inline-block py-3 px-8 border border-[#D4AF37]/20 rounded-full bg-[#D4AF37]/5">
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">
                    Every Phase Monitored by Senior Engineers
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}