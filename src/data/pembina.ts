import type { TimPembina } from '../types';
import imgDrIrfan from '../assets/pembina-dr-irfan.jpg';
import imgUstRidwan from '../assets/pembina-ust-ridwan.jpg';
import imgDanang from '../assets/pembina-danang-prasetyo.jpg';

export const pembinaList: TimPembina[] = [
  {
    id: 'dr-irfan-nuari',
    name: 'Dr. H. Irfan Nuari, M.T.',
    title: 'Kepala Lembaga Kemahasiswaan & Alumni (LKA)',
    roleChip: 'Pengelola LKA SiberMu',
    specialityBio: 'Penanggung jawab utama tata kelola kemahasiswaan, pengembangan ORMAWA, beasiswa, dan tracer study alumni SiberMu.',
    fullBio: 'Dosen senior dengan pengalaman lebih dari 10 tahun dalam pengembangan pendidikan tinggi siber. Berkomitmen membangun ekosistem kemahasiswaan berbasis teknologi siber yang berkarakter islami.',
    qualifications: ['Doktor Rekayasa Sistem Siber', 'Magister Teknik', 'Assessor Kemahasiswaan Dikti', 'Pembina Utama Organisasi Mahasiswa'],
    image: imgDrIrfan,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  },
  {
    id: 'ust-ridwan',
    name: 'Ust. Muhammad Ridwan, M.Ag.',
    title: 'Koordinator Lembaga Al-Islam & Kemuhammadiyahan',
    roleChip: 'Pembina AIK & Karakter',
    specialityBio: 'Pengembang kurikulum Baitul Arqam Mahasiswa (BAM), sertifikasi BTA, dan etika siber berakhlaqul karimah.',
    fullBio: 'Pakar studi Islam dan Kemuhammadiyahan yang aktif merancang metode dakwah siber terintegrasi. Mengampu pembinaan karakter mahasiswa di 6 Program Studi PJJ SiberMu.',
    qualifications: ['Magister Agama Islam (UAM)', 'Master Trainer Baitul Arqam Majelis MPKSDI', 'Pakar Fiqih Informasi & Transaksi Siber', 'Instruktur Sertifikasi BTA'],
    image: imgUstRidwan,
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat']
  },
  {
    id: 'danang-prasetyo',
    name: 'Danang Prasetyo, M.Kom.',
    title: 'Koordinator Pengembangan Prestasi & PIMNAS',
    roleChip: 'Pembina Prestasi Mahasiswa',
    specialityBio: 'Pembimbing khusus kompetisi mahasiswa (PIMNAS, Hackathon, Moot Court, & Business Plan) bagi 6 Prodi PJJ.',
    fullBio: 'Praktisi teknologi dan akademisi yang telah mengantarkan puluhan tim mahasiswa siber meraih juara dalam ajang kompetisi tingkat nasional dan internasional.',
    qualifications: ['Magister Ilmu Komputer (S.Kom., M.Kom.)', 'Reviewer Proposal PKM SiberMu', 'Mentor Hackathon & Cyber Competition', 'Pembina IMM Siber'],
    image: imgDanang,
    availableDays: ['Tue', 'Thu', 'Fri', 'Sat']
  }
];

