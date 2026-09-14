import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFreeAssessment: () => void;
  onSeeServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenFreeAssessment,
  onSeeServices
}) => {
  return (
    <section className="relative bg-white overflow-hidden py-8 md:py-12 lg:py-16 min-h-[calc(100vh-80px)] flex items-center">
      <div className="w-full max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Panel (55% desktop ~ 7 cols) */}
          <div className="lg:col-span-7 px-4 sm:px-8 lg:pl-[7vw] lg:pr-[4vw]">
            
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] animate-pulse"></span>
              <span className="label-caps text-[hsl(var(--accent))]">
                Physiotherapy & Sports Rehab · Shoreditch
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-800 text-[hsl(var(--foreground))] leading-[1.08] tracking-tight mb-5 text-[38px] sm:text-[48px] md:text-[56px] lg:text-[clamp(38px,4.5vw,68px)]"
            >
              Get Back to <br className="hidden sm:inline" />
              <span className="text-[hsl(var(--primary))]">What You Love.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-light text-[hsl(var(--muted-foreground))] text-base sm:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed"
            >
              Expert physiotherapy for sports injuries, chronic pain, and post-surgical rehab — same-week appointments available.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[hsl(var(--primary))] text-white font-semibold text-sm hover:bg-[hsl(215_60%_25%)] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Book assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onSeeServices}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-semibold text-sm hover:bg-[hsl(var(--surface))] transition-all duration-200"
              >
                See our services
              </button>
            </motion.div>

            {/* Trust Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[hsl(var(--muted-foreground))] pt-2 border-t border-[hsl(var(--border))/0.6]"
            >
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[hsl(var(--primary))]" />
                <span>HCPC Registered</span>
              </div>
              <span className="text-[hsl(var(--border))]">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-[hsl(var(--primary))]" />
                <span>CSP Members</span>
              </div>
              <span className="text-[hsl(var(--border))]">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-[hsl(var(--accent))]" />
                <span>Same-Week Appointments</span>
              </div>
            </motion.div>

            {/* Floating UI Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 bg-white border border-[#e2e8f0] rounded-[12px] p-4 sm:p-5 max-w-[340px] shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-xs text-[hsl(var(--primary))] uppercase tracking-wider mb-1 font-sans">
                    Free Body Assessment
                  </h3>
                  <p className="body-light text-[13px] text-[hsl(var(--muted-foreground))] leading-snug mb-2.5">
                    Book a 20-minute assessment and find out what's causing your pain
                  </p>
                  <button
                    onClick={onOpenFreeAssessment}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--accent))] hover:underline"
                  >
                    <span>Book free</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="w-9 h-9 rounded-full bg-[hsl(var(--accent))/0.1] flex items-center justify-center text-[hsl(var(--accent))] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Panel Photography (45% desktop ~ 5 cols) */}
          <div className="lg:col-span-5 px-4 sm:px-6 lg:pr-[5vw]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-[hsl(var(--surface))]"
            >
              <img
                src="/images/hero_physio.png"
                alt="Physiotherapy session with athlete at Motion Clinic Shoreditch"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))/0.2] via-transparent to-transparent pointer-events-none"></div>
              
              {/* Image Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <div>
                    <div className="text-xs font-bold text-[hsl(var(--foreground))]">Shoreditch Clinic</div>
                    <div className="text-[11px] text-[hsl(var(--muted-foreground))]">34 Curtain Road, London EC2A</div>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] tracking-wider">
                  Open Today
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
