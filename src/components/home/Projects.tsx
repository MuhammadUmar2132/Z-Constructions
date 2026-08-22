"use client";

import Image from "next/image";
import { useState } from "react";

const SERVICE_OPTIONS = [
  "Construction and Building Services",
  "Structural Design and Engineering",
  "Residential Construction Projects",
  "Commercial and Industrial Facility Construction",
  "Industrial Construction Projects",
  "Steel Fabrication and Structural Works",
  "Infrastructure Development",
  "Civil Engineering Solutions",
  "Architectural Design and Planning",
  "Interior and Exterior Design Works",
  "Project Management and Consultancy",
  "Quantity Surveying and Cost Estimation",
  "Site Supervision and Quality Control",
  "Safety and Engineering Consultancy",
  "MEP (Mechanical, Electrical and Plumbing) Services",
  "Electrical and Mechanical Installations",
  "Plumbing and Drainage Systems",
  "Renovation and Remodeling Works",
  "Finishing Works and Fit-Out Solutions",
  "Maintenance and Repair Services",
];

const WHATSAPP_NUMBER = "923274755131";

export default function Projects() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = 
`*New Inquiry - Z. Construction*
----------------------------
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Project Type:* ${form.projectType}
*Message:* ${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-600/5 blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          
          {/* Left: Projects Grid (Span 2) */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Tabs */}
            <div className="flex flex-wrap gap-8 border-b border-gray-800 mb-8 pb-4">
              <button className="text-red-500 font-bold border-b-2 border-red-500 pb-4 -mb-[18px] uppercase tracking-wider text-sm">
                COMMERCIAL
              </button>
              <button className="text-gray-500 font-medium pb-4 hover:text-white transition-colors uppercase tracking-wider text-sm">
                RESIDENTIAL
              </button>
              <button className="text-gray-500 font-medium pb-4 hover:text-white transition-colors uppercase tracking-wider text-sm">
                INDUSTRIAL
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {/* Project Card 1 */}
              <div className="group cursor-pointer bg-white/5 rounded-md overflow-hidden border border-white/10 hover:border-red-600/30 transition-colors flex flex-col">
                <div className="relative h-44 w-full">
                  <Image src="/images/about_building.jpg" alt="Project Category" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="text-base font-bold mb-1 text-white">Project category</h4>
                  <p className="text-xs text-gray-400 mb-3 flex-1">Structural Design, Structural description and construction.</p>
                  <span className="text-xs font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-wider">View Project →</span>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group cursor-pointer bg-white/5 rounded-md overflow-hidden border border-white/10 hover:border-red-600/30 transition-colors flex flex-col">
                <div className="relative h-44 w-full">
                  <Image src="/images/hero_bg.jpg" alt="MEP solutions" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="text-base font-bold mb-1 text-white">MEP solutions</h4>
                  <p className="text-xs text-gray-400 mb-3 flex-1">Structural Design, MEP description and solutions.</p>
                  <span className="text-xs font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-wider">View Project →</span>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group cursor-pointer bg-white/5 rounded-md overflow-hidden border border-white/10 hover:border-red-600/30 transition-colors flex flex-col">
                <div className="relative h-44 w-full">
                  <Image src="/images/service_civil.jpg" alt="Civil Engineering" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="text-base font-bold mb-1 text-white">Civil Engineering</h4>
                  <p className="text-xs text-gray-400 mb-3 flex-1">Infrastructure development and civil construction solutions.</p>
                  <span className="text-xs font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-wider">View Project →</span>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="group cursor-pointer bg-white/5 rounded-md overflow-hidden border border-white/10 hover:border-red-600/30 transition-colors flex flex-col">
                <div className="relative h-44 w-full">
                  <Image src="/images/service_steel.jpg" alt="Steel Structure" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="text-base font-bold mb-1 text-white">Steel Structure</h4>
                  <p className="text-xs text-gray-400 mb-3 flex-1">Heavy steel fabrication and structural steel works.</p>
                  <span className="text-xs font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-wider">View Project →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-center mb-2 text-white">Contact Us</h3>
              <p className="text-center text-xs text-gray-400 mb-4 px-2">
                Get in touch with us for your construction needs.
              </p>


              <form onSubmit={handleSubmit} className="space-y-3 flex flex-col flex-1">
                <input
                  type="text" name="name" required
                  placeholder="Full Name"
                  value={form.name} onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-500"
                />
                <input
                  type="email" name="email"
                  placeholder="Email Address"
                  value={form.email} onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-500"
                />
                <input
                  type="tel" name="phone"
                  placeholder="Phone Number"
                  value={form.phone} onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-500"
                />
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled className="bg-zinc-900 text-gray-500">Select Project Type</option>
                  {SERVICE_OPTIONS.map((service) => (
                    <option key={service} value={service} className="bg-zinc-900 text-white">
                      {service}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={4}
                  value={form.message} onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors resize-none flex-1 placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-sm transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
