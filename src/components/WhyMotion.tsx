import React from 'react';
import { motion } from 'motion/react';
import { Clock, Award, CalendarCheck, ShieldCheck } from 'lucide-react';

interface WhyMotionProps {
  onOpenBooking: () => void;
}

export const WhyMotion: React.FC<WhyMotionProps> = ({ onOpenBooking }) => {
  const checkpoints = [
    { title: '60-min sessions — always', icon: Clock, desc: 'Never rushed, full 1-to-1 dedicated clinical care' },
    { title: 'HCPC registered', icon: ShieldCheck, desc: 'Fully accredited lead chartered physiotherapists' },
    { title: 'Same-week availability', icon: CalendarCheck, desc: 'Fast access so you start recovering without delay' },
    { title: 'Specialist sports rehab track', icon: Award, desc: 'Custom athletic re-loading and force plate testing' }
  ];

  return (
    <section className="py-20 bg-[hsl(var(--surface))] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text (6 cols) */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-caps text-[hsl(var(--accent))] mb-2 inline-block"
            >
              The Motion Difference
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight mb-6"
            >
              Why Patients Choose Us
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="body-light text-[hsl(var(--foreground))/0.8] text-base sm:text-lg leading-relaxed mb-4"
            >
              No generic 30-minute slots. Every appointment is 60 minutes with the same physio. We explain every diagnosis and every decision.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="body-light text-[hsl(var(--muted-foreground))] text-sm sm:text-base leading-relaxed mb-8"
            >
              Whether you are recovering from surgical knee reconstruction, aiming for a marathon personal record, or simply trying to work at your desk without upper back stiffness, our evidence-led framework delivers long-term results.
            </motion.p>

            {/* 4 Navy Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {checkpoints.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[hsl(var(--border))] shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[hsl(var(--primary))/0.08] text-[hsl(var(--primary))] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="headline-700 text-sm text-[hsl(var(--primary))]">
                        {item.title}
                      </h4>
                      <p className="body-light text-xs text-[hsl(var(--muted-foreground))] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] transition-all duration-200"
            >
              <span>Book your 60-min session</span>
            </button>
          </div>

          {/* Right Image (6 cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-[hsl(var(--border))]"
            >
              <img
                src="/images/why_motion.png"
                alt="Physiotherapist and patient reviewing gait assessment tablet at Motion Clinic"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Overlay Stat Pill */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg">
                <div className="text-2xl font-extrabold text-[hsl(var(--primary))] font-sans">98.4%</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">Patient pain reduction rate within 4 sessions</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
