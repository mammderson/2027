import { BulletList } from '../components/BulletList'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'
import { deadlines, faq, links } from '../content'
import type { FaqItem } from '../content/faq'

// The answer text, with "{link}" swapped for the item's inline link when it has one
function Answer({ answer, inlineLink }: Pick<FaqItem, 'answer' | 'inlineLink'>) {
  if (!answer) return null
  if (!inlineLink) return <p>{answer}</p>
  const [before, after] = answer.split('{link}')
  return (
    <p>
      {before}
      <a className="text-link" href={inlineLink.href}>{inlineLink.label}</a>
      {after}
    </p>
  )
}

export function Faq() {
  return (
    <Section id="faq" title="FAQ">
      {faq.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <Answer answer={item.answer} inlineLink={item.inlineLink} />
          {item.showDeadlines && (
            <table>
              <thead>
                <tr><th>Item</th><th>Deadline</th></tr>
              </thead>
              <tbody>
                {deadlines.map((d) => (
                  <tr key={d.item}><td>{d.item}</td><td>{d.detail}</td></tr>
                ))}
              </tbody>
            </table>
          )}
          {item.list && <BulletList items={item.list} pillVariant="white" />}
          {item.linkKeys && (
            <p className="faq-links">
              {item.linkKeys.map(({ label, key }) => (
                <Pill key={key} url={links[key]} variant="white">{label}</Pill>
              ))}
            </p>
          )}
          {item.footer && <p><strong>{item.footer}</strong></p>}
        </details>
      ))}
    </Section>
  )
}
