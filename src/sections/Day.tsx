import { BulletList } from '../components/BulletList'
import { Callout } from '../components/Callout'
import { MapPill } from '../components/MapPill'
import { Section } from '../components/Section'
import { links, saturday as s } from '../content'

// Wraps each highlight term found in `text` in <strong>.
function boldTerms(text: string, terms: string[]) {
  const pattern = new RegExp(`(${terms.join('|')})`, 'g')
  return text.split(pattern).map((part, i) => (terms.includes(part) ? <strong key={i}>{part}</strong> : part))
}

// Saturday daytime: skiing/snowboarding and alternative activities.
export function Day() {
  return (
    <Section id="day" title="Day Activities">
      <p className="section-intro">{s.intro}</p>
      <div className="subsection">
        <h3 className="subsection-title">{s.skiing.title}</h3>

        <h4>{s.lodges.title}</h4>
        <div className="lodge-cards">
          {s.lodges.list.map((lodge) => (
            <div key={lodge.name} className="lodge-card">
              <span className="lodge-name">{lodge.name}</span>
              {lodge.note && <span className="lodge-note">{lodge.note}</span>}
              <span className="lodge-maps">
                <MapPill provider="apple" url={links[lodge.apple]} variant="white" />
                <MapPill provider="google" url={links[lodge.google]} variant="white" />
              </span>
            </div>
          ))}
        </div>

        <h4>{s.groupRates.title}</h4>
        <p>{s.groupRates.body}</p>
        <Callout type="deadline">{s.groupRates.deadline}</Callout>
        <p>
          <strong>Phone:</strong> {s.groupRates.phone}{' '}
          <a href={s.groupRates.phoneUrl} className="pill">Call</a>
          <br />
          <strong>UCLA Anderson booking ID:</strong> {s.groupRates.bookingId}
        </p>
        <BulletList items={s.groupRates.rules} />

        <h4>{s.ikon.title}</h4>
        <p>{s.ikon.body}</p>
      </div>

      <div className="subsection">
        <h3 className="subsection-title">{s.alternatives.title}</h3>
        {s.alternatives.paragraphs.map((p) => <p key={p}>{boldTerms(p, s.alternatives.highlights)}</p>)}
      </div>
    </Section>
  )
}
