"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, TrendingUp, CheckCircle2 } from "lucide-react";

export default function AboutCEO() {
  return (
    <section id="about-ceo" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-red-600/30 relative group shadow-[0_0_40px_rgba(220,38,38,0.15)]">
              <img 
                src="/images/ceo.jpg" 
                alt="Habib-ur-Rehman, CEO" 
                className="w-full h-full object-cover object-[center_15%] transition-all duration-700"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Extensive</p>
                    <p className="text-white font-bold">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-red-600 font-bold tracking-wider uppercase text-sm">About The CEO</h4>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                Habib-ur-Rehman
              </h2>
              <p className="text-xl text-gray-400 font-medium border-b border-white/10 pb-6 uppercase tracking-wider text-sm">
                Engineering Professional & Visionary Leader
              </p>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed text-sm lg:text-base">
              <p>
                Habib-ur-Rehman, CEO of Z. Construction, is a highly experienced and dynamic engineering professional with an extensive background in the construction and engineering industry. Throughout his career, he has worked with reputed organizations and gained valuable experience across diverse projects and technical fields.
              </p>
              
              <p>
                With strong leadership, technical expertise, and a commitment to excellence, he brings innovation, professionalism, and strategic vision to every project. His dedication to quality, client satisfaction, and continuous improvement has played a key role in establishing Z. Construction as a trusted name in the industry.
              </p>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="text-red-600 w-5 h-5" />
                  Qualifications & Approach
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  His practical knowledge, commitment to quality, and focus on innovative solutions have built the company’s reputation for reliability.
                </p>
                <ul className="space-y-3">
                  {[
                    "High-standard workmanship",
                    "Customer satisfaction",
                    "Timely project execution",
                    "Modern techniques & industry standards"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pt-4">
               <p className="text-sm font-medium text-gray-400 italic border-l-4 border-red-600 pl-4 py-1">
                 "Under his leadership, the company continues to grow with a mission of delivering reliable engineering solutions and building long-term relationships based on trust and excellence."
               </p>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
