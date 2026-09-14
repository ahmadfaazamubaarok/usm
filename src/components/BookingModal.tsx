import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, Clock, ArrowRight, Activity } from 'lucide-react';
import { servicesData } from '../data/services';
import { physiosData } from '../data/physios';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialPhysioId?: string;
  isFreeAssessment?: boolean;
  onSuccess: (details: { service: string; physio: string; date: string; time: string }) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialPhysioId,
  isFreeAssessment = false,
  onSuccess
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  
  // Booking Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || (isFreeAssessment ? 'free-assessment' : servicesData[0].id)
  );
  const [selectedPhysioId, setSelectedPhysioId] = useState<string>(
    initialPhysioId || physiosData[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-16');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) setSelectedServiceId(initialServiceId);
    if (initialPhysioId) setSelectedPhysioId(initialPhysioId);
    if (isFreeAssessment) setSelectedServiceId('free-assessment');
  }, [initialServiceId, initialPhysioId, isFreeAssessment]);

  if (!isOpen) return null;

  const currentService = isFreeAssessment
    ? {
        title: 'Free 20-Min Body Assessment',
        price: 'FREE',
        duration: '20 mins',
        subtitle: 'Find out what is causing your pain with our expert diagnostic screening.'
      }
    : servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const currentPhysio = physiosData.find((p) => p.id === selectedPhysioId) || physiosData[0];

  const timeSlots = [
    '08:30 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '05:30 PM'
  ];

  const dates = [
    { label: 'Wed 16 Sep', value: '2026-09-16' },
    { label: 'Thu 17 Sep', value: '2026-09-17' },
    { label: 'Fri 18 Sep', value: '2026-09-18' },
    { label: 'Sat 19 Sep', value: '2026-09-19' },
    { label: 'Mon 21 Sep', value: '2026-09-21' }
  ];

  const handleNext = () => {
    if (step < 3) setStep((prev) => (prev + 1) as 1 | 2 | 3);
    else handleSubmit();
  };

  const handleSubmit = () => {
    setStep(4); // Confirmation step
    onSuccess({
      service: currentService.title,
      physio: currentPhysio.name,
      date: selectedDate,
      time: selectedTime
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-2xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="px-6 py-5 bg-[hsl(var(--primary))] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center text-[hsl(var(--accent))]">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h3 className="headline-700 text-base text-white">
                  {isFreeAssessment ? 'Book Free Body Assessment' : 'Book Clinical Appointment'}
                </h3>
                <p className="text-xs text-white/70">Motion Clinic · Shoreditch London</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          {step < 4 && (
            <div className="bg-[hsl(var(--surface))] px-6 py-3 border-b border-[hsl(var(--border))] flex items-center justify-between text-xs">
              <div className="flex items-center gap-6 font-semibold">
                <span className={step >= 1 ? 'text-[hsl(var(--primary))] font-bold' : 'text-[hsl(var(--muted-foreground))]'}>
                  1. Service & Clinician
                </span>
                <span className={step >= 2 ? 'text-[hsl(var(--primary))] font-bold' : 'text-[hsl(var(--muted-foreground))]'}>
                  2. Date & Time
                </span>
                <span className={step >= 3 ? 'text-[hsl(var(--primary))] font-bold' : 'text-[hsl(var(--muted-foreground))]'}>
                  3. Details
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-[hsl(var(--accent))] tracking-wider">
                Step {step} of 3
              </span>
            </div>
          )}

          {/* Modal Content Body */}
          <div className="p-6 overflow-y-auto flex-1">
            
            {/* Step 1: Select Service & Physio */}
            {step === 1 && (
              <div className="space-y-6">
                {!isFreeAssessment && (
                  <div>
                    <label className="label-caps text-xs text-[hsl(var(--primary))] mb-3 block">
                      Select Service
                    </label>
                    <div className="space-y-3">
                      {servicesData.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => setSelectedServiceId(service.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                            selectedServiceId === service.id
                              ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.05] ring-1 ring-[hsl(var(--accent))]'
                              : 'border-[hsl(var(--border))] hover:border-slate-300'
                          }`}
                        >
                          <div>
                            <div className="font-bold text-sm text-[hsl(var(--foreground))]">{service.title}</div>
                            <div className="text-xs text-[hsl(var(--muted-foreground))]">{service.duration}</div>
                          </div>
                          <div className="font-extrabold text-sm text-[hsl(var(--primary))]">{service.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="label-caps text-xs text-[hsl(var(--primary))] mb-3 block">
                    Select Specialist Clinician
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {physiosData.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => setSelectedPhysioId(p.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all text-center ${
                          selectedPhysioId === p.id
                            ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.05] ring-1 ring-[hsl(var(--accent))]'
                            : 'border-[hsl(var(--border))] hover:border-slate-300'
                        }`}
                      >
                        <img src={p.image} alt={p.name} className="w-12 h-12 rounded-full mx-auto mb-2 object-cover" />
                        <div className="font-bold text-xs text-[hsl(var(--foreground))]">{p.name}</div>
                        <div className="text-[10px] text-[hsl(var(--accent))] font-medium">HCPC Registered</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Select Date & Time Slot */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="label-caps text-xs text-[hsl(var(--primary))] mb-3 block">
                    Select Appointment Date
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {dates.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => setSelectedDate(d.value)}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                          selectedDate === d.value
                            ? 'border-[hsl(var(--accent))] bg-[hsl(var(--primary))] text-white'
                            : 'border-[hsl(var(--border))] hover:bg-[hsl(var(--surface))]'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{d.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="label-caps text-xs text-[hsl(var(--primary))] mb-3 block">
                    Select Time Slot (Shoreditch Clinic)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                          selectedTime === slot
                            ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))] text-white'
                            : 'border-[hsl(var(--border))] hover:bg-[hsl(var(--surface))]'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details & Pain Notes */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Turner"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))] focus:ring-1 focus:ring-[hsl(var(--accent))]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7700 900077"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">Injury / Pain Brief (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what area is hurting or what your rehab goals are..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))]"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 4: Booking Confirmation Card */}
            {step === 4 && (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="headline-800 text-2xl text-[hsl(var(--foreground))]">
                  Appointment Confirmed!
                </h3>
                <p className="body-light text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto">
                  We have reserved your slot at Motion Clinic Shoreditch. A calendar invitation and clinic access instructions have been dispatched.
                </p>

                {/* Booking Summary Box */}
                <div className="bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-2xl p-4 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-[hsl(var(--muted-foreground))]">Service:</span>
                    <span className="font-bold text-[hsl(var(--primary))]">{currentService.title}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-[hsl(var(--muted-foreground))]">Clinician:</span>
                    <span className="font-bold text-[hsl(var(--foreground))]">{currentPhysio.name}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-[hsl(var(--muted-foreground))]">Date & Time:</span>
                    <span className="font-bold text-[hsl(var(--accent))]">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--muted-foreground))]">Location:</span>
                    <span className="font-medium">34 Curtain Road, Shoreditch EC2A</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] transition-colors mt-4"
                >
                  Done & Return to Site
                </button>
              </div>
            )}

          </div>

          {/* Footer Actions */}
          {step < 4 && (
            <div className="px-6 py-4 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))] flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep((prev) => (prev - 1) as 1 | 2)}
                  className="px-4 py-2 text-xs font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={handleNext}
                disabled={step === 3 && (!fullName || !email)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <span>{step === 3 ? 'Confirm & Book' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
