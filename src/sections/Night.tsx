import { Section } from '../components/Section'
import { Friday } from './Friday'
import { PjParty } from './PjParty'

export function Night() {
  return (
    <Section id="night" title="Night Activities">
      <Friday />
      <PjParty />
    </Section>
  )
}
