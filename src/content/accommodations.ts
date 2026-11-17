const round2 = (n: number) => Math.round(n * 100) / 100

const NIGHTS = 2
const baseRate = 409
const amenityFee = round2(baseRate * 0.1)
const subtotal = round2(baseRate + amenityFee)
const lodgingTax = round2(subtotal * 0.16)
const nightlyTotal = round2(subtotal + lodgingTax) // $521.88 per night per room

export const pricing = {
  baseRate,
  amenityFee,
  subtotal,
  lodgingTax,
  nightlyTotal,
  // Per person, by number of people sharing one room, for the 2-night stay.
  splits: [2, 3, 4].map((people) => ({
    people,
    perNight: round2(nightlyTotal / people),
    perWeekend: round2((nightlyTotal * NIGHTS) / people),
  })),
}

export const accommodations = {
  where: 'Limelight Mammoth',
  dates: 'Friday, January 22 – Sunday, January 24, 2027',
  roomTypes: [
    { name: 'Deluxe King', maxPeople: 2 },
    { name: 'Deluxe Queen', maxPeople: 4 },
    { name: 'Sierra Bunks', maxPeople: 4 },
  ],
  rateNote:
    'The discounted room block rate applies to every room type, Friday and Saturday night, and is available until Jan 4, 2027.',
  optionalNote:
    'Booking at Limelight Mammoth is optional but highly recommended: close to friends, convenient amenities and all the group action in one place. There are very limited bunk rooms available.',
  flexibilityNote:
    'Booking is flexible based on your arrival and departure plans. Most people arrive between Friday morning and Friday afternoon, but feel free to coordinate rides with others as schedules vary. The room block rate is available from Wednesday, January 20 through Sunday, January 24, so you can extend your stay if you like.',
  parking: {
    summary: 'Parking is valet only, at $15/night/car. It includes ski valet and storage.',
    warning: 'NO SKIS OR SNOWBOARDS ARE ALLOWED IN THE ROOMS.',
  },
  howToBook: {
    roomBlockName: 'FEMBA Mammderson 2027',
    note: 'Our promotional price expires on January 4, 2027, so book early! Booking is still available after January 4 but at list price.',
  },
  checkIn: '4:00 PM',
  checkOut: '11:00 AM',
  amenities: [
    'Just steps away from the Village, Gondola and Mammoth Mountain Rentals',
    'Breakfast included (7AM to 10AM)',
    'The Lounge (bar and hangout space)',
    'Outdoor hot tub and heated swimming pool (9AM to 10PM)',
    'Hotel shuttle',
    'Complimentary ski valet, ski storage and boot dryers',
    'Fitness center, Therabody and hydration stations',
    'Wireless internet',
  ],
  additionalItems: [
    'Pet friendly ($50/pet/night, please call in advance)',
    'Après menu served 3PM to 6PM',
    'Dinner served 4PM to 10PM',
  ],
  alternatives: "Other options include booking through Airbnb or OAC's Campus Groups ticket.",
}
