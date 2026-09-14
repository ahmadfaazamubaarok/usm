import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Award, Calendar, ArrowRight, Check } from 'lucide-react';
import type { Physio } from '../types';

interface PhysioModalProps {
  physio: Physio | null;
  onClose: () => void;
  onBookPhysio: (physioId: string) => void;
}

export const PhysioModal: React.FC<PhysioModalProps> = ({
  physio,
  onClose,
  onBookPhysio
}) => {
  if (!physio) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-2xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[hsl(var(--primary))] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={physio.image}
                alt={physio.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <h3 className="headline-700 text-lg text-white">
                  {physio.name}
                </h3>
                <p className="text-xs text-white/80">{physio.title}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* HCPC Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>{physio.hcpcChip}</span>
            </div>

            {/* Bio */}
            <div>
              <h4 className="headline-700 text-sm text-[hsl(var(--primary))] mb-2 font-sans">
                About {physio.name}
              </h4>
              <p className="body-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {physio.fullBio}
              </p>
            </div>

            {/* Qualifications */}
            <div>
              <h4 className="headline-700 text-sm text-[hsl(var(--primary))] mb-3 flex items-center gap-2 font-sans">
                <Award className="w-4 h-4 text-[hsl(var(--accent))]" />
                <span>Qualifications & Accreditations</span>
              </h4>
              <div className="space-y-2">
                {physio.qualifications.map((qual, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[hsl(var(--foreground))]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[hsl(var(--surface))] p-4 rounded-xl border border-[hsl(var(--border))]">
              <div className="flex items-center gap-2 text-xs font-bold text-[hsl(var(--primary))] mb-2">
                <Calendar className="w-4 h-4 text-[hsl(var(--accent))]" />
                <span>Shoreditch Clinic Operating Days</span>
              </div>
              <div className="flex gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => {
                  const isAvail = physio.availableDays.includes(day);
                  return (
                    <span
                      key={day}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                        isAvail
                          ? 'bg-[hsl(var(--primary))] text-white'
                          : 'bg-[hsl(var(--border))/0.4] text-[hsl(var(--muted-foreground))] line-through opacity-50'
                      }`}
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))] flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookPhysio(physio.id);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] transition-colors shadow-xs"
            >
              <span>Book appointment with {physio.name.split(' ')[1]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
