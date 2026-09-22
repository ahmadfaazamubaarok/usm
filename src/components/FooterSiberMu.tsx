import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink, ShieldCheck, X, FileText } from 'lucide-react';
import logoSibermu from '../assets/logo-sibermu.png';

export const FooterSiberMu: React.FC = () => {
  const [showCreditsModal, setShowCreditsModal] = useState(false);

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

        {/* Media & Asset Attribution Bar */}
        <div className="border-t border-white/10 pt-6 pb-4">
          <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent))] shrink-0" />
              <span>
                <strong>Kepatuhan Hak Cipta & Sumber Media:</strong> Semua gambar, ikon, huruf, dan logo tercatat dengan lisensi legal.
              </span>
            </div>
            <button
              onClick={() => setShowCreditsModal(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent))] hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[hsl(var(--accent))]"
            >
              <FileText className="w-3.5 h-3.5" />
              Lihat Kredit & Atribusi Media
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © 2026 Universitas Siber Muhammadiyah · Lembaga Kemahasiswaan & AIK · Yogyakarta
          </p>
          <div className="flex flex-wrap items-center gap-5 text-[11px] text-slate-400">
            <button
              onClick={() => setShowCreditsModal(true)}
              className="hover:underline font-medium text-[hsl(var(--accent))]"
            >
              Kredit & Sumber Media
            </button>
            <a href="#" className="hover:underline">Panduan SIMKEMA</a>
            <a href="#" className="hover:underline font-medium text-slate-400">Ketentuan Beasiswa</a>
            <a href="https://muhammadiyah.or.id" target="_blank" rel="noreferrer" className="hover:underline font-medium text-slate-400">Muhammadiyah.or.id</a>
          </div>
        </div>

      </div>

      {/* Modal Kredit & Atribusi Media */}
      {showCreditsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#131b2c] border border-white/15 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-slate-200">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[hsl(var(--accent))]" />
                <h3 className="text-xl font-bold text-white">Kredit & Atribusi Sumber Media</h3>
              </div>
              <button
                onClick={() => setShowCreditsModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-3 mb-6 leading-relaxed">
              Sebagai bentuk integritas karya dan kepatuhan terhadap lisensi hak kekayaan intelektual (HAKI) pada perlombaan Landing Page SiberMu 2026, berikut daftar lengkap sumber aset yang digunakan dalam landing page ini:
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* 1. Tipografi / Huruf */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">1. Huruf & Tipografi (Typography)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Open Font License</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  <strong>Plus Jakarta Sans</strong> dirancang oleh Tokotype (Gumpita Rahayu) melalui Google Fonts. Berlisensi bebas komersial <em>SIL Open Font License 1.1</em>.
                </p>
                <a
                  href="https://fonts.google.com/specimen/Plus+Jakarta+Sans"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[hsl(var(--accent))] hover:underline mt-1.5"
                >
                  fonts.google.com/specimen/Plus+Jakarta+Sans <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* 2. Ikonografi */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">2. Sistem Ikon (Iconography)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">ISC / Open Source</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  <strong>Lucide Icons</strong> (Lucide React). Kumpulan ikon vektor SVG open-source dengan lisensi ISC / MIT License.
                </p>
                <a
                  href="https://lucide.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[hsl(var(--accent))] hover:underline mt-1.5"
                >
                  lucide.dev <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* 3. Fotografi & Ilustrasi */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">3. Fotografi Mahasiswa & Profil Dosen</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Resmi & Islami SiberMu</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Foto representasi mahasiswi berhijab, mahasiswa santun berbusana batik, serta profil dewan pembina berpeci dan berbusana akademisi muslim dirancang khusus sesuai identitas Islami Berkemajuan Universitas Siber Muhammadiyah.
                </p>
              </div>

              {/* 4. Logo & Identitas Kampus */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">4. Logo & Identitas Resmi Kampus</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">Fair Use Edukasi</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Logo resmi <strong>Universitas Siber Muhammadiyah (SiberMu)</strong> dan lambang <strong>Persyarikatan Muhammadiyah</strong> digunakan untuk keperluan edukasi dan keikutsertaan kompetisi resmi kampus SiberMu 2026.
                </p>
                <a
                  href="https://sibermu.ac.id"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[hsl(var(--accent))] hover:underline mt-1.5"
                >
                  sibermu.ac.id <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* 5. Library & Framework */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">5. Framework & Library Kode</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">MIT License</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  React 19, Vite, Tailwind CSS v4, Motion (Framer Motion Engine), dan TypeScript — seluruhnya berlisensi open-source MIT License.
                </p>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowCreditsModal(false)}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-[hsl(var(--primary))] hover:bg-slate-700 text-white transition-all shadow-md"
              >
                Tutup Kredit
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

