import { useState } from 'react'
import { event } from '../content'

const navLinks = [
  { id: 'deadlines', label: 'Deadlines' },
  { id: 'stay', label: 'Stay' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'activities', label: 'Activities' },
  { id: 'pj-party', label: 'PJ Party' },
  { id: 'swag', label: 'Swag' },
  { id: 'faq', label: 'FAQ' },
]

// On wide screens the links sit in a row. On phones they collapse behind a Menu button
// and open as a grid, so nothing is hidden off the edge of the screen.
export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav">
      <a href="#top" className="nav-brand" onClick={closeMenu}>{event.name}</a>
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
          <li key={link.id}><a href={`#${link.id}`} onClick={closeMenu}>{link.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
