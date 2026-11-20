import { faChampagneGlasses, faDrumstickBite } from '@fortawesome/free-solid-svg-icons'

export const pjParty = {
  where: 'Limelight Mammoth',
  when: 'Saturday, January 23, 2027, 7PM – 12AM',
  // Shown as two feature tiles, with the cash bar note underneath
  highlights: [
    { icon: faChampagneGlasses, title: '3-hour open bar' },
    { icon: faDrumstickBite, title: 'Heavy appetizers' },
  ],
  highlightsNote: 'Cash bar from 10:30 PM',
  uberNote:
    "Please plan to Uber to the Limelight if you're not staying at the hotel. It'll make it easier to join the festivities and get home safely after the party.",
  ticketsNote: 'Tickets are sold on Campus Groups in four tiers.',
  ticketsCallout: 'On sale now until 7PM on Saturday, January 23!',
  // quantity: number of tickets available in that tier
  tiers: [
    { name: 'Tier 1: FEMBA exclusive', price: 85, quantity: '60' },
    { name: 'Tier 2: FEMBA exclusive', price: 95, quantity: '60' },
    { name: 'Tier 3', price: 110, quantity: '80' },
    { name: 'Tier 4: Last Call!', price: 120, quantity: '100+' },
  ],
  theme: {
    title: 'Theme: PJ Party',
    body: "Get ready to slip into something a little more comfortable because Mammderson is throwing the ultimate mountain slumber party! Think silky pajama sets, fuzzy onesies, matching PJs, fluffy slippers, and your favorite bedtime looks. Whether you're keeping it cozy or dressing to impress, this is your chance to bring your best sleepover style! We're trading bedtime stories for dance floor memories, late-night beats, pillow talk, and absolutely no plans to get our beauty sleep. PJs encouraged, sleep optional!",
  },
  food: {
    title: 'Food menu',
    body: "What's a slumber party without some late-night snacks? The chefs at Limelight Hotel will be serving up everyone's favorite comfort foods to keep you fueled for the dance floor! Think chicken tenders, mac & cheese, grilled cheese and tomato soup, fries, veggie sticks with ranch, and assorted cookies. Come hungry and ready to snack!",
  },
  music: {
    title: 'Music',
    body: "Bedtime? Not a chance! We're keeping the party going with late-night beats and dance floor energy. DJ talent to be announced!",
  },
}
