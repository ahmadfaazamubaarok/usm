import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, Compass, Radio, Sparkles, CheckCircle2 } from 'lucide-react';
import { aikData } from '../data/content';

const iconMap = {
  BookOpenCheck,
  Compass,
  Radio,
  Sparkles
};

export default function AikSection() {
  return (
    <section id="aik" className="py-24 relative bg-white dark:bg-[#001a3a] overflow-hidden border-t border-b border-[#E6E6E6] dark:border-white/10 transition-colors duration-300">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0091CF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F7] dark:bg-[#002C5F] border border-[#D4A017]/40 text-xs font-bold text-[#D4A017] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>Al-Islam & Kemuhammadiyahan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002C5F] dark:text-white tracking-tight mb-4">
            {aikData.title}
          </h2>
          <p className="text-[#475569] dark:text-[#E6E6E6]/90 text-base sm:text-lg font-medium">
            {aikData.subtitle}
          </p>
        </div>

        {/* AIK Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aikData.categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Sparkles;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F7F7F7] dark:bg-[#002550] p-8 rounded-3xl border border-[#E6E6E6] dark:border-[#D4A017]/30 relative group transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:border-[#D4A017]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#002C5F] border border-[#D4A017]/40 flex items-center justify-center text-[#D4A017] group-hover:scale-110 transition-all shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white dark:bg-[#D4A017]/20 text-[#D4A017] border border-[#D4A017]/40 shadow-sm">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#002C5F] dark:text-white mb-3 group-hover:text-[#D4A017] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-[#475569] dark:text-[#F7F7F7] text-sm leading-relaxed mb-6 font-medium">
                    {cat.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-4 border-t border-[#E6E6E6] dark:border-white/10">
                    {cat.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-xs sm:text-sm text-[#002C5F] dark:text-[#E6E6E6] font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
