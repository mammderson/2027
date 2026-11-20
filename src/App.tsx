import { useEffect } from 'react'
import { trackSectionViews } from './analytics'
import { Bears } from './components/Bears'
import { Countdown } from './components/Countdown'
import { ExternalLink } from './components/ExternalLink'
import { Nav } from './components/Nav'
import { Ridge } from './components/Ridge'
import { Snowfall } from './components/Snowfall'
import { event, links } from './content'
import { Accommodations } from './sections/Accommodations'
import { Faq } from './sections/Faq'
import { Questions } from './sections/Questions'
import { Day } from './sections/Day'
import { Night } from './sections/Night'
import { Swag } from './sections/Swag'
import { WhatsApp } from './sections/WhatsApp'

// Build date, shown in Pacific time, e.g. "Nov 19, 2026"
const lastUpdated = new Date(__LAST_UPDATED__).toLocaleDateString('en-US', {
  timeZone: 'America/Los_Angeles',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

export default function App() {
  // Start watching which sections people scroll to, once the sections are on the page
  useEffect(() => trackSectionViews(), [])

  return (
    <>
      <Nav />

      <header id="top" className="hero">
        <Snowfall />
        <p className="presented-by">{event.presentedBy}</p>
        <p className="hero-emoji" aria-hidden="true">⛷️ 🏂 ❄️ 🎿 🍻</p>
        <h1>
          <span className="title-main">Mammderson</span>
          <span className="title-year">2027</span>
        </h1>
        <p className="tagline">{event.tagline}</p>
        <p className="date">
          <span>{event.dateDisplay}</span>
          <span className="date-location">{event.location}</span>
        </p>
        <Countdown target={event.countdownTarget} />
        {/* Ticket call to action: buying a ticket should never need a scroll */}
        <div className="hero-cta">
          <ExternalLink url={links.campusGroupsPjParty} variant="button" className="button-tickets shine">
            🎟️ Get PJ Party tickets now!
          </ExternalLink>
        </div>
        <p className="intro">{event.intro}</p>
        <Ridge className="hero-ridge" />
        <Bears />
      </header>

      <main>
        <Accommodations />
        <WhatsApp />
        <Day />
        <Night />
        <Swag />
        <Faq />
        <Questions />
      </main>

      <footer className="footer">
        {event.organization} | {event.name}
        <span className="footer-updated">Last updated {lastUpdated}</span>
      </footer>
    </>
  )
}
