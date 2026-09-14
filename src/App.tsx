import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramAIKSection } from './components/ProgramAIKSection';
import { LayananMahasiswaSection } from './components/LayananMahasiswaSection';
import { KeunggulanSiberMuSection } from './components/KeunggulanSiberMuSection';
import { TimPembinaSection } from './components/TimPembinaSection';
import { AlurSimkemaSection } from './components/AlurSimkemaSection';
import { TestimoniSection } from './components/TestimoniSection';
import { BannerSimkemaCTA } from './components/BannerSimkemaCTA';
import { FooterSiberMu } from './components/FooterSiberMu';

import { ModalFormSIMKEMA } from './components/modals/ModalFormSIMKEMA';
import { ModalDetailProgram } from './components/modals/ModalDetailProgram';
import { ModalDetailPembina } from './components/modals/ModalDetailPembina';
import { Toast } from './components/Toast';

import { programAikList } from './data/programAik';
import { layananList } from './data/layanan';
import { pembinaList } from './data/pembina';
import { alurSimkemaList } from './data/alurSimkema';
import { testimoniList } from './data/testimoni';
import type { ProgramPilar, TimPembina } from './types';

export const App: React.FC = () => {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [isFreeAssessment, setIsFreeAssessment] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>(undefined);
  const [activePhysioId, setActivePhysioId] = useState<string | undefined>(undefined);

  const [selectedCondition, setSelectedCondition] = useState<ProgramPilar | null>(null);
  const [selectedPhysio, setSelectedPhysio] = useState<TimPembina | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleOpenBooking = (serviceId?: string, physioId?: string) => {
    setIsFreeAssessment(false);
    setActiveServiceId(serviceId);
    setActivePhysioId(physioId);
    setBookingModalOpen(true);
  };

  const handleOpenFreeAssessment = () => {
    setIsFreeAssessment(true);
    setActiveServiceId(undefined);
    setActivePhysioId(undefined);
    setBookingModalOpen(true);
  };

  const handleSeeServices = () => {
    const el = document.getElementById('layanan-mahasiswa');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSuccess = (details: { service: string; physio: string; date: string; time: string }) => {
    showToast(`Pengajuan berhasil terkirim ke SIMKEMA untuk ${details.service}! Check email untuk link Zoom.`);
  };

  return (
    <div className="min-h-screen bg-white text-[hsl(var(--foreground))] selection:bg-[hsl(var(--accent))/0.2]">
      {/* Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Banner Utama */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenFreeAssessment={handleOpenFreeAssessment}
          onSeeServices={handleSeeServices}
        />

        {/* 2. Seksi Program AIK & Kemahasiswaan Utama (2 Pilar Scope) */}
        <ProgramAIKSection
          programs={programAikList}
          onSelectProgram={(program) => setSelectedCondition(program)}
        />

        {/* 3. Seksi Layanan Mandiri Online */}
        <LayananMahasiswaSection
          layanan={layananList}
          onSelectLayanan={(layananId) => handleOpenBooking(layananId)}
        />

        {/* 4. Seksi Keunggulan SiberMu */}
        <KeunggulanSiberMuSection onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Seksi Tim Pembina & Pengelola */}
        <TimPembinaSection
          pembina={pembinaList}
          onSelectPembina={(pembina) => setSelectedPhysio(pembina)}
          onBookPembina={(pembinaId) => handleOpenBooking(undefined, pembinaId)}
        />

        {/* 6. Seksi Alur 4-Langkah SIMKEMA */}
        <AlurSimkemaSection
          steps={alurSimkemaList}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. Seksi Testimoni Mahasiswa PJJ */}
        <TestimoniSection testimonies={testimoniList} />

        {/* 8. Banner CTA SIMKEMA */}
        <BannerSimkemaCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <FooterSiberMu />

      {/* Interactive Modals */}
      <ModalFormSIMKEMA
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={activeServiceId}
        initialPhysioId={activePhysioId}
        isFreeAssessment={isFreeAssessment}
        onSuccess={handleBookingSuccess}
      />

      <ModalDetailProgram
        program={selectedCondition}
        onClose={() => setSelectedCondition(null)}
        onBookProgram={(programTitle) => {
          showToast(`Mengakses portal pendaftaran untuk ${programTitle}...`);
          handleOpenBooking();
        }}
      />

      <ModalDetailPembina
        pembina={selectedPhysio}
        onClose={() => setSelectedPhysio(null)}
        onBookPembina={(pembinaId) => handleOpenBooking(undefined, pembinaId)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export default App;
