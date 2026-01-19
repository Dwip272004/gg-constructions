import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "The Skyward Heights",
      location: "Mumbai, MH",
      size: "col-span-2 row-span-2", // Large Featured
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1200",
      category: "Commercial"
    },
    {
      id: 2,
      title: "Emerald Residencies",
      location: "Pune, MH",
      size: "col-span-1 row-span-1", // Small Square
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      category: "Residential"
    },
    {
      id: 3,
      title: "Modern Loft Renovation",
      location: "Bangalore, KA",
      size: "col-span-1 row-span-2", // Tall Portrait
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
      category: "Interior"
    },
    {
      id: 4,
      title: "RK Industrial Park",
      location: "Gujarat, GJ",
      size: "col-span-1 row-span-1", // Small Square
      image: "https://architizer-prod.imgix.net/media/137504452161001of10web.jpg?fit=max&w=1680&q=60&auto=format&auto=compress&cs=strip",
      category: "Industrial"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 text-gray-900">
              Featured Work
            </h2>
          </div>
          <button className="flex items-center gap-2 text-gray-900 font-bold group border-b-2 border-black pb-1">
            View All Projects <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Modern Multi-Format Carousel/Grid */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:h-[700px]">
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-auto overflow-hidden rounded-3xl group snap-center ${project.size}`}
            >
              {/* Image with Dark Overlay */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Project Details */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-tighter">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-blue-400" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Progress Bar for Mobile Scroll */}
        <div className="mt-8 h-1 w-full bg-gray-100 rounded-full overflow-hidden lg:hidden">
            <div className="h-full bg-blue-600 w-1/3 animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
}