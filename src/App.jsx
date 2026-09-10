import React from 'react';
import BubbleMenu from './components/BubbleMenu';
import HeroSection from './components/HeroSection';
import KemahasiswaanSection from './components/KemahasiswaanSection';
import TransitionSection from './components/TransitionSection';
import AikSection from './components/AikSection';
import AwardsSection from './components/AwardsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

const bubbleMenuItems = [
  {
    label: 'Beranda',
    href: '#hero',
    ariaLabel: 'Beranda',
    rotation: -6,
    hoverStyles: { bgColor: '#0091CF', textColor: '#ffffff' }
  },
  {
    label: 'Kemahasiswaan',
    href: '#kemahasiswaan',
    ariaLabel: 'Kemahasiswaan',
    rotation: 6,
    hoverStyles: { bgColor: '#002C5F', textColor: '#ffffff' }
  },
  {
    label: 'AIK',
    href: '#aik',
    ariaLabel: 'AIK',
    rotation: 6,
    hoverStyles: { bgColor: '#38B2AC', textColor: '#ffffff' }
  },
  {
    label: 'Prestasi',
    href: '#prestasi',
    ariaLabel: 'Prestasi Mahasiswa',
    rotation: -6,
    hoverStyles: { bgColor: '#38B2AC', textColor: '#ffffff' }
  },
  {
    label: 'Galeri',
    href: '#galeri',
    ariaLabel: 'Galeri Aktivitas',
    rotation: 6,
    hoverStyles: { bgColor: '#0091CF', textColor: '#ffffff' }
  },
  {
    label: 'Kontak',
    href: '#kontak',
    ariaLabel: 'Kontak',
    rotation: -6,
    hoverStyles: { bgColor: '#002C5F', textColor: '#ffffff' }
  }
];

export default function App() {
  return (
    <div className="min-h-screen relative font-sans antialiased selection:bg-[#0091CF] selection:text-white transition-colors duration-300">
      {/* Floating Interactive BubbleMenu from React Bits */}
      <BubbleMenu
        logo={
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0091CF] flex items-center justify-center font-extrabold text-white text-xs shadow-md">
              SM
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="font-black text-sm tracking-tight text-white">SiberMu</span>
              <span className="text-[10px] font-semibold text-[#38B2AC] tracking-wider uppercase">Kemahasiswaan &amp; AIK</span>
            </div>
          </div>
        }
        items={bubbleMenuItems}
        menuAriaLabel="Navigasi Utama SiberMu"
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection />
        <KemahasiswaanSection />
        <TransitionSection />
        <AikSection />
        <AwardsSection />
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
