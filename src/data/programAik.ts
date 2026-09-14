import type { ProgramPilar } from '../types';

export const programAikList: ProgramPilar[] = [
  // --- CAKUPAN 1: KEMAHASISWAAN ---
  {
    id: 'ormawa-imm',
    category: 'Kemahasiswaan',
    title: 'Organisasi Mahasiswa (ORMAWA)',
    iconName: 'Users',
    shortDesc: 'BEM, DPM, Korkom IMM Siber, dan Himpunan Mahasiswa 6 Program Studi PJJ.',
    fullDesc: 'Wadah pengembangan kepemimpinan siber, manajerial organisasi, dan aksi sosial siber. Meliputi BEM SiberMu, Dewan Perwakilan Mahasiswa, IMM Siber, serta HIMA dari 6 Prodi PJJ.',
    targetProdi: ['S1 PJJ Teknik Informatika', 'S1 PJJ Sistem Informasi', 'S1 PJJ Hukum', 'S1 PJJ Manajemen', 'S1 PJJ Akuntansi', 'S1 PJJ Administrasi Kesehatan'],
    kegiatanUtama: ['Musyawarah Mahasiswa Siber (MUMAS)', 'Latihan Keterampilan Manajemen Mahasiswa (LKMM)', 'Darul Arqam Dasar (DAD) IMM Siber', 'Pelantikan & Raker Ormawa'],
    outputSertifikat: 'Sertifikat Kepengurusan ORMAWA & SKPI Digital'
  },
  {
    id: 'ukm-minatbakat',
    category: 'Kemahasiswaan',
    title: 'Unit Kegiatan Mahasiswa (UKM)',
    iconName: 'Award',
    shortDesc: 'Cyber Security Club, AI Club, Technopreneur, English Club, E-Sports & Media Digital.',
    fullDesc: 'Wadah penyaluran minat, bakat, dan kreativitas mahasiswa dalam komunitas spesifik. Dirancang 100% online untuk mendukung kolaborasi mahasiswa antar kota dan pulau.',
    targetProdi: ['Seluruh Mahasiswa 6 Prodi PJJ SiberMu'],
    kegiatanUtama: ['Cyber Security & Coding Bootcamp', 'AI & Data Science Workshop', 'Technopreneur Pitching Day', 'Turnamen E-Sports & Content Creator Lab'],
    outputSertifikat: 'Sertifikat Keanggotaan UKM & Open Badge'
  },
  {
    id: 'prestasi-pimnas',
    category: 'Kemahasiswaan',
    title: 'Prestasi Mahasiswa & PIMNAS',
    iconName: 'Trophy',
    shortDesc: 'Pendampingan PIMNAS, PKM, NUDC, KDMI, Hackathon & Lomba Siber Nasional.',
    fullDesc: 'Pusat inkubasi talenta kompetisi. Menyiapkan mahasiswa untuk menjuarai kompetisi tingkat nasional dan internasional dengan bimbingan dosen pakar dan insentif hibah.',
    targetProdi: ['Informatika & Sistem Informasi (Hackathon)', 'Hukum (Moot Court & Debate)', 'Manajemen & Akuntansi (Business Plan)', 'Administrasi Kesehatan (Health Innovation)'],
    kegiatanUtama: ['Bootcamp Proposal PKM/PIMNAS', 'Mentoring Lomba Cyber & Hackathon', 'Pemberian Reward & Insentif Juara', 'Rekognisi SKS Akademik'],
    outputSertifikat: 'Poin Rekognisi SKPI & Sertifikat Prestasi'
  },
  {
    id: 'layanan-mahasiswa-pilar',
    category: 'Kemahasiswaan',
    title: 'Layanan Bagi Mahasiswa',
    iconName: 'HeartHandshake',
    shortDesc: 'Beasiswa Persyarikatan & KIP-K, Konseling Psikologis, e-SKPI & Tracer Study.',
    fullDesc: 'Layanan terpadu pendampingan mahasiswa dari awal perkuliahan hingga kelulusan. Mencakup beasiswa penuh/parsial, konseling mental health, serta persiapan karir alumni.',
    targetProdi: ['Seluruh Mahasiswa PJJ SiberMu'],
    kegiatanUtama: ['Pengajuan Beasiswa Online via SIMKEMA', 'Sesi Konseling Psikologis Privat 1-on-1', 'Verifikasi Poin Portofolio e-SKPI', 'Virtual Career Expo & Tracer Study'],
    outputSertifikat: 'Dokumen SKPI Legal & e-Beasiswa'
  },

  // --- CAKUPAN 2: AL-ISLAM DAN KEMUHAMMADIYAHAN (AIK) ---
  {
    id: 'kegiatan-keagamaan',
    category: 'Al-Islam & Kemuhammadiyahan',
    title: 'Kegiatan Keagamaan & BAM',
    iconName: 'BookOpen',
    shortDesc: 'Baitul Arqam Mahasiswa (BAM) Online, Sertifikasi BTA, & Tahsin Al-Qur\'an Virtual.',
    fullDesc: 'Program pembinaan keagamaan berstruktur yang wajib diikuti mahasiswa baru dan transfer. Menggunakan metode Flex-Learning untuk memastikan pemahaman aqidah dan ibadah sesuai tarjih.',
    targetProdi: ['Mahasiswa Baru & Transfer 6 Prodi PJJ'],
    kegiatanUtama: ['Baitul Arqam Mahasiswa (BAM) Online', 'Tes & Sertifikasi Baca Tulis Al-Qur’an (BTA)', 'Klinik Tahsin & Halqah Al-Qur’an Virtual'],
    outputSertifikat: 'Sertifikat Kelulusan AIK & BAM Digital'
  },
  {
    id: 'kajian-syiar',
    category: 'Al-Islam & Kemuhammadiyahan',
    title: 'Kajian & Syiar Digital',
    iconName: 'Sparkles',
    shortDesc: 'Kajian Fiqih Informasi & Transaksi Siber, Pengajian Rutin, & Syiar Islam Digital.',
    fullDesc: 'Forum diskusi akademis-religius yang membahas isu-isu kontemporer teknologi dan masyarakat dari perspektif Islam. Memproduksi konten syiar kreatif di media digital.',
    targetProdi: ['Seluruh Civitas Akademika & Publik'],
    kegiatanUtama: ['Webinar Fiqih Siber & Transaksi Digital', 'Pengajian Bulanan Rutin SiberMu', 'Lomba Syiar Creative Content Islam', 'Podcast Islam Berkemajuan'],
    outputSertifikat: 'Sertifikat Peserta Kajian & Open Badge'
  },
  {
    id: 'nilai-kemuhammadiyahan',
    category: 'Al-Islam & Kemuhammadiyahan',
    title: 'Nilai & Ideologi Kemuhammadiyahan',
    iconName: 'ShieldCheck',
    shortDesc: 'Etika Siber Berakhlaqul Karimah, Risalah Islam Berkemajuan, & Pengabdian Digital.',
    fullDesc: 'Internalisasi nilai-nilai karakter kepribadian Muhammadiyah dalam kehidupan siber. Melatih etika komunikasi digital dan pengabdian masyarakat berbasis teknologi.',
    targetProdi: ['Seluruh Mahasiswa SiberMu'],
    kegiatanUtama: ['Penerapan Etika Siber Berakhlaqul Karimah', 'Pengabdian Masyarakat Digital (Kuliah Kemuhammadiyahan)', 'Internalisasi Risalah Islam Berkemajuan'],
    outputSertifikat: 'Portofolio Karakter AIK Digital'
  }
];
