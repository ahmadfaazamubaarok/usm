import React from 'react';
import BubbleMenu from './components/BubbleMenu';
import ThemeToggle from './components/ThemeToggle';
import HeroSection from './components/HeroSection';
import KemahasiswaanSection from './components/KemahasiswaanSection';
import TransitionSection from './components/TransitionSection';
import AikSection from './components/AikSection';
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
    hoverStyles: { bgColor: '#D4A017', textColor: '#ffffff' }
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
    hoverStyles: { bgColor: '#D4A017', textColor: '#ffffff' }
  }
];

export default function App() {
  return (
    <div className="min-h-screen relative font-sans antialiased selection:bg-[#0091CF] selection:text-white transition-colors duration-300">
      {/* Fixed Circular Reveal Theme Toggle Button (DonasiTrust Style) */}
      <ThemeToggle />

      {/* Floating Interactive BubbleMenu from React Bits */}
      <BubbleMenu
        logo={
          <span style={{ fontWeight: 800, letterSpacing: '0.05em', color: '#D4A017' }}>
            SiberMu
          </span>
        }
        items={bubbleMenuItems}
        menuAriaLabel="Navigasi Gelembung SiberMu"
        menuBg="#002C5F"
        menuContentColor="#FFFFFF"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.1}
      />

      {/* Page Content Sections */}
      <main>
        <HeroSection />
        <KemahasiswaanSection />
        <TransitionSection />
        <AikSection />
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
