import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import type { TimPembina } from '../types';

interface TimPembinaSectionProps {
  pembina: TimPembina[];
  onSelectPembina: (pembina: TimPembina) => void;
  onBookPembina: (pembinaId: string) => void;
}

export const TimPembinaSection: React.FC<TimPembinaSectionProps> = ({
  pembina,
  onSelectPembina,
  onBookPembina
}) => {
  return (
    <section id="tim-pembina" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
            Pengelola & Pembina AIK
          </span>
          <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
            Tim Pembina Mahasiswa
          </h2>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base sm:text-lg mt-3">
            Dosen pakar & praktisi yang mendampingi pengembangan potensi akademis, AIK, dan prestasi mahasiswa SiberMu.
          </p>
        </div>

        {/* Pembina Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pembina.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-white border border-[hsl(var(--border))] rounded-2xl p-6 transition-all duration-300 hover:border-[hsl(var(--accent))/0.5] hover:shadow-[0_12px_32px_-8px_rgba(42,125,212,0.2)] flex flex-col justify-between"
              onClick={() => onSelectPembina(item)}
            >
              <div>
                {/* Square Rounded-XL Portrait */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-[hsl(var(--surface))]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--primary))] font-sans">
                      SIBERMU
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="headline-700 text-xl text-[hsl(var(--foreground))] mb-1 group-hover:text-[hsl(var(--accent))] transition-colors">
                  {item.name}
                </h3>

                {/* Title */}
                <p className="text-xs font-medium text-[hsl(var(--primary))] mb-3">
                  {item.title}
                </p>

                {/* Role Chip */}
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] text-[10px] font-semibold uppercase tracking-wider mb-4">
                  {item.roleChip}
                </div>

                {/* Speciality Bio */}
                <p className="body-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                  {item.specialityBio}
                </p>
              </div>

              {/* Card Footer Actions (Line Removed) */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-[hsl(var(--accent))] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Lihat profil & jadwal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookPembina(item.id);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-[hsl(var(--surface-raised))] text-[hsl(var(--primary))] text-xs font-semibold hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
                >
                  Konseling Online
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
