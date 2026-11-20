import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faHourglassHalf, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ReactNode } from 'react'

// Each type has its own Font Awesome icon: an hourglass for deadlines, a yellow triangle for warnings.
const icons: Record<'deadline' | 'warning', IconDefinition> = {
  deadline: faHourglassHalf,
  warning: faTriangleExclamation,
}

// The icon is decorative (FontAwesomeIcon sets aria-hidden), so screen readers read only the text.
export function Callout({ type, children }: { type?: 'deadline' | 'warning'; children: ReactNode }) {
  return (
    <p className="callout">
      {type && <FontAwesomeIcon icon={icons[type]} className={`callout-icon callout-icon-${type}`} />}
      {children}
    </p>
  )
}
