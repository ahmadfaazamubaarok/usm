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
import ScrollFloat from './ScrollFloat';

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

  // Scale down from full-width feel at bottom of viewport to stacked title at top
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1.35, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  const allCategories = kemahasiswaanData.categories;

  return (
    <section
      ref={containerRef}
      id="kemahasiswaan"
      className="relative bg-[#F7F7F7] dark:bg-[#001e42] border-t border-b border-[#E6E6E6] dark:border-[#0091CF]/20 transition-colors duration-300 min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Sticky Stacked Header Container (Pins to top while cards scroll) */}
        <div className="sticky top-4 sm:top-6 z-30 mb-16 py-4 px-6 rounded-3xl bg-[#F7F7F7]/90 dark:bg-[#001e42]/90 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 shadow-lg shadow-black/5 flex justify-center items-center overflow-hidden transition-all duration-300">
          <motion.div
            style={{ scale: titleScale, y: titleY }}
            className="w-full flex justify-center items-center origin-center"
          >
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom-=10%"
              scrollEnd="center center"
              stagger={0.03}
              containerClassName="text-[#002C5F] dark:text-white max-w-full"
              textClassName="font-black tracking-tight whitespace-nowrap"
            >
              KEMAHASISWAAN
            </ScrollFloat>
          </motion.div>
        </div>

        {/* Content Cards Showcase - Directly displayed without tabs for maximum content density */}
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
                  <div className="p-2.5 rounded-xl bg-[#0091CF]/10 dark:bg-[#0091CF]/20 text-[#0091CF] dark:text-[#38B2AC]">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIdx) => {
                    const ItemIcon = iconMap[item.icon] || ShieldCheck;

                    return (
                      <motion.div
                        key={itemIdx}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#002550] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#0091CF]/50 dark:hover:border-[#38B2AC]/50 transition-all duration-300 overflow-hidden"
                      >
                        {/* Background subtle gradient glow on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                        <div className="relative z-10 space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#0091CF] dark:text-[#38B2AC] bg-[#0091CF]/10 dark:bg-[#38B2AC]/15">
                              {item.type}
                            </span>
                            <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-[#002C5F] dark:text-white group-hover:bg-[#0091CF] group-hover:text-white transition-colors duration-300">
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

                        <div className="relative z-10 pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#0091CF] dark:text-[#38B2AC] group-hover:translate-x-1 transition-transform">
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
