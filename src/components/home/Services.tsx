"use client";

import { useState } from "react";
import {
  Building2, HardHat, Home, Factory, Layers, Landmark,
  Wrench, Zap, Droplets, RefreshCw, Shield, Hammer,
  PenTool, Ruler, LayoutGrid, ClipboardList, BarChart2,
  Settings, Star, CheckCircle2,
} from "lucide-react";

const tabs = [
  { id: "construction", label: "Construction and Building" },
  { id: "engineering", label: "Engineering and Design" },
  { id: "mep", label: "MEP and Maintenance" },
];

type Service = { title: string; desc: string; iconName: string };

const services: Record<string, Service[]> = {
  construction: [
    { iconName: "Building2",     title: "Construction and Building Services",     desc: "End-to-end construction solutions for all types of projects." },
    { iconName: "Layers",        title: "Structural Design and Engineering",       desc: "Robust structural systems designed for safety and durability." },
    { iconName: "Home",          title: "Residential Construction Projects",       desc: "Quality homes built to the highest standards and specifications." },
    { iconName: "Landmark",      title: "Commercial and Industrial Facility",      desc: "Modern commercial and industrial buildings built for performance." },
    { iconName: "Factory",       title: "Industrial Construction Projects",        desc: "Large-scale industrial construction with precision and safety." },
    { iconName: "Hammer",        title: "Steel Fabrication and Structural Works",  desc: "Heavy steel fabrication and structural steel installation works." },
    { iconName: "HardHat",       title: "Infrastructure Development",              desc: "Roads, bridges, and infrastructure built to last." },
  ],
  engineering: [
    { iconName: "Ruler",         title: "Civil Engineering Solutions",            desc: "Comprehensive civil engineering for infrastructure and development." },
    { iconName: "PenTool",       title: "Architectural Design and Planning",      desc: "Innovative and functional architectural designs for every need." },
    { iconName: "LayoutGrid",    title: "Interior and Exterior Design Works",     desc: "Premium interior and exterior design for lasting impressions." },
    { iconName: "ClipboardList", title: "Project Management and Consultancy",     desc: "Expert project management ensuring timely and on-budget delivery." },
    { iconName: "BarChart2",     title: "Quantity Surveying and Cost Estimation", desc: "Accurate cost planning and quantity surveying services." },
    { iconName: "CheckCircle2",  title: "Site Supervision and Quality Control",   desc: "Rigorous on-site supervision for quality and compliance." },
    { iconName: "Shield",        title: "Safety and Engineering Consultancy",     desc: "Comprehensive safety planning and engineering consultancy." },
  ],
  mep: [
    { iconName: "Settings",      title: "MEP Services",                           desc: "Mechanical, Electrical and Plumbing integrated engineering solutions." },
    { iconName: "Zap",           title: "Electrical and Mechanical Installations", desc: "Professional electrical and mechanical system installations." },
    { iconName: "Droplets",      title: "Plumbing and Drainage Systems",          desc: "Efficient plumbing and drainage design and installation." },
    { iconName: "RefreshCw",     title: "Renovation and Remodeling Works",        desc: "Complete renovation and remodeling for residential and commercial spaces." },
    { iconName: "Star",          title: "Finishing Works and Fit-Out Solutions",  desc: "High-quality finishing and fit-out solutions for every project." },
    { iconName: "Wrench",        title: "Maintenance and Repair Services",        desc: "Reliable ongoing maintenance and repair for all facility types." },
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

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-600/5 blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h4 className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3">What We Offer</h4>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-white mb-4">Our Services</h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            From design to delivery - we provide end-to-end construction and engineering services tailored to your project needs.
          </p>
        </div>
        {/* Mobile Dropdown Toggle */}
        <div className="block md:hidden mb-8">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-4 text-xs font-bold text-white uppercase tracking-wider focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23dc2626' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id} className="bg-zinc-900 text-white font-medium">
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-wrap gap-6 border-b border-white/10 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={"pb-4 text-xs font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px " + (activeTab === tab.id ? "text-red-500 border-red-500" : "text-gray-500 border-transparent hover:text-white")}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services[activeTab].map((service, index) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-red-600/30 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-red-600/10 text-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2 leading-snug">{service.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-10">
          {[
            { num: "20+", label: "Services Offered" },
            { num: "100%", label: "Client Satisfaction" },
            { num: "3", label: "Core Divisions" },
            { num: "Expert", label: "Professional Team" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl font-black text-red-500">{stat.num}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
