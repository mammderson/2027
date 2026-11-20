import { useLayoutEffect, useRef } from 'react'

interface FooterTitleProps {
  organization: string
  eventName: string
}

// "ORGANIZATION · EVENT NAME" on one line when it fits.
// When the event name would wrap to a second line, the "·" hides and each part gets its own centered line.
// CSS can't detect wrapping, so we measure: show both parts inline, check whether the event name
// starts lower than the organization, then stack if it does. Re-checked whenever the width changes.
export function FooterTitle({ organization, eventName }: FooterTitleProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const organizationRef = useRef<HTMLSpanElement>(null)
  const eventNameRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    const organizationPart = organizationRef.current
    const eventNamePart = eventNameRef.current
    if (!container || !organizationPart || !eventNamePart) return

    const updateLayout = () => {
      container.classList.remove('stacked') // measure the one-line layout
      const wraps = eventNamePart.getBoundingClientRect().top > organizationPart.getBoundingClientRect().top + 1
      container.classList.toggle('stacked', wraps)
    }

    updateLayout()
    // Only width changes matter; stacking changes the footer's height, which must not trigger another check
    const footer = container.parentElement ?? container
    let lastWidth = footer.clientWidth
    const observer = new ResizeObserver(() => {
      if (footer.clientWidth === lastWidth) return
      lastWidth = footer.clientWidth
      updateLayout()
    })
    observer.observe(footer)
    document.fonts?.ready.then(updateLayout) // web fonts change the text width once loaded
    return () => observer.disconnect()
  }, [organization, eventName])

  return (
    <span ref={containerRef} className="footer-title">
      <span ref={organizationRef} className="footer-part">{organization}</span>
      <span className="footer-separator" aria-hidden="true"> · </span>
      <span ref={eventNameRef} className="footer-part">{eventName}</span>
    </span>
  )
}
