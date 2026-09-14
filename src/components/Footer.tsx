import React from 'react';
import { Activity, MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d131f] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))/0.2] flex items-center justify-center text-[hsl(var(--accent))]">
                <Activity className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="headline-700 text-2xl tracking-tight text-[hsl(var(--accent))] font-sans">
                Motion Clinic
              </span>
            </div>
            <p className="body-light text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              Expert physiotherapy, sports rehabilitation, and biomechanical assessment in Shoreditch. Dedicated to getting you back to peak movement.
            </p>
            
            {/* Social Links: LinkedIn · Instagram · Google */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[hsl(var(--accent))] transition-all"
                aria-label="LinkedIn"
              >
                {/* SVG for LinkedIn */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[hsl(var(--accent))] transition-all"
                aria-label="Instagram"
              >
                {/* SVG for Instagram */}
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[hsl(var(--accent))] transition-all"
                aria-label="Google Business Profile"
              >
                {/* Custom Google G icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="label-caps text-xs text-white mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-sans">
              <li><a href="#conditions" className="hover:text-[hsl(var(--accent))] transition-colors">What We Treat</a></li>
              <li><a href="#services" className="hover:text-[hsl(var(--accent))] transition-colors">Services & Pricing</a></li>
              <li><a href="#physios" className="hover:text-[hsl(var(--accent))] transition-colors">Our Physios</a></li>
              <li><a href="#process" className="hover:text-[hsl(var(--accent))] transition-colors">Recovery Process</a></li>
            </ul>
          </div>

          {/* Location & Hours (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="label-caps text-xs text-white mb-4">Clinic Location</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                <span>34 Curtain Road, Shoreditch, London EC2A 3PT</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[hsl(var(--accent))] shrink-0" />
                <span>Mon–Sat 7:00am – 8:00pm</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[hsl(var(--accent))] shrink-0" />
                <span>+44 (0)20 7946 0912</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[hsl(var(--accent))] shrink-0" />
                <span>hello@motionclinic.co.uk</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © 2026 Motion Clinic · Physiotherapy & Sports Rehab · 34 Curtain Road, Shoreditch EC2A · Mon–Sat 7am–8pm
          </p>
          <div className="flex gap-6 text-[11px] text-slate-400">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline font-medium text-slate-400">Terms of Service</a>
            <a href="#" className="hover:underline font-medium text-slate-400">HCPC Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
