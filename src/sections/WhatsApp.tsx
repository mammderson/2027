import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { links, whatsapp } from '../content'

export function WhatsApp() {
  return (
    <Section id="whatsapp" title="WhatsApp Community">
      <p>{whatsapp.intro}</p>
      <p>
        <ExternalLink href={links.whatsappCommunity} variant="button">Join the community</ExternalLink>
      </p>
      <p>{whatsapp.groupsIntro}</p>
      <ul className="cards">
        {whatsapp.groups.map((g) => (
          <li key={g.name} className="card">
            <h3>{g.name}</h3>
            <p>{g.description}</p>
          </li>
        ))}
      </ul>
      <p><strong>{whatsapp.closing}</strong></p>
    </Section>
  )
}
