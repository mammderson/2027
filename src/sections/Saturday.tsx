import { BulletList } from '../components/BulletList'
import { saturday as s } from '../content'

export function Saturday() {
  return (
    <div id="saturday" className="subsection">
      <h3 className="subsection-title">Saturday Day</h3>
      <h4 className="group-title">{s.skiing.title}</h4>

      <h5>{s.ikon.title}</h5>
      <p>{s.ikon.body}</p>

      <h5>{s.groupRates.title}</h5>
      <p>{s.groupRates.body}</p>
      <p>
        <strong>Phone:</strong> {s.groupRates.phone}
        <br />
        <strong>UCLA Anderson booking ID:</strong> {s.groupRates.bookingId}
      </p>
      <BulletList items={s.groupRates.rules} />

      <h4 className="group-title">{s.alternatives.title}</h4>
      {s.alternatives.paragraphs.map((p) => <p key={p}>{p}</p>)}
    </div>
  )
}
