import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Pill, type PillVariant } from './Pill'

const providers = {
  apple: { icon: faApple, name: 'Apple Maps', iconClass: 'pill-icon pill-icon-apple' },
  google: { icon: faGoogle, name: 'Google Maps', iconClass: 'pill-icon' },
}

// A "[logo] Maps" pill that opens directions in Apple Maps or Google Maps.
export function MapPill({
  provider,
  url,
  variant,
}: {
  provider: keyof typeof providers
  url: string
  variant?: PillVariant
}) {
  const { icon, name, iconClass } = providers[provider]
  return (
    <Pill url={url} variant={variant} label={`Directions in ${name}`}>
      <FontAwesomeIcon icon={icon} className={iconClass} />Maps
    </Pill>
  )
}
