// Pre-order deadline callout hidden until there's a date; uncomment with the <Callout> below.
// import { Callout } from '../components/Callout'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'
import { links, swag } from '../content'

export function Swag() {
  return (
    <Section id="swag" title="Swag">
      <p>
        {swag.body}{' '}
        <Pill url={links.whatsappCommunity}>Join</Pill>
      </p>
      {/* <Callout type="deadline">{swag.preOrderDeadline}</Callout> */}
    </Section>
  )
}
