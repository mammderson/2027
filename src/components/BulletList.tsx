export type BulletItem = string | { text: string; sub?: string[] }

export function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <ul>
      {items.map((item) => {
        const { text, sub } = typeof item === 'string' ? { text: item, sub: undefined } : item
        return (
          <li key={text}>
            {text}
            {sub && <BulletList items={sub} />}
          </li>
        )
      })}
    </ul>
  )
}
