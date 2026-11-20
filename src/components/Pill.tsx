import type { ReactNode } from 'react'
import { ExternalLink } from './ExternalLink'

// light (default): light blue, turns dark on hover
// white: white, turns dark on hover (stands out on light-blue backgrounds, e.g. an open FAQ answer)
// inverse: dark, turns light on hover
export type PillVariant = 'light' | 'white' | 'inverse'

interface PillProps {
  url: string
  children: ReactNode
  variant?: PillVariant
  label?: string // for screen readers and the hover tooltip, when the visible text isn't enough
}

// A small rounded link, e.g. "Join", "Learn more", map directions. Opens in a new tab.
export function Pill({ url, children, variant = 'light', label }: PillProps) {
  const className = variant === 'light' ? 'pill' : `pill pill-${variant}`
  return (
    <ExternalLink url={url} className={className} label={label}>
      {children}
    </ExternalLink>
  )
}
