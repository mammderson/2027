// Promo video, opened from the button in the hero. It plays full screen with sound, and ends on a ticket button.
// The files live in the public/ folder; each src is its path from the site root, starting with "/".
// To take the video down: set sources to [] (the button disappears), then delete the files.
//
// Two versions of the same video. Each browser plays the first one it supports:
//   1. HEVC (H.265): smaller, but only Safari/iPhone and browsers with hardware HEVC support (most Chrome/Edge) play it.
//   2. H.264: plays everywhere (e.g. Firefox); the fallback.
// Both must be "Web Optimized" (fast start). If you re-export, keep the same names, or update these paths.
// `type` tells the browser the exact codec so it can skip a file it can't play without downloading it.
// It must match the file: the HEVC string comes from the file itself (profile Main 10, level 4.1).
export const promoVideo = {
  sources: [
    { src: '/mammderson2027_trailer.mp4', type: 'video/mp4; codecs="hvc1.2.4.L123.B0, mp4a.40.2"' },
    { src: '/mammderson2027_trailer_h264.mp4', type: 'video/mp4; codecs="avc1.640028, mp4a.40.2"' },
  ],
  buttonLabel: 'A preview of YOUR epic weekend',
  endTitle: 'The mountain is calling', // shown over the last frame when the video ends
}
