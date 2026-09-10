# DOKUMENTASI KARYA LOMBA LANDING PAGE SIBERMU 2026
**Biro Kemahasiswaan dan Al-Islam Kemuhammadiyahan (AIK)**  
**Universitas Siber Muhammadiyah (SiberMu)**

---

## HALAMAN 1: IDENTITAS KARYA & RINGKASAN EKSEKUTIF

### 1.1 Identitas Karya
- **Judul Karya**: *Sinergi Kemahasiswaan & AIK Berkemajuan*
- **Sub-Judul**: Landing Page Modern Interaktif Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah
- **Institusi**: Universitas Siber Muhammadiyah (SiberMu)
- **Repositori Kode Sumber**: Tautan GitHub Publik (`https://github.com/[username]/sibermu`)
- **Lisensi Konten & Aset**: Open-Source / MIT License (Unsplash Photography, Lucide Icons)

### 1.2 Ringkasan Singkat
Landing page ini dirancang khusus untuk memenuhi standar kompetisi **Lomba Pembuatan Landing Page SiberMu 2026**. Mengusung konsep *"Creative Digital Studio"*, halaman ini menyatukan dua pilar utama — **Kemahasiswaan** (ORMAWA, UKM, Prestasi, Layanan) dan **Al-Islam & Kemuhammadiyahan** (Kegiatan Keagamaan, Fiqh Siber, Syiar Digital, dan Ideologi Muhammadiyah) — dalam satu alur cerita visual yang harmonis, interaktif, dan penuh estetika modern.

---

## HALAMAN 2: KONSEP, TEMA, & STRUKTUR ALUR INFORMASI

### 2.1 Konsep & Gagasan Orisinal
Pembelajaran di Universitas Siber Muhammadiyah 100% berbasis siber. Oleh karena itu, landing page ini mengabungkan kecanggihan sains & teknologi siber dengan keluhuran nilai Keislaman. Kedua bidang disajikan serasi tanpa membuat pembaca merasa berada pada dua entitas terpisah.

### 2.2 Struktur Komponen Halaman
1. **Header & Floating Bubble Menu Navigation**:
   - Komponen navigasi gelembung interaktif (React Bits + GSAP) melayang di bagian atas.
   - Dilengkapi **Theme Toggle Switcher** (Mode Terang & Gelap) dengan animasi *Circular View Transition (60 FPS)*.
2. **Hero Section (DonasiTrust Style Layout)**:
   - Penataan teks rata kiri dengan judul tebal 2 baris: *"Sinergi Kemahasiswaan. AIK Berkemajuan."*
   - Latar belakang animasi kartu bergeser vertikal (*3-column 3D marquee*) yang menampilkan kartu ORMAWA, UKM, Prestasi, dan AIK secara dinamis.
   - *Trust Checklist Row* (*✓ Pembelajaran 100% Siber*, *✓ Terverifikasi AIK*, *✓ Pembinaan Berkelanjutan*).
3. **ScrollExpand Interactive Showcase**:
   - Efek penjelajahan visual 3D yang membesar secara mulus mengikuti guliran tetikus pembaca (*scroll progress*).
4. **Section Kemahasiswaan (ORMAWA, UKM, Prestasi, Layanan)**:
   - Navigasi berbasis tab interaktif dengan animasi pergantian kategori yang responsif.
5. **Section Transisi Visi AIK**:
   - Spanduk kutipan naratif yang menghubungkan kemajuan sains teknologi siber dengan nilai akhlak utama.
6. **Section Al-Islam & Kemuhammadiyahan (AIK)**:
   - Empat pilar utama: Ketaqwaan Digital, Pemikiran Islam Modern/Fiqh Siber, Syiar & Dakwah Digital, serta Ideologi Kemuhammadiyahan.
7. **Interactive Accordion Gallery**:
   - Dokumentasi foto aktivitas mahasiswa dan syiar AIK menggunakan galeri akordion interaktif (*hover/tap expand*).
8. **Footer & Bottom CTA Banner**:
   - Spanduk ajakan berkontribusi, informasi kontak lengkap, tautan portal resmi SiberMu, dan tabel kredit lisensi media.

---

## HALAMAN 3: DESAIN SYSTEM, PALET WARNA, & PENGALAMAN PENGGUNA (UX)

### 3.1 Sistem Warna Official SiberMu
- **Navy SiberMu (`#002C5F`)**: Melambangkan kedalaman ilmu, profesionalisme, dan keteguhan ideologi.
- **Sky Blue SiberMu (`#0091CF`)**: Melambangkan inovasi teknologi siber, kecepatan, dan masa depan digital.
- **Gold Muhammadiyah (`#D4A017`)**: Melambangkan kemuliaan akhlak, pencerahan Islam, dan kejayaan prestasi.
- **Base Background**: Mode Terang (`#FFFFFF` & `#F7F7F7`) dan Mode Gelap (`#001a3a` & `#002550`).

### 3.2 Mode Terang & Gelap (Dual-Theme System)
Aplikasi mendukung **Light Mode** dan **Dark Mode** secara dinamis. Menggunakan browser *View Transitions API*, perpindahan tema memberikan efek lingkaran membesar (*circular reveal*) dari lokasi tombol yang diklik pengguna.

---

## HALAMAN 4: ARSITEKTUR TEKNOLOGI & KUALITAS TEKNIS

### 4.1 Tech Stack Pengembangan
- **Framework Utama**: React 19 + Vite 8
- **Styling & Design System**: Tailwind CSS v4 + Custom Vanilla CSS Variables
- **Library Animasi**: Framer Motion & GSAP (GreenSock Animation Platform)
- **Ikonografi**: Lucide React Icons (MIT License)
- **Linter & Build Tooling**: Oxlint & Vite Engine

### 4.2 Kualitas Teknis & Hasil Pengujian
- **Status Audit Linting**: `0 Error` & `0 Warning` (Verified with `oxlint`).
- **Waktu Muat (Build Speed)**: `< 1.0 Detik` (Vite production bundle size ~154 kB gzipped).
- **Responsivitas**: 100% Adaptif untuk Perangkat Seluler (Smartphone/Tablet) hingga Layar Komputer Desktop.

---

## HALAMAN 5: KREDIT LISENSI MEDIA & PERNYATAAN ORISINALITAS

### 5.1 Tabel Kredit Lisensi & Hak Cipta
| Elemen / Media | Sumber / Pustaka | Lisensi & Ketentuan |
|---|---|---|
| **Fotografi & Gambar** | Unsplash.com | Unsplash Free Commercial License |
| **Ikon UI** | Lucide React | MIT License (Open Source) |
| **Tipografi** | Google Fonts (Plus Jakarta Sans) | Open Font License (OFL) |
| **Komponen UI** | React Bits (Accordion, Marquee, Bubble) | MIT License (Open Source) |

### 5.2 Pernyataan Orisinalitas Karya
Kami menyatakan bahwa karya Landing Page Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah ini adalah murni buatan sendiri, dikembangkan khusus untuk Lomba Pembuatan Landing Page SiberMu 2026, dan bebas dari plagiarisme maupun pelanggaran hak cipta pihak manapun.

---
**Yogyakarta, 2026**  
*Tim Pengembang Landing Page SiberMu 2026*
