import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative border-b border-white/10 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-600/5 blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Building Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/images/about_building.jpg"
              alt="Modern High-Rise Building"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Right: Text and Highlights */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">About Company</h2>
            <div className="space-y-4 text-gray-300 mb-12 text-sm leading-relaxed">
              <p>
                Z. Construction is a premier construction firm dedicated to exceeding client expectations. 
                We specialize in delivering high-quality, innovative, and sustainable construction solutions 
                across residential, commercial, and industrial sectors.
              </p>
              <p>
                Our expert team combines years of experience with cutting-edge technology and materials 
                to ensure every project is completed on time, within budget, and to the highest standards 
                of safety and excellence. We build more than just structures; we build lasting relationships.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-white">Company Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              
              {/* Highlight Item */}
              <div className="flex gap-4 items-start">
                <div className="text-red-600 mt-1 bg-red-600/10 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Construction & Engineering</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Construction & Engineering architectural design solutions and architecture aesthetics.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-red-600 mt-1 bg-red-600/10 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Architectural Design</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Architectural design and innovative architecture solutions for modern living spaces.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-red-600 mt-1 bg-red-600/10 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Project Management</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Only actual capability based points and stats. (no invented numbers).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-red-600 mt-1 bg-red-600/10 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">MEP Solutions</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">MEP solutions capability based points and standards. (no invented numbers).</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
