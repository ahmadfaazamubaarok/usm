import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))/0.6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
            Verified Patient Outcomes
          </span>
          <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
            Trusted by Athletes & Shoreditch Locals
          </h2>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base sm:text-lg mt-3">
            Real stories from patients who restored full mobility and returned to pain-free performance.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[hsl(var(--border))] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[hsl(var(--accent))/0.15]" />

              <div>
                {/* 5-Star Blue Row */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                    />
                  ))}
                </div>

                {/* Italic Quote */}
                <p className="body-light italic text-sm sm:text-base text-[hsl(var(--foreground))/0.9] leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Client Name + Condition in 10px Muted */}
              <div className="pt-4 border-t border-[hsl(var(--border))]">
                <div className="headline-700 text-sm text-[hsl(var(--primary))] font-sans">
                  {item.name}
                </div>
                <div className="label-caps text-[10px] text-[hsl(var(--muted-foreground))] mt-0.5">
                  {item.condition}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
