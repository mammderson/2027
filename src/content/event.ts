export const event = {
  presentedBy: 'Social Affairs Proudly Presents',
  name: 'MAMMDERSON 2027',
  tagline: 'The most anticipated FEMBA weekend of the year',
  dateDisplay: 'January 22–24, 2027',
  location: 'Mammoth Mountain',
  countdownTarget: '2027-01-23T19:00:00-08:00', // PJ Party start: Saturday 7PM, Pacific time
  intro:'Pack your ski fits and party PJs. Get ready for an unforgettable takeover at Mammoth Mountain.',
  // slack: the person's Slack profile link (open their profile in Slack > Copy link). Empty = name shown as plain text.
  contacts: [
    { name: 'Jayden Chan', slack: 'https://ucla.enterprise.slack.com/team/U098XU0F8QH' },
    { name: 'Anne Li', slack: 'https://ucla.enterprise.slack.com/team/U07GZK2LTC1' },
    { name: 'Jess Timmons', slack: 'https://ucla.enterprise.slack.com/team/U0B5RKF6VV1' },
  ],
  organization: 'UCLA Anderson FEMBA Council Social Affairs'
}

export interface Deadline {
  item: string
  detail: string
}

// Shown as a table in the first FAQ answer. Each date is also shown in its own section, so change both together:
// accommodations.ts (howToBook.note), saturday.ts (groupRates.deadlines), pjParty.ts (ticketsCallout).
export const deadlines: Deadline[] = [
  { item: 'Room booking at the room block rate', detail: 'Jan 4, 2027 at 11:59PM PST' },
  { item: 'Discounted ski & snowboard lessons (call Mammoth)', detail: '14 days before your lesson (Jan 8 for Friday, Jan 9 for Saturday, Jan 10 for Sunday)' },
  { item: 'Discounted lift tickets and rentals (call Mammoth)', detail: 'Jan 21, 2027 at 11:59PM PST' },
  { item: 'PJ Party tickets (Campus Groups)', detail: 'Jan 23, 2027 at 7:00PM PST' },
]
