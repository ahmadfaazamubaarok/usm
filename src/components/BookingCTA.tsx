import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, ShieldCheck, MapPin } from 'lucide-react';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#1a2a4a] text-white py-20 lg:py-24 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#2a7dd4_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[hsl(var(--accent))] label-caps text-[10px] tracking-[0.14em] mb-4 border border-white/10"
        >
          Instant Online Booking
        </motion.span>

        {/* Plus Jakarta Sans 800 White Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-800 text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-[1.1]"
        >
          Stop Managing Pain. <br className="hidden sm:inline" />
          <span className="text-[hsl(var(--accent))]">Start Solving It.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="body-light text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Same-week appointments available — book online in under 60 seconds
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#1a2a4a] headline-700 text-sm hover:bg-slate-100 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.98] group"
          >
            <span>Book appointment</span>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--accent))] transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Bottom Tag 10px white 70% */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 label-caps text-[10px]"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
            <span>HCPC Registered</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
            <span>CSP Members</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
            <span>Shoreditch, London</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
