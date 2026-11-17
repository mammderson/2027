import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { event, links } from '../content'

export function Questions() {
  return (
    <Section id="questions" title="Still Have Questions?">
      <p>
        Post them in the{' '}
        <ExternalLink href={links.whatsappCommunity}>MAMMDERSON 2027 WhatsApp community</ExternalLink>.
      </p>
      <p>
        For anything specific, reach out to {event.contacts.slice(0, -1).join(', ')} or{' '}
        {event.contacts[event.contacts.length - 1]} on Slack or WhatsApp.
      </p>
    </Section>
  )
}
