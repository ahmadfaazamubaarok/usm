import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Clock, ShieldAlert, ArrowRight, Activity } from 'lucide-react';
import type { Condition } from '../types';

interface ConditionModalProps {
  condition: Condition | null;
  onClose: () => void;
  onBookCondition: (conditionTitle: string) => void;
}

export const ConditionModal: React.FC<ConditionModalProps> = ({
  condition,
  onClose,
  onBookCondition
}) => {
  if (!condition) return null;

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
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))/0.2] flex items-center justify-center text-[hsl(var(--accent))]">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[hsl(var(--accent))] tracking-widest block">
                  Condition Overview
                </span>
                <h3 className="headline-700 text-lg text-white">
                  {condition.title}
                </h3>
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
            
            {/* Description */}
            <div>
              <h4 className="headline-700 text-sm text-[hsl(var(--primary))] mb-2 font-sans">
                Clinical Overview
              </h4>
              <p className="body-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {condition.fullDesc}
              </p>
            </div>

            {/* Symptoms */}
            <div>
              <h4 className="headline-700 text-sm text-[hsl(var(--primary))] mb-3 flex items-center gap-2 font-sans">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <span>Common Symptoms</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {condition.symptoms.map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[hsl(var(--surface))] p-3 rounded-xl border border-[hsl(var(--border))] text-xs text-[hsl(var(--foreground))]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] mt-1.5 shrink-0"></span>
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Approach */}
            <div>
              <h4 className="headline-700 text-sm text-[hsl(var(--primary))] mb-3 flex items-center gap-2 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))]" />
                <span>Our Evidence-Based Approach</span>
              </h4>
              <div className="space-y-2">
                {condition.treatmentApproach.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[hsl(var(--foreground))/0.9]">
                    <div className="w-5 h-5 rounded-full bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] flex items-center justify-center font-bold text-[10px] shrink-0">
                      {idx + 1}
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recovery Timeframe Pill */}
            <div className="bg-[hsl(var(--surface-raised))] p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[hsl(var(--primary))]" />
                <div>
                  <div className="text-xs font-bold text-[hsl(var(--primary))]">Expected Recovery Benchmark</div>
                  <div className="text-xs text-[hsl(var(--muted-foreground))]">{condition.expectedRecovery}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
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
                onBookCondition(condition.title);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] transition-colors shadow-xs"
            >
              <span>Book treatment for {condition.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
