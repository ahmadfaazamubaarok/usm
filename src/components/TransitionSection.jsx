import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, BookOpen } from 'lucide-react';
import { transitionQuote } from '../data/content';

export default function TransitionSection() {
  return (
    <section className="py-20 relative bg-gradient-to-r from-[#001a3a] via-[#002C5F] to-[#001a3a] overflow-hidden border-t border-b border-[#38B2AC]/30 text-white">
      {/* Radial Backlight */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#001a3a]/80 border border-[#38B2AC]/40 shadow-2xl backdrop-blur-md"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#38B2AC]/15 border border-[#38B2AC]/40 text-[#38B2AC] mx-auto flex items-center justify-center mb-6 shadow-lg shadow-[#38B2AC]/20">
            <Quote className="w-7 h-7" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38B2AC]/20 border border-[#38B2AC]/40 text-xs font-bold text-[#38B2AC] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{transitionQuote.tag}</span>
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight italic leading-relaxed mb-6">
            {transitionQuote.quote}
          </blockquote>

          <div className="text-sm font-bold text-[#38B2AC] flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-[#38B2AC]" />
            <span>{transitionQuote.source}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
