import { Section } from '../components/Section'
import { deadlines } from '../content'

export function Deadlines() {
  return (
    <Section id="deadlines" title="Deadlines">
      <table>
        <thead>
          <tr><th>Item</th><th>Details</th></tr>
        </thead>
        <tbody>
          {deadlines.map((d) => (
            <tr key={d.item}><td>{d.item}</td><td>{d.detail}</td></tr>
          ))}
        </tbody>
      </table>
    </Section>
  )
}
