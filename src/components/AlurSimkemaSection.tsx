import React from 'react';
import { motion } from 'motion/react';
import type { ProcessStep } from '../types';

interface AlurSimkemaSectionProps {
  steps: ProcessStep[];
  onOpenBooking: () => void;
}

export const AlurSimkemaSection: React.FC<AlurSimkemaSectionProps> = ({ steps, onOpenBooking }) => {
  return (
    <section id="alur-simkema" className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
            Tahapan Terintegrasi
          </span>
          <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
            Alur Layanan & Pembinaan SIMKEMA
          </h2>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base sm:text-lg mt-3">
            4 langkah sistematis dari pendaftaran akun hingga penerbitan dokumen SKPI digital.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative bg-white border border-[hsl(var(--border))] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group overflow-hidden"
            >
              <span
                className="absolute -top-3 -right-2 text-8xl font-black select-none pointer-events-none transition-transform group-hover:scale-105"
                style={{ color: 'rgba(26, 42, 74, 0.07)' }}
              >
                {step.step}
              </span>

              <div className="relative z-10">
                <div className="w-9 h-9 rounded-full bg-[hsl(var(--primary))] text-white font-extrabold text-xs flex items-center justify-center mb-6 shadow-xs font-sans">
                  {step.step}
                </div>

                <h3 className="headline-700 text-xl text-[hsl(var(--foreground))] mb-3 font-sans">
                  {step.title}
                </h3>

                <p className="body-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                  {step.description}
                </p>

                <p className="body-light text-xs text-[hsl(var(--foreground))/0.7] pt-2 leading-relaxed">
                  {step.details}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[hsl(var(--primary))] text-white font-semibold text-xs hover:bg-[hsl(215_60%_25%)] transition-all duration-200 shadow-md"
          >
            <span>Mulai Langkah 1 — Masuk SIMKEMA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
