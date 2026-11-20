import type React from 'react'

// Decorative falling snowflakes. Fixed values (not random) so renders are stable.
// Flakes now fall the whole hero (about 1.75x the old distance), so timings are scaled by the same
// factor to keep the original, gentle speed.
const SLOW_DOWN = 1.75

// ❄ followed by U+FE0E ("show as text, not emoji"). Without it, iPhones draw the blue snowflake emoji,
// which ignores the CSS color; with it, the flake is a plain symbol and turns white like on desktop.
const SNOWFLAKE = '❄︎'
const flakes = Array.from({ length: 24 }, (_, i) => ({
  left: (i * 41) % 100, // percent across the hero
  size: 0.8 + ((i * 7) % 10) / 10, // rem
  duration: (9 + ((i * 5) % 9)) * SLOW_DOWN, // seconds
  delay: -((i * 3) % 12) * SLOW_DOWN, // negative so flakes are already mid-fall on load
}))

export function Snowfall() {
  return (
    <div className="snow" aria-hidden="true">
      {flakes.map((f, i) => (
        <span
          key={i}
          // Timing goes in CSS variables so the stylesheet can slow every flake down on phones (--snow-slowdown)
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}rem`,
            '--fall-duration': `${f.duration}s`,
            '--fall-delay': `${f.delay}s`,
          } as React.CSSProperties}
        >
          {SNOWFLAKE}
        </span>
      ))}
    </div>
  )
}
