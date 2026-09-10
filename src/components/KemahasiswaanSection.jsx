import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight
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
  const [activeTab, setActiveTab] = useState(kemahasiswaanData.categories[0].id);

  const activeCategory =
    kemahasiswaanData.categories.find((c) => c.id === activeTab) ||
    kemahasiswaanData.categories[0];

  return (
    <section id="kemahasiswaan" className="py-24 relative bg-[#F7F7F7] dark:bg-[#001e42] border-t border-b border-[#E6E6E6] dark:border-[#0091CF]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simplified Header with React Bits ScrollFloat */}
        <div className="text-center w-full max-w-6xl mx-auto mb-16 flex justify-center overflow-hidden">
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
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {kemahasiswaanData.categories.map((cat) => {
            const IconComp = iconMap[cat.icon] || Users;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-[#0091CF] to-[#002C5F] text-white shadow-lg shadow-[#0091CF]/25 scale-105'
                    : 'bg-white dark:bg-[#002550] text-[#002C5F] dark:text-[#E6E6E6] border border-[#E6E6E6] dark:border-white/10 hover:border-[#0091CF] shadow-sm'
                  }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0091CF]'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Description */}
        <div className="text-center max-w-2xl mx-auto mb-10 text-[#334155] dark:text-[#F7F7F7] text-sm sm:text-base font-semibold">
          {activeCategory.description}
        </div>

        {/* Card Grid Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {activeCategory.items.map((item, idx) => {
              const ItemIcon = iconMap[item.icon] || ShieldCheck;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#002550] p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-[#E6E6E6] dark:border-white/15 shadow-sm hover:shadow-xl hover:border-[#0091CF]/40"
                >
                  {/* Subtle Card Background Accent Glow */}
                  <div
                    className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.color} rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none opacity-40`}
                  />

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F7F7] dark:bg-[#002C5F] border border-[#0091CF]/30 flex items-center justify-center mb-6 text-[#0091CF] group-hover:scale-110 group-hover:bg-[#002C5F] group-hover:text-white transition-all">
                      <ItemIcon className="w-6 h-6" />
                    </div>

                    <div className="text-xs font-bold text-[#0091CF] uppercase tracking-wider mb-2">
                      {item.type}
                    </div>

                    <h3 className="text-xl font-extrabold text-[#002C5F] dark:text-white mb-3 group-hover:text-[#0091CF] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-[#475569] dark:text-[#E6E6E6]/80 text-sm leading-relaxed mb-6 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E6E6] dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#002C5F] dark:text-[#E6E6E6] group-hover:text-[#0091CF] transition-colors">
                    <span>Lihat Informasi Detail</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
