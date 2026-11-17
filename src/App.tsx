import { Bears } from './components/Bears'
import { Countdown } from './components/Countdown'
import { Nav } from './components/Nav'
import { Snowfall } from './components/Snowfall'
import { event } from './content'
import { Accommodations } from './sections/Accommodations'
import { Deadlines } from './sections/Deadlines'
import { Faq } from './sections/Faq'
import { Questions } from './sections/Questions'
import { Activities } from './sections/Activities'
import { PjParty } from './sections/PjParty'
import { Swag } from './sections/Swag'
import { WhatsApp } from './sections/WhatsApp'

export default function App() {
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
        <p className="intro">{event.intro}</p>
        <svg className="hero-ridge hero-ridge-wide" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 120 L0 80 L120 40 L200 70 L320 15 L430 75 L540 35 L650 80 L780 25 L900 70 L1020 30 L1120 65 L1200 45 L1200 120 Z"
            fill="#ffffff"
          />
        </svg>
        <svg className="hero-ridge hero-ridge-narrow" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 120 L0 75 L150 45 L330 80 L600 20 L870 80 L1050 45 L1200 75 L1200 120 Z"
            fill="#ffffff"
          />
        </svg>
        <Bears />
      </header>

      <main>
        <Deadlines />
        <Accommodations />
        <WhatsApp />
        <Activities />
        <PjParty />
        <Swag />
        <Faq />
        <Questions />
      </main>

      <footer className="footer">{event.organization} | {event.name}</footer>
    </>
  )
}
