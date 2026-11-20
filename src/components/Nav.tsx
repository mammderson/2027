import { useState } from 'react'
import { event, links } from '../content'
import { ExternalLink } from './ExternalLink'

interface NavLink {
  id: string
  label: string
  highlight?: boolean // renders the link as the flashy ticket pill
}

const navLinks: NavLink[] = [
  { id: 'stay', label: 'Stay' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'day', label: 'Day Activities' },
  { id: 'night', label: 'Night Activities' },
  { id: 'pj-party', label: '🪩 PJ Party', highlight: true },
  { id: 'swag', label: 'Swag' },
  { id: 'faq', label: 'FAQ' },
]

// On wide screens the links sit in a row. On phones they collapse behind a Menu button
// and open as a grid, so nothing is hidden off the edge of the screen.
// Phones also get a Tickets pill beside the Menu button, so it is never hidden. It goes straight to Campus Groups.
// The nav pills use .nav-shine, not .shine: .shine slides a separate layer (transform), and Safari then stops
// drawing the nav's cloud shadow (filter: drop-shadow on .nav). .nav-shine animates the pill's own background.
export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav">
      {/* Phones show only the M logo, so the brand, Tickets pill and Menu button fit on one line */}
      <a href="#top" className="nav-brand" aria-label={event.name} onClick={closeMenu}>
        <img src="/m-logo.svg" alt="" className="nav-brand-logo" />
        <span className="nav-brand-text">{event.name}</span>
      </a>
      <ExternalLink url={links.campusGroupsPjParty} className="nav-tickets nav-tickets-mobile nav-shine">GET PJ PARTY 🎟️ </ExternalLink>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {/* Both words sit in the same spot and only one shows, so the button is always as wide as "Close"
            and the GET PJ PARTY pill next to it never shifts when the menu opens */}
        <span className="nav-toggle-label">
          <span className={menuOpen ? 'nav-toggle-word-hidden' : undefined}>Menu</span>
          <span className={menuOpen ? undefined : 'nav-toggle-word-hidden'}>Close</span>
        </span>
        <span className="nav-toggle-icon" aria-hidden="true" />
      </button>
      <ul id="nav-links" className={menuOpen ? 'open' : undefined}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={link.highlight ? 'nav-tickets nav-shine' : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
