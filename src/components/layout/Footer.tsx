export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-16 relative overflow-hidden">
      {/* Red glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] rounded-full bg-red-600/5 blur-[100px] z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        <div>
           <a href="#" className="text-4xl font-black text-red-600 tracking-tighter mb-8 block">
             Z<span className="text-white">.</span>
           </a>
           <h2 className="text-2xl font-black leading-tight uppercase">
             Let&apos;s Build Something<br/>Exceptional Together.
           </h2>
        </div>

        <div>
           <h4 className="font-bold mb-4">Office Location</h4>
           <p className="text-sm text-gray-400 mb-6">Lahore,<br/>Pakistan 2,<br/>Lahore, Pakistan</p>
           
           <h4 className="font-bold mb-2">CEO</h4>
           <p className="text-sm text-gray-400 mb-6">+92 327 4755131</p>

           <h4 className="font-bold mb-2">Adnan Anjum</h4>
           <p className="text-sm text-gray-400">+92 301 4209218</p>
        </div>

        <div className="lg:col-span-2 rounded-md overflow-hidden border border-white/10 h-64 relative bg-white/5 flex items-center justify-center">
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-white/5 p-4 flex flex-col items-center justify-center">
            <svg className="w-12 h-12 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-400 font-medium">Google Maps Integration</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
