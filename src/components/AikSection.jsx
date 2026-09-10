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
    <section id="aik" className="py-24 relative bg-[#040914] overflow-hidden">
      {/* Subtle Islamic Motif Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Al-Islam & Kemuhammadiyahan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {aikData.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
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
                className="glass-card p-8 rounded-3xl border border-emerald-500/20 relative group hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {cat.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {cat.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
