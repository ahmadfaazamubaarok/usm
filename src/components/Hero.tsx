import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { prodiList } from '../data/prodi';
import logoSibermu from '../assets/logo-sibermu.png';
import heroMahasiswiIslami from '../assets/hero-mahasiswi-islami.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFreeAssessment: () => void;
  onSeeServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenFreeAssessment,
  onSeeServices
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Dynamic Background Accent Mesh */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-[hsl(var(--accent))/0.06] rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-[hsl(var(--primary))/0.04] rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Panel: Content (55% -> 7 cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-800 text-4xl sm:text-5xl lg:text-6xl text-[hsl(var(--foreground))] tracking-tight leading-[1.1]"
            >
              Membentuk Mahasiswa{' '}
              <span className="text-[hsl(var(--accent))]">Berkarakter</span> & <span className="text-[hsl(var(--accent))]">Berprestasi</span>.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-light text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
            >
              Pusat pembinaan Al-Islam & Kemuhammadiyahan, layanan beasiswa, pendampingan PIMNAS/kompetisi siber, dan organisasi mahasiswa untuk 6 Program Studi S1 PJJ SiberMu.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[hsl(var(--primary))] text-white font-semibold text-xs hover:bg-[hsl(215_60%_25%)] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Portal Layanan SIMKEMA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onSeeServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-semibold text-xs hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-all duration-200 shadow-xs"
              >
                <span>Lihat Layanan Mahasiswa</span>
              </button>
            </motion.div>

            {/* Trust Badges - Featuring the 6 S1 PJJ Study Programs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))] block mb-3 font-sans">
                6 Program Studi S1 Pendidikan Jarak Jauh (PJJ) SiberMu:
              </span>
              <div className="flex flex-wrap gap-2">
                {prodiList.map((p) => (
                  <span
                    key={p.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-xs font-semibold text-[hsl(var(--primary))]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                    <span>{p.name}</span>
                    <span className="text-[10px] text-[hsl(var(--accent))] font-bold">({p.degree})</span>
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Panel: Photography & Floating UI Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Hero Photography Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[hsl(var(--border))] bg-white">
                <img
                  src={heroMahasiswiIslami}
                  alt="Mahasiswi SiberMu berhijab sedang belajar dengan laptop di kampus siber"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Photo Badge overlay with Logo */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-xs">
                  <img
                    src={logoSibermu}
                    alt="Logo SiberMu"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-xs font-bold text-[hsl(var(--primary))] font-sans">
                    Universitas Siber Muhammadiyyah
                  </span>
                </div>
              </div>

              {/* Floating UI Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onClick={onOpenFreeAssessment}
                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-xl max-w-xs cursor-pointer group hover:scale-102 transition-transform duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent))/0.15] text-[hsl(var(--accent))] flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--accent))] group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[hsl(var(--accent))] block">
                      Program Wajib AIK
                    </span>
                    <h4 className="headline-700 text-sm text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors">
                      Baitul Arqam Mahasiswa
                    </h4>
                    <p className="body-light text-xs text-[hsl(var(--muted-foreground))] mt-0.5">
                      Pendaftaran BAM Gelombang III Online Dibuka →
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
