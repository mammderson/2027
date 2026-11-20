import { links } from '../content/links'
import { Pill, type PillVariant } from './Pill'

// `linkKey` adds a "Learn more" pill after the item's text, linking to that entry in links.ts.
export type BulletItem = string | { text: string; linkKey?: keyof typeof links; sub?: BulletItem[] }

// `pillVariant` sets the style of the Learn more pills (the FAQ uses white).
export function BulletList({ items, pillVariant = 'light' }: { items: BulletItem[]; pillVariant?: PillVariant }) {
  return (
    <ul>
      {items.map((item) => {
        const { text, linkKey, sub } = typeof item === 'string' ? { text: item, linkKey: undefined, sub: undefined } : item
        return (
          <li key={text}>
            {text}
            {linkKey && (
              <>
                {' '}
                <Pill url={links[linkKey]} variant={pillVariant}>Learn more</Pill>
              </>
            )}
            {sub && <BulletList items={sub} pillVariant={pillVariant} />}
          </li>
        )
      })}
    </ul>
  )
}
