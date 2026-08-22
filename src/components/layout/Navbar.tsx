"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home",       href: "#hero" },
  { name: "About Us",   href: "#about" },
  { name: "About CEO",  href: "#about-ceo" },
  { name: "Services",   href: "#services" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact Us", href: "#contact-footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    if (href === "#contact-footer") {
      document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button onClick={() => handleNav("#hero")} className="text-3xl font-black text-red-600 tracking-tighter hover:scale-105 transition-transform duration-200 flex-shrink-0">
            Z<span className="text-white">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) =>
              link.name === "Contact Us" ? (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className="ml-4 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors duration-200"
                >
                  {link.name}
                </button>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5 rounded-sm transition-all duration-200"
                >
                  {link.name}
                </button>
              )
            )}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors p-1"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) =>
              link.name === "Contact Us" ? (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className="w-full mt-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors text-center"
                >
                  {link.name}
                </button>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-sm transition-all duration-200"
                >
                  {link.name}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
