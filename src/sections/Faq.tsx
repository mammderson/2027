import { BulletList } from '../components/BulletList'
import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { faq, links } from '../content'

export function Faq() {
  return (
    <Section id="faq" title="FAQ">
      {faq.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          {item.answer && <p>{item.answer}</p>}
          {item.list && <BulletList items={item.list} />}
          {item.linkKeys && (
            <ul>
              {item.linkKeys.map(({ label, key }) => (
                <li key={key}><ExternalLink href={links[key]}>{label}</ExternalLink></li>
              ))}
            </ul>
          )}
          {item.footer && <p><strong>{item.footer}</strong></p>}
        </details>
      ))}
    </Section>
  )
}
