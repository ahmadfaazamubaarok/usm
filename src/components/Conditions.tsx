import React from 'react';
import { motion } from 'motion/react';
import { Activity, Flame, ShieldPlus, Zap, Footprints, UserCheck, ArrowRight } from 'lucide-react';
import type { Condition } from '../types';

interface ConditionsProps {
  conditions: Condition[];
  onSelectCondition: (condition: Condition) => void;
}

export const Conditions: React.FC<ConditionsProps> = ({ conditions, onSelectCondition }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'ShieldPlus':
        return <ShieldPlus className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[hsl(var(--primary))]" />;
      default:
        return <Activity className="w-6 h-6 text-[hsl(var(--primary))]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="conditions" className="py-20 bg-white border-t border-[hsl(var(--border))/0.4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
            Specialized Care
          </span>
          <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
            What We Treat
          </h2>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base sm:text-lg mt-3">
            Targeted evidence-based treatments designed to resolve the root cause of your pain.
          </p>
        </div>

        {/* 3x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {conditions.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => onSelectCondition(item)}
              className="group cursor-pointer bg-white border border-[hsl(var(--border))] rounded-2xl p-7 transition-all duration-300 hover:border-[hsl(var(--primary))] hover:shadow-[0_10px_30px_-10px_rgba(26,42,74,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--surface))] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--primary))/0.08] transition-colors">
                  {getIcon(item.iconName)}
                </div>

                {/* Condition Title */}
                <h3 className="headline-700 text-xl text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors font-sans">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="body-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                  {item.shortDesc}
                </p>
              </div>

              {/* Blue Link */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent))] group-hover:gap-2.5 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
