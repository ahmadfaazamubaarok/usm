import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import type { Service } from '../types';

interface ServicesProps {
  services: Service[];
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
              Clinical Offerings
            </span>
            <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
              How We Help
            </h2>
          </div>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base max-w-md">
            Unhurried 60-minute appointments with dedicated senior clinical practitioners.
          </p>
        </div>

        {/* Hover-Raise Service Rows */}
        <div className="border-t border-[hsl(var(--border))]">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => onSelectService(service.id)}
              className="group cursor-pointer border-b border-[hsl(var(--border))] py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 transition-all duration-300 hover:bg-[hsl(var(--surface-raised))] rounded-xl my-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Large Service Name & Duration (5 cols) */}
                <div className="lg:col-span-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))] block mb-1">
                    {service.duration}
                  </span>
                  <h3 className="headline-700 text-2xl sm:text-3xl text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Center: Description (5 cols) */}
                <div className="lg:col-span-5">
                  <p className="body-light text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {service.subtitle}
                  </p>
                  
                  {/* Feature Bullets */}
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--foreground))/0.8]">
                        <Check className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Arrow + Price (2 cols) */}
                <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4">
                  <span className="headline-700 text-xl text-[hsl(var(--primary))] group-hover:text-[hsl(var(--accent))] transition-colors">
                    {service.price}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[hsl(var(--border))] group-hover:border-[hsl(var(--accent))] bg-white flex items-center justify-center text-[hsl(var(--foreground))] group-hover:text-white group-hover:bg-[hsl(var(--accent))] transition-all duration-200 shadow-xs">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
