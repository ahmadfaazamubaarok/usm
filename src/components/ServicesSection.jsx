import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Headphones,
  FileSpreadsheet,
  Calendar,
  BookOpenCheck,
  UserPlus,
  FileCheck2,
  FileCode,
  Link2,
  BookMarked,
  KeyRound,
  Library,
  Globe,
  UserCheck,
  Grid,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const servicesData = [
  {
    title: 'LMS solusi',
    desc: 'Pembelajaran Online dengan teknologi terkini.',
    icon: GraduationCap,
    url: 'https://lms.solusi.sibermu.ac.id',
    color: '#0091CF',
    badge: 'PJJ'
  },
  {
    title: 'Helpdesk',
    desc: 'Pusat bantuan untuk kendala teknis & layanan.',
    icon: Headphones,
    url: 'https://helpdesk.sibermu.ac.id',
    color: '#38B2AC',
    badge: 'Support'
  },
  {
    title: 'SIAKAD',
    desc: 'Layanan KRS dan KHS Mahasiswa.',
    icon: FileSpreadsheet,
    url: 'https://siakad.sibermu.ac.id',
    color: '#002C5F',
    badge: 'Akademik'
  },
  {
    title: 'Kal. Akademik',
    desc: 'Informasi kalender akademik setiap semester.',
    icon: Calendar,
    url: 'https://sibermu.ac.id',
    color: '#8b5cf6',
    badge: 'Jadwal'
  },
  {
    title: 'Akademik',
    desc: 'Pusat informasi terkait kegiatan akademik.',
    icon: BookOpenCheck,
    url: 'https://akademik.sibermu.ac.id',
    color: '#0091CF',
    badge: 'Info'
  },
  {
    title: 'PENMARU',
    desc: 'Pendaftaran dan penerimaan mahasiswa baru.',
    icon: UserPlus,
    url: 'https://pmb.sibermu.ac.id',
    color: '#10b981',
    badge: 'PMB'
  },
  {
    title: 'TTE SiberMu',
    desc: 'Tanda Tangan Elektronik resmi kampus.',
    icon: FileCheck2,
    url: 'https://tte.sibermu.ac.id',
    color: '#38B2AC',
    badge: 'Digital'
  },
  {
    title: 'Tugas Akhir SiberMu',
    desc: 'Manajemen & bimbingan Tugas Akhir.',
    icon: FileCode,
    url: 'https://ta.sibermu.ac.id',
    color: '#002C5F',
    badge: 'Skripsi'
  },
  {
    title: 'Short Link SiberMu',
    desc: 'Penyingkat tautan resmi kampus (Akan hadir).',
    icon: Link2,
    url: '#',
    color: '#64748b',
    badge: 'Soon'
  },
  {
    title: 'Jurnal',
    desc: 'Publikasi jurnal penelitian dan karya ilmiah.',
    icon: BookMarked,
    url: 'https://jurnal.sibermu.ac.id',
    color: '#8b5cf6',
    badge: 'Riset'
  },
  {
    title: 'SSO SiberMu',
    desc: 'Akses semua layanan dengan satu akun terpadu.',
    icon: KeyRound,
    url: 'https://sso.sibermu.ac.id',
    color: '#0091CF',
    badge: 'Single Sign-On'
  },
  {
    title: 'E-Prints',
    desc: 'Repositori digital karya ilmiah & skripsi.',
    icon: Library,
    url: 'https://eprints.sibermu.ac.id',
    color: '#38B2AC',
    badge: 'Arsip'
  },
  {
    title: 'Portal Prodi',
    desc: 'Halaman web resmi setiap program studi S1.',
    icon: Globe,
    url: 'https://prodi.sibermu.ac.id',
    color: '#002C5F',
    badge: 'Program Studi'
  },
  {
    title: 'Layanan Dosen',
    desc: 'Layanan khusus untuk mendukung aktivitas dosen.',
    icon: UserCheck,
    url: 'https://dosen.sibermu.ac.id',
    color: '#10b981',
    badge: 'Pengajar'
  },
  {
    title: 'Layanan Lain',
    desc: 'Layanan pendukung lainnya untuk sivitas akademika.',
    icon: Grid,
    url: 'https://sibermu.ac.id',
    color: '#64748b',
    badge: 'Fasilitas'
  }
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-24 relative bg-white dark:bg-[#001738] border-t border-b border-[#E6E6E6] dark:border-white/10 transition-colors duration-300 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0091CF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#38B2AC]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F7] dark:bg-[#002C5F] border border-[#0091CF]/40 text-xs font-bold text-[#0091CF] dark:text-[#38B2AC] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ekosistem Digital Kampus</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#002C5F] dark:text-white tracking-tight mb-4">
            Layanan Universitas Siber Muhammadiyah
          </h2>
          <p className="text-[#475569] dark:text-[#E6E6E6]/90 text-base sm:text-lg font-medium">
            Akses cepat ke seluruh sistem informasi, platform pembelajaran, dan portal administrasi digital SiberMu.
          </p>
        </div>

        {/* 15 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {servicesData.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.a
                key={idx}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 5) * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-5 rounded-2xl bg-[#F7F7F7] dark:bg-[#002550] border border-[#E6E6E6] dark:border-white/10 hover:border-[#0091CF]/50 dark:hover:border-[#38B2AC]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl overflow-hidden"
              >
                {/* Top Row: Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#001e42] border border-[#E6E6E6] dark:border-white/10 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-[#0091CF] dark:text-[#38B2AC]" />
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-white/80 dark:bg-white/10 text-[#002C5F] dark:text-[#E6E6E6] border border-black/5 dark:border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#002C5F] dark:text-white mb-1.5 group-hover:text-[#0091CF] dark:group-hover:text-[#38B2AC] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] dark:text-[#E6E6E6]/80 leading-relaxed font-medium line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Link Trigger */}
                <div className="mt-5 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#0091CF] dark:text-[#38B2AC]">
                  <span>Lihat Selengkapnya</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
