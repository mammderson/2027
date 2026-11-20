// Mammoth group rates for 2026/27, shown under "Discounted rates" in Day Activities > Skiing & Snowboarding
// (a "See group rates & options" toggle with Lift tickets / Rentals / Lessons / Kids tabs).
//
// Trimmed for our group from Mammoth's three sheets (keep the PDFs if you need to re-check):
//   - Lift tickets: "T3 - Activity Only Groups Regular Season 2627.pdf"
//   - Rentals:      "FY27 Group Rental Order Form.pdf"
//   - Lessons:      "FY27 Sports School Order Form.pdf"
// Kept: adult prices (plus Young Adult lift tickets), a Kids tab for families, fees.
// Day counts: lift tickets and rentals both show 2- to 5-day (rentals go up to 7 on the sheet).
// Row labels like '2‑day' (rentals) and '2 of 4 days' (lift tickets, Mammoth's own wording) use a non-breaking
// hyphen (U+2011) or non-breaking spaces so they never split onto two lines on phones; copy an existing label when adding one.
// Left out: senior prices, holiday blackouts (our dates aren't in one),
// and the group-leader ordering process (we book by phone with our booking ID instead).
// All prices are per person, before fees and tax.

import type { links } from './links'

export interface RateTable {
  title: string
  note?: string // one line under the title, e.g. what's included
  // First column labels the rows; the rest are prices. "Name|detail" shows the detail on a small second line,
  // e.g. 'Adult|23–64' → "Adult" with "23–64" under it.
  columns: string[]
  rows: string[][]
}

export interface RateTab {
  id: string
  label: string
  keyPoint: string // the yellow note under the tabs: the one rule to know for this tab. **Bold** works here.
  // Optional sentence at the end of the yellow note with a link: "{link}" in text is replaced by the linked label.
  // linkKey is an entry in links.ts (so analytics names it).
  keyPointLink?: { text: string; label: string; linkKey: keyof typeof links }
  intro?: string
  tables: RateTable[]
  fees: string
  // Small gray line under the fees. Same dates as the deadline callouts (saturday.ts) and the FAQ table (event.ts):
  // change all three together.
  deadline: string
}

