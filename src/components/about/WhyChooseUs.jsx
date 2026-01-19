import React from 'react';
import { Gem, Briefcase, Timer, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Premium Materials",
      desc: "Sourcing only the highest grade sustainable and durable construction materials.",
      icon: <Gem size={32} />,
    },
    {
      title: "Expert Leadership",
      desc: "Led by an elite management team with decades of international engineering experience.",
      icon: <Briefcase size={32} />,
    },
    {
      title: "Strategic Delivery",
      desc: "Precision project management ensuring every milestone is reached on or before time.",
      icon: <Timer size={32} />,
    },
    {
      title: "Partner Centric",
      desc: "A bespoke approach that treats every client as a lifelong development partner.",
      icon: <HeartHandshake size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-[#0F172A] relative">
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#D4AF37_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">
            The G.G. Advantage
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            Why Choose <span className="text-[#D4AF37]">Us</span>
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {points.map((point, index) => (
            <div
              key={index}
              className={`
                group relative p-8 md:p-10 transition-all duration-500 bg-[#1E293B]/20
                hover:bg-[#1E293B]/40 border-[#D4AF37]/10
                ${index !== points.length - 1 ? "lg:border-r" : ""}
                ${index === 0 ? "lg:rounded-l-sm" : ""}
                ${index === points.length - 1 ? "lg:rounded-r-sm" : ""}
                border-y lg:border-y-0
              `}
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="text-[#D4AF37] mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  {point.icon}
                </div>
                <h3 className="text-white font-black text-lg uppercase tracking-wider mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Subtle Hover Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#D4AF37] transition-all duration-300 group-hover:h-1"></div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 flex flex-col items-center">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Ready to experience the standard?
            </p>
            <a href="#contact" className="text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37] transition-all font-black text-sm tracking-widest uppercase">
                Schedule a Consultation
            </a>
        </div>
      </div>
    </section>
  );
}