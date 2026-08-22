"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["ALL", "COMMERCIAL", "RESIDENTIAL", "INDUSTRIAL"];

const projectsData = [
  {
    id: 1,
    title: "Bashir Sons Pharmacy",
    category: "COMMERCIAL",
    location: "Lahore, PK",
    scope: "Construction & Interior",
    imageDefault: "/images/bashir_exterior.jpg",
    imageHover: "/images/bashir_interior.jpg",
    badge: "Commercial",
    hoverBadge: "Interior \u2192"
  },
  {
    id: 2,
    title: "MEP Solutions Plant",
    category: "INDUSTRIAL",
    location: "Faisalabad, PK",
    scope: "Mechanical & Electrical",
    imageDefault: "/images/hero_bg.jpg",
    badge: "Industrial",
  },
  {
    id: 3,
    title: "Luxury Villas Estate",
    category: "RESIDENTIAL",
    location: "Islamabad, PK",
    scope: "Turnkey Construction",
    imageDefault: "/images/service_civil.jpg",
    badge: "Residential",
  },
  {
    id: 4,
    title: "Steel Fabrication Unit",
    category: "INDUSTRIAL",
    location: "Karachi, PK",
    scope: "Fabrication",
    imageDefault: "/images/service_steel.jpg",
    badge: "Industrial",
  },
  {
    id: 5,
    title: "Urban Civil Complex",
    category: "COMMERCIAL",
    location: "Lahore, PK",
    scope: "Infrastructure",
    imageDefault: "/images/service_civil.jpg",
    badge: "Commercial",
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredProjects = activeTab === "ALL" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-bold uppercase tracking-[0.2em]">Featured Work</span>
            <div className="w-8 h-px bg-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none text-white">
            Our Projects
          </h2>
        </div>

        {/* Tabs - Interactive */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-sm w-fit overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={"px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 whitespace-nowrap " + (
                  activeTab === tab
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                    : "text-gray-500 hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-red-600/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-500 flex flex-col">
              <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                <Image 
                  src={project.imageDefault} 
                  alt={project.title} 
                  fill 
                  className={"object-cover transition-all duration-700 group-hover:scale-110 " + (project.imageHover ? "group-hover:opacity-0" : "")} 
                />
                {project.imageHover && (
                  <Image 
                    src={project.imageHover} 
                    alt={`${project.title} hover`} 
                    fill 
                    className="object-cover opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm z-10">
                  {project.badge}
                </span>
                
                {project.hoverBadge && (
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.hoverBadge}
                  </span>
                )}
              </div>
              
              <div className="p-5 flex flex-col flex-1 relative z-10 bg-zinc-950/50">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
                    {project.title}
                  </h4>
                </div>
                <div className="space-y-1.5 mb-4 flex-1">
                  <p className="text-[11px] text-gray-400 leading-tight">
                    <span className="text-red-500 font-semibold">Location:</span> {project.location}
                  </p>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    <span className="text-red-500 font-semibold">Scope:</span> {project.scope}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mt-auto">
                  <span className="text-[10px] font-bold text-gray-500 group-hover:text-red-500 uppercase tracking-widest transition-colors duration-300">
                    View Details
                  </span>
                  <svg className="w-3 h-3 text-gray-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-gray-500 text-sm border border-dashed border-white/10 rounded-xl mt-4">
            More projects coming soon in this category.
          </div>
        )}

      </div>
    </section>
  );
}
