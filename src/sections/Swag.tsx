// Pre-order deadline callout hidden until there's a date; uncomment with the <Callout> below.
// import { Callout } from '../components/Callout'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'
import { links, swag } from '../content'

export function Swag() {
  // Split the body around its {whatsapp} placeholder so the link pill can sit inline
  const [beforeWhatsApp, afterWhatsApp] = swag.body.split('{whatsapp}')

  return (
    <Section id="swag" title="Swag">
      <p>
        {beforeWhatsApp}<Pill url={links.whatsappCommunity}>WhatsApp Community</Pill>{afterWhatsApp}
      </p>
      {/* <Callout type="deadline">{swag.preOrderDeadline}</Callout> */}
    </Section>
  )
}
