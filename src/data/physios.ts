import type { Physio } from '../types';

export const physiosData: Physio[] = [
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance',
    title: 'Lead Sports Physiotherapist & Founder',
    hcpcChip: 'HCPC Registered · PH104829',
    specialityBio: 'Specializes in complex knee & shoulder injuries, ACL return-to-sport protocols, and elite athletic performance.',
    fullBio: 'Former Lead Physiotherapist for Team GB track athletes with over 12 years of clinical experience. Marcus combines advanced manual therapy techniques with biomechanical strength testing to get patients back to peak activity safely and fast.',
    qualifications: ['MSc Sports Physiotherapy (King’s College London)', 'BSc (Hons) Physiotherapy', 'HCPC & CSP Certified', 'Dry Needling & Spinal Mobilization Certified'],
    image: '/images/physio_marcus.png',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri']
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    title: 'Senior Musculoskeletal Specialist',
    hcpcChip: 'HCPC Registered · PH119302',
    specialityBio: 'Expert in spinal alignment, chronic back & neck pain, post-surgical rehabilitation, and desk ergonomics.',
    fullBio: 'Elena brings a holistic, highly tactile approach to spinal and joint care. With a background in elite gymnastics and clinical manual therapy, she excels at untangling complex chronic pain patterns that haven’t responded to standard treatment.',
    qualifications: ['MSc Musculoskeletal Rehabilitation', 'BSc Physiotherapy', 'Maitland Manual Therapy Specialist', 'Ergonomic Risk Assessor'],
    image: 'https://images.unsplash.com/photo-1594824813566-788b28ef7792?auto=format&fit=crop&q=80&w=600',
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat']
  },
  {
    id: 'james-sterling',
    name: 'James Sterling',
    title: 'Biomechanics & Running Specialist',
    hcpcChip: 'HCPC Registered · PH128471',
    specialityBio: 'Focused on gait re-education, lower limb tendinopathies, running mechanics, and foot & ankle rehab.',
    fullBio: 'An avid marathon runner himself, James specializes in assessing movement economy and fixing running injuries. His data-driven 240fps video gait analysis has helped hundreds of runners rebuild their stride without recurring pain.',
    qualifications: ['BSc (Hons) Physiotherapy (St Mary’s)', 'Certified Strength & Conditioning Specialist (CSCS)', 'Gait & Running Mechanics Specialist', 'HCPC & CSP Registered'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    availableDays: ['Tue', 'Wed', 'Thu', 'Sat']
  }
];
