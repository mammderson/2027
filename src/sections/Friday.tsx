import { BulletList } from '../components/BulletList'
import { Callout } from '../components/Callout'
import { friday } from '../content'

export function Friday() {
  return (
    <div id="friday" className="subsection">
      <h3 className="subsection-title">Friday Night</h3>
      <p>{friday.intro}</p>
      {friday.options.map((o) => (
        <div key={o.title}>
          <h4>{o.title}</h4>
          <p>{o.body}</p>
          {'warning' in o && o.warning && <Callout>{o.warning}</Callout>}
        </div>
      ))}
      <h4>{friday.dinnerTitle}</h4>
      <BulletList items={friday.dinner} />
    </div>
  )
}
