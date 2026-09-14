export type Prodi = {
  id: string;
  code: string;
  name: string;
  degree: string;
  category: 'Teknologi' | 'Bisnis' | 'Hukum' | 'Kesehatan';
  icon: string;
  desc: string;
};

export type ProgramPilar = {
  id: string;
  category: 'Kemahasiswaan' | 'Al-Islam & Kemuhammadiyahan';
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  targetProdi: string[];
  kegiatanUtama: string[];
  outputSertifikat: string;
};

export type LayananMahasiswa = {
  id: string;
  title: string;
  duration: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
};

export type TimPembina = {
  id: string;
  name: string;
  title: string;
  roleChip: string;
  specialityBio: string;
  fullBio: string;
  qualifications: string[];
  image: string;
  availableDays: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  condition: string;
  stars: number;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  details: string;
};
