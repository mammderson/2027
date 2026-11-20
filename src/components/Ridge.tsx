// A mountain-range silhouette, filled with the CSS `color` of `className`.
// Wide screens get the five-peak range; phones get three gentle peaks (toggled in CSS by
// .ridge-wide / .ridge-narrow), because the shape is stretched to the screen width.
// Used at the bottom of the hero.
// Peaks are rounded: the curves pass through the same peak and valley points as the old
// straight-line ridge (a Catmull-Rom spline), so heights and layout are unchanged.
const WIDE_PATH =
  'M0 120 L0 80 C20 73 87 42 120 40 C153 38 167 74 200 70 C233 66 282 14 320 15 C358 16 393 72 430 75 ' +
  'C467 78 503 34 540 35 C577 36 610 82 650 80 C690 78 738 27 780 25 C822 23 860 69 900 70 ' +
  'C940 71 983 31 1020 30 C1057 29 1090 62 1120 65 C1150 68 1187 48 1200 45 L1200 120 Z'
const NARROW_PATH =
  'M0 120 L0 75 C25 70 95 44 150 45 C205 46 255 84 330 80 C405 76 510 20 600 20 ' +
  'C690 20 795 76 870 80 C945 84 995 46 1050 45 C1105 44 1175 70 1200 75 L1200 120 Z'

export function Ridge({ className }: { className: string }) {
  return (
    <>
      <svg className={`${className} ridge-wide`} viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
        <path d={WIDE_PATH} fill="currentColor" />
      </svg>
      <svg className={`${className} ridge-narrow`} viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
        <path d={NARROW_PATH} fill="currentColor" />
      </svg>
    </>
  )
}
