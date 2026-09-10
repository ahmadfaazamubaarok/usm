import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react';
import ScrollExpand from './ScrollExpand';
import SplitText from './SplitText';

const textMarqueeColumn1 = [
  {
    title: 'BEM Universitas SiberMu',
    category: 'ORMAWA',
    tag: 'Badan Eksekutif',
    desc: 'Organisasi tertinggi mahasiswa penggerak inovasi & kolaborasi sains siber.',
    borderColor: 'border-[#0091CF]/40',
    bgColor: 'bg-[#F0F9FF] dark:bg-[#071D2D]',
    badgeBg: 'bg-[#0091CF] text-white'
  },
  {
    title: 'Cyber Security & AI Club',
    category: 'UKM',
    tag: 'Riset & Teknologi',
    desc: 'Komunitas riset keamanan siber, kecerdasan buatan, dan etikal hacking.',
    borderColor: 'border-[#38B2AC]/40',
    bgColor: 'bg-[#E6FFFA] dark:bg-[#083835]',
    badgeBg: 'bg-[#38B2AC] text-white'
  },
  {
    title: 'Juara 1 Gemastik Kode & Siber 2025',
    category: 'PRESTASI',
    tag: 'Tingkat Nasional',
    desc: 'Tim SiberTekno meraih penghargaan utama kategori Cyber Security Challenge.',
    borderColor: 'border-[#8b5cf6]/40',
    bgColor: 'bg-[#F5F3FF] dark:bg-[#1E1535]',
    badgeBg: 'bg-[#8b5cf6] text-white'
  },
  {
    title: 'Portal Beasiswa SiberMu',
    category: 'LAYANAN',
    tag: 'Kesejahteraan',
    desc: 'Akses informasi & pendaftaran Beasiswa Sang Surya, KIP-K, dan Mitra Industri.',
    borderColor: 'border-[#10b981]/40',
    bgColor: 'bg-[#ECFDF5] dark:bg-[#062419]',
    badgeBg: 'bg-[#10b981] text-white'
  },
  {
    title: 'DPM SiberMu',
    category: 'ORMAWA',
    tag: 'Dewan Perwakilan',
    desc: 'Lembaga legislatif dan pengawasan aspirasi seluruh mahasiswa.',
    borderColor: 'border-[#0091CF]/40',
    bgColor: 'bg-[#F0F9FF] dark:bg-[#071D2D]',
    badgeBg: 'bg-[#0091CF] text-white'
  },
  {
    title: 'SiberMu Media & Esports',
    category: 'UKM',
    tag: 'Seni & E-sports',
    desc: 'Pengembangan penyiaran konten kreatif dan atlet e-sports profesional.',
    borderColor: 'border-[#38B2AC]/40',
    bgColor: 'bg-[#E6FFFA] dark:bg-[#083835]',
    badgeBg: 'bg-[#38B2AC] text-white'
  }
];

