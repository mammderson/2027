export const event = {
  presentedBy: 'Social Affairs Proudly Presents',
  name: 'MAMMDERSON 2027',
  tagline: 'The most anticipated FEMBA weekend of the year',
  dateDisplay: 'January 22–24, 2027',
  location: 'Mammoth Mountain',
  countdownTarget: '2027-01-22T00:00:00-08:00', // Friday, Pacific time
  intro: 'Pack your ski fits and party PJs. Get ready for an unforgettable takeover at Mammoth Mountain.',
  contacts: ['Jayden Chan', 'Anne Li', 'Jess Timmons'],
  organization: 'UCLA Anderson FEMBA Council'
}

export interface Deadline {
  item: string
  detail: string
}

export const deadlines: Deadline[] = [
  { item: 'Accommodation booking at room block rate', detail: 'Available until Jan 4, 2027' },
  { item: 'Discounted lift tickets, rentals and lessons (call Mammoth)', detail: 'Before Jan 19, 2027' },
  { item: 'PJ Party tickets (Campus Groups)', detail: 'Tier 1 available starting Nov 21, 2026' },
  { item: 'Mammoth merch pre-order form', detail: 'TBD' },
]
