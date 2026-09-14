import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface BannerSimkemaCTAProps {
  onOpenBooking: () => void;
}

export const BannerSimkemaCTA: React.FC<BannerSimkemaCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[hsl(var(--primary))] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--accent))/0.15] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[hsl(var(--accent))] text-[10px] font-bold uppercase tracking-widest"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PORTAL LAYANAN SIBERMU</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Kembangkan Potensi, Raih Prestasi, Tegakkan Karakter Islami.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="body-light text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Akses seluruh layanan beasiswa, pendampingan kompetisi PIMNAS, registrasi Baitul Arqam, dan pengurusan SKPI digital dalam satu sistem terpadu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[hsl(var(--primary))] font-bold text-xs hover:bg-[hsl(var(--surface))] transition-all duration-200 shadow-xl group"
            >
              <span>Masuk Portal SIMKEMA SiberMu</span>
              <ArrowRight className="w-4 h-4 text-[hsl(var(--accent))] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="pt-6 text-xs text-slate-400 font-sans flex items-center justify-center gap-6">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
              <span>S1 PJJ 6 Program Studi</span>
            </span>
            <span>·</span>
            <span>Universitas Siber Muhammadiyah</span>
          </div>

        </div>
      </div>
    </section>
  );
};
