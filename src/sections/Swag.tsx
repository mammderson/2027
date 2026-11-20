// Pre-order deadline callout hidden until there's a date; uncomment with the <Callout> below.
// import { Callout } from '../components/Callout'
import { useRef } from 'react'
import { track } from '../analytics'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'
import { links, swag } from '../content'
import strapWrapTeaser from '../content/assets/swag-strap-wrap-teaser.jpg'

export function Swag() {
  // Split the text around its {whatsapp} placeholder so the link pill can sit inline
  const [beforeWhatsApp, afterWhatsApp] = swag.stayTuned.split('{whatsapp}')

  // Tapping the image opens it full size in a <dialog> (same look as the promo video: dark backdrop, ✕ in the corner).
  // Esc, the ✕, or a tap anywhere closes it.
  const zoomRef = useRef<HTMLDialogElement>(null)
  const openZoom = () => {
    zoomRef.current?.showModal()
    track('Swag image zoom')
  }
  const closeZoom = () => zoomRef.current?.close()

  return (
    <Section id="swag" title="Swag">
      {/* Text on the left, image on the right (both aligned to the top); stacked on phones */}
      <div className="swag-item">
        <div className="swag-text">
          <h3 className="subsection-title">{swag.title}</h3>
          <p>{swag.body} <strong>{swag.designNote}</strong></p>
          <p><strong>Price:</strong> {swag.price}</p>
          <p>
            {beforeWhatsApp}<Pill url={links.whatsappCommunity}>WhatsApp Community</Pill>{afterWhatsApp}
          </p>
          {/* <Callout type="deadline">{swag.preOrderDeadline}</Callout> */}
        </div>
        <figure className="swag-figure">
          <button type="button" className="swag-zoom" onClick={openZoom} aria-label="Zoom in on the strap wrap image">
            <img src={strapWrapTeaser} alt={swag.imageAlt} className="swag-img" />
            <span className="swag-zoom-hint" aria-hidden="true">🔍 Tap to zoom</span>
          </button>
          <figcaption className="swag-caption">{swag.imageCaption}</figcaption>
        </figure>
      </div>

      <dialog ref={zoomRef} className="video-dialog" onClick={closeZoom}>
        <div className="video-frame">
          <img src={strapWrapTeaser} alt={swag.imageAlt} className="swag-zoom-img" />
          <button type="button" className="video-close" onClick={closeZoom} aria-label="Close image">
            ✕
          </button>
        </div>
      </dialog>
    </Section>
  )
}
