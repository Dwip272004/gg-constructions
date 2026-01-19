import React from 'react';
import { Phone, Mail, MapPin, Send, Headset } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left: Contact Info Pillars */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xs">Direct Connect</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight">
                Let's Build Your <br />
                <span className="text-[#D4AF37]">Legacy Together</span>
              </h2>
            </div>

            <div className="grid gap-4">
              <ContactItem 
                icon={<Phone size={20} />} 
                title="Call Our Office" 
                value="+91 987 654 3210" 
                sub="Mon - Sat, 9am - 7pm"
              />
              <ContactItem 
                icon={<Mail size={20} />} 
                title="Email Inquiries" 
                value="projects@ggbuilders.com" 
                sub="Response within 24 hours"
              />
              <ContactItem 
                icon={<MapPin size={20} />} 
                title="Headquarters" 
                value="Arera Colony, Bhopal, MP" 
                sub="Floor 4, Imperial Tower"
              />
            </div>

            <div className="p-8 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-sm">
                <div className="flex items-center gap-4 text-[#D4AF37] mb-4">
                    <Headset size={24} />
                    <span className="font-black uppercase tracking-widest text-sm">Priority Support</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Existing clients can reach their dedicated project manager directly via the client portal for real-time site updates.
                </p>
            </div>
          </div>

          {/* Right: The Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1E293B]/40 backdrop-blur-xl border border-[#D4AF37]/30 p-8 md:p-12 rounded-sm shadow-2xl relative">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-sm"></div>
              
              <h3 className="font-heading text-2xl text-white font-black uppercase tracking-tighter mb-8">
                Request a <span className="text-[#D4AF37]">Consultation</span>
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Dwip"
                      className="w-full bg-[#0F172A]/50 border border-white/10 px-4 py-4 text-white rounded-none focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      placeholder="dwip@example.com"
                      className="w-full bg-[#0F172A]/50 border border-white/10 px-4 py-4 text-white rounded-none focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Project Type</label>
                  <select className="w-full bg-[#0F172A]/50 border border-white/10 px-4 py-4 text-white/60 rounded-none focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option>Residential Construction</option>
                    <option>Commercial Development</option>
                    <option>Renovation</option>
                    <option>Consultancy</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Describe your vision..."
                    className="w-full bg-[#0F172A]/50 border border-white/10 px-4 py-4 text-white rounded-none focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-[#D4AF37] text-[#0F172A] py-5 font-black uppercase text-xs tracking-[0.3em] overflow-hidden transition-all hover:bg-white"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Inquiry <Send size={16} />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, value, sub }) {
  return (
    <div className="group flex gap-6 p-6 bg-[#1E293B]/20 border border-white/5 hover:border-[#D4AF37]/30 transition-all rounded-sm">
      <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#D4AF37] text-[#0F172A] rounded-sm group-hover:rotate-12 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-white font-bold text-lg">{value}</p>
        <p className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter mt-1">{sub}</p>
      </div>
    </div>
  );
}