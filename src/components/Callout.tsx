import type { ReactNode } from 'react'

export function Callout({ children }: { children: ReactNode }) {
  return <p className="callout">{children}</p>
}
