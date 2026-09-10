import React from 'react';
import { motion } from 'framer-motion';
import { Images } from 'lucide-react';
import AccordionGallery from './AccordionGallery';
import { galleryItemsData } from '../data/content';

export default function GallerySection() {
  return (
    <section id="galeri" className="py-24 relative bg-[#002C5F]/95 border-t border-[#0091CF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091CF]/15 border border-[#0091CF]/30 text-xs font-semibold text-[#0091CF] mb-4">
            <Images className="w-3.5 h-3.5" />
            <span>Dokumentasi Kegiatan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Galeri Aktivitas Mahasiswa & AIK
          </h2>
          <p className="text-[#E6E6E6]/90 text-base sm:text-lg">
            Potret dinamika kehidupan kampus siber, pembinaan akhlak, dan prestasi mahasiswa Universitas SiberMu.
          </p>
        </div>

        {/* Accordion Gallery Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-4 sm:p-6 rounded-3xl border border-[#0091CF]/30"
        >
          <AccordionGallery
            items={galleryItemsData}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#0091CF"
            overlayColor="#001a3a"
          />
        </motion.div>
      </div>
    </section>
  );
}
