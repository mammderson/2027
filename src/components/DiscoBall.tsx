// A disco ball for the PJ Party heading: a still 🪩 emoji,
// with two small yellow sparkles that slowly fade in and out beside it.
// No flashing. Animations are turned off for reduced-motion users (CSS).
export function DiscoBall() {
  return (
    <span className="disco-ball" aria-hidden="true">
      <span className="disco-ball-emoji">🪩</span>
      <span className="disco-ball-sparkle disco-ball-sparkle-1">✦</span>
      <span className="disco-ball-sparkle disco-ball-sparkle-2">✦</span>
    </span>
  )
}
