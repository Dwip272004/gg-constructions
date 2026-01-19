import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";

const MENU = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => pathname + hash === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? "py-3 bg-[#0F172A] border-b border-[#D4AF37]/40 shadow-2xl" 
        : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION - Image Based */}
        <NavLink to="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 lg:w-16 lg:h-16">
            {/* Architectural Frame around the logo image */}
            <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-sm group-hover:rotate-45 transition-transform duration-700"></div>
            
            {/* Logo Image */}
            <img 
              src="/logo1.png" // Replace with your actual logo file path (PNG or SVG recommended)
              alt="G.G. Builders" 
              className="absolute inset-0 w-full h-full object-contain p-2 z-10 drop-shadow-md"
            />
          </div>

          {/* Optional: Keep the Text Brand Name next to the logo or remove if logo contains text */}
          <div className="flex flex-col">
            <span className="text-[#D4AF37] font-black text-xl lg:text-2xl tracking-tighter leading-none">
              G.G. BUILDERS
            </span>
            <span className="text-white text-[8px] tracking-[0.4em] uppercase font-bold opacity-70">
              EST. 1998
            </span>
          </div>
        </NavLink>

        {/* Center Menu */}
        <nav className={`hidden lg:flex items-center gap-1 transition-all ${
          !scrolled ? "bg-black/30 backdrop-blur-md px-2 py-1 rounded-full border border-white/10" : ""
        }`}>
          {MENU.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all
                ${isActive(item.path) ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}
                drop-shadow-md
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <a href="tel:+919876543210" className="hidden xl:flex items-center gap-2 text-white hover:text-[#D4AF37] transition-all drop-shadow-md">
            <PhoneCall size={16} className="text-[#D4AF37]" />
            <span className="text-[11px] font-black tracking-widest">+91 987 654 3210</span>
          </a>

          <NavLink
            to="/contact"
            className="group relative flex items-center gap-2 bg-[#D4AF37] text-[#0F172A] px-6 py-3 rounded-none font-black uppercase text-[10px] tracking-widest transition-all hover:bg-white"
          >
            START PROJECT <ArrowUpRight size={14} />
          </NavLink>

          <button className="lg:hidden text-[#D4AF37]" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[-1] bg-[#0F172A] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${open ? "translate-y-0" : "-translate-y-full"}`}>
        {MENU.map((item) => (
          <NavLink key={item.name} to={item.path} className="text-4xl font-black text-white uppercase" onClick={() => setOpen(false)}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}