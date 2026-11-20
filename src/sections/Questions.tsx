import { Fragment } from 'react'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'
import { event, links } from '../content'

// Analytics records the Slack member ID (last part of the profile link, e.g. "U0B5RKF6VV1"), not the person's name
function slackMemberId(profileUrl: string) {
  return profileUrl.split('/').filter(Boolean).pop() ?? profileUrl
}

// A contact's name, linked to their Slack profile when we have one
function ContactName({ name, slack }: { name: string; slack: string }) {
  if (!slack) return <>{name}</>
  return (
    <a className="text-link" href={slack} data-track={`Slack: ${slackMemberId(slack)}`} target="_blank" rel="noreferrer">
      {name}
    </a>
  )
}

// Joins names as "A, B or C"
function separatorBefore(index: number, total: number) {
  if (index === 0) return ''
  if (index === total - 1) return ' or '
  return ', '
}

export function Questions() {
  const { contacts } = event
  return (
    <Section id="questions" title="Still Have Questions?">
      <p>
        Post them in the <Pill url={links.whatsappCommunity}>WhatsApp Community</Pill>
      </p>
      <p>
        For anything specific, reach out to{' '}
        {contacts.map((contact, index) => (
          <Fragment key={contact.name}>
            {separatorBefore(index, contacts.length)}
            <ContactName name={contact.name} slack={contact.slack} />
          </Fragment>
        ))}{' '}
        on Slack
      </p>
    </Section>
  )
}
