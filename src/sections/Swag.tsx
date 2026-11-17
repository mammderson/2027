import { Section } from '../components/Section'
import { swag } from '../content'

export function Swag() {
  return (
    <Section id="swag" title="Swag">
      <p>{swag.body}</p>
    </Section>
  )
}
