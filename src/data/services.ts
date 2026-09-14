import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'physiotherapy-60',
    title: '1-to-1 Physiotherapy',
    duration: '60-min assessment & treatment',
    subtitle: 'Comprehensive diagnostic evaluation, hands-on manual therapy, and bespoke rehabilitation roadmap.',
    description: 'Every session is a full 60 minutes exclusively with your senior physiotherapist. Includes precise movement diagnostics, manual therapy, and dynamic strength retraining.',
    price: 'from £85',
    features: [
      'Comprehensive 60-minute session (never 30 mins)',
      'Hands-on joint mobilization & tissue release',
      'Digital exercise program sent directly to your phone',
      'HCPC & CSP accredited lead practitioner'
    ]
  },
  {
    id: 'sports-massage',
    title: 'Sports Massage',
    duration: '60-min deep tissue therapy',
    subtitle: 'Deep tissue therapy, myofascial release, and targeted athletic recovery.',
    description: 'Designed for active individuals, athletes, and desk workers carrying heavy muscular tension. Releases restricted fascia, restores muscle elasticity, and accelerates recovery.',
    price: 'from £60',
    features: [
      'Targeted trigger point therapy',
      'Myofascial tension release',
      'Improved vascular circulation & mobility',
      'Pre-event or post-event performance protocols'
    ]
  },
  {
    id: 'biomechanical-assessment',
    title: 'Biomechanical Assessment',
    duration: '75-min comprehensive evaluation',
    subtitle: 'Full gait, 240fps video analysis, force plate tracking, and kinetic movement analysis.',
    description: 'Pinpoints subtle movement dysfunctions, limb asymmetries, and foot strike mechanics. Essential for runners, triathletes, and recurring injury sufferers.',
    price: 'from £120',
    features: [
      '240fps slow-motion digital gait breakdown',
      'Foot pressure & joint angle measurements',
      'Detailed report with movement efficiency score',
      'Footwear & orthotic recommendations'
    ]
  }
];
