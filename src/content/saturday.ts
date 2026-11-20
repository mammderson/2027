import type { links } from './links'

interface Lodge {
  name: string
  note?: string
  apple: keyof typeof links // Apple Maps directions, an entry in links.ts
  google: keyof typeof links // Google Maps directions, an entry in links.ts
}

// Shown right under the skiing heading, in this order, each with Apple/Google Maps directions.
const lodges: Lodge[] = [
  { name: 'Canyon Lodge', note: 'closest to limelight hotel, free gondola to the village, après', apple: 'canyonLodgeAppleMaps', google: 'canyonLodgeGoogleMaps' },
  { name: 'Main Lodge', note: 'direct access to the panorama gondola (summit), sundeck', apple: 'mainLodgeAppleMaps', google: 'mainLodgeGoogleMaps' },
  { name: 'Eagle Lodge', note: 'less crowded, quieter vibe', apple: 'eagleLodgeAppleMaps', google: 'eagleLodgeGoogleMaps' },
]

export const saturday = {
  intro: "Whether you're here to ski, relax, or explore, there's something for everyone!", // shown right under the Day Activities title
  skiing: { title: 'Skiing & Snowboarding at Mammoth' },
  lodges: { title: 'Mammoth Lodges', list: lodges },
  ikon: {
    title: 'Ikon Pass',
    body: "Mammoth Mountain is included on both the Ikon Pass and Ikon Base Pass, so if you have either, you're all set to hit the slopes! If you're feeling generous, consider sharing your 25% Ikon Family & Friends discount with a fellow FEMBA!",
  },
  groupRates: {
    title: 'Discounted rates for rentals, lift tickets and lessons',
    body: 'Our group can book lift tickets, rentals and lessons at a discounted rate. Call 1-800-MAMMOTH and share the UCLA Anderson booking ID.',
    phone: '1-800-MAMMOTH (1-800-626-6684)',
    phoneUrl: 'tel:+18006266684', // opens the dialer on phones
    bookingId: 'TBD', // UCLA Anderson booking ID (not issued yet)
    deadline: 'Call before January 21 to get the group discount.',
    rules: [
      'Mammoth will NOT allow same-day group purchases. After January 21, activities and rentals may be purchased at retail price (no discount).',
      'Call the same number for lift tickets, lessons and rental equipment.',
      'Request your pickup at one of the lodges (Canyon Lodge is the closest to Limelight) or self-service kiosk at Mountain Center in The Village (near the Dave McCoy statue).',
    ],
  },
  alternatives: {
    title: 'Alternative Activities',
    // Each of these is shown in bold wherever it appears in the paragraphs below.
    highlights: ['snow tubing', 'hiking', 'natural hot springs', 'bowling', 'spa days'],
    paragraphs: [
      'Not hitting the slopes? No problem! There are plenty of other ways to enjoy Mammoth, from snow tubing and hiking to natural hot springs to bowling, spa days, and more.',
      "We'll share high-level information and ideas for alternative activities, but planning and coordination will be self-service. Use the WhatsApp community to connect with fellow attendees, organize groups, and make your own plans.",
    ],
  },
}
