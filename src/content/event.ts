export const event = {
  presentedBy: 'Social Affairs Proudly Presents',
  name: 'MAMMDERSON 2027',
  tagline: 'The most anticipated FEMBA weekend of the year',
  dateDisplay: 'January 22–24, 2027',
  location: 'Mammoth Mountain',
  countdownTarget: '2027-01-23T19:00:00-08:00', // PJ Party start: Saturday 7PM, Pacific time
  intro:'Pack your ski fits and party PJs. Get ready for an unforgettable takeover at Mammoth Mountain.',
  contacts: ['Jayden Chan', 'Anne Li', 'Jess Timmons'],
  organization: 'UCLA Anderson FEMBA Council'
}

export interface Deadline {
  item: string
  detail: string
}

// Shown as a table in the first FAQ answer. Each date is also shown in its own section, so change both together:
// accommodations.ts (howToBook.note), saturday.ts (groupRates.deadline), pjParty.ts (ticketsCallout).
export const deadlines: Deadline[] = [
  { item: 'Room booking at the room block rate', detail: 'Jan 4, 2027 at 11:59PM PST' },
  { item: 'Discounted lift tickets, rentals and lessons (call Mammoth)', detail: 'Jan 21, 2027 at 11:59PM PST' },
  { item: 'PJ Party tickets (Campus Groups)', detail: 'Jan 23, 2027 at 7:00PM PST' },
]
