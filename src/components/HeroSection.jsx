import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { siteConfig, statsData } from '../data/content';
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
      {/* Upper Hero Section with White Base Theme */}
      <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7F7F7] to-[#FFFFFF]">
        
        {/* Animated Background Sliding Cards Marquee (DonasiTrust Style in Light Mode) */}
        <div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-25 select-none flex justify-center lg:justify-end gap-6 p-4"
          style={{ transform: 'rotate(-20deg) scale(1.35)' }}
        >
          {/* Column 1: Scrolls Up */}
          <div className="flex flex-col gap-6 animate-hero-marquee-up w-64 shrink-0">
            {[...marqueeCardsColumn1, ...marqueeCardsColumn1].map((cmp, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-lg w-64 shrink-0"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={cmp.img} alt={cmp.title} className="h-full w-full object-cover" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                    <span className="rounded bg-[#0091CF] px-2 py-0.5 text-[9px] font-extrabold text-white uppercase shadow-sm">
                      {cmp.category}
                    </span>
                    <span className="rounded bg-[#002C5F] px-2 py-0.5 text-[9px] font-bold text-[#D4A017] uppercase">
                      {cmp.tag}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold text-[#002C5F] line-clamp-1">{cmp.title}</h3>
                  <p className="mt-1 text-[11px] text-[#475569] line-clamp-1">{cmp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Scrolls Down */}
          <div className="flex flex-col gap-6 animate-hero-marquee-down w-64 shrink-0 -mt-24">
            {[...marqueeCardsColumn2, ...marqueeCardsColumn2].map((cmp, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-lg w-64 shrink-0"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={cmp.img} alt={cmp.title} className="h-full w-full object-cover" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                    <span className="rounded bg-[#D4A017] px-2 py-0.5 text-[9px] font-extrabold text-white uppercase shadow-sm">
                      {cmp.category}
                    </span>
                    <span className="rounded bg-[#002C5F] px-2 py-0.5 text-[9px] font-bold text-[#0091CF] uppercase">
                      {cmp.tag}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold text-[#002C5F] line-clamp-1">{cmp.title}</h3>
                  <p className="mt-1 text-[11px] text-[#475569] line-clamp-1">{cmp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Scrolls Up */}
          <div className="flex flex-col gap-6 animate-hero-marquee-up w-64 shrink-0 -mt-12">
            {[...marqueeCardsColumn1, ...marqueeCardsColumn1].map((cmp, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-lg w-64 shrink-0"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={cmp.img} alt={cmp.title} className="h-full w-full object-cover" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                    <span className="rounded bg-[#0091CF] px-2 py-0.5 text-[9px] font-extrabold text-white uppercase shadow-sm">
                      {cmp.category}
                    </span>
                    <span className="rounded bg-[#002C5F] px-2 py-0.5 text-[9px] font-bold text-white uppercase">
                      {cmp.tag}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold text-[#002C5F] line-clamp-1">{cmp.title}</h3>
                  <p className="mt-1 text-[11px] text-[#475569] line-clamp-1">{cmp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ambient Radial Backlight Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gradient-to-tr from-[#0091CF]/15 via-[#D4A017]/10 to-transparent blur-[140px] z-1" />

        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F7F7] border border-[#0091CF]/40 text-xs font-bold text-[#002C5F] shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#D4A017] animate-pulse" />
              <span>{siteConfig.heroBadge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#002C5F] leading-[1.15]"
            >
              Sinergi Kemahasiswaan &{' '}
              <span className="text-gradient-gold">AIK Berkemajuan</span>
            </motion.h1>

            {/* Tagline & Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed"
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#0091CF] text-white hover:bg-[#007ab3] transition-all shadow-lg shadow-[#0091CF]/25 hover:shadow-[#0091CF]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{siteConfig.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#aik"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-white text-[#002C5F] border border-[#002C5F]/30 hover:border-[#D4A017] hover:bg-[#F7F7F7] transition-all shadow-sm hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4 text-[#D4A017]" />
                <span>{siteConfig.ctaSecondary}</span>
              </a>
            </motion.div>

            {/* Trust Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-[#002C5F]"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#0091CF]/15 text-[#0091CF] font-black text-xs">
                  ✓
                </span>
                <span>Pembelajaran 100% Siber</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#D4A017]/20 text-[#D4A017] font-black text-xs">
                  ✓
                </span>
                <span>Terverifikasi AIK</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#0091CF]/15 text-[#0091CF] font-black text-xs">
                  ✓
                </span>
                <span>Pembinaan Berkelanjutan</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14"
          >
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-[#E6E6E6] bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0091CF] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#475569] font-semibold">{stat.label}</div>
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
