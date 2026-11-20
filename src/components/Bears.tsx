// The two PJ party bears, cut out of the save-the-date flyer. The flyer's lettering covered one
// side of each bear, so a pine tree stands in front of that side to hide the cut edge.
import { useId } from 'react'
import nightcapBear from '../content/assets/bear_nightcap.png'
import sleepMaskBear from '../content/assets/bear_eyemask.png'

const PINE_DARK = '#003b5c' // shaded side: matches --deep-blue
const PINE_LIGHT = '#0b4c76' // lit side, a step lighter, gives the tree some depth
const TRUNK = '#002a42'
const CENTER_X = 30 // the tree's middle in its 60 x 100 drawing

// One tier of branches: gently bowed sides and a bottom edge of three drooping scallops (the branch tips).
// topY: where the tier's point is; bottomY: where its branch tips hang; halfWidth: half the tier's width.
function tierPath(topY: number, bottomY: number, halfWidth: number) {
  const left = CENTER_X - halfWidth
  const right = CENTER_X + halfWidth
  const height = bottomY - topY
  const scallopWidth = (right - left) / 3
  const droop = 4 // how far each scallop hangs below the tier's corners

  return [
    `M ${CENTER_X} ${topY}`,
    // right side, bowing outward slightly
    `Q ${CENTER_X + halfWidth * 0.45} ${topY + height * 0.55} ${right} ${bottomY}`,
    // bottom edge, right to left: three scallops
    `Q ${right - scallopWidth / 2} ${bottomY + droop} ${right - scallopWidth} ${bottomY - 1}`,
    `Q ${CENTER_X} ${bottomY + droop} ${left + scallopWidth} ${bottomY - 1}`,
    `Q ${left + scallopWidth / 2} ${bottomY + droop} ${left} ${bottomY}`,
    // left side, back up to the point
    `Q ${CENTER_X - halfWidth * 0.45} ${topY + height * 0.55} ${CENTER_X} ${topY}`,
    'Z',
  ].join(' ')
}

// Tiers from the bottom up, so each higher tier's branch tips hang over the tier below it
const TIERS = [
  tierPath(44, 86, 30),
  tierPath(22, 62, 25),
  tierPath(0, 36, 19),
]

function Pine({ className }: { className: string }) {
  // Unique per instance, since the same <clipPath> is defined in every tree
  const id = useId().replace(/:/g, '')
  const leftHalfId = `pine-left-${id}`
  const topTierId = `pine-top-${id}`
  const snowAreaId = `pine-snow-${id}`

  return (
    <svg className={`pine ${className}`} viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        {/* The lit (left) half of the tree */}
        <clipPath id={leftHalfId}>
          <rect x="0" y="0" width={CENTER_X} height="100" />
        </clipPath>
        {/* The top tier. Clipping to it keeps the snow cap's outline from sticking out past the tree. */}
        <clipPath id={topTierId}>
          <path d={TIERS[2]} />
        </clipPath>
        {/* The band the snow cap covers: limits the outline to the snowy tip */}
        <clipPath id={snowAreaId}>
          <rect x="0" y="0" width="60" height="13" />
        </clipPath>
      </defs>

      <rect x="26.5" y="84" width="7" height="16" rx="1.5" fill={TRUNK} />

      {TIERS.map((tier) => (
        <g key={tier}>
          <path d={tier} fill={PINE_DARK} />
          <path d={tier} fill={PINE_LIGHT} clipPath={`url(#${leftHalfId})`} />
        </g>
      ))}

      {/* Snow cap on the top tier, clipped to the tier so the white never sticks out past the tree.
          The navy outline traces the tier's own edge (so the two always line up), only as far down as the snow. */}
      <g clipPath={`url(#${topTierId})`}>
        <path d="M 0 0 H 60 V 12 L 36.5 12.5 Q 33 15 30 13.5 Q 27 15 23.5 12.5 L 0 12 Z" fill="#ffffff" />
        <path
          d={TIERS[2]}
          fill="none"
          stroke={PINE_DARK}
          strokeWidth="2.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          clipPath={`url(#${snowAreaId})`}
        />
      </g>
    </svg>
  )
}

export function Bears() {
  return (
    <div className="bears" aria-hidden="true">
      <div className="bear-group bear-group-left">
        <img src={nightcapBear} alt="" className="bear-img" />
        <Pine className="pine-front pine-front-left" />
        <Pine className="pine-back pine-back-left" />
      </div>
      <div className="bear-group bear-group-right">
        <img src={sleepMaskBear} alt="" className="bear-img" />
        <Pine className="pine-front pine-front-right" />
        <Pine className="pine-back pine-back-right" />
      </div>
    </div>
  )
}
