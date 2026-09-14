import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, Clock, ArrowRight, GraduationCap } from 'lucide-react';
import { layananList } from '../../data/layanan';
import { pembinaList } from '../../data/pembina';
import { prodiList } from '../../data/prodi';

interface ModalFormSIMKEMAProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialPhysioId?: string;
  isFreeAssessment?: boolean;
  onSuccess: (details: { service: string; physio: string; date: string; time: string }) => void;
}

export const ModalFormSIMKEMA: React.FC<ModalFormSIMKEMAProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialPhysioId,
  isFreeAssessment = false,
  onSuccess
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || (isFreeAssessment ? 'bam-online' : layananList[0].id)
  );
  const [selectedProdiId, setSelectedProdiId] = useState<string>(prodiList[0].id);
  const [selectedPhysioId, setSelectedPhysioId] = useState<string>(
    initialPhysioId || pembinaList[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-17');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 WIB');
  
  const [fullName, setFullName] = useState('');
  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) setSelectedServiceId(initialServiceId);
    if (initialPhysioId) setSelectedPhysioId(initialPhysioId);
    if (isFreeAssessment) setSelectedServiceId('bam-online');
  }, [initialServiceId, initialPhysioId, isFreeAssessment]);

  if (!isOpen) return null;

  const currentService = isFreeAssessment
    ? {
        title: 'Pendaftaran Baitul Arqam Mahasiswa (BAM Online)',
        price: 'GRATIS',
        duration: 'Gelombang III 2026',
        subtitle: 'Program wajib pembinaan karakter Al-Islam Kemuhammadiyahan.'
      }
    : layananList.find((s) => s.id === selectedServiceId) || layananList[0];

  const currentPembina = pembinaList.find((p) => p.id === selectedPhysioId) || pembinaList[0];
  const currentProdi = prodiList.find((p) => p.id === selectedProdiId) || prodiList[0];

  const timeSlots = [
    '09:00 WIB', '10:30 WIB', '13:00 WIB', '14:30 WIB', '15:30 WIB'
  ];

  const dates = [
    { label: 'Kamis 17 Sep', value: '2026-09-17' },
    { label: 'Jumat 18 Sep', value: '2026-09-18' },
    { label: 'Senin 21 Sep', value: '2026-09-21' },
    { label: 'Selasa 22 Sep', value: '2026-09-22' }
  ];

  const handleNext = () => {
    if (step < 3) setStep((prev) => (prev + 1) as 1 | 2 | 3);
    else handleSubmit();
  };

  const handleSubmit = () => {
    setStep(4);
    onSuccess({
      service: currentService.title,
      physio: currentPembina.name,
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
          {/* Header */}
          <div className="px-6 py-5 bg-[hsl(var(--primary))] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[hsl(var(--accent))]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="headline-700 text-base text-white">
                  {isFreeAssessment ? 'Pendaftaran BAM Online' : 'Portal Pengajuan SIMKEMA'}
                </h3>
                <p className="text-xs text-white/70">Universitas Siber Muhammadiyah (SiberMu)</p>
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
                  1. Layanan & Prodi
                </span>
                <span className={step >= 2 ? 'text-[hsl(var(--primary))] font-bold' : 'text-[hsl(var(--muted-foreground))]'}>
                  2. Jadwal Sesi
                </span>
                <span className={step >= 3 ? 'text-[hsl(var(--primary))] font-bold' : 'text-[hsl(var(--muted-foreground))]'}>
                  3. Identitas Mahasiswa
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-[hsl(var(--accent))] tracking-wider">
                Langkah {step} dari 3
              </span>
            </div>
          )}

          {/* Content Body */}
          <div className="p-6 overflow-y-auto flex-1">
            
            {/* Step 1: Select Service & Prodi */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="label-caps text-xs text-[hsl(var(--primary))] mb-3 block">
                    Pilih Program Studi PJJ Anda (6 Prodi SiberMu)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {prodiList.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => setSelectedProdiId(p.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedProdiId === p.id
                            ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.05] ring-1 ring-[hsl(var(--accent))] font-bold'
                            : 'border-[hsl(var(--border))] hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs text-[hsl(var(--foreground))]">
                          {p.name}
                        </div>
                        <span className="text-[10px] font-bold text-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.1] px-2 py-0.5 rounded">
                          {p.degree}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {!isFreeAssessment && (
                  <div>
                    <label className="label-caps text-xs text-[hsl(var(--primary))] mb-3 block">
                      Pilih Layanan Mahasiswa
                    </label>
                    <div className="space-y-3">
                      {layananList.map((service) => (
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
                          <div className="font-extrabold text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            {service.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="label-caps text-xs text-[hsl(var(--primary))] mb-3 block">
                    Pilih Tanggal Pengajuan / Sesi Bimbingan
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
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
                    Pilih Waktu Konsultasi Online (WIB)
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

            {/* Step 3: Identity Form */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">Nama Lengkap Mahasiswa *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmad Faazam"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">NIM Mahasiswa *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 230101004"
                      value={nim}
                      onChange={(e) => setNim(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">Email SiberMu *</label>
                    <input
                      type="email"
                      required
                      placeholder="mhs@sibermu.ac.id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">No. WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812 3456 7890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[hsl(var(--foreground))] block mb-1">Catatan Pengajuan / Kebutuhan Bimbingan</label>
                  <textarea
                    rows={3}
                    placeholder="Tuliskan alasan pengajuan beasiswa atau topik konseling yang ingin dibahas..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[hsl(var(--border))] text-sm focus:outline-none focus:border-[hsl(var(--accent))]"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 4: Success Confirmation */}
            {step === 4 && (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="headline-800 text-2xl text-[hsl(var(--foreground))]">
                  Pengajuan Berhasil Terkirim!
                </h3>
                <p className="body-light text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto">
                  Permohonan Anda telah tercatat di Sistem Informasi Kemahasiswaan (SIMKEMA) SiberMu. Bukti pengajuan dan link Zoom konsultasi telah dikirim ke email Anda.
                </p>

                <div className="bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-2xl p-4 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-[hsl(var(--muted-foreground))]">Layanan:</span>
                    <span className="font-bold text-[hsl(var(--primary))]">{currentService.title}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-[hsl(var(--muted-foreground))]">Prodi:</span>
                    <span className="font-bold text-[hsl(var(--foreground))]">{currentProdi.name} ({currentProdi.degree})</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-[hsl(var(--muted-foreground))]">Jadwal:</span>
                    <span className="font-bold text-[hsl(var(--accent))]">{selectedDate} pukul {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--muted-foreground))]">Status:</span>
                    <span className="font-bold text-emerald-600">Verifikasi Berkas SIMKEMA</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] transition-colors mt-4"
                >
                  Selesai & Kembali ke Portal
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
                  Kembali
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={handleNext}
                disabled={step === 3 && (!fullName || !email || !nim)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-semibold hover:bg-[hsl(215_60%_25%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <span>{step === 3 ? 'Kirim Pengajuan' : 'Lanjutkan'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
