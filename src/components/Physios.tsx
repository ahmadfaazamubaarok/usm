import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import type { Physio } from '../types';

interface PhysiosProps {
  physios: Physio[];
  onSelectPhysio: (physio: Physio) => void;
  onBookPhysio: (physioId: string) => void;
}

export const Physios: React.FC<PhysiosProps> = ({
  physios,
  onSelectPhysio,
  onBookPhysio
}) => {
  return (
    <section id="physios" className="py-20 bg-white border-t border-[hsl(var(--border))/0.4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
            Expert Clinical Team
          </span>
          <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
            Your Clinicians
          </h2>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base sm:text-lg mt-3">
            Experienced Chartered Physiotherapists dedicated to your individualized recovery track.
          </p>
        </div>

        {/* 3 Physio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {physios.map((physio, index) => (
            <motion.div
              key={physio.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-white border border-[hsl(var(--border))] rounded-2xl p-6 transition-all duration-300 hover:border-[hsl(var(--accent))/0.5] hover:shadow-[0_12px_32px_-8px_rgba(42,125,212,0.2)] flex flex-col justify-between"
              onClick={() => onSelectPhysio(physio)}
            >
              <div>
                {/* Square Rounded-XL Portrait */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-[hsl(var(--surface))]">
                  <img
                    src={physio.image}
                    alt={physio.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--primary))] font-sans">
                      HCPC
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="headline-700 text-xl text-[hsl(var(--foreground))] mb-1 group-hover:text-[hsl(var(--accent))] transition-colors">
                  {physio.name}
                </h3>

                {/* Title */}
                <p className="text-xs font-medium text-[hsl(var(--primary))] mb-3">
                  {physio.title}
                </p>

                {/* HCPC Blue Chip */}
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] text-[10px] font-semibold uppercase tracking-wider mb-4">
                  {physio.hcpcChip}
                </div>

                {/* Speciality Bio */}
                <p className="body-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                  {physio.specialityBio}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[hsl(var(--border))] flex items-center justify-between">
                <span className="text-xs font-semibold text-[hsl(var(--accent))] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>View profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookPhysio(physio.id);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-[hsl(var(--surface-raised))] text-[hsl(var(--primary))] text-xs font-semibold hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
                >
                  Book with {physio.name.split(' ')[1]}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
