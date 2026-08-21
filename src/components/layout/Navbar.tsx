"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About Us", href: "#about-us" },
    { name: "About CEO", href: "#about-ceo" },
    { name: "Services", href: "#services" },
    { name: "Some of our projects", href: "#some-of-our-projects" },
    { name: "Contact U", href: "#contact-u" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-3xl font-black text-red-600 tracking-tighter hover:scale-105 transition-transform duration-200">
              Z<span className="text-white">.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-red-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-red-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-red-600 hover:bg-white/5 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
