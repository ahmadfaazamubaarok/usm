import React from 'react';
import BubbleMenu from './components/BubbleMenu';
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
    hoverStyles: { bgColor: '#06b6d4', textColor: '#ffffff' }
  },
  {
    label: 'Kemahasiswaan',
    href: '#kemahasiswaan',
    ariaLabel: 'Kemahasiswaan',
    rotation: 6,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'AIK',
    href: '#aik',
    ariaLabel: 'AIK',
    rotation: 6,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'Galeri',
    href: '#galeri',
    ariaLabel: 'Galeri Aktivitas',
    rotation: 6,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  },
  {
    label: 'Kontak',
    href: '#kontak',
    ariaLabel: 'Kontak',
    rotation: -6,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Floating Interactive BubbleMenu from React Bits */}
      <BubbleMenu
        logo={<span style={{ fontWeight: 800, letterSpacing: '0.05em', color: '#10b981' }}>SiberMu</span>}
        items={bubbleMenuItems}
        menuAriaLabel="Navigasi Gelembung"
        menuBg="#0a172c"
        menuContentColor="#ffffff"
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
