import { Callout } from '../components/Callout'
import { ExternalLink } from '../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DiscoBall } from '../components/DiscoBall'
import { MapPill } from '../components/MapPill'
import { links, pjParty as p } from '../content'
// Poster hidden for now; uncomment this with the <img> at the bottom to bring it back.
// import saveTheDate from '../content/assets/pj-party-save-the-date.png'

// Repeated through the section so a buy button is never far away.
function BuyTicketsButton() {
  return (
    <p>
      <ExternalLink url={links.campusGroupsPjParty} variant="button" className="button-tickets on-light shine">
        🎟️ Buy tickets on Campus Groups
      </ExternalLink>
    </p>
  )
}

// Rendered inside Night Activities. Keeps id="pj-party" so its nav link lands here.
// The first buy button comes right after where/when, so it shows without scrolling after a nav jump.
export function PjParty() {
  return (
    <div id="pj-party" className="subsection">
      <h3 className="subsection-title">
        Saturday Night: PJ Party! <DiscoBall />
      </h3>
      <p>
        <strong>Where:</strong> {p.where}{' '}
        <MapPill provider="apple" url={links.limelightAppleMaps} />{' '}
        <MapPill provider="google" url={links.limelightGoogleMaps} />
        <br />
        <strong>When:</strong> {p.when}
      </p>

      <BuyTicketsButton />

      <div className="party-highlights">
        {p.highlights.map((h) => (
          <div key={h.title} className="party-highlight">
            <FontAwesomeIcon icon={h.icon} className="party-highlight-icon" />
            <span className="party-highlight-title">{h.title}</span>
          </div>
        ))}
      </div>
      <p className="party-highlights-note">{p.highlightsNote}</p>


      <p>{p.uberNote}</p>
      
      {[p.theme, p.food, p.music].map((block) => (
        <div key={block.title}>
          <h4>{block.title}</h4>
          <p>{block.body}</p>
        </div>
      ))}

      <h4>Ticket Tiers</h4>
      <p>{p.ticketsNote}</p>
      <table>
        <thead>
          <tr>
            <th>Tier</th>
            <th className="tier-col-quantity">Tickets available</th>
            <th className="tier-col-price">Price</th>
          </tr>
        </thead>
        <tbody>
          {p.tiers.map((t) => (
            <tr key={t.name}><td>{t.name}</td><td>{t.quantity}</td><td>${t.price}</td></tr>
          ))}
        </tbody>
      </table>

      <BuyTicketsButton />
      <Callout type="deadline">{p.ticketsCallout}</Callout>

      {/* <img
        className="flyer"
        src={saveTheDate}
        alt="Mammderson 2027 save the date: PJ Party, Limelight Hotel, Mammoth, January 23, 2027"
      /> */}
    </div>
  )
}
