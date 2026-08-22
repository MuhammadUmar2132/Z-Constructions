"use client";

import { useState } from "react";
import {
  Building2, HardHat, Home, Factory, Layers, Landmark,
  Wrench, Zap, Droplets, RefreshCw, Shield, Hammer,
  PenTool, Ruler, LayoutGrid, ClipboardList, BarChart2,
  Settings, Star, CheckCircle2,
} from "lucide-react";

const tabs = [
  { id: "construction", label: "Construction & Building" },
  { id: "engineering",  label: "Engineering & Design"   },
  { id: "mep",          label: "MEP & Maintenance"      },
];

type Service = { title: string; desc: string; iconName: string };

const services: Record<string, Service[]> = {
  construction: [
    { iconName: "Building2",     title: "Construction & Building Services",    desc: "End-to-end construction solutions for commercial and residential projects." },
    { iconName: "Layers",        title: "Structural Design & Engineering",      desc: "Robust structural systems engineered for safety and durability." },
    { iconName: "Home",          title: "Residential Construction",             desc: "Quality homes built to the highest standards and specifications." },
    { iconName: "Landmark",      title: "Commercial & Industrial Facility",     desc: "Modern commercial and industrial buildings built for performance." },
    { iconName: "Factory",       title: "Industrial Construction Projects",     desc: "Large-scale industrial construction with precision and safety." },
    { iconName: "Hammer",        title: "Steel Fabrication & Structural Works", desc: "Heavy steel fabrication and structural steel installation works." },
    { iconName: "HardHat",       title: "Infrastructure Development",           desc: "Roads, bridges, and infrastructure built to last for generations." },
  ],
  engineering: [
    { iconName: "Ruler",         title: "Civil Engineering Solutions",          desc: "Comprehensive civil engineering for infrastructure and development." },
    { iconName: "PenTool",       title: "Architectural Design & Planning",      desc: "Innovative architectural designs tailored to every need." },
    { iconName: "LayoutGrid",    title: "Interior & Exterior Design Works",     desc: "Premium interior and exterior design for lasting impressions." },
    { iconName: "ClipboardList", title: "Project Management & Consultancy",     desc: "Expert project management ensuring timely and on-budget delivery." },
    { iconName: "BarChart2",     title: "Quantity Surveying & Cost Estimation", desc: "Accurate cost planning and quantity surveying services." },
    { iconName: "CheckCircle2",  title: "Site Supervision & Quality Control",   desc: "Rigorous on-site supervision for quality and compliance." },
    { iconName: "Shield",        title: "Safety & Engineering Consultancy",     desc: "Comprehensive safety planning and engineering consultancy." },
  ],
  mep: [
    { iconName: "Settings",      title: "MEP Services",                         desc: "Integrated Mechanical, Electrical & Plumbing engineering solutions." },
    { iconName: "Zap",           title: "Electrical & Mechanical Installations", desc: "Professional electrical and mechanical system installations." },
    { iconName: "Droplets",      title: "Plumbing & Drainage Systems",          desc: "Efficient plumbing and drainage design and installation." },
    { iconName: "RefreshCw",     title: "Renovation & Remodeling Works",        desc: "Complete renovation and remodeling for all space types." },
    { iconName: "Star",          title: "Finishing Works & Fit-Out Solutions",  desc: "High-quality finishing and fit-out solutions for every project." },
    { iconName: "Wrench",        title: "Maintenance & Repair Services",        desc: "Reliable ongoing maintenance and repair for all facility types." },
  ],
};

const iconMap: Record<string, React.ElementType> = {
  Building2, HardHat, Home, Factory, Layers, Landmark,
  Wrench, Zap, Droplets, RefreshCw, Shield, Hammer,
  PenTool, Ruler, LayoutGrid, ClipboardList, BarChart2,
  Settings, Star, CheckCircle2,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("construction");
  const list = services[activeTab];

  return (
    <section id="services" className="py-24 bg-zinc-950 text-white relative overflow-hidden">

      {/* Background accents — matches rest of website */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-bold uppercase tracking-[0.2em]">What We Offer</span>
            <div className="w-8 h-px bg-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none text-white">
            Our Services
          </h2>
        </div>

        {/* ── Tabs — Desktop ── */}
        <div className="hidden md:flex justify-center mb-10">
          <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-sm w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={"px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 " + (
                  activeTab === tab.id
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                    : "text-gray-500 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tabs — Mobile dropdown ── */}
        <div className="md:hidden mb-8">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-sm font-bold text-white uppercase tracking-wider focus:outline-none focus:border-red-500 appearance-none cursor-pointer"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23dc2626' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id} className="bg-zinc-900">{tab.label}</option>
            ))}
          </select>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/[0.08] hover:border-red-600/30 transition-all duration-300 cursor-pointer flex flex-col gap-5 overflow-hidden"
              >
                {/* Red left border on hover */}
                <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

                {/* Icon + number row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-red-600/10 group-hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[11px] font-black text-white/10 group-hover:text-red-600/40 tracking-widest transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-white font-bold text-sm leading-snug group-hover:text-red-400 transition-colors duration-300 flex-1">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed">
                  {service.desc}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-gray-600 group-hover:text-red-500 uppercase tracking-widest transition-colors duration-300">
                    Learn More
                  </span>
                  <svg
                    className="w-3 h-3 text-gray-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom stats — Modern Large Format ── */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">20<span className="text-red-600">+</span></p>
              <p className="text-xs text-gray-400 uppercase tracking-[0.15em]">Services Offered</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">3</p>
              <p className="text-xs text-gray-400 uppercase tracking-[0.15em]">Core Divisions</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">100<span className="text-red-600">%</span></p>
              <p className="text-xs text-gray-400 uppercase tracking-[0.15em]">Quality Assured</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">50<span className="text-red-600">+</span></p>
              <p className="text-xs text-gray-400 uppercase tracking-[0.15em]">Professionals</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
