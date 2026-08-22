"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "923274755131";

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

const INPUT_CLS = "w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-500";
const ARROW_SVG = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });

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
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/10 relative overflow-hidden">

      {/* Glow accents */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70%] h-[300px] rounded-full bg-red-600/5 blur-[120px] z-0 pointer-events-none" />

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="#" className="text-5xl font-black text-red-600 tracking-tighter">
              Z<span className="text-white">.</span>
            </a>
            <h2 className="text-2xl font-black leading-tight uppercase text-white">
              Let&apos;s Build Something<br />Exceptional Together.
            </h2>
            <p className="text-sm text-gray-400 max-w-xs">
              Z. Construction delivers world-class construction and engineering services across Pakistan.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Office</p>
                  <p className="text-sm text-white">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">CEO — Habib-ur-Rehman</p>
                  <p className="text-sm text-white">+92 327 4755131</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Adnan Anjum</p>
                  <p className="text-sm text-white">+92 301 4209218</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form column */}
          <div className="lg:col-span-3">
            <div className="bg-white/3 border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-black text-white uppercase tracking-wide mb-1">Send Us a Message</h3>
              <p className="text-xs text-gray-500 mb-6">Fill the form and we will contact you via WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text" name="name" required
                    placeholder="Full Name"
                    value={form.name} onChange={handleChange}
                    className={INPUT_CLS}
                  />
                  <input
                    type="email" name="email"
                    placeholder="Email Address"
                    value={form.email} onChange={handleChange}
                    className={INPUT_CLS}
                  />
                </div>

                {/* Row 2: Phone + Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel" name="phone"
                    placeholder="Phone Number"
                    value={form.phone} onChange={handleChange}
                    className={INPUT_CLS}
                  />
                  <select
                    name="projectType"
                    value={form.projectType} onChange={handleChange}
                    className={INPUT_CLS + " appearance-none cursor-pointer"}
                    style={{ backgroundImage: ARROW_SVG, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="" disabled className="bg-zinc-900 text-gray-500">Select Project Type</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-zinc-900 text-white">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Row 3: Message */}
                <textarea
                  name="message"
                  placeholder="Describe your project..."
                  rows={4}
                  value={form.message} onChange={handleChange}
                  className={INPUT_CLS + " resize-none"}
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-sm transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2"
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

      {/* Bottom bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Z. Construction. All rights reserved.</p>
          <p className="text-xs text-gray-600">Lahore, Pakistan</p>
        </div>
      </div>

    </footer>
  );
}