const textMarqueeColumn2 = [
  {
    title: 'IMM SiberMu',
    category: 'ORMAWA',
    tag: 'Otonom Muhammadiyah',
    desc: 'Organisasi otonom kader persyarikatan dalam bingkai ketaqwaan & intelektualitas.',
    borderColor: 'border-[#0091CF]/40',
    bgColor: 'bg-[#F0F9FF] dark:bg-[#071D2D]',
    badgeBg: 'bg-[#0091CF] text-white'
  },
  {
    title: 'SiberMu Innovation Hub',
    category: 'UKM',
    tag: 'Kewirausahaan',
    desc: 'Inkubator startup digital mahasiswa berbasis teknologi berkemajuan.',
    borderColor: 'border-[#38B2AC]/40',
    bgColor: 'bg-[#E6FFFA] dark:bg-[#083835]',
    badgeBg: 'bg-[#38B2AC] text-white'
  },
  {
    title: 'Juara 2 National AI Hackathon 2025',
    category: 'PRESTASI',
    tag: 'Tingkat Nasional',
    desc: 'Inovasi solusi AI untuk mitigasi bencana banjir berbasis IoT.',
    borderColor: 'border-[#8b5cf6]/40',
    bgColor: 'bg-[#F5F3FF] dark:bg-[#1E1535]',
    badgeBg: 'bg-[#8b5cf6] text-white'
  },
  {
    title: 'e-Counseling & Mental Health',
    category: 'LAYANAN',
    tag: 'Konseling Privat',
    desc: 'Layanan konsultasi psikologi online bersama konselor profesional secara privat.',
    borderColor: 'border-[#10b981]/40',
    bgColor: 'bg-[#ECFDF5] dark:bg-[#062419]',
    badgeBg: 'bg-[#10b981] text-white'
  },
  {
    title: 'Best Presenter InMuTech International',
    category: 'PRESTASI',
    tag: 'Internasional',
    desc: 'Presentasi riset edutech inklusif bagi penyandang disabilitas.',
    borderColor: 'border-[#8b5cf6]/40',
    bgColor: 'bg-[#F5F3FF] dark:bg-[#1E1535]',
    badgeBg: 'bg-[#8b5cf6] text-white'
  },
  {
    title: 'Career & Talent Development',
    category: 'LAYANAN',
    tag: 'Karier & Magang',
    desc: 'Pusat magang siber, sertifikasi kompetensi, dan penyaluran kerja lulusan.',
    borderColor: 'border-[#10b981]/40',
    bgColor: 'bg-[#ECFDF5] dark:bg-[#062419]',
    badgeBg: 'bg-[#10b981] text-white'
  }
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Lightweight mobile-optimized opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  // ALL text components slide LEFT (-X), ALL card components slide RIGHT (+X)
  const tagX = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const headlineX = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const subtitleX = useTransform(scrollYProgress, [0, 1], [0, -340]);
  const ctaX = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div ref={containerRef} className="relative bg-white dark:bg-[#00132b] transition-colors duration-300">
      {/* Sticky Pinned Hero Section (Stays in Y position while X-sliding runs) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center z-0">
        <motion.div
          style={{ opacity }}
          className="w-full relative z-10 origin-center"
        >
          {/* Background Sliding Text Cards Marquee (Taller Container + Gradient Filter fading out to the right) */}
          <motion.div
            className="absolute -top-96 -bottom-60 lg:left-[15%] lg:right-0 z-0 overflow-hidden pointer-events-none select-none flex justify-center lg:justify-end gap-8 p-4 origin-top-right"
            style={{
              x: marqueeX,
              y: -280,
              rotate: -15,
              scale: 1.48,
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.45) 85%, rgba(0,0,0,0.9) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.45) 85%, rgba(0,0,0,0.9) 100%)'
            }}
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-6 animate-hero-marquee-up w-64 lg:w-72 shrink-0">
              {[...textMarqueeColumn1, ...textMarqueeColumn1].map((cmp, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-3xl border-2 ${cmp.borderColor} ${cmp.bgColor} shadow-xl w-64 lg:w-72 shrink-0 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${cmp.badgeBg}`}>
                        {cmp.category}
                      </span>
                      <span className="text-[10px] font-bold text-[#475569] dark:text-[#E6E6E6]/70">
                        {cmp.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-[#002C5F] dark:text-white leading-snug mb-1.5 line-clamp-2">
                      {cmp.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#475569] dark:text-[#E6E6E6]/80 leading-relaxed line-clamp-2">
                      {cmp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 animate-hero-marquee-down w-64 lg:w-72 shrink-0 -mt-24">
              {[...textMarqueeColumn2, ...textMarqueeColumn2].map((cmp, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-3xl border-2 ${cmp.borderColor} ${cmp.bgColor} shadow-xl w-64 lg:w-72 shrink-0 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${cmp.badgeBg}`}>
                        {cmp.category}
                      </span>
                      <span className="text-[10px] font-bold text-[#475569] dark:text-[#E6E6E6]/70">
                        {cmp.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-[#002C5F] dark:text-white leading-snug mb-1.5 line-clamp-2">
                      {cmp.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#475569] dark:text-[#E6E6E6]/80 leading-relaxed line-clamp-2">
                      {cmp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 animate-hero-marquee-up w-64 lg:w-72 shrink-0 -mt-12">
              {[...textMarqueeColumn1, ...textMarqueeColumn1].map((cmp, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-3xl border-2 ${cmp.borderColor} ${cmp.bgColor} shadow-xl w-64 lg:w-72 shrink-0 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${cmp.badgeBg}`}>
                        {cmp.category}
                      </span>
                      <span className="text-[10px] font-bold text-[#475569] dark:text-[#E6E6E6]/70">
                        {cmp.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-[#002C5F] dark:text-white leading-snug mb-1.5 line-clamp-2">
                      {cmp.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#475569] dark:text-[#E6E6E6]/80 leading-relaxed line-clamp-2">
                      {cmp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Minimal Soft Ambient Glow */}
          <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[500px] rounded-full bg-[#0091CF]/10 dark:bg-[#0091CF]/15 blur-[120px] z-1" />

          {/* Minimal Clean Typography Content - ALL Text Slides LEFT (-X) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-xl text-left space-y-5">

              {/* Small Category Tag - Slides LEFT (-X) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ x: tagX }}
                transition={{ duration: 0.4 }}
                className="text-xs font-bold tracking-widest text-[#0091CF] dark:text-[#38B2AC] uppercase inline-block"
              >
                PORTAL RESMI BIRO KEMAHASISWAAN &amp; AIK
              </motion.div>

              {/* Main Headline - Slides LEFT (-X) */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ x: headlineX }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-[#002C5F] dark:text-white origin-left"
              >
                Sinergi<br />
                <span className="text-[#38B2AC]">Berkemajuan.</span>
              </motion.h1>

              {/* Subtitle Paragraph - Slides LEFT (-X) */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ x: subtitleX }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-base sm:text-lg text-[#475569] dark:text-[#E6E6E6]/90 font-medium leading-relaxed max-w-lg origin-left"
              >
                Wadah inovasi mahasiswa dan penguatan nilai Al-Islam Kemuhammadiyahan Universitas Siber Muhammadiyah.
              </motion.p>

              {/* Solid High-Contrast CTA Buttons - Slides LEFT (-X) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ x: ctaX }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center gap-3.5 origin-left"
              >
                <a
                  href="#kemahasiswaan"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0091CF] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#007ab3] hover:scale-[1.02] transition-all"
                >
                  <span>Jelajahi Kemahasiswaan</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
                <a
                  href="#aik"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#002C5F]/20 dark:border-white/20 bg-white/80 dark:bg-white/5 px-6 py-3.5 text-sm font-bold text-[#002C5F] dark:text-white hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm"
                >
                  <Compass className="w-4 h-4 text-[#38B2AC]" />
                  <span>Program AIK</span>
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-width Sticky ScrollExpand Showcase - Floating transparently over pinned Hero */}
      <section className="relative z-10 w-full bg-transparent">
        <ScrollExpand
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
          alt="Kampus SiberMu Digital Studio"
          scrollHint="Gulir ke bawah untuk eksplorasi"
          useWindowScroll
          scrollDistance={1.0}
          holdDistance={0.5}
          startWidth={50}
          startHeight={60}
          startRadius={32}
        >
          <SplitText
            tag="h3"
            text="Inovasi Tanpa Batas, Akhlak Utama"
            className="text-2xl sm:text-4xl font-bold text-white mb-2 text-center"
            delay={40}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
          />
          <SplitText
            tag="p"
            text="Ruang kreativitas siber yang mengintegrasikan kecerdasan buatan, sains modern, dan nilai-nilai Al-Islam Muhammadiyah."
            className="text-sm sm:text-base text-[#F7F7F7] max-w-xl mx-auto block text-center font-medium"
            delay={20}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
          />
        </ScrollExpand>
      </section>
    </div>
  );
}
