import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import logoSibermu from '../assets/logo-sibermu.png';

export const FooterSiberMu: React.FC = () => {
  return (
    <footer className="bg-[#0d131f] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoSibermu}
                alt="Logo Universitas Siber Muhammadiyah"
                className="w-10 h-10 object-contain bg-white/10 p-1 rounded-xl"
              />
              <span className="headline-700 text-2xl tracking-tight text-white font-sans">
                Kemahasiswaan & AIK
              </span>
            </div>
            <p className="body-light text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              Lembaga Kemahasiswaan, Alumni, dan Al-Islam Kemuhammadiyahan (LKA-AIK) Universitas Siber Muhammadiyah (SiberMu).
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[hsl(var(--accent))] transition-all"
                aria-label="LinkedIn SiberMu"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[hsl(var(--accent))] transition-all"
                aria-label="Instagram SiberMu"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://sibermu.ac.id"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[hsl(var(--accent))] transition-all"
                aria-label="Portal Utama SiberMu"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="label-caps text-xs text-white mb-4">Navigasi Portal</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-sans">
              <li><a href="#program-aik" className="hover:text-[hsl(var(--accent))] transition-colors">Program Utama AIK</a></li>
              <li><a href="#layanan-mahasiswa" className="hover:text-[hsl(var(--accent))] transition-colors">Layanan Mandiri Online</a></li>
              <li><a href="#tim-pembina" className="hover:text-[hsl(var(--accent))] transition-colors">Tim Pembina & Dosen</a></li>
              <li><a href="#alur-simkema" className="hover:text-[hsl(var(--accent))] transition-colors">Alur SIMKEMA</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4">
            <h4 className="label-caps text-xs text-white mb-4">Sekretariat LKA SiberMu</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                <span>Jl. KH. Ahmad Dahlan No. 1, D.I. Yogyakarta 55161</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[hsl(var(--accent))] shrink-0" />
                <span>Jam Layanan Online: Senin–Jumat 08:00 – 16:00 WIB</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[hsl(var(--accent))] shrink-0" />
                <span>+62 (0274) 512643 / WA Kemahasiswaan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[hsl(var(--accent))] shrink-0" />
                <span>kemahasiswaan@sibermu.ac.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © 2026 Universitas Siber Muhammadiyah · Lembaga Kemahasiswaan & AIK · Yogyakarta
          </p>
          <div className="flex gap-6 text-[11px] text-slate-400">
            <a href="#" className="hover:underline">Panduan SIMKEMA</a>
            <a href="#" className="hover:underline font-medium text-slate-400">Ketentuan Beasiswa</a>
            <a href="https://muhammadiyah.or.id" target="_blank" rel="noreferrer" className="hover:underline font-medium text-slate-400">Muhammadiyah.or.id</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
