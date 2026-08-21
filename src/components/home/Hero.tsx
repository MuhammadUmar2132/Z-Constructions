import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex items-center justify-center pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.jpg"
          alt="Construction Site Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/50 to-[#111111]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10 md:mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] md:leading-[1.1] mb-6 drop-shadow-lg">
          BUILDING INNOVATION.<br className="hidden md:block" /> ENGINEERING TRUST.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
          We provide exceptional architectural and contracting services that combine craftsmanship, and reliability.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            START A PROJECT
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold rounded-sm transition-all duration-300">
            EXPLORE OUR PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
