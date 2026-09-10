import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react';
import { statsData } from '../data/content';
import ScrollExpand from './ScrollExpand';

const marqueeCardsColumn1 = [
  {
    title: 'BEM Universitas SiberMu',
    category: 'ORMAWA',
    tag: 'Badan Eksekutif',
    desc: 'Penggerak inovasi & kolaborasi sains siber.',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    color: '#0091CF'
  },
  {
    title: 'Cyber Security & AI Club',
    category: 'UKM',
    tag: 'Riset & Teknologi',
    desc: 'Komunitas keamanan siber & etikal hacking.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    color: '#D4A017'
  },
  {
    title: 'Juara 1 Gemastik Siber 2025',
    category: 'PRESTASI',
    tag: 'Nasional',
    desc: 'Penghargaan Cyber Security Challenge.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    color: '#0091CF'
  },
  {
    title: 'Kajian Virtual Fiqh Siber',
    category: 'AIK',
    tag: 'Intelektual',
    desc: 'Diskusi etika AI & keislaman modern.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    color: '#D4A017'
  }
];

const marqueeCardsColumn2 = [
  {
    title: 'Baitul Arqam Mahasiswa',
    category: 'AIK',
    tag: 'Kemuhammadiyahan',
    desc: 'Penguatan karakter & kepemimpinan.',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
    color: '#D4A017'
  },
  {
    title: 'SiberMu Media & Esports',
    category: 'UKM',
    tag: 'Kreatif & E-sports',
    desc: 'Penyiaran konten & e-sports pro.',
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
    color: '#0091CF'
  },
  {
    title: 'IMM SiberMu',
    category: 'ORMAWA',
    tag: 'Otonom Muhammadiyah',
    desc: 'Intelektualitas & kaderisasi siber.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    color: '#0091CF'
  },
  {
    title: 'National AI Hackathon 2025',
    category: 'PRESTASI',
    tag: 'Juara 2',
    desc: 'Solusi AI mitigasi bencana.',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    color: '#D4A017'
  }
];

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Upper Hero Section with Left-Aligned Clean Studio Layout */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-white dark:bg-[#001a3a] transition-colors duration-300 min-h-[80vh] flex flex-col justify-center">
        
        {/* Background Sliding Cards Marquee */}
        <div
          className="absolute inset-0 lg:left-[24%] lg:right-0 z-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-20 select-none flex justify-center lg:justify-end gap-6 p-4"
          style={{ transform: 'rotate(-20deg) scale(1.4)' }}
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-6 animate-hero-marquee-up w-64 lg:w-72 shrink-0">
            {[...marqueeCardsColumn1, ...marqueeCardsColumn1].map((cmp, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/20 bg-white dark:bg-[#002C5F] shadow-xl w-64 lg:w-72 shrink-0"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={cmp.img} alt={cmp.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-3.5">
                  <h3 className="text-xs font-bold text-[#002C5F] dark:text-white line-clamp-1">{cmp.title}</h3>
                  <p className="mt-1 text-[11px] text-[#475569] dark:text-[#E6E6E6]/80 line-clamp-1">{cmp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 animate-hero-marquee-down w-64 lg:w-72 shrink-0 -mt-24">
            {[...marqueeCardsColumn2, ...marqueeCardsColumn2].map((cmp, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/20 bg-white dark:bg-[#002C5F] shadow-xl w-64 lg:w-72 shrink-0"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={cmp.img} alt={cmp.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-3.5">
                  <h3 className="text-xs font-bold text-[#002C5F] dark:text-white line-clamp-1">{cmp.title}</h3>
                  <p className="mt-1 text-[11px] text-[#475569] dark:text-[#E6E6E6]/80 line-clamp-1">{cmp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 animate-hero-marquee-up w-64 lg:w-72 shrink-0 -mt-12">
            {[...marqueeCardsColumn1, ...marqueeCardsColumn1].map((cmp, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] dark:border-white/20 bg-white dark:bg-[#002C5F] shadow-xl w-64 lg:w-72 shrink-0"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={cmp.img} alt={cmp.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-3.5">
                  <h3 className="text-xs font-bold text-[#002C5F] dark:text-white line-clamp-1">{cmp.title}</h3>
                  <p className="mt-1 text-[11px] text-[#475569] dark:text-[#E6E6E6]/80 line-clamp-1">{cmp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Soft Ambient Glow */}
        <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[500px] rounded-full bg-[#0091CF]/10 dark:bg-[#0091CF]/15 blur-[120px] z-1" />

        {/* Minimal Clean Typography Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl text-left space-y-5">
            
            {/* Small Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold tracking-widest text-[#0091CF] dark:text-[#D4A017] uppercase"
            >
              BIRO KEMAHASISWAAN &amp; AIK
            </motion.div>

            {/* Main Headline (Clean Solid High-Contrast Typography, No Artificial Gradients) */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-[#002C5F] dark:text-white"
            >
              Sinergi Siber.<br />
              <span className="text-[#D4A017]">Akhlak Utama.</span>
            </motion.h1>

            {/* Subtitle Paragraph (1 Clean Sentence) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-[#475569] dark:text-[#E6E6E6]/90 font-medium leading-relaxed max-w-lg"
            >
              Wadah inovasi mahasiswa dan penguatan nilai Al-Islam Kemuhammadiyahan Universitas Siber Muhammadiyah.
            </motion.p>

            {/* Solid High-Contrast CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#kemahasiswaan"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0091CF] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#007ab3] hover:scale-[1.02] transition-all"
              >
                <span>Jelajahi ORMAWA</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <a
                href="#aik"
                className="inline-flex items-center gap-2 rounded-xl border border-[#002C5F]/20 dark:border-white/20 bg-white/80 dark:bg-white/5 px-6 py-3.5 text-sm font-bold text-[#002C5F] dark:text-white hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#D4A017]" />
                <span>Program AIK</span>
              </a>
            </motion.div>

          </div>

          {/* Minimal Stats Grid Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mt-12"
          >
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-[#E6E6E6] dark:border-white/10 bg-white/90 dark:bg-[#002550]/90 shadow-sm transition-all"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#0091CF] dark:text-[#38bdf8] mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-[#475569] dark:text-[#E6E6E6]/80 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-width Sticky ScrollExpand Showcase */}
      <section className="relative w-full my-8">
        <ScrollExpand
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
          alt="Kampus SiberMu Digital Studio"
          title="Kampus Siber Berkemajuan"
          scrollHint="Gulir ke bawah untuk eksplorasi"
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
          <p className="text-sm sm:text-base text-[#F7F7F7] max-w-xl mx-auto">
            Ruang kreativitas siber yang mengintegrasikan kecerdasan buatan, sains modern, dan nilai-nilai Al-Islam Muhammadiyah.
          </p>
        </ScrollExpand>
      </section>
    </div>
  );
}
