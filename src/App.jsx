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
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 shadow-sm shrink-0">
              <img src="/logo-muhammadiyah.png" alt="Logo SiberMu" className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-base tracking-tight text-white">SiberMu</span>
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
