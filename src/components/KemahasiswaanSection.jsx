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

// Map string icon names to Lucide Icon components safely
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
    <section id="kemahasiswaan" className="py-24 relative bg-[#070e1c] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <span>Biro Kemahasiswaan SiberMu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {kemahasiswaanData.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {kemahasiswaanData.subtitle}
          </p>
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
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                    : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Description */}
        <div className="text-center max-w-2xl mx-auto mb-10 text-slate-300 text-sm sm:text-base font-medium">
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
                  className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-white/10"
                >
                  {/* Subtle Card Background Glow */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color} rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`}
                  />

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:border-emerald-500/40 transition-transform">
                      <ItemIcon className="w-6 h-6" />
                    </div>

                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                      {item.type}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
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
