import { useState } from 'react'
import { event, links } from '../content'
import { ExternalLink } from './ExternalLink'

// `highlight` renders the link as the flashy ticket pill.
const navLinks = [
  { id: 'stay', label: 'Stay' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'day', label: 'Day Activities' },
  { id: 'night', label: 'Night Activities' },
  { id: 'pj-party', label: '🎟️ PJ Party', highlight: true },
  { id: 'swag', label: 'Swag' },
  { id: 'faq', label: 'FAQ' },
]

// On wide screens the links sit in a row. On phones they collapse behind a Menu button
// and open as a grid, so nothing is hidden off the edge of the screen.
// Phones also get a Tickets pill beside the Menu button, so it is never hidden. It goes straight to Campus Groups.
// No animated light sweep (.shine) on the nav pills: Safari stops drawing the nav's cloud shadow
// (filter: drop-shadow on .nav) when anything inside the nav animates.
export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav">
      <a href="#top" className="nav-brand" onClick={closeMenu}>{event.name}</a>
      <ExternalLink url={links.campusGroupsPjParty} className="nav-tickets nav-tickets-mobile">🎟️ PJ Party</ExternalLink>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? 'Close' : 'Menu'}
        <span className="nav-toggle-icon" aria-hidden="true" />
      </button>
      <ul id="nav-links" className={menuOpen ? 'open' : undefined}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={link.highlight ? 'nav-tickets' : undefined}
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
