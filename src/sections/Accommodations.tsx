import { BulletList } from '../components/BulletList'
import { Callout } from '../components/Callout'
import { ExternalLink } from '../components/ExternalLink'
import { MapPill } from '../components/MapPill'
import { Section } from '../components/Section'
import { accommodations as a, links, pricing } from '../content'

const usd = (n: number) => `$${n.toFixed(2)}`

export function Accommodations() {
  return (
    <Section id="stay" title="Accommodations">
      <p>
        <strong>Where:</strong> {a.where}{' '}
        <MapPill provider="apple" url={links.limelightAppleMaps} />{' '}
        <MapPill provider="google" url={links.limelightGoogleMaps} />
        <br />
        <strong>Dates:</strong> {a.dates}
      </p>
      <p>{a.optionalNote}</p>

      <h3>How to book</h3>
      <p>Room block name: <strong>{a.howToBook.roomBlockName}</strong></p>
      <p>
        <ExternalLink url={links.roomBlockBooking} variant="button">Book your room</ExternalLink>
      </p>
      <Callout type="deadline">{a.howToBook.note}</Callout>
      <p>Check-in: {a.checkIn} · Check-out: {a.checkOut}</p>

      <h3>Cost</h3>
      <p>
        {usd(pricing.baseRate)} + 10% amenity fee ({usd(pricing.amenityFee)}) = {usd(pricing.subtotal)} + 16%
        lodging taxes ({usd(pricing.lodgingTax)}) = <strong>{usd(pricing.nightlyTotal)} per night per room</strong>
      </p>
      <table>
        <thead>
          <tr><th>People in room</th><th>Per person / night</th><th>Per person / weekend (2 nights)</th></tr>
        </thead>
        <tbody>
          {pricing.splits.map((s) => (
            <tr key={s.people}>
              <td>{s.people}</td><td>{usd(s.perNight)}</td><td><strong>{usd(s.perWeekend)}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Room types</h3>
      <BulletList items={a.roomTypes.map((r) => `${r.name} (max ${r.maxPeople} people)`)} />
      <p>{a.rateNote}</p>
      <p>{a.flexibilityNote}</p>

      <h3>Parking</h3>
      <p>{a.parking.summary}</p>
      <Callout type="warning">{a.parking.warning}</Callout>

      <h3 className="heading-with-link">
        Amenities
        <span className="heading-link">
          <ExternalLink url={links.limelightAmenities}>Learn more</ExternalLink>
        </span>
      </h3>
      <BulletList items={a.amenities} />
      <h3>Additional items</h3>
      <BulletList items={a.additionalItems} />
      <p>{a.alternatives}</p>
    </Section>
  )
}
