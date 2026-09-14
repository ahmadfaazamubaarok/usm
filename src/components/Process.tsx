import React from 'react';
import { motion } from 'motion/react';
import type { ProcessStep } from '../types';

interface ProcessProps {
  steps: ProcessStep[];
  onOpenBooking: () => void;
}

export const Process: React.FC<ProcessProps> = ({ steps, onOpenBooking }) => {
  return (
    <section id="process" className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
            Structured Framework
          </span>
          <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
            Your Recovery Journey
          </h2>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base sm:text-lg mt-3">
            A clear 4-stage road to pain relief, full joint mobility, and athletic resilience.
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
              {/* Large Faded Navy Number (opacity 0.07) behind each step */}
              <span
                className="absolute -top-3 -right-2 text-8xl font-black select-none pointer-events-none transition-transform group-hover:scale-105"
                style={{ color: 'rgba(26, 42, 74, 0.07)' }}
              >
                {step.step}
              </span>

              <div className="relative z-10">
                {/* Step indicator badge */}
                <div className="w-9 h-9 rounded-full bg-[hsl(var(--primary))] text-white font-extrabold text-xs flex items-center justify-center mb-6 shadow-xs font-sans">
                  {step.step}
                </div>

                {/* Title */}
                <h3 className="headline-700 text-xl text-[hsl(var(--foreground))] mb-3 font-sans">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="body-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Detail */}
                <p className="body-light text-xs text-[hsl(var(--foreground))/0.7] border-t border-[hsl(var(--border))] pt-3 leading-relaxed">
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
            <span>Start Step 1 — Book Assessment</span>
          </button>
        </div>

      </div>
    </section>
  );
};
