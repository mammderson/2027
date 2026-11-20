import { BulletList } from '../components/BulletList'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'
import { deadlines, faq, links } from '../content'

export function Faq() {
  return (
    <Section id="faq" title="FAQ">
      {faq.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          {item.answer && <p>{item.answer}</p>}
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
