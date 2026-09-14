import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, physioId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-[hsl(var(--border))] shadow-xs py-3.5'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))/0.1] flex items-center justify-center text-[hsl(var(--accent))] transition-transform group-hover:scale-105">
            <Activity className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-[hsl(var(--foreground))] font-sans">
            Motion<span className="text-[hsl(var(--accent))]">Clinic</span>
          </span>
        </a>

        {/* Right: Nav Links & CTA (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('conditions')}
            className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
          >
            Conditions
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('physios')}
            className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
          >
            Our Physios
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
          >
            Process
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98]"
          >
            <span>Book appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onOpenBooking()}
            className="px-3.5 py-1.5 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface))]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[hsl(var(--border))] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <button
            onClick={() => scrollToSection('conditions')}
            className="block w-full text-left py-2 text-base font-semibold text-[hsl(var(--foreground))]"
          >
            Conditions
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-2 text-base font-semibold text-[hsl(var(--foreground))]"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('physios')}
            className="block w-full text-left py-2 text-base font-semibold text-[hsl(var(--foreground))]"
          >
            Our Physios
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="block w-full text-left py-2 text-base font-semibold text-[hsl(var(--foreground))]"
          >
            Process
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[hsl(var(--primary))] text-white text-sm font-semibold"
            >
              <span>Book appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
