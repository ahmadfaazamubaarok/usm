import type { Condition } from '../types';

export const conditionsData: Condition[] = [
  {
    id: 'back-neck',
    title: 'Back & Neck Pain',
    iconName: 'Activity',
    shortDesc: 'Spinal alignment, acute muscle spasms, disc herniation, and nerve pain relief.',
    fullDesc: 'Chronic or acute spinal discomfort can affect every moment of your day. We pinpoint structural imbalances, joint stiffness, and deep muscular tension to restore full painless spinal movement.',
    symptoms: ['Radiating leg/arm pain (sciatica)', 'Lower back stiffness upon waking', 'Sharp catching pain during rotation', 'Tightness in upper traps & neck'],
    treatmentApproach: ['Targeted lumbar joint mobilization', 'Spinal decompression exercises', 'Deep tissue myofascial release', 'Core motor control retraining'],
    expectedRecovery: '3 - 6 sessions for acute symptoms'
  },
  {
    id: 'sports-injuries',
    title: 'Sports Injuries',
    iconName: 'Flame',
    shortDesc: 'Acute tendonitis, ligament sprains, muscle tears, and return-to-play rehab.',
    fullDesc: 'From pitch-side trauma to repetitive strain injuries, our sports rehab protocols are designed for fast, resilient recovery tailored to your specific sport demanding level.',
    symptoms: ['Sudden popping or tearing sensation', 'Swelling & localized heat around joint', 'Weakness under athletic load', 'Loss of explosive power'],
    treatmentApproach: ['High-resolution kinetic chain assessment', 'Load management & progressive reloading', 'Instrument-assisted soft tissue therapy', 'Sport-specific biomechanical drills'],
    expectedRecovery: '4 - 8 weeks depending on tear grade'
  },
  {
    id: 'post-surgical',
    title: 'Post-Surgical Rehab',
    iconName: 'ShieldPlus',
    shortDesc: 'ACL reconstruction, rotator cuff repair, total joint replacement, and meniscus rehab.',
    fullDesc: 'Surgeons fix the anatomy; physios restore your function. We guide your surgical recovery step-by-step from swelling reduction to full athletic return.',
    symptoms: ['Post-operative joint stiffness', 'Muscle atrophy around surgical site', 'Gait compensation & limp', 'Fear of re-injury during load'],
    treatmentApproach: ['Early range of motion manual therapy', 'Neuromuscular electrical stimulation (NMES)', 'Targeted hypertrophy & force plate testing', 'Agility & return-to-sport testing'],
    expectedRecovery: '3 - 9 months structured protocol'
  },
  {
    id: 'shoulder-knee',
    title: 'Shoulder & Knee',
    iconName: 'Zap',
    shortDesc: 'Rotator cuff impingement, patellofemoral pain, labral tears, and meniscal support.',
    fullDesc: 'Shoulders and knees are complex weight-bearing and high-mobility joints prone to impingement and tracking issues. We restore optimal biomechanics to relieve joint pressure.',
    symptoms: ['Pain overhead or reaching behind back', 'Clicking, catching, or giving way', 'Front knee pain when climbing stairs', 'Deep shoulder ache at night'],
    treatmentApproach: ['Scapular stability & cuff strengthening', 'Patellar tracking manual correction', 'Joint capsule mobilization', 'Kinematic force rebalancing'],
    expectedRecovery: '4 - 6 sessions for sub-acute pain'
  },
  {
    id: 'running-injuries',
    title: 'Running Injuries',
    iconName: 'Footprints',
    shortDesc: 'Plantar fasciitis, Achilles tendinopathy, shin splints, and gait optimization.',
    fullDesc: 'Overuse running injuries are often caused by subtle gait flaws, cadence issues, or rapid mileage progression. We combine video gait analysis with tissue rehabilitation.',
    symptoms: ['Sharp heel pain during first steps in morning', 'Burning sensation along Achilles tendon', 'Shin pain along tibia during impact', 'IT band friction on lateral knee'],
    treatmentApproach: ['High-speed 240fps video gait analysis', 'Achilles eccentric heavy slow loading', 'Custom foot biomechanics assessment', 'Cadence adjustment & strike retraining'],
    expectedRecovery: '4 - 8 weeks with active running modification'
  },
  {
    id: 'postural-pain',
    title: 'Postural Pain',
    iconName: 'UserCheck',
    shortDesc: 'Desk strain, upper cross syndrome, thoracic stiffness, and ergonomic correction.',
    fullDesc: 'Long hours at a Shoreditch workstation take a heavy toll on postural alignment. We reverse rounded shoulders, neck strain, and persistent mid-back stiffness.',
    symptoms: ['Forward head posture fatigue', 'Tight chest muscles & rounded shoulders', 'Mid-back burning sensation between shoulder blades', 'Tension headaches'],
    treatmentApproach: ['Thoracic spine extension mobilization', 'Ergonomic workspace optimization', 'Postural endurance muscle activation', 'Daily micro-movement protocols'],
    expectedRecovery: '2 - 4 sessions with workplace adjustments'
  }
];
