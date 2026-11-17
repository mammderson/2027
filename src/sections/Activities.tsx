import { Section } from '../components/Section'
import { Friday } from './Friday'
import { Saturday } from './Saturday'

export function Activities() {
  return (
    <Section id="activities" title="Activities">
      <Friday />
      <Saturday />
    </Section>
  )
}
