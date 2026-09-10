// Data Konten Landing Page Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah (SiberMu)
// Palette Resmi SiberMu: #002C5F (Navy), #0091CF (Blue), #FFFFFF (White), #F7F7F7 (Off-White), #38B2AC (Hijau Telur Asin / Teal), #E6E6E6 (Gray)

export const siteConfig = {
  title: "Biro Kemahasiswaan & AIK",
  university: "Universitas Siber Muhammadiyah (SiberMu)",
  tagline: "Unggul, Digital, & Berkemajuan",
  description: "Wadah pengembangan potensi mahasiswa SiberMu melalui sinergi aktivitas kemahasiswaan modern dan penguatan nilai Al-Islam & Kemuhammadiyahan berbasis siber.",
  heroBadge: "Portal Resmi Biro Kemahasiswaan & AIK",
  ctaPrimary: "Jelajahi Kemahasiswaan",
  ctaSecondary: "Pelajari Program AIK",
  universityUrl: "https://sibermu.ac.id",
};

export const statsData = [
  { value: "25+", label: "Organisasi & UKM" },
  { value: "100+", label: "Prestasi Nasional" },
  { value: "100%", label: "Pembelajaran Siber" },
  { value: "10K+", label: "Mahasiswa Aktif" }
];

export const kemahasiswaanData = {
  title: "Layanan & Aktivitas Kemahasiswaan",
  subtitle: "Mengembangkan potensi kepemimpinan, bakat, minat, dan prestasi mahasiswa di era digital secara komprehensif.",
  categories: [
    {
      id: "ormawa",
      title: "Organisasi Mahasiswa (ORMAWA)",
      icon: "Users",
      description: "Wadah artikulasi aspirasi, kepemimpinan, dan tata kelola keorganisasian mahasiswa SiberMu.",
      items: [
        {
          name: "BEM Universitas SiberMu",
          type: "Badan Eksekutif",
          desc: "Organisasi tertinggi mahasiswa penggerak inovasi & kolaborasi sains siber.",
          icon: "ShieldCheck",
          color: "from-[#0091CF]/30 to-[#002C5F]/40"
        },
        {
          name: "DPM SiberMu",
          type: "Dewan Perwakilan",
          desc: "Lembaga legislatif dan pengawasan aspirasi seluruh mahasiswa.",
          icon: "FileText",
          color: "from-[#002C5F]/50 to-[#0091CF]/20"
        },
        {
          name: "IMM SiberMu",
          type: "Ikatan Mahasiswa Muhammadiyah",
          desc: "Organisasi otonom kader persyarikatan dalam bingkai ketaqwaan & intelektualitas.",
          icon: "BookOpen",
          color: "from-[#38B2AC]/30 to-[#002C5F]/40"
        }
      ]
    },
    {
      id: "ukm",
      title: "Unit Kegiatan Mahasiswa (UKM)",
      icon: "Cpu",
      description: "Saluran pengembangan minat khusus, riset teknologi, seni digital, dan olahraga.",
      items: [
        {
          name: "Cyber Security & AI Club",
          type: "UKM Penalaran & Teknologi",
          desc: "Komunitas riset keamanan siber, kecerdasan buatan, dan etikal hacking.",
          icon: "Terminal",
          color: "from-[#0091CF]/30 to-[#002C5F]/40"
        },
        {
          name: "SiberMu Media & Esports",
          type: "UKM Seni & Olahraga Digital",
          desc: "Pengembangan bakat penyiaran konten kreatif dan atlet e-sports profesional.",
          icon: "Gamepad2",
          color: "from-[#38B2AC]/30 to-[#0091CF]/30"
        },
        {
          name: "SiberMu Innovation Hub",
          type: "UKM Kewirausahaan",
          desc: "Inkubator startup digital mahasiswa berbasis teknologi berkemajuan.",
          icon: "Rocket",
          color: "from-[#38B2AC]/40 to-[#002C5F]/30"
        }
      ]
    },
    {
      id: "prestasi",
      title: "Prestasi Mahasiswa",
      icon: "Trophy",
      description: "Capaian kebanggaan mahasiswa SiberMu dalam kompetisi tingkat nasional & internasional.",
      items: [
        {
          name: "Juara 1 Gemastik Kode & Siber 2025",
          type: "Tingkat Nasional",
          desc: "Tim SiberTekno meraih penghargaan utama kategori Cyber Security Challenge.",
          icon: "Award",
          color: "from-[#38B2AC]/40 to-[#0091CF]/20"
        },
        {
          name: "Juara 2 National AI Hackathon 2025",
          type: "Tingkat Nasional",
          desc: "Inovasi solusi AI untuk mitigasi bencana banjir berbasis IoT.",
          icon: "Medal",
          color: "from-[#0091CF]/30 to-[#E6E6E6]/10"
        },
        {
          name: "Best Presenter InMuTech International",
          type: "Tingkat Internasional",
          desc: "Presentasi riset edutech inklusif bagi penyandang disabilitas.",
          icon: "Globe",
          color: "from-[#0091CF]/40 to-[#002C5F]/40"
        }
      ]
    },
    {
      id: "layanan",
      title: "Layanan Mahasiswa",
      icon: "HeartHandshake",
      description: "Dukungan kesejahteraan, beasiswa, konseling karier, dan kesehatan mental mahasiswa.",
      items: [
        {
          name: "Portal Beasiswa SiberMu",
          type: "Layanan Kesejahteraan",
          desc: "Akses informasi & pendaftaran Beasiswa Sang Surya, KIP-K, dan Mitra Industri.",
          icon: "GraduationCap",
          color: "from-[#38B2AC]/30 to-[#0091CF]/30"
        },
        {
          name: "e-Counseling & Mental Health",
          type: "Layanan Konseling",
          desc: "Layanan konsultasi psikologi online bersama konselor profesional secara privat.",
          icon: "HeartPulse",
          color: "from-[#0091CF]/30 to-[#002C5F]/40"
        },
        {
          name: "Career & Talent Development Center",
          type: "Layanan Pengembangan Karier",
          desc: "Pusat magang siber, sertifikasi kompetensi, dan penyaluran kerja lulusan.",
          icon: "Briefcase",
          color: "from-[#002C5F]/50 to-[#0091CF]/30"
        }
      ]
    }
  ]
};

