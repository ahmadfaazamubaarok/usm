import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { siteConfig, statsData } from '../data/content';
import ScrollExpand from './ScrollExpand';

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Upper Hero Banner - No overflow-hidden on outer container so sticky works */}
      <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/15 to-transparent rounded-full blur-3xl pointer-events-none overflow-hidden" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-500/10"
            >
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>{siteConfig.heroBadge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Sinergi Kemahasiswaan &{' '}
              <span className="text-gradient-emerald">AIK Berkemajuan</span>
            </motion.h1>

            {/* Tagline & Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
            >
              {siteConfig.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a
                href="#kemahasiswaan"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{siteConfig.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#aik"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900/90 text-slate-200 border border-white/15 hover:border-emerald-500/40 hover:text-white transition-all backdrop-blur-md hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>{siteConfig.ctaSecondary}</span>
              </a>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14"
          >
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-white/10"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-width Sticky ScrollExpand Showcase - Outside overflow-hidden so sticky works */}
      <section className="relative w-full my-8">
        <ScrollExpand
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
          alt="Kampus SiberMu Digital Studio"
          title="Kampus Siber Berkemajuan"
          scrollHint="Gulir ke bawah untuk melihat ekspansi"
          useWindowScroll
          scrollDistance={1.0}
          holdDistance={0.5}
          startWidth={50}
          startHeight={60}
          startRadius={32}
        >
          <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">
            Inovasi Tanpa Batas, Akhlak Utama
          </h3>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
            Ruang kreativitas siber yang mengintegrasikan kecerdasan buatan, sains modern, dan nilai-nilai Al-Islam Muhammadiyah.
          </p>
        </ScrollExpand>
      </section>
    </div>
  );
}
