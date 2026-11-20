import type { ReactNode } from 'react'

interface ExternalLinkProps {
  url: string
  children: ReactNode
  variant?: 'button' | 'inline'
  className?: string // extra classes, e.g. a button style
  label?: string // for icon-only links: read by screen readers and shown as a hover tooltip
}

// An empty url (see content/links.ts) renders a visible "coming soon" placeholder.
export function ExternalLink({ url, children, variant = 'inline', className: extraClass, label }: ExternalLinkProps) {
  const className = [variant === 'button' ? 'button' : '', extraClass ?? ''].join(' ').trim() || undefined

  if (!url) {
    return (
      <span className={`${className ?? ''} link-missing`.trim()} title="Link coming soon">
        {children} (link coming soon)
      </span>
    )
  }

  return (
    <a className={className} href={url} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      {children}
    </a>
  )
}
