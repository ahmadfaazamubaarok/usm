import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import type { LayananMahasiswa } from '../types';

interface LayananMahasiswaSectionProps {
  layanan: LayananMahasiswa[];
  onSelectLayanan: (layananId: string) => void;
}

export const LayananMahasiswaSection: React.FC<LayananMahasiswaSectionProps> = ({ layanan, onSelectLayanan }) => {
  return (
    <section id="layanan-mahasiswa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
              Layanan Digital Kemahasiswaan
            </span>
            <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
              Layanan Mandiri Online
            </h2>
          </div>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base max-w-md">
            Kemudahan akses pengajuan beasiswa, pengurusan SKPI, dan konseling privat 100% online.
          </p>
        </div>

        {/* Clean Service Cards */}
        <div className="space-y-4">
          {layanan.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => onSelectLayanan(item.id)}
              className="group cursor-pointer bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-raised))] p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Service Name & Duration (5 cols) */}
                <div className="lg:col-span-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))] block mb-1">
                    {item.duration}
                  </span>
                  <h3 className="headline-700 text-2xl sm:text-3xl text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Center: Description (5 cols) */}
                <div className="lg:col-span-5">
                  <p className="body-light text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {item.subtitle}
                  </p>
                  
                  {/* Feature Bullets */}
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {item.features.slice(0, 2).map((feat, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--foreground))/0.8]">
                        <Check className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Arrow + Price (2 cols) */}
                <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4">
                  <span className="headline-700 text-lg text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {item.price}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[hsl(var(--border))] group-hover:border-[hsl(var(--accent))] bg-white flex items-center justify-center text-[hsl(var(--foreground))] group-hover:text-white group-hover:bg-[hsl(var(--accent))] transition-all duration-200 shadow-xs">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
