// `links` keys refer to entries in links.ts.
import type { BulletItem } from '../components/BulletList'
import type { links } from './links'

export interface FaqItem {
  question: string
  answer?: string
  inlineLink?: { label: string; href: string } // replaces "{link}" in the answer with a bold blue link (same page: href '#section-id')
  list?: BulletItem[]
  footer?: string
  linkKeys?: { label: string; key: keyof typeof links }[] // shown as white pills
  showDeadlines?: boolean // renders the deadlines table from event.ts
}

export const faq: FaqItem[] = [
  {
    question: 'When do I need to book my room, lift tickets and PJ Party tickets?',
    showDeadlines: true,
  },
  {
    question: 'Who can come to the Saturday party?',
    answer: 'Open to all FEMBAs, FEMBA significant others, FEMBA friends and Outdoor Adventures Club (OAC)!',
  },
  {
    question: 'How long does it take to get to Mammoth Mountain?',
    answer:
      "Mammoth is approximately a 5–6 hour drive from Los Angeles, depending on traffic and weather conditions. Most people drive up via US-395 N. Please be mindful when driving through Bishop, it's known to be a speeding trap area, so stick to the speed limit and drive safe!",
  },
  {
    question: 'How can I be prepared for driving in the snow?',
    answer:
      "Driving in the snow really depends on your comfort level and risk tolerance. If you're not used to winter conditions, it's best to drive with someone who is. Four wheel drive is strongly recommended, and bring snow chains in case there's fresh powder, but use your best judgment based on conditions. Most importantly, always have a plan. Please check these for the latest updates:",
    linkKeys: [
      { label: "Mammoth's Mountain Report", key: 'mountainReport' },
      { label: 'US-395 Road Conditions', key: 'roadConditions' },
    ],
  },
  {
    question: 'What are the estimated costs of this trip?',
    list: [
      {
        text: 'Hotel (optional): 2 nights, $250–$500 depending on room split',
        sub: [
          'Room block rate at Limelight Mammoth',
          'Most guests stay Friday to Sunday, but rates are available Wednesday–Sunday for extended stays',
        ],
      },
      { text: 'PJ Party: $85–$120' },
      {
        text: 'Transportation: depends on carpool split',
        sub: ['Carpool: ~$50–$100 round trip per person', 'Parking: ~$15 per night'],
      },
      {
        text: 'Lift passes and rentals: ~$250–$350 per person',
        sub: [
          'Mammoth is included on both Ikon and Ikon Base Passes',
          'See Day Activities > Skiing & Snowboarding at Mammoth',
        ],
      },
      {
        text: 'Food & drinks',
        sub: [
          { text: 'Breakfast is included at Limelight!', linkKey: 'limelightAmenities' },
          'Other meals are pay-as-you-go',
        ],
      },
    ],
    footer: 'Total estimated weekend cost (per person, sharing a room): ~$500–$1,000, depending on room split and personal spending.',
  },
  {
    question: 'Do I have to stay at the Limelight?',
    answer:
      "It is optional to book at Limelight Mammoth but highly recommended! Close to friends, convenient amenities and all the group action in one place! Other options include booking through Airbnb or OAC's Campus Groups ticket.",
  },
  {
    question: 'Do I have to know how to ski?',
    answer:
      'No! Skiing is totally optional, but highly recommended if you want to experience the full Mammoth magic. Classes are also available. There are plenty of other fun activities in Mammoth too, see {link}.',
    inlineLink: { label: 'Day Activities > Alternative Activities', href: '#alternative-activities' },
  },
  {
    question: 'Ticket transfers, waitlist and room block space',
    answer: "Can't make it any more? Please use the form below to coordinate.",
    linkKeys: [{ label: 'Ticket Transfer, Waitlist, and Room Block Space', key: 'ticketTransferForm' }],
  },
]
