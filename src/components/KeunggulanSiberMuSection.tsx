import React from 'react';
import { motion } from 'motion/react';
import { Clock, Award, CalendarCheck, ShieldCheck } from 'lucide-react';
import keunggulanDiskusiIslami from '../assets/keunggulan-diskusi-islami.jpg';

interface KeunggulanSiberMuSectionProps {
  onOpenBooking: () => void;
}

export const KeunggulanSiberMuSection: React.FC<KeunggulanSiberMuSectionProps> = ({ onOpenBooking }) => {
  const checkpoints = [
    { title: 'Flex-Learning Pembinaan AIK', icon: Clock, desc: 'Akses bimbingan karakter & Baitul Arqam online fleksibel' },
    { title: 'Dosen Pembina Bersertifikasi', icon: ShieldCheck, desc: 'Pendampingan langsung oleh praktisi & akademisi Muhammadiyah' },
    { title: 'Inkubasi Prestasi & PIMNAS', icon: CalendarCheck, desc: 'Dukungan hibah lomba & bimbingan proposal intensif' },
    { title: 'Open Badge & SKPI Digital Legal', icon: Award, desc: 'Rekognisi portofolio digital diakui industri & Dikti' }
  ];

  return (
    <section className="py-20 bg-[hsl(var(--surface))] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text (6 cols) */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-caps text-[hsl(var(--accent))] mb-2 inline-block"
            >
              Nilai Tambah SiberMu
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight mb-6"
            >
              Mengapa Pembinaan Mahasiswa SiberMu Unggul?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="body-light text-[hsl(var(--foreground))/0.8] text-base sm:text-lg leading-relaxed mb-4"
            >
              Pendidikan Jarak Jauh (PJJ) di Universitas Siber Muhammadiyah mengintegrasikan kecanggihan siber dengan kekuatan karakter Al-Islam & Kemuhammadiyahan.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="body-light text-[hsl(var(--muted-foreground))] text-sm sm:text-base leading-relaxed mb-8"
            >
              Mahasiswa dari 6 Program Studi (Teknik Informatika, Sistem Informasi, Hukum, Manajemen, Akuntansi, Administrasi Kesehatan) difasilitasi penuh untuk aktif berorganisasi, menjuarai kompetisi nasional, dan mendapatkan beasiswa studi.
            </motion.p>

            {/* 4 Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {checkpoints.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[hsl(var(--border))] shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[hsl(var(--primary))/0.08] text-[hsl(var(--primary))] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="headline-700 text-sm text-[hsl(var(--primary))]">
                        {item.title}
                      </h4>
                      <p className="body-light text-xs text-[hsl(var(--muted-foreground))] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] transition-all duration-200"
            >
              <span>Akses Portal SIMKEMA SiberMu</span>
            </button>
          </div>

          {/* Right Image (6 cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-[hsl(var(--border))]"
            >
              <img
                src={keunggulanDiskusiIslami}
                alt="Mahasiswa dan mahasiswi berhijab SiberMu berdiskusi proyek inovasi siber"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg">
                <div className="text-2xl font-extrabold text-[hsl(var(--primary))] font-sans">100% Online</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">Layanan Kemahasiswaan & AIK Terintegrasi Digital</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
