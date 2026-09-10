import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, BookOpen } from 'lucide-react';
import { transitionQuote } from '../data/content';

export default function TransitionSection() {
  return (
    <section className="py-20 relative bg-islamic-pattern overflow-hidden border-t border-b border-emerald-500/20">
      {/* Radial Backlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-slate-950/90 to-cyan-950/40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-950/50"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-6">
            <Quote className="w-7 h-7" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{transitionQuote.tag}</span>
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight italic leading-relaxed mb-6">
            {transitionQuote.quote}
          </blockquote>

          <div className="text-sm font-medium text-emerald-400/90 flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>{transitionQuote.source}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
