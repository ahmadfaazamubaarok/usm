import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Trophy, Users, HeartHandshake, GraduationCap, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import type { ProgramPilar } from '../types';

interface ProgramAIKSectionProps {
  programs: ProgramPilar[];
  onSelectProgram: (program: ProgramPilar) => void;
}

export const ProgramAIKSection: React.FC<ProgramAIKSectionProps> = ({ programs, onSelectProgram }) => {
  const [activeTab, setActiveTab] = useState<'Semua' | 'Kemahasiswaan' | 'Al-Islam & Kemuhammadiyahan'>('Semua');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[hsl(var(--primary))]" />;
      default:
        return <Award className="w-6 h-6 text-[hsl(var(--primary))]" />;
    }
  };

  const filteredPrograms = activeTab === 'Semua'
    ? programs
    : programs.filter((p) => p.category === activeTab);

  return (
    <section id="program-aik" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="label-caps text-[hsl(var(--accent))] mb-2 inline-block">
            Cakupan Program Utama
          </span>
          <h2 className="headline-800 text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--foreground))] tracking-tight">
            Kemahasiswaan & Al-Islam Kemuhammadiyahan
          </h2>
          <p className="body-light text-[hsl(var(--muted-foreground))] text-base sm:text-lg mt-3">
            Dua pilar utama pembinaan karakter, organisasi, kegiatan keagamaan, prestasi, dan layanan mahasiswa SiberMu.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['Semua', 'Kemahasiswaan', 'Al-Islam & Kemuhammadiyahan'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[hsl(var(--primary))] text-white shadow-md'
                  : 'bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-raised))] border border-[hsl(var(--border))]'
              }`}
            >
              {tab === 'Semua' && 'Semua Cakupan (2 Pilar)'}
              {tab === 'Kemahasiswaan' && 'Pilar 1: Kemahasiswaan'}
              {tab === 'Al-Islam & Kemuhammadiyahan' && 'Pilar 2: Al-Islam & Kemuhammadiyahan'}
            </button>
          ))}
        </div>

        {/* 2 Scope Summary Boxes */}
        {activeTab === 'Semua' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[hsl(215_60%_32%)] text-white p-7 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Users className="w-5 h-5 text-[hsl(var(--accent))]" />
                <h3 className="headline-700 text-lg text-white font-sans">1. Kemahasiswaan</h3>
              </div>
              <p className="body-light text-slate-200 text-sm leading-relaxed">
                Meliputi organisasi mahasiswa (BEM, DPM, IMM, HIMA), Unit Kegiatan Mahasiswa (UKM), inkubasi prestasi mahasiswa (PIMNAS, PKM, Hackathon), dan layanan bagi mahasiswa (beasiswa, e-SKPI, konseling).
              </p>
            </div>

            <div className="bg-[#0d131f] text-white p-7 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <BookOpen className="w-5 h-5 text-[hsl(var(--accent))]" />
                <h3 className="headline-700 text-lg text-white font-sans">2. Al-Islam dan Kemuhammadiyahan</h3>
              </div>
              <p className="body-light text-slate-200 text-sm leading-relaxed">
                Meliputi kegiatan keagamaan (Baitul Arqam Mahasiswa, Sertifikasi BTA, Tahsin), kajian keagamaan & syiar digital (fiqih siber, podcast), serta penanaman nilai & etika Kemuhammadiyahan.
              </p>
            </div>
          </div>
        )}

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => onSelectProgram(item)}
              className="group cursor-pointer bg-white border border-[hsl(var(--border))] rounded-2xl p-7 transition-all duration-300 hover:border-[hsl(var(--primary))] hover:shadow-[0_10px_30px_-10px_rgba(26,42,74,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    item.category === 'Kemahasiswaan'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-emerald-50 text-emerald-700'
                  }`}>
                    {item.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--surface))] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--primary))/0.08] transition-colors">
                  {getIcon(item.iconName)}
                </div>

                {/* Program Title */}
                <h3 className="headline-700 text-xl text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors font-sans">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="body-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                  {item.shortDesc}
                </p>
              </div>

              {/* Blue Link */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent))] group-hover:gap-2.5 transition-all pt-4">
                <span>Lihat detail & kegiatan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
