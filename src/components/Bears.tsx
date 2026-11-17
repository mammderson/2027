// The two PJ party bears, cut out of the save-the-date flyer. The flyer's lettering covered one
// side of each bear, so a pine tree stands in front of that side to hide the cut edge.
import { useId } from 'react'
import nightcapBear from '../content/assets/bear_nightcap.png'
import sleepMaskBear from '../content/assets/bear_eyemask.png'

function Pine({ className }: { className: string }) {
  // Unique per instance, since the same <clipPath> is defined in every tree
  const clipId = `pine-top-${useId().replace(/:/g, '')}`

  return (
    <svg className={`pine ${className}`} viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        {/* The top tier. Clipping to it keeps the snow cap's outline from sticking out past the tree. */}
        <clipPath id={clipId}>
          <polygon points="30,0 50,36 10,36" />
        </clipPath>
      </defs>
      <rect x="26" y="86" width="8" height="14" fill="#003b5c" />
      <polygon points="30,0 50,36 10,36" fill="#003b5c" />
      <polygon points="30,22 55,62 5,62" fill="#003b5c" />
      <polygon points="30,44 60,88 0,88" fill="#003b5c" />
      {/* Snow cap: same slope as the top tier. The dark navy outline runs along the two slanted
          sides only (no bottom edge), drawn inside the tier's edge so the white stands out against the bear. */}
      <polygon points="30,0 37.2,13 22.8,13" fill="#ffffff" />
      <polyline
        points="22.8,13 30,0 37.2,13"
        fill="none"
        stroke="#003b5c"
        strokeWidth="2.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        clipPath={`url(#${clipId})`}
      />
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
