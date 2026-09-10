import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  ArrowUp,
  Award,
  ArrowRight
} from 'lucide-react';
import { siteConfig, footerData } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-[#001a3a] border-t border-[#0091CF]/25 relative text-[#E6E6E6]">
      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#002C5F] p-6 sm:p-8 border border-[#0091CF]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Bergabung dengan ORMAWA &amp; Kegiatan AIK SiberMu
            </h2>
            <p className="text-xs sm:text-sm text-[#E6E6E6]/85 max-w-xl leading-relaxed">
              Kembangkan potensi kepemimpinan, riset teknologi siber, dan penguatan nilai Keislaman bersama kami.
            </p>
          </div>
          <a
            href={siteConfig.universityUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0091CF] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#007ab3] transition-all shrink-0 shadow-md"
          >
            <span>Website Utama SiberMu</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-md shrink-0">
                <img src="/logo-muhammadiyah.png" alt="Logo SiberMu" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">
                {siteConfig.title}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#E6E6E6]/80 leading-relaxed">
              {siteConfig.university} — Mengembangkan insan siber yang berintegritas, inovatif, dan berakhlak mulia.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#002C5F] border border-[#0091CF]/30 hover:border-[#0091CF] hover:text-[#0091CF] transition-colors text-white"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#002C5F] border border-[#0091CF]/30 hover:border-[#0091CF] hover:text-[#0091CF] transition-colors text-white"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={siteConfig.universityUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#002C5F] border border-[#0091CF]/30 hover:border-[#0091CF] hover:text-[#0091CF] transition-colors text-white"
                aria-label="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Fast Nav Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Tautan Pilihan
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-[#0091CF] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#kemahasiswaan" className="hover:text-[#0091CF] transition-colors">
                  Kemahasiswaan & ORMAWA
                </a>
              </li>
              <li>
                <a href="#aik" className="hover:text-[#38B2AC] transition-colors">
                  Al-Islam & Kemuhammadiyahan
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-[#0091CF] transition-colors">
                  Galeri Aktivitas
                </a>
              </li>
              <li>
                <a href={siteConfig.universityUrl} target="_blank" rel="noreferrer" className="text-[#0091CF] hover:underline font-semibold">
                  Portal Resmi SiberMu (sibermu.ac.id)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak & Alamat
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0091CF] shrink-0 mt-0.5" />
                <span>{footerData.contacts.address}</span>
              </li>
              {footerData.contacts.skLicense && (
                <li className="flex items-start gap-3 text-xs text-[#38B2AC] font-semibold">
                  <Award className="w-4 h-4 text-[#38B2AC] shrink-0 mt-0.5" />
                  <span>{footerData.contacts.skLicense}</span>
                </li>
              )}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0091CF] shrink-0" />
                <span>{footerData.contacts.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0091CF] shrink-0" />
                <span>{footerData.contacts.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#0091CF] shrink-0" />
                <span>{footerData.contacts.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Mandatory License Credits */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-[#38B2AC]" />
              <span>Kredit & Lisensi</span>
            </h4>
            <div className="space-y-2 text-xs">
              {footerData.credits.map((cr, i) => (
                <div key={i} className="p-2 rounded-lg bg-[#002C5F]/60 border border-[#0091CF]/20">
                  <span className="font-semibold text-white">{cr.name}</span>: {cr.desc}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & scroll top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Biro Kemahasiswaan & AIK {siteConfig.university}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002C5F] border border-[#0091CF]/30 hover:border-[#0091CF] text-[#E6E6E6] hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