export const groupRates = {
  toggleLabel: 'See group rates & options',
  tabs: [
    {
      id: 'lift',
      label: 'Lift tickets',
      keyPoint: 'Group lift tickets and rentals have a 2‑day minimum.',
      intro: 'Flexible multi-day tickets: "2 of 4 days" means ski any 2 days within a 4-day window.',
      tables: [
        {
          title: 'Lift tickets',
          columns: ['Days', 'Adult|23–64', 'Young adult|13–22'],
          rows: [
            ['2 of 4 days', '$290', '$238'],
            ['3 of 5 days', '$386', '$317'],
            ['4 of 6 days', '$483', '$396'],
            ['5 of 7 days', '$563', '$462'],
          ],
        },
      ],
      fees: 'Plus a 2.5% tourism assessment fee.',
      deadline: 'Call by January 21 to get the group discount.',
    },
    {
      id: 'rentals',
      label: 'Rentals',
      keyPoint: 'Group lift tickets and rentals have a 2‑day minimum.',
      intro: 'Adult / youth prices (ages 13 and up), for the whole rental.',
      tables: [
        // Same layout as lift tickets: days down the side, rental tiers across
        {
          title: 'Package',
          note: 'Skis or board, boots, and poles or bindings',
          columns: ['Days', 'Standard', 'Performance', 'Demo'],
          rows: [
            ['2‑day', '$88', '$101', '$127'],
            ['3‑day', '$124', '$143', '$180'],
            ['4‑day', '$156', '$180', '$226'],
            ['5‑day', '$183', '$211', '$265'],
          ],
        },
        {
          title: 'Skis or board only',
          note: 'No boots or poles',
          columns: ['Days', 'Standard', 'Performance', 'Demo'],
          rows: [
            ['2‑day', '$76', '$90', '$102'],
            ['3‑day', '$108', '$127', '$144'],
            ['4‑day', '$136', '$160', '$181'],
            ['5‑day', '$159', '$187', '$212'],
          ],
        },
        {
          title: 'Helmet add-on (highly recommended for safety)',
          columns: ['Days', 'Helmet'],
          rows: [
            ['2‑day', '$34'],
            ['3‑day', '$51'],
            ['4‑day', '$68'],
            ['5‑day', '$85'],
          ],
        },
      ],
      fees: 'Plus a 1.5% tourism assessment fee and 7.75% sales tax.',
      deadline: 'Call by January 21 to get the group discount.',
    },
    {
      id: 'lessons',
      label: 'Lessons',
      // 10-person minimum: Sports School sheet, Terms and Conditions. Mammoth confirmed it counts everyone taking
      // any group lesson (no matter which lesson). Any lodge (Main, Canyon or Eagle).
      keyPoint: 'Group lesson rate available at Main, Canyon or Eagle Lodge with a **minimum of 10 people** across all lessons, kids included.',
      keyPointLink: {
        text: 'Interested? Join the {link} in our WhatsApp Community.',
        label: 'Ski/Snowboard Group Lesson chat',
        linkKey: 'whatsappGroupLessons',
      },
      intro: 'Adult group lessons (ages 13 and up), ski or snowboard. Prices per day.',
      tables: [
        {
          title: 'Adult lessons',
          note: 'Ages 13 and up. Kids lessons are in the Kids tab',
          columns: ['Lesson', 'Price'],
          rows: [
            ['First-timer PM lesson + beginner lift: 2 hours (1–3PM)', '$149'],
            ['Discovery lesson: beginners, 4 hours (10AM–12PM & 1–3PM)', '$187'],
            ['Intermediate & advanced clinic: 2 hours (10AM–12PM)', '$170'],
          ],
        },
        {
          title: 'Add-ons with an adult lesson',
          note: 'Ages 13 and up',
          columns: ['Add-on', 'Price'],
          rows: [
            ['Full-access lift ticket', '$111'],
            ['Full-day standard rental', '$43'],
            ['Half-day standard rental', '$32'],
            ['Beginner lift', 'Free'],
          ],
        },
      ],
      fees: 'Plus a 2.5% tourism assessment fee; rentals also have 7.75% sales tax.',
      deadline: 'Call at least 14 days before your lesson to get the group discount.',
    },
    {
      // Everything for families in one place: child lift tickets, child rentals, and lessons by age group
      id: 'kids',
      label: 'Kids',
      keyPoint: 'Lift tickets and rentals: 2‑day minimum. Kids lessons count toward the 10‑person group lesson minimum.',
      intro: 'Kids 4 and under ski free. Teens (13+) use the young adult lift price and adult rentals and lessons.',
      tables: [
        {
          title: 'Lift tickets',
          note: 'Age 4 and under: free',
          columns: ['Days', 'Child|5–12'],
          rows: [
            ['2 of 4 days', '$116'],
            ['3 of 5 days', '$155'],
            ['4 of 6 days', '$193'],
            ['5 of 7 days', '$225'],
          ],
        },
        // Kids rentals: no Performance tier for 12 and under
        {
          title: 'Rental package (12 and under)',
          note: 'Skis or board, boots, and poles or bindings',
          columns: ['Days', 'Standard', 'Demo'],
          rows: [
            ['2‑day', '$61', '$89'],
            ['3‑day', '$87', '$126'],
            ['4‑day', '$109', '$159'],
            ['5‑day', '$128', '$186'],
          ],
        },
        {
          title: 'Skis or board only (12 and under)',
          note: 'No boots or poles',
          columns: ['Days', 'Standard', 'Demo'],
          rows: [
            ['2‑day', '$54', '$71'],
            ['3‑day', '$76', '$101'],
            ['4‑day', '$95', '$127'],
            ['5‑day', '$112', '$149'],
          ],
        },
        {
          title: 'Helmet add-on (12 and under, highly recommended for safety)',
          columns: ['Days', 'Helmet'],
          rows: [
            ['2‑day', '$17'],
            ['3‑day', '$25.50'],
            ['4‑day', '$34'],
            ['5‑day', '$42.50'],
          ],
        },
        {
          title: 'Lessons, ages 8–14 (Adventurers)',
          note: 'Per day. Main, Canyon or Eagle Lodge',
          columns: ['Lesson', 'Price'],
          rows: [
            ['First-timer PM lesson + beginner lift: 2 hours (1–3PM)', '$149'],
            ['Full day: 4-hour lesson + 1-hour lunch (10AM–3PM)', '$276'],
          ],
        },
        {
          title: 'Lessons, ages 5–7 (Explorers)',
          note: 'Per day. Main, Canyon or Eagle Lodge',
          columns: ['Lesson', 'Price'],
          rows: [
            ['First-timer PM lesson + beginner lift: 2 hours (1–3PM)', '$149'],
            ['Full day: 4-hour lesson + 1-hour lunch (10AM–3PM)', '$276'],
          ],
        },
        {
          title: 'Lessons, ages 3–4 (Pioneers)',
          note: 'Per day, beginner lift included. Main or Canyon Lodge (ski or snowboard), Eagle Lodge (ski only)',
          columns: ['Lesson', 'Price'],
          rows: [
            ['AM lesson: 2 hours (10AM–12PM)', '$208'],
            ['PM lesson: 2 hours (1–3PM)', '$191'],
            ['Daycare add-on with AM lesson (Canyon Lodge only)', '$128'],
          ],
        },
        {
          title: 'Add-ons with a kids lesson',
          note: 'Ages 3–14',
          columns: ['Add-on', 'Price'],
          rows: [
            ['Full-access lift ticket', '$43'],
            ['Full-day rental', '$34'],
            ['Half-day rental (PM lesson only)', '$26'],
          ],
        },
      ],
      fees: 'Lift tickets and lessons: plus a 2.5% tourism assessment fee. Rentals: plus a 1.5% tourism assessment fee and 7.75% sales tax.',
      deadline: 'Call at least 14 days before a lesson, and by January 21 for lift tickets and rentals, to get the group discount.',
    },
  ] satisfies RateTab[],
}
