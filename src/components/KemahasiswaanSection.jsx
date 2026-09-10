import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Users,
  Cpu,
  Trophy,
  HeartHandshake,
  ShieldCheck,
  FileText,
  BookOpen,
  Terminal,
  Gamepad2,
  Rocket,
  Award,
  Medal,
  Globe,
  GraduationCap,
  HeartPulse,
  Briefcase,
  ArrowUpRight
} from 'lucide-react';
import { kemahasiswaanData } from '../data/content';

const iconMap = {
  Users,
  Cpu,
  Trophy,
  HeartHandshake,
  ShieldCheck,
  FileText,
  BookOpen,
  Terminal,
  Gamepad2,
  Rocket,
  Award,
  Medal,
  Globe,
  GraduationCap,
  HeartPulse,
  Briefcase
};

export default function KemahasiswaanSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  // Scale down from wide entrance at bottom of viewport to stacked title at top
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1.25, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [30, 0]);

  const allCategories = kemahasiswaanData.categories;

  return (
    <section
      ref={containerRef}
      id="kemahasiswaan"
      className="relative bg-[#F7F7F7] dark:bg-[#001e42] border-t border-b border-[#E6E6E6] dark:border-[#0091CF]/20 transition-colors duration-300 min-h-screen pt-44 sm:pt-64 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Sticky Stacked Header Container - Positioned below mobile Navbar (top-20 / top-24) */}
        <div className="sticky top-20 sm:top-24 z-30 mb-16 py-4 px-6 rounded-3xl bg-white/85 dark:bg-[#001e42]/85 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 flex justify-center items-center overflow-hidden transition-all duration-300 shadow-sm">
          <motion.div
            style={{ scale: titleScale, y: titleY }}
            className="w-full flex justify-center items-center origin-center"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#002C5F] dark:text-white tracking-tight whitespace-nowrap text-center">
              KEMAHASISWAAN
            </h2>
          </motion.div>
        </div>

        {/* Content Cards Showcase - Lightweight Hardware-Accelerated Performance */}
        <div className="space-y-16 pb-16">
          {allCategories.map((category, catIdx) => {
            const CategoryIcon = iconMap[category.icon] || Users;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="space-y-6"
              >
                {/* Sub-Header for Category */}
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className="p-2.5 rounded-xl bg-[#0091CF]/10 dark:bg-[#0091CF]/20 text-[#0091CF] dark:text-[#38B2AC] backdrop-blur-sm">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#002C5F] dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] dark:text-[#E6E6E6]/70 font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIdx) => {
                    const ItemIcon = iconMap[item.icon] || ShieldCheck;

                    return (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.4, delay: (itemIdx % 3) * 0.08 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/60 dark:bg-[#002550]/40 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-[#0091CF] dark:hover:border-[#38B2AC] min-h-[340px] h-full transition-all duration-300 overflow-hidden"
                      >
                        {/* Glowing Spotlight Ambient Beam on Hover */}
                        <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#0091CF]/40 via-[#38B2AC]/40 to-[#002C5F]/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

                        {/* Inner Card Glassmorphism Surface */}
                        <div className="absolute inset-[1px] rounded-[23px] bg-white/85 dark:bg-[#001e42]/90 backdrop-blur-2xl transition-colors duration-300 pointer-events-none" />

                        {/* Top Header: Rotating Icon Badge + Pill Tag */}
                        <div className="relative z-10 flex items-start justify-between">
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#0091CF]/15 to-[#38B2AC]/20 dark:from-[#0091CF]/30 dark:to-[#38B2AC]/30 text-[#0091CF] dark:text-[#38B2AC] border border-[#0091CF]/20 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#0091CF] group-hover:text-white transition-all duration-500 shadow-sm">
                            <ItemIcon className="w-6 h-6" />
                          </div>
                          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide text-[#0091CF] dark:text-[#38B2AC] bg-[#0091CF]/10 dark:bg-[#38B2AC]/15 border border-[#0091CF]/20 backdrop-blur-md">
                            {item.type}
                          </span>
                        </div>

                        {/* Middle Content: Title & Rich Description */}
                        <div className="relative z-10 my-6 space-y-3">
                          <h4 className="text-xl font-extrabold text-[#002C5F] dark:text-white group-hover:text-[#0091CF] dark:group-hover:text-[#38B2AC] transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-sm text-[#475569] dark:text-[#E6E6E6]/85 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>

                        {/* Bottom Footer: Interactive Action Circle */}
                        <div className="relative z-10 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[#002C5F] dark:text-white group-hover:text-[#0091CF] dark:group-hover:text-[#38B2AC] transition-colors">
                            Eksplorasi Program
                          </span>
                          <div className="w-9 h-9 rounded-full bg-[#0091CF]/10 dark:bg-white/10 flex items-center justify-center text-[#0091CF] dark:text-[#38B2AC] group-hover:bg-[#0091CF] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                            <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
