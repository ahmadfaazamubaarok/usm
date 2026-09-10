import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, ArrowUpRight, Medal } from 'lucide-react';

const awardsList = [
  {
    id: 1,
    title: 'Juara 1 Gemastik Kode & Siber',
    category: 'Cyber Security Challenge 2025',
    organizer: 'Kementerian Pendidikan & Kebudayaan',
    year: '2025',
    color: 'from-[#38B2AC] via-[#319795] to-[#2C7A7B]',
    bgColor: 'bg-[#E6FFFA] dark:bg-[#083835]',
    borderColor: 'border-[#38B2AC]',
    textColor: 'text-[#234E52] dark:text-[#B2F5EA]',
    badgeBg: 'bg-[#38B2AC] text-white',
    rotation: -6,
    offsetY: 0,
    tag: 'Nasional'
  },
  {
    id: 2,
    title: 'Juara 2 National AI Hackathon',
    category: 'Solusi AI Mitigasi Bencana',
    organizer: 'Asosiasi Teknologi Informasi Indonesia',
    year: '2025',
    color: 'from-[#0091CF] via-[#0284c7] to-[#0369a1]',
    bgColor: 'bg-[#F0F9FF] dark:bg-[#071D2D]',
    borderColor: 'border-[#0091CF]',
    textColor: 'text-[#075985] dark:text-[#BAE6FD]',
    badgeBg: 'bg-[#0091CF] text-white',
    rotation: 5,
    offsetY: 20,
    tag: 'Nasional'
  },
  {
    id: 3,
    title: 'Best Presenter InMuTech',
    category: 'Inovasi Edutech Inklusif Disabilitas',
    organizer: 'International Muhammadiyah Tech Forum',
    year: '2024',
    color: 'from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]',
    bgColor: 'bg-[#F5F3FF] dark:bg-[#1E1535]',
    borderColor: 'border-[#8b5cf6]',
    textColor: 'text-[#5B21B6] dark:text-[#DDD6FE]',
    badgeBg: 'bg-[#8b5cf6] text-white',
    rotation: -4,
    offsetY: -15,
    tag: 'Internasional'
  },
  {
    id: 4,
    title: 'Gold Medal Cyber Defense',
    category: 'Olimpiade Siber & AI Muhammadiyah',
    organizer: 'Majelis Diktilitbang Muhammadiyah',
    year: '2025',
    color: 'from-[#10b981] via-[#059669] to-[#047857]',
    bgColor: 'bg-[#ECFDF5] dark:bg-[#062419]',
    borderColor: 'border-[#10b981]',
    textColor: 'text-[#065F46] dark:text-[#A7F3D0]',
    badgeBg: 'bg-[#10b981] text-white',
    rotation: 6,
    offsetY: 10,
    tag: 'Nasional'
  }
];

export default function AwardsSection() {
  return (
    <section id="prestasi" className="py-24 relative overflow-hidden bg-white dark:bg-[#00132b] border-t border-b border-[#E6E6E6] dark:border-[#0091CF]/20 transition-colors duration-300">
      
      {/* Buzzworthy Style Giant Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <span className="text-[14vw] font-black uppercase tracking-tighter text-slate-100 dark:text-white/[0.03] whitespace-nowrap leading-none transition-colors duration-300">
          prestasi.
        </span>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#38B2AC]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0091CF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F7] dark:bg-[#002C5F] border border-[#38B2AC]/40 text-xs font-extrabold text-[#38B2AC] mb-4 shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#38B2AC]" />
              <span>Apresiasi &amp; Rekognisi Publik</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002C5F] dark:text-white tracking-tight leading-tight">
              Penghargaan &amp; <br className="hidden sm:inline" />
              <span className="text-[#38B2AC]">Capaian Mahasiswa</span>
            </h2>
          </div>

          <p className="text-[#475569] dark:text-[#E6E6E6]/90 text-sm sm:text-base font-medium max-w-md">
            Bukti dedikasi mahasiswa Universitas Siber Muhammadiyah dalam menorehkan prestasi sains siber, teknologi buatan, dan dakwah digital tingkat nasional hingga internasional.
          </p>
        </div>

        {/* Buzzworthy Style 3D Tilted Certificate Cards Floating Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {awardsList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, rotate: item.rotation }}
              whileInView={{ opacity: 1, y: item.offsetY, rotate: item.rotation }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-7 rounded-3xl border-2 ${item.borderColor} ${item.bgColor} shadow-xl relative group transition-all duration-300 flex flex-col justify-between cursor-pointer`}
            >
              {/* Top Card Badge */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${item.badgeBg}`}>
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold text-[#475569] dark:text-[#E6E6E6]/70">
                    {item.year}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#002C5F] border border-black/10 dark:border-white/20 flex items-center justify-center mb-4 shadow-sm group-hover:rotate-12 transition-transform">
                  <Medal className="w-5 h-5 text-[#38B2AC]" />
                </div>

                <h3 className="text-lg font-black text-[#002C5F] dark:text-white leading-snug mb-2 group-hover:text-[#0091CF] transition-colors">
                  {item.title}
                </h3>

                <p className={`text-xs font-semibold ${item.textColor} mb-4`}>
                  {item.category}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] font-bold text-[#475569] dark:text-[#E6E6E6]/80">
                <span className="line-clamp-1">{item.organizer}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#0091CF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buzzworthy Style Featured Award Summary Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#002C5F] via-[#002147] to-[#001a3a] border border-[#0091CF]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white">
          
          {/* Ambient Glow inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0091CF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Featured Highlight */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38B2AC]/20 border border-[#38B2AC]/40 text-xs font-bold text-[#38B2AC]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KARYA UNGGULAN TERBAIK 2025</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
                SIBER TEKNO AI
              </h3>

              <p className="text-sm text-[#E6E6E6]/90 max-w-xl leading-relaxed font-medium">
                Platform kecerdasan buatan terintegrasi buatan tim mahasiswa SiberMu untuk sistem deteksi dini serangan siber berbasis pemrosesan bahasa alami (NLP).
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#galeri"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0091CF] text-white text-xs font-extrabold hover:bg-[#007ab3] transition-all shadow-lg shadow-[#0091CF]/30"
                >
                  <span>Lihat Dokumentasi Karya</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Col: Metric Counter Badges (Buzzworthy Circle Counters) */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3 sm:gap-4">
              
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black text-[#38B2AC] mb-1">100+</span>
                <span className="text-[10px] sm:text-xs font-bold text-[#E6E6E6] uppercase">Penghargaan</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black text-[#0091CF] mb-1">25+</span>
                <span className="text-[10px] sm:text-xs font-bold text-[#E6E6E6] uppercase">Internasional</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">15+</span>
                <span className="text-[10px] sm:text-xs font-bold text-[#E6E6E6] uppercase">Hak Cipta AI</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
