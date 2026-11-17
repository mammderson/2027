import type { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  variant?: 'button' | 'inline'
}

// An empty href (see content/links.ts) renders a visible "coming soon" placeholder.
export function ExternalLink({ href, children, variant = 'inline' }: ExternalLinkProps) {  const className = variant === 'button' ? 'button' : undefined

  if (!href) {
    return (
      <span className={`${className ?? ''} link-missing`.trim()} title="Link coming soon">
        {children} (link coming soon)
      </span>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
