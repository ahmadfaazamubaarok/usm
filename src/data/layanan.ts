import type { LayananMahasiswa } from '../types';

export const layananList: LayananMahasiswa[] = [
  {
    id: 'layanan-beasiswa',
    title: 'Pengajuan Beasiswa Online',
    duration: 'Proses Verifikasi 3-5 Hari Kerja',
    subtitle: 'Verifikasi dokumen beasiswa persyarikatan, KIP-Kuliah, dan beasiswa prestasi mahasiswa.',
    description: 'Mahasiswa dari 6 Prodi PJJ dapat mengajukan permohonan beasiswa secara 100% online melalui portal SIMKEMA dengan melampirkan transkrip nilai dan berkas pendukung.',
    price: 'GRATIS',
    features: [
      'Pengajuan berkas digital tanpa perlu hadir fisik',
      'Pemeriksaan transkrip & syarat IPK otomatis',
      'Wawancara seleksi via Video Conference',
      'Notifikasi status kelulusan via SIMKEMA & Email'
    ]
  },
  {
    id: 'layanan-skpi',
    title: 'Penerbitan SKPI & Surat Rekomendasi',
    duration: 'Proses Pengesahan 2 Hari Kerja',
    subtitle: 'Validasi poin portofolio sertifikat, kepengurusan ormawa, dan surat izin kegiatan.',
    description: 'Layanan penerbitan Dokumen Surat Keterangan Pendamping Ijazah (SKPI) berstandar Dikti dan Surat Rekomendasi Kompetisi Mahasiswa.',
    price: 'GRATIS',
    features: [
      'Penilaian poin portofolio kegiatan otomatis',
      'Verifikasi sertifikat lomba & kepengurusan',
      'Pencetakan e-SKPI ber-QR Code Legalitas',
      'Surat Rekomendasi Rektorat untuk Lomba'
    ]
  },
  {
    id: 'layanan-konseling-aik',
    title: 'Konseling & Pendampingan AIK',
    duration: 'Sesi 45-60 Menit Online Privat',
    subtitle: 'Konsultasi privat pengembangan diri, akademik, dan bimbingan nilai-nilai Islam Kemuhammadiyahan.',
    description: 'Sesi bimbingan tatap muka maya bersama Dosen Pembina AIK dan Psikolog Kemahasiswaan SiberMu untuk solusi kendala studi dan kesehatan mental.',
    price: 'GRATIS',
    features: [
      'Jadwal fleksibel di luar jam kerja/kuliah',
      'Kerahasiaan data dan materi konseling 100% terjaga',
      'Pendampingan khusus perbaikan nilai AIK',
      'Rencana aksi pengembangan potensi mahasiswa'
    ]
  }
];
