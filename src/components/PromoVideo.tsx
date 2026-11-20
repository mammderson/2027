import { useRef, useState } from 'react'
import { track } from '../analytics'
import { links, promoVideo } from '../content'
import { ExternalLink } from './ExternalLink'

// Hero button that opens the promo video full screen, with sound (allowed on phones because the visitor tapped).
// Uses the browser's built-in <dialog>: Esc closes it, focus stays inside, and the page behind can't be clicked.
// When the video ends, a ticket button and "Watch again" appear over the last frame.
interface PromoVideoProps {
  placement: 'hero' | 'pj-party' // where the button is, recorded with "Video open" so we can compare the two
  onLight?: boolean // light version of the button, for white sections
}

export function PromoVideo({ placement, onLight = false }: PromoVideoProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ended, setEnded] = useState(false)
  const [paused, setPaused] = useState(false) // shows the big ▶ over the video

  if (promoVideo.sources.length === 0) return null // no video: no button

  // Starts playing; if the browser blocks it (rare after a tap), show the ▶ so the viewer can start it
  const play = () => {
    videoRef.current?.play().catch(() => setPaused(true))
  }

  const open = () => {
    setEnded(false)
    dialogRef.current?.showModal()
    if (videoRef.current) videoRef.current.currentTime = 0
    play()
    track('Video open', { placement })
  }

  // No built-in controls (they cover the video for the first few seconds on phones): tapping the video pauses or resumes
  const togglePlayback = () => {
    const video = videoRef.current
    if (!video || ended) return
    if (video.paused) play()
    else video.pause()
  }

  const close = () => dialogRef.current?.close()

  const replay = () => {
    setEnded(false)
    if (videoRef.current) videoRef.current.currentTime = 0
    play()
  }

  return (
    <>
      <button type="button" className={`button button-video${onLight ? ' on-light' : ''}`} onClick={open}>
        <span className="button-video-play" aria-hidden="true">▶</span> {promoVideo.buttonLabel}
      </button>

      <dialog
        ref={dialogRef}
        className="video-dialog"
        aria-label={promoVideo.buttonLabel}
        onClose={() => videoRef.current?.pause()} // Esc, the close button, or a tap outside
        onClick={(clickEvent) => {
          if (clickEvent.target === dialogRef.current) close() // tap on the dark backdrop
        }}
      >
        <div className="video-frame">
          <video
            ref={videoRef}
            playsInline // plays inside the page on iPhones instead of forcing the full-screen player
            preload="none" // nothing downloads until the button is tapped
            onClick={togglePlayback}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onEnded={() => {
              setEnded(true)
              track('Video finished', { placement })
            }}
          >
            {/* The browser plays the first version whose codec it supports (see content/promoVideo.ts) */}
            {promoVideo.sources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>

          {paused && !ended && (
            <button type="button" className="video-play" onClick={play} aria-label="Play video">
              ▶
            </button>
          )}

          {ended && (
            <div className="video-end">
              <p className="video-end-title">{promoVideo.endTitle}</p>
              <ExternalLink url={links.campusGroupsPjParty} variant="button" className="button-tickets shine">
                🎟️ Answer the call
              </ExternalLink>
              <button type="button" className="video-replay" onClick={replay}>
                ↻ Watch again
              </button>
            </div>
          )}

          <button type="button" className="video-close" onClick={close} aria-label="Close video">
            ✕
          </button>
        </div>
      </dialog>
    </>
  )
}
