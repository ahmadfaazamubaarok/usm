import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, BookOpen } from 'lucide-react';
import { transitionQuote } from '../data/content';

export default function TransitionSection() {
  return (
    <section className="py-20 relative bg-islamic-pattern overflow-hidden border-t border-b border-[#D4A017]/30">
      {/* Radial Backlight in Navy and Gold */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001a3a]/80 via-[#002C5F]/95 to-[#001a3a]/80 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#D4A017]/40 shadow-2xl shadow-[#001a3a]/80"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/15 border border-[#D4A017]/40 text-[#D4A017] mx-auto flex items-center justify-center mb-6 shadow-lg shadow-[#D4A017]/20">
            <Quote className="w-7 h-7" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-xs font-semibold text-[#D4A017] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{transitionQuote.tag}</span>
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight italic leading-relaxed mb-6">
            {transitionQuote.quote}
          </blockquote>

          <div className="text-sm font-medium text-[#D4A017] flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-[#D4A017]" />
            <span>{transitionQuote.source}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