export const transitionQuote = {
  quote: "“Menghubungkan kecanggihan teknologi siber dengan keluhuran akhlak Al-Islam dan Kemuhammadiyahan untuk mewujudkan peradaban berkemajuan.”",
  source: "Visi Penyelenggaraan Pembelajaran SiberMu",
  tag: "Sinergi Sains, Teknologi, & Islam"
};

export const aikData = {
  title: "Al-Islam & Kemuhammadiyahan (AIK)",
  subtitle: "Internalisasi nilai-nilai keislaman dan ideologi Kemuhammadiyahan yang mencerahkan di era transformasi digital.",
  categories: [
    {
      title: "Kegiatan Keagamaan",
      icon: "BookOpenCheck",
      badge: "Ketaqwaan Digital",
      desc: "Pembiasaan ibadah, tahsin Al-Qur'an digital, dan bimbingan amalan yaumiyah berbasis aplikasi.",
      points: [
        "Kajian Rutin Virtual 'Tadabbur Siber'",
        "Bimbingan Baca Al-Qur'an & Sertifikasi Tahsin",
        "Kultum Digital 7 Menit Setiap Pekan"
      ]
    },
    {
      title: "Kajian & Intelektual",
      icon: "Compass",
      badge: "Pemikiran Islam",
      desc: "Diskusi kritis mengenai riset sains modern, etika artificial intelligence, dan fiqh siber.",
      points: [
        "Webinar Fiqh Siber & Etika AI",
        "Kajian Manhaj Tarjih Muhammadiyahan",
        "Simposium Pemikiran Islam Berkemajuan"
      ]
    },
    {
      title: "Syiar & Dakwah Digital",
      icon: "Radio",
      badge: "Dakwah Kreatif",
      desc: "Penyebaran konten dakwah sejuk, infografis islami, dan podcast pendidikan di media sosial.",
      points: [
        "Lomba Konten Dakwah Digital Nasional",
        "Podcast 'SiberMu Mencerahkan'",
        "Infografis Hadits & Pesan Kehidupan"
      ]
    },
    {
      title: "Nilai Kemuhammadiyahan",
      icon: "Sparkles",
      badge: "Ideologi & Karakter",
      desc: "Penguatan karakter persyarikatan, keikhlasan beramal, dan kepedulian sosial bagi sesama.",
      points: [
        "Baitul Arqam Mahasiswa (BAM) Online",
        "Kuliah Kerja Nyata (KKN) Tematik AIK",
        "Gerakan Filantropi & Bakti Sosial Digital"
      ]
    }
  ]
};

export const galleryItemsData = [
  { image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80', label: 'Diskusi Mahasiswa SiberMu', link: '#' },
  { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80', label: 'Workshop Cyber Security', link: '#' },
  { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80', label: 'Baitul Arqam Mahasiswa', link: '#' },
  { image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', label: 'Prestasi Juara Gemastik', link: '#' },
  { image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80', label: 'Siar Dakwah Digital', link: '#' }
];

export const footerData = {
  contacts: {
    address: "Jalan HOS Cokroaminoto No. 17 RT 53 RW 12, Kota Yogyakarta, DI Yogyakarta 55253",
    skLicense: "Izin Operasional: Keputusan Mendikbudristek No. 430/E/O/2021 | Akreditasi: BAIK",
    email: "humas@sibermu.ac.id / kemahasiswaan.aik@sibermu.ac.id",
    phone: "+62 895-3185-1105 (WhatsApp)",
    hours: "Senin - Jumat | 08:00 - 16:00 WIB"
  },
  socials: [
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { name: "YouTube", href: "https://youtube.com", icon: "Youtube" },
    { name: "Website Utama", href: "https://sibermu.ac.id", icon: "Globe" }
  ],
  credits: [
    { name: "Unsplash", desc: "Lisensi bebas hak cipta untuk fotografi lanskap & aktivitas kampus." },
    { name: "Lucide Icons", desc: "Pustaka ikon open-source bebas lisensi (MIT License)." },
    { name: "Google Fonts", desc: "Tipografi Plus Jakarta Sans (Open Font License)." },
    { name: "React Bits", desc: "Komponen interaktif open-source (ScrollExpand, AccordionGallery, BubbleMenu)." }
  ]
};
