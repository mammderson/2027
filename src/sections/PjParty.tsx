import { BulletList } from '../components/BulletList'
import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { links, pjParty as p } from '../content'
import saveTheDate from '../content/assets/pj-party-save-the-date.png'

export function PjParty() {
  return (
    <Section id="pj-party" title="PJ Party">
      <img
        className="flyer"
        src={saveTheDate}
        alt="Mammderson 2027 save the date: PJ Party, Limelight Hotel, Mammoth, January 23, 2027"
      />
      <p>
        <strong>Where:</strong> {p.where}
        <br />
        <strong>When:</strong> {p.when}
      </p>
      <BulletList items={p.details} />

      <h3>Tickets</h3>
      <p>{p.ticketsNote}</p>
      <table>
        <thead>
          <tr><th>Tier</th><th>Price</th></tr>
        </thead>
        <tbody>
          {p.tiers.map((t) => <tr key={t.name}><td>{t.name}</td><td>${t.price}</td></tr>)}
        </tbody>
      </table>
      <p>
        <ExternalLink href={links.campusGroupsPjParty} variant="button">Buy tickets on Campus Groups</ExternalLink>
      </p>

      {[p.theme, p.food, p.music].map((block) => (
        <div key={block.title}>
          <h3>{block.title}</h3>
          <p>{block.body}</p>
        </div>
      ))}
    </Section>
  )
}
