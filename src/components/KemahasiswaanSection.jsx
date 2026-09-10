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

        {/* Sticky Stacked Header Container (Pins to top while cards scroll) - Backdrop Blur Glassmorphism */}
        <div className="sticky top-4 sm:top-6 z-30 mb-16 py-4 px-6 rounded-3xl bg-white/80 dark:bg-[#001e42]/80 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 flex justify-center items-center overflow-hidden transition-all duration-300">
          <motion.div
            style={{ scale: titleScale, y: titleY }}
            className="w-full flex justify-center items-center origin-center"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#002C5F] dark:text-white tracking-tight whitespace-nowrap text-center">
              KEMAHASISWAAN
            </h2>
          </motion.div>
        </div>

        {/* Content Cards Showcase - Glassmorphism Backdrop Blur (No Shadow) */}
        <div className="space-y-16 pb-16">
          {allCategories.map((category, catIdx) => {
            const CategoryIcon = iconMap[category.icon] || Users;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
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

                {/* Cards Grid with Backdrop Blur Glassmorphism & No Shadows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIdx) => {
                    const ItemIcon = iconMap[item.icon] || ShieldCheck;

                    return (
                      <motion.div
                        key={itemIdx}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/70 dark:bg-[#002550]/50 backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-[#0091CF]/60 dark:hover:border-[#38B2AC]/60 transition-all duration-300 overflow-hidden"
                      >
                        {/* Background subtle gradient glow on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                        <div className="relative z-10 space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#0091CF] dark:text-[#38B2AC] bg-[#0091CF]/10 dark:bg-[#38B2AC]/15 backdrop-blur-sm">
                              {item.type}
                            </span>
                            <div className="p-2 rounded-xl bg-slate-100/80 dark:bg-white/10 backdrop-blur-sm text-[#002C5F] dark:text-white group-hover:bg-[#0091CF] group-hover:text-white transition-colors duration-300">
                              <ItemIcon className="w-5 h-5" />
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-[#002C5F] dark:text-white group-hover:text-[#0091CF] dark:group-hover:text-[#38B2AC] transition-colors">
                              {item.name}
                            </h4>
                            <p className="mt-2 text-xs sm:text-sm text-[#475569] dark:text-[#E6E6E6]/80 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <div className="relative z-10 pt-4 mt-4 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#0091CF] dark:text-[#38B2AC] group-hover:translate-x-1 transition-transform">
                          <span>Lihat Detail</span>
                          <ArrowUpRight className="w-4 h-4" />
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
