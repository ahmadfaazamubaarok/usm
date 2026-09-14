import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Conditions } from './components/Conditions';
import { Services } from './components/Services';
import { WhyMotion } from './components/WhyMotion';
import { Physios } from './components/Physios';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';

import { BookingModal } from './components/BookingModal';
import { ConditionModal } from './components/ConditionModal';
import { PhysioModal } from './components/PhysioModal';
import { Toast } from './components/Toast';

import { conditionsData } from './data/conditions';
import { servicesData } from './data/services';
import { physiosData } from './data/physios';
import { processStepsData } from './data/process';
import { testimonialsData } from './data/testimonials';
import type { Condition, Physio } from './types';

export const App: React.FC = () => {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [isFreeAssessment, setIsFreeAssessment] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>(undefined);
  const [activePhysioId, setActivePhysioId] = useState<string | undefined>(undefined);

  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [selectedPhysio, setSelectedPhysio] = useState<Physio | null>(null);

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
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSuccess = (details: { service: string; physio: string; date: string; time: string }) => {
    showToast(`Booking confirmed for ${details.service} with ${details.physio} on ${details.date}!`);
  };

  return (
    <div className="min-h-screen bg-white text-[hsl(var(--foreground))] selection:bg-[hsl(var(--accent))/0.2]">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenFreeAssessment={handleOpenFreeAssessment}
          onSeeServices={handleSeeServices}
        />

        {/* 3. Conditions Section */}
        <Conditions
          conditions={conditionsData}
          onSelectCondition={(cond) => setSelectedCondition(cond)}
        />

        {/* 4. Services Section */}
        <Services
          services={servicesData}
          onSelectService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 5. Why Motion Section */}
        <WhyMotion onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Our Physios Section */}
        <Physios
          physios={physiosData}
          onSelectPhysio={(physio) => setSelectedPhysio(physio)}
          onBookPhysio={(physioId) => handleOpenBooking(undefined, physioId)}
        />

        {/* 7. Process Section */}
        <Process
          steps={processStepsData}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 8. Testimonials Section */}
        <Testimonials testimonials={testimonialsData} />

        {/* 9. Booking CTA Banner */}
        <BookingCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={activeServiceId}
        initialPhysioId={activePhysioId}
        isFreeAssessment={isFreeAssessment}
        onSuccess={handleBookingSuccess}
      />

      <ConditionModal
        condition={selectedCondition}
        onClose={() => setSelectedCondition(null)}
        onBookCondition={(conditionTitle) => {
          showToast(`Initiated booking for ${conditionTitle} treatment.`);
          handleOpenBooking();
        }}
      />

      <PhysioModal
        physio={selectedPhysio}
        onClose={() => setSelectedPhysio(null)}
        onBookPhysio={(physioId) => handleOpenBooking(undefined, physioId)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export default App;
