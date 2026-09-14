export type Condition = {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  treatmentApproach: string[];
  expectedRecovery: string;
};

export type Service = {
  id: string;
  title: string;
  duration: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
};

export type Physio = {
  id: string;
  name: string;
  title: string;
  hcpcChip: string;
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
