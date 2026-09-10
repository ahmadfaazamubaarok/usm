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
  Briefcase
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

const categoryThemes = {
  ormawa: {
    borderColor: 'border-[#0091CF]',
    bgColor: 'bg-[#F0F9FF] dark:bg-[#071D2D]',
    textColor: 'text-[#075985] dark:text-[#BAE6FD]',
    badgeBg: 'bg-[#0091CF] text-white',
    iconColor: 'text-[#0091CF]'
  },
  ukm: {
    borderColor: 'border-[#38B2AC]',
    bgColor: 'bg-[#E6FFFA] dark:bg-[#083835]',
    textColor: 'text-[#234E52] dark:text-[#B2F5EA]',
    badgeBg: 'bg-[#38B2AC] text-white',
    iconColor: 'text-[#38B2AC]'
  },
  prestasi: {
    borderColor: 'border-[#8b5cf6]',
    bgColor: 'bg-[#F5F3FF] dark:bg-[#1E1535]',
    textColor: 'text-[#5B21B6] dark:text-[#DDD6FE]',
    badgeBg: 'bg-[#8b5cf6] text-white',
    iconColor: 'text-[#8b5cf6]'
  },
  layanan: {
    borderColor: 'border-[#10b981]',
    bgColor: 'bg-[#ECFDF5] dark:bg-[#062419]',
    textColor: 'text-[#065F46] dark:text-[#A7F3D0]',
    badgeBg: 'bg-[#10b981] text-white',
    iconColor: 'text-[#10b981]'
  }
};

const rotations = [-4, 5, -3, 6, -5, 4];
const offsetsY = [0, 16, -10, 12, -8, 14];

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

        {/* Content Cards Showcase - Styled with Awards Certificate 3D Floating Grid */}
        <div className="space-y-16 pb-16">
          {allCategories.map((category, catIdx) => {
            const CategoryIcon = iconMap[category.icon] || Users;
            const theme = categoryThemes[category.id] || categoryThemes.ormawa;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="space-y-8"
              >
                {/* Sub-Header for Category */}
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className={`p-2.5 rounded-xl bg-white dark:bg-[#002C5F] border border-black/10 dark:border-white/20 shadow-sm ${theme.iconColor}`}>
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

                {/* 3D Tilted Certificate Floating Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {category.items.map((item, itemIdx) => {
                    const ItemIcon = iconMap[item.icon] || ShieldCheck;
                    const rot = rotations[(catIdx + itemIdx) % rotations.length];
                    const offY = offsetsY[(catIdx + itemIdx) % offsetsY.length];

                    return (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, y: 30, rotate: rot }}
                        whileInView={{ opacity: 1, y: offY, rotate: rot }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: itemIdx * 0.08 }}
                        className={`p-6 sm:p-7 rounded-3xl border-2 ${theme.borderColor} ${theme.bgColor} shadow-xl relative group transition-all duration-300 flex flex-col justify-between min-h-[260px]`}
                      >
                          {/* Top Card Badge & Year */}
                          <div className="flex items-center justify-between mb-5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${theme.badgeBg}`}>
                              {item.type}
                            </span>
                            <span className="text-xs font-bold text-[#475569] dark:text-[#E6E6E6]/70">
                              2025
                            </span>
                          </div>

                          {/* Icon Container */}
                          <div className="w-11 h-11 rounded-2xl bg-white dark:bg-[#002C5F] border border-black/10 dark:border-white/20 flex items-center justify-center mb-4 shadow-sm group-hover:rotate-12 transition-transform">
                            <ItemIcon className={`w-5.5 h-5.5 ${theme.iconColor}`} />
                          </div>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-black text-[#002C5F] dark:text-white leading-snug mb-2 group-hover:text-[#0091CF] transition-colors">
                            {item.name}
                          </h3>

                          {/* Description */}
                          <p className={`text-xs sm:text-sm font-semibold ${theme.textColor} leading-relaxed`}>
                            {item.desc}
                          </p>
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
