import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoSibermu from '../assets/logo-sibermu.png';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Program AIK', href: '#program-aik' },
    { name: 'Layanan Mahasiswa', href: '#layanan-mahasiswa' },
    { name: 'Tim Pembina', href: '#tim-pembina' },
    { name: 'Alur SIMKEMA', href: '#alur-simkema' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2.5'
          : 'bg-white/80 backdrop-blur-xs py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official SiberMu Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logoSibermu}
              alt="Logo Universitas Siber Muhammadiyah"
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="headline-700 text-lg sm:text-xl tracking-tight text-[hsl(var(--primary))] font-sans leading-none">
                Kemahasiswaan & AIK
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--accent))] mt-0.5">
                Universitas Siber Muhammadiyah
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(var(--primary))] text-white font-semibold text-xs hover:bg-[hsl(215_60%_25%)] transition-all duration-200 shadow-xs hover:shadow-md"
            >
              <span>Portal SIMKEMA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface))] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-semibold text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface))] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[hsl(var(--primary))] text-white font-semibold text-xs"
                >
                  <span>Portal SIMKEMA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
